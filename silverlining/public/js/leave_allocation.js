// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Leave Allocation", {
	from_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.from_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("from_date_nepal", resp.message)
				}
			}
		})
	},
	to_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.to_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("to_date_nepal", resp.message)
				}
			}
		})
	},

});

