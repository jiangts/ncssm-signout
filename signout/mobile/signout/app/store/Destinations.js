Ext.define('Signout.store.Destinations', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Signout.model.Destination',
        storeId: 'destination',
        proxy: {
            type: 'localstorage',
            id: 'dest-id'
        }
        /*
        data: [
            { destination: 'Bali Hai' },
            { destination: 'International Delights' },
            { destination: 'Rite Aid' },
            { destination: 'Chubby\'s' }
        ],
        */
    }
});
