Ext.define('Signout.model.Destination', {
    extend: 'Ext.data.Model',

    config: {
        identifier: {
            type: 'uuid'
        },
        fields: ['id', 'destination'],
        proxy: {
            type: 'localstorage',
            id: 'dest-id'
        }
    }
});
