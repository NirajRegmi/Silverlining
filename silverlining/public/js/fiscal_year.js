// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Fiscal Year', {
	setup: function(frm) {
		if (!frm.doc.is_short_year) {
			let year_end_date =
				frappe.datetime.add_days(frappe.datetime.add_months(frm.doc.year_start_date, 12), -1);
			frm.set_value("year_end_date", year_end_date);
		}
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.year_start_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("year_start_date_nepal", resp.message)
				}
			}
		})
	},
	year_start_date: function(frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.year_start_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("year_start_date_nepal", resp.message)
				}
			}
		})
	},
});
