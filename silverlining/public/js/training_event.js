// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Training Event', {
	start_time: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.start_time
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("start_time_nepal", resp.message)
				}
			}
		})
	},
	end_time: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.end_time
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("end_time_nepal", resp.message)
				}
			}
		})
	},
});

