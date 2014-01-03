Ext.define('Signout.store.UserDefaults', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Signout.model.UserDefault',
        storeId: 'userdefaults'
    }
});
