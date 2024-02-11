// Copyright (c) 2019, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Appointment', {
	
	scheduled_time: function(frm) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.scheduled_time
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("scheduled_time_nepal",resp.message)
				}
			}
		})
	}
});
