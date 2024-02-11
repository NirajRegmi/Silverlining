// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Compensatory Leave Request', {
	
	work_from_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.work_from_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("work_from_date_nepal", resp.message)
				}
			}
		})
	},
	work_end_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.work_end_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("work_end_date_nepal", resp.message)
				}
			}
		})
	},
	half_day_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.half_day_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("half_day_date_nepal", resp.message)
				}
			}
		})
	}
});
