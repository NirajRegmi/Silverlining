// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Shift Type', {

	process_attendance_after: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.process_attendance_after
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("process_attendance_after_nepal", resp.message)
				}
			}
		})
	},
	last_sync_of_checkin: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.last_sync_of_checkin
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("last_sync_of_checkin_nepal", resp.message)
				}
			}
		})
	},
	
});
