/*
var tok = getCookie('token'); var tokobj = Ext.decode(tok);
var tokstr = tokobj.token;
var SLIlistobj;
*/
Ext.Ajax.request({
    url: '/admin/users/list_slis.json', 
    method:'GET', 
 //   params: {auth_token:tokstr}, 
    success: function(response){
        //console.log(response.responseText); 
        SLIlistobj = Ext.decode(response.responseText)[0]; 
    }
});
Ext.define('Signout.store.SLIliststore', {
    extend: 'Ext.data.Store',
    xtype: 'sliliststore',
    //model: 'Signout.model.SignedOutStudent',
    fields: ['id', 'first_name', 'middle_name','last_name','email', 'created_at', 'updated_at', 'hall_id'],
    //data: SLIlistobj,
    /*
    data: {'items':[
        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
    ]},
    */
    /*
    proxy: {
        type: 'ajax',
        //url: (local ? url.local : url.remote),
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            totalProperty: 'total'
        }
    },
    */
                                
    autoLoad: true,
});


