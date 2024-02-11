// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Lead", {
	
	contact_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.contact_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("next_contact_date_nepali", resp.message)
				}
			}
		})
		
	},

	ends_on: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.ends_on
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("ends_on_nepali", resp.message)
				}
			}
		})
		
	},
});

