// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

frappe.ui.form.on('Newsletter', {
schedule_send: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.schedule_send
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("schedule_sendnepal",resp.message)
				}
			}
		})
		
	},
	
});
