Ext.define('Signout.model.AllStudent', {
    extend: 'Ext.data.Model',

    fields: [
        //{name:'checkinCollection'},
        {name:'email'},
        {name:'firstname'},
        {name:'hall_hall'},
        {name:'hall_halldname'},
        {name:'lastname'},
        {name:'phone'},
        {name:'checkin_inout'},
        {name:'checkinCollection_latest'},
        {name:'sid'}
    ],
    proxy: {
        type: 'ajax',
        url : '/ncssm/resources/slis/all_students',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        extraParams: { 
            min:0,max:'100'
        },
        reader: {
            type: 'xml',
            record: 'student',
            root: 'students'
        }
    }
});
