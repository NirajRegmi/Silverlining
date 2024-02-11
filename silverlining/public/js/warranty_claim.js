// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.ui.form.on("Warranty Claim", {
	
	refresh: function(frm) {
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.complaint_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("complaint_date_nepali",resp.message)
				}
			}
		})
	},
	// setup:function(frm){
	// 	frm.set_query("customer", function() {
	// 		return {
	// 			filters: [
	// 				["Customer","name","in",["CAS Trading House Pvt Ltd.","Cas Techno Sales Pvt.Ltd (S)"]]
	// 			]
	// 		}
	// 	})
	// },

	complaint_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.complaint_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("complaint_date_nepali",resp.message)
				}
			}
		})
	},
	warranty_expiry_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.warranty_expiry_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("warranty_expiry_date_nepali",resp.message)
				}
			}
		})
	},
	amc_expiry_date: function(frm){
		frappe.call({
			method:"silverlining.custom_nepali_date.get_converted_date",
			args: {
				date: frm.doc.amc_expiry_date
			},
			callback: function(resp){
				if(resp.message){
					cur_frm.set_value("amc_expiry_date_nepali",resp.message)
				}
			}
		})
	},
	issue_no: function (frm) {
		frappe.call({
			method: "silverlining.warranty_claim.get_child_field",
			args: {
				value: frm.doc.issue_no
			},
			callback: function (resp) {
				if (resp.message) {
					// Assuming resp.message is an array of dictionaries
					var data = resp.message;
					
					// Loop through the data and do something with each row
					for (var i = 0; i < data.length; i++) {
						var row = data[i];
						
						// Access individual columns by their names
						var column1Value = row.event;
						var column2Value = row.custom_so_no;
						var column3Value = row.part_no;
						var column4Value = row.replaced_part_description;
	
						// Do something with the values, e.g., set them in fields
						cur_frm.set_value("event_no", column1Value);
						cur_frm.set_value("so_no", column2Value);
						cur_frm.set_value("part_no", column3Value);
						cur_frm.set_value("replaced_part_description", column4Value);
					}
				}
			}
		});
	},
});

