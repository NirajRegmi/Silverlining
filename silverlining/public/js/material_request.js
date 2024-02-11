// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// eslint-disable-next-line

frappe.ui.form.on('Material Request', {

	refresh: function(frm) {
		
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.transaction_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("transaction_datenepali",resp.message)
				}
			}	
		})
		
	},
	schedule_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.schedule_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("required_bynepali",resp.message)
				}
			}	
		})
	},
	


});

