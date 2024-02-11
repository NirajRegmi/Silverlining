// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Appointment Letter', {
	appointment_date: function (frm,doc) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.appointment_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("appointment_date_nepal", resp.message)
				}
			}
		})
	},
});
