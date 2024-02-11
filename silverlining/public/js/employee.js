// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Employee",{
	date_of_birth: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_birth
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_birth_nepal", resp.message)
				}
			}
		})


	},
	date_of_joining: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_joining
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_joining_nepal", resp.message)
				}
			}
		})


	},
	scheduled_confirmation_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.scheduled_confirmation_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("offer_date_nepal", resp.message)
				}
			}
		})


	},
	date_of_retirement: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_retirement
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_retirement_nepal", resp.message)
				}
			}
		})


	},
	date_of_issue: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_issue
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_issue_nepal", resp.message)
				}
			}
		})


	},
	date_of_issue: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date_of_issue
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_of_issue_nepal", resp.message)
				}
			}
		})


	},

	valid_upto: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_upto
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("valid_upto_nepal", resp.message)
				}
			}
		})


	},
	resignation_letter_date: function (frm) {
		console.log("inside resignation_letter_date")
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.resignation_letter_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("resignation_letter_date_nepal", resp.message)
				}
			}
		})


	},
	relieving_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.relieving_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("relieving_date_nepal", resp.message)
				}
			}
		})


	},

});
