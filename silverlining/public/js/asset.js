// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


frappe.ui.form.on('Asset', {
	
	available_for_use_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.available_for_use_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("available_for_use_date_nepal", resp.message)
				}
			}
		})
	},
	insurance_start_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.insurance_start_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("insurance_start_date_nepal", resp.message)
				}
			}
		})
	},
	insurance_start_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.insurance_start_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("insurance_start_date_nepal", resp.message)
				}
			}
		})
	},

});

