// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Salary Slip", {
	refresh: function(frm) {		
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function(resp){
				if(resp.message){
					console.log("Coming inside nepali")
					cur_frm.set_value("posting_date_nepali",resp.message)
				}
			}
		})
	},

	posting_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("posting_date_nepali",resp.message)
				}
			}
		})
	},
});


