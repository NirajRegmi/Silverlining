// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Additional Salary', {
	payroll_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.payroll_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("payroll_date_nepali", resp.message)
				}
			}
		})
		set_payroll_date(this.frm);
	},
	from_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.from_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("from_date_nepali", resp.message)
				}
			}
		})
		from_date_date(this.frm);
	},
	to_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.to_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("to_date_nepali", resp.message)
				}
			}
		})
		to_date_date(this.frm);
	}
});
