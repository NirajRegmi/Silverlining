// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Retention Bonus', {
	
	bonus_payment_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.bonus_payment_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("bonus_payment_date_nepali", resp.message)
				}
			}
		})
		set_bonus_payment_date(this.frm);
	}
});
