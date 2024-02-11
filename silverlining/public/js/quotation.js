// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt



frappe.ui.form.on('Quotation', {
	
	valid_till: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_till
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("valid_till_nepal",resp.message)
				}
			}
		})
	},
	transaction_date: function(frm){
		console.log("$$$$$$$$")
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.transaction_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("date_nepal",resp.message)
				}
			}
		})
	},	
});

