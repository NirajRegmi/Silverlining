frappe.ui.form.on("Issue", {

	refresh: function (frm) {
		if(frm.doc.opening_date){
		frappe.call({
			method: "silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.opening_date
			},
			callback: function (resp) {
				if (resp.message) {
					cur_frm.set_value("opening_date_nepali", resp.message)
				}
			}
		})
		}
		
		},
	first_responded_on:function(frm){
		frappe.call({
				method: "silverlining.custom_nepali_date.get_converted_date",
				args: {
					date: frm.doc.first_responded_on
				},
				callback: function (resp) {
					if (resp.message) {
						cur_frm.set_value("first_responded_on_nepal", resp.message)
					}
				}
			})
	},
	});

