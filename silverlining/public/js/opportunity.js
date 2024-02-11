// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Opportunity", {

	contact_date: function(frm) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.contact_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("next_contact_date_nepal",resp.message)
				}
			}
		})
	},

	expected_closing: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.expected_closing
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("custom_expected_closing_date_nepali",resp.message)
				}
			}
		})
	},
	transaction_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.transaction_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("opportunity_date_nepal",resp.message)
				}
			}
		})
	},

	

	

})

