Ext.define('Signout.store.AllStudents', {
    extend: 'Ext.data.Store',
    storeId: 'allstudentsstore',
    model: 'Signout.model.AllStudent',
    sorters: [{
         property: 'hall_halldname',
         direction: 'ASC'
    }]
    
//    autoLoad: true,
//    in trees
});
