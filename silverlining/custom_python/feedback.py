# import frappe
# from urllib.parse import quote

# @frappe.whitelist()
# def send_feedback_email(issue_id, customer_email):
#     issue = frappe.get_doc('Issue', issue_id)
#     feedback_form_url = f'https://pms.cas.com.np/customer-feedback/new?document_type=Issue&document={issue_id}&subject={quote(issue.subject)}'
#     feedback_email_subject = 'Feedback for Closed Issue #{0}'.format(issue_id)
#     feedback_email_content = 'Dear Customer, please provide your feedback by clicking the following link:\n{0}'.format(feedback_form_url)

#     frappe.sendmail(
#         recipients=[customer_email],
#         subject=feedback_email_subject,
#         message=feedback_email_content
#     )

#     return True
import frappe
from urllib.parse import quote

@frappe.whitelist()
def send_feedback_email(issue_id, customer_email):
    issue = frappe.get_doc('Issue', issue_id)
    feedback_form_url = f'https://pms.cas.com.np/customer-feedback/new?document_type=Issue&document={issue_id}&subject={quote(issue.subject)}'

    # Retrieve the email template
    email_template = frappe.get_doc('Email Template', 'Survey Email Template')  # Replace 'Your Template Name' with the actual template name

    # Get the subject and content from the email template
    feedback_email_subject = email_template.subject
    feedback_email_content = email_template.response_html

    # Replace placeholders in the content with actual values
    feedback_email_content = feedback_email_content.format(
        issue_id=issue_id,
        issue_subject=quote(issue.subject),
        customer=issue.customer,
        feedback_form_url=feedback_form_url
    )

    # Send the email
    frappe.sendmail(
        recipients=[customer_email],
        subject=feedback_email_subject,
        message=feedback_email_content,
        
    )

    return True

