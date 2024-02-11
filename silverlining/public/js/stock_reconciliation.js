// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Stock Reconciliation", {
	setup: function(frm) {
		frm.trigger("set_valuation_rate_and_qty_for_all_items");
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
	posting_date: function(frm) {
		frm.trigger("set_valuation_rate_and_qty_for_all_items");
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
});

