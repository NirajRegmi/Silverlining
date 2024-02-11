// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on("Item Price", {
	setup: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_from
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("valid_fromnepal",resp.message)
				}
			}
		})
	},
	
	valid_from: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_from
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("valid_fromnepal",resp.message)
				}
			}
		})
	},
	valid_upto: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_upto
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("valid_uptonepal",resp.message)
				}
			}
		})
	},
	
});
