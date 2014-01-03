Ext.define('Signout.model.StudentHistory', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'actualTimeReturn'},
        {name:'approveStatus'},
        {name:'checkpoint'},
        {name:'checktime'},
        {name:'companions'},
        {name:'destination'},
        {name:'estTimeReturn'},
        {name:'id'},
        {name:'inout'},
        {name:'sid_halldname'},
        {name:'sid_name'}
    ],
    proxy: {
        type: 'ajax',
        url : '/ncssm/resources/students/get_history',
        method: 'GET',
        extraParams: { 
            min:0,max:'100', sid: Signout.Storage.getSid()
        },
        reader: {
            type: 'xml',
            record: 'checkin',
            root: 'checkins'
        }
    }
});
console.log('sid value ' + Signout.Storage.getSid());
