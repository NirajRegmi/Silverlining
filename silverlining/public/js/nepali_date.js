

$(document).on('app_ready', function() {
    doctype_data.map(doctype => {
        frappe.ui.form.on(doctype.name, doctype.gregorian,            
             function(frm){
                frappe.call({
                    method:"silverlining.custom_nepali_date.get_converted_date",
                    args: {
                        date: frm.doc[doctype['gregorian']]
                    },
                    callback: function(resp){
                        if(resp.message){
                            frm.set_value(doctype.vikram_samvat,resp.message)
                        }
                    }
                })
        })

        frappe.ui.form.on(doctype.name, "refresh",            
            function(frm){
               if(doctype.gregorian === "transaction_date" || doctype.gregorian === "posting_date"){
                frappe.call({
                    method:"silverlining.custom_nepali_date.get_converted_date",
                    args: {
                        date: frm.doc[doctype['gregorian']]
                    },
                    callback: function(resp){
                        if(resp.message){
                            frm.set_value(doctype.vikram_samvat,resp.message)
                        }
                    }
                })
               }
       })

    })
    
})
