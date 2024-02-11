// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Leave Encashment', {
	setup: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.encashment_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("encashment_date_nepal", resp.message)
				}
			}
		})
	},
	encashment_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.encashment_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("encashment_date_nepal", resp.message)
				}
			}
		})
	}
});
