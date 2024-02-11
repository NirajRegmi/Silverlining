// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Salary Structure Assignment', {
	
	from_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.from_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("from_date_nepali",resp.message)
				}
			}
		})
	},
	});
