Ext.define('Signout.view.windows.SignoutDetail', {
    extend: 'Ext.window.Window',
    requires: 'Signout.view.tables.SignOutHistory',
    xtype: 'signoutdetailswindow',
    title: 'Student\'s Sign-Out History',
    width: '800',
    height: '500',
    closeAction: 'destroy',
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    constrainHeader: true,
    resizable: false,
//    bodyPadding: '5',
    defaults: {border:true},
    items:[{
        xtype: 'historylist',
        width: '100%',
        height: '500',
    }]
});
