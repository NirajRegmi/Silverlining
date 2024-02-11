// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Request for Quotation",{


	refresh: function(frm, cdt, cdn) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.transaction_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("datenepali",resp.message)
				}
			}
		})
		},
})
