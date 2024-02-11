import frappe
@frappe.whitelist()
def get_contract_deta(document_name):
    items= frappe.db.sql(f""" SELECT item_code,item_name,qty,rate,amount,uom,conversion_factor,description FROM `tabQuotation Item` where parent='{document_name}' """, as_dict=True)
    return items