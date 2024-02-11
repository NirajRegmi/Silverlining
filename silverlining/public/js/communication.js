frappe.ui.form.on("Communication", {
	
	read_by_recipient_on: function(frm) {
		
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.read_by_recipient_on
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("read_by_recipient_on_nepali",resp.message)
				}
			}
		})
		
	},

	});
