// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt
frappe.ui.form.on("Sales Invoice", {
	refresh: function (frm) {
		
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.posting_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("nepali_date", resp.message)
				}
			}
		})
		
	},


		
	due_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.due_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("due_date_nepal", resp.message)
				}
			}
		})
	},
	po_date: function (frm) {
		console.log(">>>!!")
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.po_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("customers_purchase_order_datenepali", resp.message)
				}
			}
		})
	},
	from_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.from_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("from_datenepali", resp.message)
				}
			}
		})
	},
	to_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.to_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("to_datenepali", resp.message)
				}
			}
		})
	},
	

	
});


frappe.ui.form.on('Sales Invoice Item', {
	service_stop_date: function (frm,cdt,cdn) {
		var child = locals[cdt][cdn];
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date:child.service_stop_date
			},
			callback: function (resp) {
				if (resp.message) {
					frappe.model.set_value(cdt,cdn,"service_stop_date_nepal",resp.message)
					
				}
			}
		})
	},
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

})
