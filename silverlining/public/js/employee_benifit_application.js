// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employee Benefit Application', {
	setup: function (frm) {
		frm.trigger('set_earning_component');
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_nepali", resp.message)
				}
			}
		})
	},



	date: function (frm) {
		frm.trigger('set_earning_component');
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_nepali", resp.message)
				}
			}
		})
	},



	
	
	
});

