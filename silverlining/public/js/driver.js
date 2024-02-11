// Copyright (c) 2017, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Driver", {
	

	expiry_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.expiry_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("expiry_date_nepal", resp.message)
				}
			}
		})
	},

	
});
