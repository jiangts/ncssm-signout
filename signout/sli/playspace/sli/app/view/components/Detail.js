Ext.Ajax.request({
    url: 'http://ncssmsgdev.herokuapp.com/student/profile.json', 
    method:'GET', 
    params: {
        auth_token:"oNaJ5qZqh64aBq6KuSws"
    }, 
    success: function(response){
        console.log(response.responseText); 
    }
});

var detailview = Ext.define('Signout.view.components.Detail', {
    extend: 'Ext.panel.Panel',
    xtype: 'detailview',

    title: 'Student Name Here',
    margins: '0',
    autoScroll: true,
//    html: 'A picture on the top left, and some extra data. Stored in another table? Need DATE and time, a sort by hall function (or a by hall record),  ',
    floatable: true,
    layout: 'table'
    /*
    items: [
        {
            
        }
    ]
    */
});

