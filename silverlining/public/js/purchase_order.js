// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Purchase Order", {
	setup: function(frm){
			frappe.call({
				method: "silverlining.custom_nepali_date.get_converted_date",
				args: {
					date:frm.doc.transaction_date
				},
				callback: function (resp) {
					if (resp.message) {
						cur_frm.set_value("date_nepal",resp.message)
						
					}
				}

			})
			frm.set_query("expense_account", "items", function() {
				return {
					filters: {
						'company': frm.doc.company,
						"is_group": 0
					}
				}
			});
	},
	to_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.to_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("to_date_nepali",resp.message)
				}
			}
		})
	},
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
	schedule_date: function (frm) {
		
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date:frm.doc.schedule_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("required_by_nepal",resp.message)
					
				}
			}
		})
	},
	
	expected_delivery_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date:frm.doc.expected_delivery_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("expected_delivery_date_nepal",resp.message)
					
				}
			}
		})
	},
	onload:function(frm){
		frm.set_query("expense_account", "items", function() {
			return {
				filters: {
					'company': frm.doc.company,
					"is_group":0
				}
			}
		});
	},
	refresh:function(frm){
		frm.set_query("expense_account", "items", function() {
			return {
				filters: {
					'company': frm.doc.company,
					"is_group":0
				}
			}
		});
	}
	
});

frappe.ui.form.on("Purchase Order Item", {
	
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
});


