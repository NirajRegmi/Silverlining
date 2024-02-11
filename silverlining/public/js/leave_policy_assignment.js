// Copyright (c) 2020, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Leave Policy Assignment', {
	effective_from: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.effective_from
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("effective_from_nepal", resp.message)
				}
			}
		})
	},

	effective_to: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.effective_to
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("effective_to_nepal", resp.message)
				}
			}
		})
	},
});
