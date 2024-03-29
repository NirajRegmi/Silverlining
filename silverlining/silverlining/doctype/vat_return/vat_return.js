// Copyright (c) 2021, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('VAT RETURN', {
	refresh : function(frm) {

		if (frm.doc.vat_to_be_adjusted_from_last_month > 0){
			frappe.throw(" Please enter Negative value only")
		}


		frm.doc.__unsaved = 1;
		if(!frm.is_new()) {
			frm.set_intro(__("Please save the report again to rebuild or update"));
			frm.add_custom_button(__('Download JSON'), function() {
				var w = window.open(
					frappe.urllib.get_full_url(
						"/api/method/silverlining.silverlining.doctype.vat_return.vat_return.make_json?"
						+"name="+encodeURIComponent(frm.doc.name)));

				if(!w) {
					frappe.msgprint(__("Please enable pop-ups")); return;
				}
			});
			frm.add_custom_button(__('View Form'), function() {
				frappe.call({
					"method" : "silverlining.silverlining.doctype.vat_return.vat_return.view_report",
					"args" : {
						name : frm.doc.name,
					},
					"callback" : function(r){

						let data = r.message;

						frappe.ui.get_print_settings(false, print_settings => {

							frappe.render_grid({
								template: 'vat_return',
								title: __(this.doctype),
								print_settings: print_settings,
								data: data,
								columns:[]
							});
						});
					}
				});
			});
		}

		let current_year = new Date().getFullYear();
		let options = [current_year, current_year-1, current_year-2];
		frm.set_df_property('year', 'options', options);
	},

	setup: function(frm) {
		frm.set_query('company_address', function(doc) {
			if(!doc.company) {
				frappe.throw(__('Please set Company'));
			}

			return {
				query: 'frappe.contacts.doctype.address.address.address_query',
				filters: {
					link_doctype: 'Company',
					link_name: doc.company
				}
			};
		});
	},

	nepal_from_date: function(frm){
		var a = frm.doc.nepal_from_date.length
		console.log("this is len",a)
		if (a == 10){
			frappe.call({
				method: 'on_nepal_from_date',
				doc: frm.doc,
				args:{
					n_date : frm.doc.nepal_from_date
				},
				callback: function(r) {
					if (r.message ){
						frm.set_value("from_date", r.message)
						frm.refresh_field("from_date")
					}
				}
			})
		}
	},

	nepal_to_date: function(frm){
		
		if (frm.doc.nepal_to_date.length == 10){
			frappe.call({
				method: 'on_nepal_from_date',
				doc: frm.doc,
				args:{
					n_date : frm.doc.nepal_to_date
				},
				callback: function(r) {
					if (r.message ){
						frm.set_value("to_date", r.message)
						frm.refresh_field("to_date")
					}
				}
			})
		}
	},

});
