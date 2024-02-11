// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Task", {
	
	exp_start_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.exp_start_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("expected_start_date_nepal", resp.message)
				}
			}
		})
	},
	exp_end_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.exp_end_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("expected_end_date_nepal", resp.message)
				}
			}
		})
	}

});
