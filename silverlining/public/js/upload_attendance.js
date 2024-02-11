// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt




erpnext.hr.AttendanceControlPanel = frappe.ui.form.Controller.extend({
	att_fr_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.att_fr_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("attendance_from_date_nepal", resp.message)
				}
			}
		})
	},
	att_to_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.att_to_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("attendance_to_date_nepal", resp.message)
				}
			}
		})
	},
})

