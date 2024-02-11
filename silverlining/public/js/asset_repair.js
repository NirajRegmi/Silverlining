// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Asset Repair', {
	failure_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.failure_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("failure_date_nepal", resp.message)
				}
			}
		})
	},
	completion_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.completion_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("completion_date_nepal", resp.message)
				}
			}
		})
	},

});

