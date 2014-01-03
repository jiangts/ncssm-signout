Ext.define('Signout.store.History', {
    extend: 'Ext.data.Store',
	storeId: 'history',
    model: 'Signout.model.LatestSignout'
	//fields: ['name', 'email', 'phone'],
});
