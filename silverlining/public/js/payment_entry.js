// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


frappe.ui.form.on('Payment Entry', {
	
	setup: function(frm) {
		frm.events.paid_from_account_currency(frm);
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("posting_date_nepal", resp.message)
				}
			}
		})
	},	

	reference_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.reference_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("cheque_reference_date_nepali", resp.message)
				}
			}
		})
		set_reference_date(this.frm);
	},
	posting_date: function(frm) {
		frm.events.paid_from_account_currency(frm);
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("posting_date_nepal", resp.message)
				}
			}
		})
	},	
});


