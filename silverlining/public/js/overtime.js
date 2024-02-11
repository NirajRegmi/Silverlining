// Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Overtime', {
	
});

frappe.ui.form.on("Overtime Details", {
	login: function(frm,cdt,cdn){
		var d = locals[cdt][cdn];
		frappe.call({
				method: "silverlining.custom_nepali_date.get_converted_date",
				args: {
					date: d.login
				},
				callback: function(resp){
					if(resp.message){
						d.loginnepal = resp.message
						frm.refresh_field("loginnepal")
					}
				}
		})
		calculate_over_time(frm,cdt,cdn)
	},
	logout: function(frm,cdt,cdn){
		var d = locals[cdt][cdn];
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: d.logout
			},
			callback: function(resp){
				if(resp.message){
					d.logoutnepal = resp.message
					frm.refresh_field("logoutnepal")
				}
			}
	})
		calculate_over_time(frm,cdt,cdn)

	}
})
 