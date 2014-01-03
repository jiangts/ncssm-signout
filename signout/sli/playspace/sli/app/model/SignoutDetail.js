Ext.define('Signout.model.SignoutDetail', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'actualTimeReturn'},
        {name:'approveStatus'},
        {name:'checkpoint'},
        {name:'checktime'},
        {name:'companions'},
        {name:'destination'},
        {name:'transportation'},
        {name:'estTimeReturn'},
        {name:'inout'},
        {name:'needSliApproval'},
        {name:'sid_hall'},
        {name:'sid_halldname'},
        {name:'sid_name'},
        {name:'signoutType'},
        {name:'sliApprover'}
    ],
    proxy: {
        type: 'ajax',
        url : '/ncssm/resources/slis/findrecord',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        reader: {
            type: 'xml',
            record: 'checkin',
            root: 'checkins'
        }
    }
});

