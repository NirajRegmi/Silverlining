frappe.ui.form.on("Employee Attendance Tool", {
	setup: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_nepal", resp.message)
				}
			}
		})
	},

	
	
	date: function (frm) {
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("date_nepal", resp.message)
				}
			}
		})
	},

	

});


