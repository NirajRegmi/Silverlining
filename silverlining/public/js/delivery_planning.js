// Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Delivery Planning', {

	delivery_date_from: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.delivery_date_from
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("delivery_date_from_nepal", resp.message)
				}
			}
		})
	},
	delivery_date_to: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.delivery_date_to
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("deliver_date_to_nepal", resp.message)
				}
			}
		})
	},
});
