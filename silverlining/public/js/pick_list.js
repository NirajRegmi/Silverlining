// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Pick List', {	
	transaction_date: function(frm, doc){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date:frm.doc.transaction_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("transaction_date_nepal",resp.message)
				}
			}	
		})
	},
	
});

