Ext.define('Signout.model.SliInfo', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'email'},
        {name:'firstname'},
        {name:'hall_hall'},
        {name:'lastname'},
        {name:'phone'},
        {name:'id'}
    ],
    proxy: {
        type: 'ajax',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        reader: {
            type: 'xml',
            record: 'sli',
            root: 'sli'
        }
    }
});

