from . import __version__ as app_version

app_name = "silverlining"
app_title = "Silverlining"
app_publisher = "Dexciss"
app_description = "Sliverlining"
app_email = "abc@mail.com"
app_license = "MIT"

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/silverlining/css/silverlining.css"
# app_include_js = "/assets/silverlining/js/silverlining.js"

fixtures = [
		{"dt":"Custom Field", "filters": [["name", "in",("Accounting Period-start_date_nepal","Accounting Period-end_date_nepal",
                "Additional Salary-payroll_date_nepali","Additional Salary-from_date_nepali","Additional Salary-to_date_nepali","Appointment Letter-appointment_date_nepal","Appointment-scheduled_time_nepal","Asset Maintenance Log-completion_date_nepal"
                "Asset Movement:-transaction_date_nepal","Asset Repair-failure_date_nepal","Asset Repair-completion_date_nepal","Asset Value Adjustment-date_nepal","Asset-available_for_use_date_nepal","Asset-insurance_start_date_nepal","Attendance Request-half_day_date_nepal","Attendance Request-from_date_nepal","Attendance Request-to_date_nepal",
                "Attendance:-attendance_date_nepal","Blanket Order-from_date_nepali","Blanket Order-to_date_nepali","Communication-read_by_recipient_on_nepali","Company-date_of_establishment_nepal","Company-date_of_incorporation_nepal","Company-date_of_commencement_nepal","Compensatory Leave Request-work_from_date_nepal","Compensatory Leave Request-work_end_date_nepal",
                "Compensatory Leave Request-half_day_date_nepal","Contract-start_date_nepali","Contract-fulfilment_deadline_nepali","Contract-signed_on_nepal","Coupon Code-valid_from_nepali","Coupon Code-valid_upto_nepali","Currency Exchange-date_nepal","Delivery Note-transport_receipt_date_nepali","Delivery Note-date_nepali","Delivery Note-customer_purchase_order_date_nepali",
                "Driver-expiry_date_nepal","Email Campaign-start_date_nepali","Email Campaign-_date_nepali","Employee Advance-posting_date_nepal","Employee Benefit Application-date_nepali","Employee Benefit Claim-claim_date_nepali","Employee Checkin-time_nepal",
                "Employee Incentive-payroll_date_nepali","Employee Onboarding-date_of_joining_nepal","Employee Promotion-promotion_date_nepal","Employee Referral-date_nepal","Employee Transfer-transfer_date_nepal","Employee-date_of_birth_nepal","Employee-date_of_joining_nepal","Employee-offer_date_nepal","Employee-date_of_retirement_nepal","Employee-date_of_issue_nepal","Employee-valid_upto_nepal",
                "Employee-resignation_letter_date_nepal","Employee-relieving_date_nepal","Exchange Rate Revaluation-posting_date_nepal","Expense Claim-posting_date_nepal","Expense Claim-clearance_date_nepal","Fiscal Year-year_start_date_nepal","Holiday List-from_date_nepal","Holiday List-to_date_nepal","Income Tax Slab-effective_from_nepali","Issue-opening_date_nepali","Issue-first_responded_on_nepal",
                "Item Price-valid_fromnepal","Item Price-valid_uptonepal","Job Offer-offer_date_nepal","Journal Entry-posting_date_nepal","Lead-next_contact_date_nepali","Lead-ends_on_nepali","Leave Allocation-from_date_nepal","Leave Allocation-to_date_nepal","Leave Application-posting_date_nepal","Leave Application-from_date_nepal","Leave Application-to_date_nepal","Leave Application-half_day_date_nepal",
                "Leave Encashment-encashment_date_nepal","Leave Period-from_date_nepal","Leave Period-to_date_nepal","Leave Policy Assignment-effective_from_nepal","Loan Application-posting_date_nepal","Loan Disbursement-disbursement_date_nepal","Loan Disbursement-reference_date_nepal","Loan Repayment-reference_date_nepal","Loan Repayment-posting_date_nepal","Loan Security Price-valid_upto_nepal","Loan Security Price-valid_from_nepal",
                "Loan Write Off-posting_date_nepal","Loan-posting_date_nepal","Maintenance Visit-maintenance_date_nepali","Material Request-transaction_datenepali","Material Request-required_bynepali","Newsletter-schedule_sendnepal","Opportunity-next_contact_date_nepal","Opportunity-expected_closing_date_nepali","Opportunity-opportunity_date_nepal","Payment Entry-cheque_reference_date_nepali",
                "Payment Entry-posting_date_nepal","Pick List-transaction_date_nepal","Pricing Rule-valid_fromnepal","Pricing Rule-valid_uptonepal","Process Loan Interest Accrual-posting_date_nepal","Project-expected_start_date_nepal","Project-expected_end_date_nepal","Promotional Scheme-valid_fromnepal","Promotional Scheme-valid_uptonepal","Purchase Invoice-supplier_invoice_datenepali","Purchase Invoice-due_date_nepal","Purchase Invoice-service_stop_date_nepal",
                "Purchase Invoice-service_start_date_nepal","Purchase Invoice-service_end_date_nepal","Purchase Invoice-release_date_nepal","Purchase Order-to_date_nepali","Purchase Order Item-required_by_nepali","Purchase Order Item-expected_delivery_date_nepal","Purchase Receipt-date_nepali","Purchase Receipt-vehicle_date_nepal","Quotation-valid_till_nepal","Quotation-date_nepal","Request for Quotation-datenepali","Retention Bonus-bonus_payment_date_nepali","Salary Slip-posting_date_nepali",
                "Salary Structure Assignment-from_date_nepali","Sales Invoice-nepali_date","Sales Invoice-customers_purchase_order_datenepali","Sales Invoice-payment_due_datenepali","Sales Invoice-from_datenepali","Sales Invoice-to_datenepali","Sales Invoice Item-service_stop_date_nepal","Sales Order-customers_purchase_order_date_nepal","Sales Order-transaction_date_nepali","Service Level Agreement-start_date_nepali","Service Level Agreement-end_date_nepali",
                "Shift Assignment-start_date_nepal","Shift Assignment-end_date_nepal","Shift Request-from_date_nepal","Shift Request-to_date_nepal","Shift Type-process_attendance_after_nepal","Shift Type-last_sync_of_checkin_nepal","Staffing Plan-from_date_nepal","Staffing Plan-to_date_nepal","Stock Entry Detail-posting_date_nepali","Stock Reconciliation-posting_date_nepal","Supplier Quotation-valid_tillnepali","Supplier Quotation-datenepali","Task-expected_start_date_nepal",
                "Task-expected_end_date_nepal","Training Event-start_time_nepal","Training Event-end_time_nepal","Vehicle Log-date_nepal","Vehicle-acquisition_date_nepal","Vehicle-start_date_nepal","Vehicle-end_date_nepal","Vehicle-last_carbon_check_nepal","Warranty Claim-complaint_date_nepali","Warranty Claim-warranty_expiry_date_nepali","Warranty Claim-amc_expiry_date_nepali"),]]}

    ]
# include js, css files in header of web template
# web_include_css = "/assets/silverlining/css/silverlining.css"
# web_include_js = "/assets/silverlining/js/silverlining.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "silverlining/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views

doctype_js = {"Accounting Period" : "public/js/accounting_period.js",
              "Additional Salary" :"public/js/additional_salary.js",
              "Appointment Letter" :"public/js/appointment_letter.js",
              "Appointment":"public/js/appointment.js",
              "Asset Maintenance Log":"public/js/asset_maintenance_log.js",
              "Asset Movement":"public/js/asset_movement.js",
              "Asset Repair":"public/js/asset_repair.js",
              "Asset Value Adjustment":"public/js/asset_value_adjustment.js",
              "Asset":"public/js/asset.js",
              "Attendance Request":"public/js/attendance_request.js",
              "Attendance":"public/js/attendance.js",
              "Blanket Order":"public/js/blanket_order.js",
              "Communication":"public/js/communication.js",
              "Company":"public/js/company.js",
              "Compensatory Leave Request":"public/js/compensatory_leave_request.js",
              "Contract":"public/js/contract.js",
              "Coupon Code":"public/js/coupon_code.js",
              "Currency Exchange":"public/js/currency_exchange.js",
              "Delivery Note":"public/js/delivery_note.js",
              "Driver":"public/js/driver.js",
              "Email Campaign":"public/js/employee_campaign.js",
              "Employee Advance":"public/js/employee_advance.js",
              "Employee Benefit Application":"public/js/employee_benifit_application.js",
              "Employee Benefit Claim":"public/js/employee_benifit_claim.js",
              "Employee Checkin":"public/js/employee_checkin.js",
              "Employee Incentive":"public/js/employee_incentive.js",
              "Employee Onboarding":"public/js/employee_onboarding.js",
              "Employee Promotion":"public/js/employee_promotion.js",
              "Employee Referral":"public/js/employee_referral.js",
              "Employee Transfer":"public/js/employee_transfer.js",
              "Employee":"public/js/employee.js",
              "Exchange Rate Revaluation":"public/js/exchange_rate_revaluation.js",
              "Expense Claim":"public/js/expense_claim.js",
              "Fiscal Year":"public/js/fiscal_year.js",
              "Holiday List":"public/js/holiday_list.js",
              "Income Tax Slab":"public/js/income_tax_slab.js",
              "Issue":"public/js/issue.js",
              "Item Price":"public/js/item_price.js",
              "Job Offer":"public/js/job_offer.js",
              "Journal Entry":"public/js/journal_entry.js",
              "Lead":"public/js/lead.js",
              "Leave Allocation":"public/js/leave_allocation.js",
              "Leave Application":"public/js/leave_application.js",
              "Leave Encashment":"public/js/leave_encashment.js",
              "Leave Period":"public/js/leave_period.js",
              "Leave Policy Assignment":"public/js/leave_policy_assignment.js",
              "Loan Application":"public/js/loan_application.js",
              "Loan Disbursement":"public/js/leave_disbursement.js",
              "Loan Repayment":"public/js/leave_repayment.js",
              "Loan Security Price":"public/js/leave_security_price.js",
              "Loan Write Off":"public/js/loan_write_off.js",
              "Loan":"public/js/loan.js",
              "Maintenance Visit":"public/js/maintenance_visit.js",
              "Material Request":"public/js/material_request.js",
              "Newsletter":"public/js/newsletter.js",
              "Opportunity":"public/js/opportunity.js",
              "Payment Entry":"public/js/payment_entry.js",
              "Pick List":"public/js/pick_list.js",
              "Pricing Rule":"public/js/pricing_rule.js",
              "Process Loan Interest Accrual":"public/js/process_loan_interest_accrual.js",
              "Project":"public/js/project.js",
              "Promotional Scheme":"public/js/promotional_scheme.js",
              "Purchase Invoice":"public/js/purchase_invoice.js",
              "Purchase Order":"public/js/purchase_order.js",
              "Purchase Receipt":"public/js/purchase_receipt.js",
              "Quotation":"public/js/quotation.js",
              "Request for Quotation":"public/js/request_for_quotation.js",
              "Retention Bonus":"public/js/retention_bonus.js",
              "Salary Slip":"public/js/salary_slip.js",
              "Salary Structure Assignment":"public/js/salary_structure_assignment.js",
              "Sales Invoice":"public/js/sales_invoice.js",
              "Sales Order":"public/js/sales_order.js",
              "Service Level Agreement":"public/js/service_level_agreement.js",
              "Shift Assignment":"public/js/shift_assignment.js",
              "Shift Request":"public/js/shift_request.js",
              "Shift Type":"public/js/shift_type.js",
              "Staffing Plan":"public/js/staffing_plan.js",
              "Stock Entry":"public/js/stock_entry.js",
              "Stock Reconciliation":"public/js/stock_reconciliation.js",
              "Stock Quotation":"public/js/stock_quotation.js",
              "Task":"public/js/task.js",
              "Training Event":"public/js/training_event.js",
              "Vehicle Log":"public/js/vehicle_log.js",
              "Vehicle":"public/js/vehicle.js",
              "Warranty Claim":"public/js/warranty_claim.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Home Pages
# ----------

# application home page (will override Website Settings)
# home_page = "login"

# website user home page (by Role)
# role_home_page = {
#	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
#	"methods": "silverlining.utils.jinja_methods",
#	"filters": "silverlining.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "silverlining.install.before_install"
# after_install = "silverlining.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "silverlining.uninstall.before_uninstall"
# after_uninstall = "silverlining.uninstall.after_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "silverlining.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
#	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
#	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

override_doctype_class = {
	# "Project": "silverlining.custom_project.customProject"
	"Project": "silverlining.custom_project.customProject"

}

# Document Events
# ---------------
# Hook on document methods and events

doc_events = {
"Task":{
		"on_update":["silverlining.custom_task.update_parent_and_project_status",
        "silverlining.custom_task.update_project_weight"]
        },
# "Project":{
#     "on_update":["silverlining.custom_project.custom_update_project_complete"]
# }        
		
}

# Scheduled Tasks
# ---------------

# scheduler_events = {
#	"all": [
#		"silverlining.tasks.all"
#	],
#	"daily": [
#		"silverlining.tasks.daily"
#	],
#	"hourly": [
#		"silverlining.tasks.hourly"
#	],
#	"weekly": [
#		"silverlining.tasks.weekly"
#	],
#	"monthly": [
#		"silverlining.tasks.monthly"
#	],
# }

# Testing
# -------

# before_tests = "silverlining.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
#	"frappe.desk.doctype.event.event.get_events": "silverlining.event.get_events"
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
#	"Task": "silverlining.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["silverlining.utils.before_request"]
# after_request = ["silverlining.utils.after_request"]

# Job Events
# ----------
# before_job = ["silverlining.utils.before_job"]
# after_job = ["silverlining.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
#	{
#		"doctype": "{doctype_1}",
#		"filter_by": "{filter_by}",
#		"redact_fields": ["{field_1}", "{field_2}"],
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_2}",
#		"filter_by": "{filter_by}",
#		"partial": 1,
#	},
#	{
#		"doctype": "{doctype_3}",
#		"strict": False,
#	},
#	{
#		"doctype": "{doctype_4}"
#	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
#	"silverlining.auth.validate"
# ]
