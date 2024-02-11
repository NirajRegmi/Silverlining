from frappe import _
import frappe
from frappe.utils.data import flt

def update_parent_and_project_status(doc, method):
    # Check if the status of the current task is "Completed"
    if doc.status=="Completed":
        if doc.parent_task:
        # Update the progress of the current task to 100
            doc.progress=100
            pt=frappe.db.get_all("Task",{"parent_task":doc.parent_task},["name"])
            tas=[]
            for k in pt:
                task=frappe.get_doc("Task", k.name)
                if task.status=="Completed":
                    tas.append(task.task_weight)
        
        # Check if sum of task weights is 100
            if len(tas)>1:
                if sum(tas)==100:
                    parent_task=frappe.get_doc("Task", doc.parent_task)
            # Update parent task status to "Completed"
                    parent_task.status="Completed"
                    parent_task.save(ignore_permissions=True)
            if len(tas)==1:
                if tas[0]==100:
                    parent_task=frappe.get_doc("Task", doc.parent_task)
                    parent_task.status="Completed"
                    parent_task.save(ignore_permissions=True)
                   

    # Check if the status of the current task is "Working"
    if doc.status=="Working":
        doc.progress=50
        if doc.parent_task:
            parent_task=frappe.get_doc("Task", doc.parent_task)
        # Update parent task status to "Working"
            parent_task.status="Working"
            parent_task.save(ignore_permissions=True)

    
    # Check if the status of the current task is "Open"
    if doc.status=="Open":
        doc.progress=0
        if doc.parent_task:
            pt=frappe.db.get_all("Task",{"parent_task":doc.parent_task},["name"])
            dc=[]
            parent_task=frappe.get_doc("Task", doc.parent_task)
            for k in pt:
                takc=frappe.get_doc("Task", k.name)
                if takc.status=="Open":
                    dc.append(takc.task_weight)
            if len(dc)>1:
                if sum(dc)!=100:
                # Update parent task status to "Working"
                    parent_task.status="Working"
                    parent_task.save(ignore_permissions=True)
            if len(dc)==1:
                if dc[0]==100:
                # Update parent task status to "Working"
                    parent_task.status="Working"
                    parent_task.save(ignore_permissions=True)
            if len(dc)>1:
                if sum(dc)==100:
                # Update parent task status to "Open"
                    parent_task.status="Open"
                    parent_task.save(ignore_permissions=True)
            if len(dc)==1:
                if dc[0]==100:
                # Update parent task status to "Open"
                    parent_task.status="Open"
                    parent_task.save(ignore_permissions=True)
   


def update_project_weight(doc,method):
    if doc.project:
        weight=[]
        xy=frappe.db.get_all("Task",{'project':doc.project,"parent_task":None,"status":"Completed"},["task_weight"])
        for j in xy:
            weight.append(j.weight)
        proj=frappe.get_doc("Project",doc.project)
        if len(weight)>1:
        # Calculate and update the project's weight based on completed tasks' weights
            proj.weight=sum(weight)
        if len(weight)==1:
            proj.weight=weight[0]
        proj.save(ignore_permissions=True)

    if doc.parent_task:
        pt=frappe.db.get_all("Task",{"parent_task":doc.parent_task},["name"])
        tas=[]
        for k in pt:
            task=frappe.get_doc("Task", k.name)
            if task.status in ["Completed","Working"]:
                t_weight=task.task_weight*(task.progress/100)
                tas.append(t_weight)
        if len(tas)>1:
            parent_task=frappe.get_doc("Task", doc.parent_task)
        # Calculate and update parent task's progress based on child tasks' weights and progress
            parent_task.progress=sum(tas)
            parent_task.save(ignore_permissions=True)
        if len(tas)==1:
            parent_task=frappe.get_doc("Task", doc.parent_task)
        # Update parent task's progress with the single child task's weighted progress
            parent_task.progress=tas[0]
            parent_task.save(ignore_permissions=True)





















        