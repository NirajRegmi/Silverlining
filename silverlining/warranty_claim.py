
import frappe

@frappe.whitelist()
def get_child_field(value):
    result = frappe.db.sql("""
        SELECT event, custom_so_no, part_no,replaced_part_description FROM
        `tabSpare Part Details`
        WHERE parent = %s AND idx = 1
    """, (value), as_dict=1)

    # Extract the values from the result and store them in a list of dictionaries
    data = [{'event': row['event'], 'custom_so_no': row['custom_so_no'], 'part_no': row['part_no'],'replaced_part_description': row['replaced_part_description'],} for row in result]

    return data