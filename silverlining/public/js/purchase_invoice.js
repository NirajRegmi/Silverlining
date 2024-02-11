// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt

	frappe.ui.form.on('Purchase Invoice', {
		bill_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.bill_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("supplier_invoice_datenepali",resp.message)
				}
			}	
		})
	},
	setup:function(frm){
		frm.set_query("expense_account", "items", function() {
			return {
				filters: {
					'company': frm.doc.company,
					"is_group":0
				}
			}
		})
	},

	due_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.due_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("due_date_nepal",resp.message)
				}
			}	
		})
	},
	service_stop_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.service_stop_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("service_stop_date_nepal",resp.message)
				}
			}	
		})
	},
	service_start_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.service_start_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("service_start_date_nepal",resp.message)
				}
			}	
		})
	},
	service_end_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.service_end_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("service_end_date_nepal",resp.message)
				}
			}	
		})
	},

	release_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.release_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("release_date_nepal", resp.message)
				}
			}
		})
	},
	
});

frappe.ui.form.on('Purchase Invoice Item', {
	from_date: function (frm,cdt,cdn) {
		var child = locals[cdt][cdn];
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: child.from_date
			},
			callback: function (resp) {
				if (resp.message) {
					frappe.model.set_value(cdt,cdn,"custom_from_date_nepali", resp.message)
				}
			}
		})
	},
    to_date: function (frm,cdt,cdn) {
		var child = locals[cdt][cdn];
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: child.to_date
			},
			callback: function (resp) {
				if (resp.message) {
					frappe.model.set_value(cdt,cdn,"custom_to_date_nepali", resp.message)
				}
			}
		})
	},

})



