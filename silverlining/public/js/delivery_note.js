// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt



frappe.ui.form.on("Delivery Note", {
	refresh: function(frm) {
		
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.lr_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("transport_receipt_date_nepali",resp.message)
				}
			}	
		})
	},
	
	posting_date: function(doc){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("date_nepali",resp.message)
				}
			}	
		})
		set_posting_date(this.frm);
	},
	po_date: function(doc){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.po_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("customer_purchase_order_date_nepali",resp.message)
				}
			}	
		})
	},
	lr_date: function(doc){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_datee",
			args: {
				date: frm.doc.lr_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("transport_receipt_date_nepali",resp.message)
				}
			}	
		})
	},


	


});



	
