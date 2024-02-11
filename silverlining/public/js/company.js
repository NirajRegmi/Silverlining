// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Company", {

	date_of_establishment: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_establishment
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_establishment_nepal", resp.message)
				}
			}
		})
	},
	date_of_incorporation: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_incorporation
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_incorporation_nepal", resp.message)
				}
			}
		})
	},
	date_of_commencement: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_commencement
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_commencement_nepal", resp.message)
				}
			}
		})
	},

	
});


