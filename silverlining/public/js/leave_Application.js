// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Leave Application", {	
	refresh: function(frm) {
		
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("posting_date_nepal", resp.message)
				}
			}
		})
	},

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

	half_day_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.half_day_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("half_day_date_nepal", resp.message)
				}
			}
		})
	},

	
});

