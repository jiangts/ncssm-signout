Ext.define('Signout.model.SignedOutStudent', {
    extend: 'Ext.data.Model',

    fields: [
        //{name:'actualTimeReturn' /*type:'date', dateFormat: 'D j-m-Y g:i'*/},
        {name:'approveStatus'},
        //{name:'checkpoint'},
        {name:'checktime'},
        {name:'companions'  },
        {name:'destination' },
        {name:'transportation' },
        {name:'estTimeReturn'},
        //{name:'guardianApprover'},
        {name:'id'},
        {name:'inout'},
        {name:'sid_hall'},
        {name:'sid_halldname'},
        {name:'sid_name'},
        //{name:'needGuardianApproval'},
        {name:'needSliApproval'},
        {name:'signoutType'},
        {name:'sliApprover'}
        //{name:'firstname', mapping:"firstname"},// mapping:"sid>firstname"},
    ],
    proxy: {
        type: 'ajax',
        url : '/ncssm/resources/slis/list_checkins_signed_out',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        extraParams: { 
            start:0,max:'100'
        },
        reader: {
            type: 'xml',
            record: 'checkin',
            root: 'checkins'
        }
    }
});

/*
Ext.define('Signout.model.StudentInfo', {
    extend: 'Ext.data.Model',
    uses: ['Signout.model.SignedOutStudent'],
    fields: [
 //       {name: 'firstname', mapping: 'sid>firstname'},
        {name: 'lastname'}
    ],
    belongsTo: 'Signout.model.SignedOutStudent'
    
});

*/
