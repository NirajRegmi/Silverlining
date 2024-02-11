// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Service Level Agreement', {
	
	start_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.start_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("start_date_nepali", resp.message)
				}
			}
		})
		set_start_date(this.frm);
	},
	end_date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.end_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("end_date_nepali", resp.message)
				}
			}
		})
		set_end_date(this.frm);
	}


});
