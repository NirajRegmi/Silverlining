// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

// attach required files

frappe.ui.form.on("Supplier Quotation",{
	valid_till: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_till
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("valid_tillnepali",resp.message)
				}
			}
		})
	},
	refresh: function(doc) {
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


});

