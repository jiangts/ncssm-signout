Ext.define('Signout.store.StudentHistory', {
    extend: 'Ext.data.Store',
    storeId: 'student-history',
    model: 'Signout.model.StudentHistory',
    //model: 'Signout.model.SignedOutStudent',
    autosave: false,
    sorters: [{
         property: 'checktime',
         direction: 'DESC'
    }]
});
