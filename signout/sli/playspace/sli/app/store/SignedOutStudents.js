Ext.define('Signout.store.SignedOutStudents', {
    extend: 'Ext.data.Store',
    storeId:'signedoutstudentsstore',
    model: 'Signout.model.SignedOutStudent',
    
    sorters: [{
         property: 'checktime',
         direction: 'ASC'
     }]
//    autoLoad: true,
//    in trees
});





        /*
    proxy: {
        type: 'ajax',
        url : '/ncssm/resources/checkins?expandLevel=2',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        baseParams: { 
        start:'0',max:'100',expandLevel:'2'
        },
        reader: {
            type: 'xml',
            record: 'sid',
            root: 'checkins'
        }
    },
        */
/*
        reader: {
            type: 'xml',
            record: 'sid',
            root: 'checkins'
        },
    Ext.Ajax.request({
        url: '/ncssm/resources/checkins',
        timeout: 60000,
        method: 'GET',
        params: {start:0,max:100,expandLevel:2},
        success: function(resp) {
            console.log(resp.responseText);
        this.loadRawData(resp.responseText, true);
    }
*/
