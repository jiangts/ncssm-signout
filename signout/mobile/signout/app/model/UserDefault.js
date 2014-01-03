Ext.define('Signout.model.UserDefault', {
    extend: 'Ext.data.Model',

    config: {
        fields: ['id', 'key'],
        proxy: {
            type: 'localstorage',
            id: 'user-values'
        }
    }
});
