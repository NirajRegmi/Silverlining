// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Coupon Code', {
	valid_from: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.valid_from
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("valid_from_nepali",resp.message)
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
					cur_frm.set_value("valid_upto_nepali",resp.message)
				}
			}
		})
	},

	
});
