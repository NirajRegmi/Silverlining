// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Sales Order", {
	setup: function (frm) {
		// frappe.call({
		// 	method: "silverlining.custom_nepali_date.get_converted_date",
		// 	args: {
		// 		date: frm.doc.po_date
		// 	},
		// 	callback: function (resp) {
		// 		if (resp.message) {
		// 			cur_frm.set_value("customers_purchase_order_date_nepal", resp.message)
		// 		}
		// 	}
		// })

		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.transaction_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("transaction_date_nepali",resp.message)
				}
			}
		})

	},


	po_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.po_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("customers_purchase_order_date_nepal", resp.message)
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
					cur_frm.set_value("transaction_date_nepali",resp.message)
				}
			}
		})
	},
	delivery_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.delivery_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("date_nepal",resp.message)
				}
			}
		})
	}
});

frappe.ui.form.on('Sales Order Item', {
	from_date: function (frm,cdt,cdn) {
		var child = locals[cdt][cdn];
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: child.from_date
			},
			callback: function (resp) {
				if (resp.message) {
					frappe.model.set_value(cdt,cdn,"from_date_nepali", resp.message)
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
					frappe.model.set_value(cdt,cdn,"to_date_nepali", resp.message)
				}
			}
		})
	},
});
