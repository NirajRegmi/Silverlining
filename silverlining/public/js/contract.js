// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on("Contract", {
	start_date: function(frm) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.start_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("start_date_nepali",resp.message)
				}
			}
		})
		set_start_date(this.frm);
	},
	fulfilment_deadline: function(frm) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.fulfilment_deadline
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("fulfilment_deadline_nepali",resp.message)
				}
			}
		})
		set_fulfilment_deadline(this.frm);
	},
	signed_on: function(frm) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.signed_on
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("signed_on_nepal",resp.message)
				}
			}
		})
	}
});
