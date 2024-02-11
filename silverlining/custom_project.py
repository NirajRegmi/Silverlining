from frappe import _
import frappe
from frappe.utils.data import flt
from erpnext.projects.doctype.project.project import Project
from frappe.model.document import Document



class customProject(Project):
    def update_percent_complete(self):
            if self.percent_complete_method == "Manual":
                if self.status == "Completed":
                    self.percent_complete = 100
                return

            total = frappe.db.count("Task", dict(project=self.name))

            if not total:
                self.percent_complete = 0
            else:
                if (self.percent_complete_method == "Task Completion" and total > 0) or (
                    not self.percent_complete_method and total > 0
                ):
                    completed = frappe.db.sql(
                        """select count(name) from tabTask where
                        project=%s and status in ('Cancelled', 'Completed')""",
                        self.name, 
                    )[0][0]
                    self.percent_complete = flt(flt(completed) / total * 100, 2)

                if self.percent_complete_method == "Task Progress" and total > 0:
                    progress = frappe.db.sql(
                        """select sum(progress) from tabTask where
                        project=%s""",
                        self.name,
                    )[0][0]
                    self.percent_complete = flt(flt(progress) / total, 2)

                if self.percent_complete_method == "Task Weight" and total > 0:
                    weight_sum = frappe.db.sql(
                        """select sum(task_weight) from tabTask where
                        project=%s AND is_group = 1 """,
                        self.name,
                    )[0][0]
                    weighted_progress = frappe.db.sql(
                        """select progress, task_weight from tabTask where
                        project=%s AND is_group = 1""",
                        self.name,
                        as_dict=1,
                    )
                    pct_complete = 0
                    for row in weighted_progress:
                        pct_complete += row["progress"] * frappe.utils.safe_div(row["task_weight"], weight_sum)
                    self.percent_complete = flt(flt(pct_complete), 2)

            # don't update status if it is cancelled
            if self.status == "Cancelled":
                return

            if self.percent_complete == 100:
                self.status = "Completed"
