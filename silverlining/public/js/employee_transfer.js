// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt


frappe.ui.form.on('Employee Transfer', {
	transfer_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.transfer_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("transfer_date_nepal", resp.message)
				}
			}
		})
	
	
	}
});
