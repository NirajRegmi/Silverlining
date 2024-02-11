// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Job Offer", {
	offer_date: function (frm,doc) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.offer_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("offer_date_nepal", resp.message)
				}
			}
		})
	},

});


