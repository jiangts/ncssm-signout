Ext.define('Signout.view.windows.SignoutDetail', {
    extend: 'Ext.window.Window',
    xtype: 'signoutdetailswindow',
    requires: ['Ext.window.*'],
    title: 'Student\'s Most Recent Sign-Out',
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    constrainHeader: true,
    resizable: false,
//    bodyPadding: '5',
    defaults: {border:true},
    items:[{
        xtype: 'form',
        width: '100%',
        height: '100%',
        id: 'forminsidedetailview',
        defaults: {border:true,labelStyle: 'width:150px'},
        bodyPadding: '5',
        defaultType: 'displayfield',
        items:[{
            xtype: 'container',
            html: 'Sign-Out Record',
            margins: '5',
            cls: 'welcome-text-homecard'
        },{
            fieldLabel: 'Name',
            name: 'sid_name'
        },{
            fieldLabel: 'Status',
            name: 'inout'
        },{
            fieldLabel: 'Hall',
            name: 'sid_hall'
        },{
            fieldLabel: 'Destination',
            name: 'destination'
        },{
            fieldLabel: 'Transportation',
            name: 'transportation'
        },{
            fieldLabel: 'Companions',
            name: 'companions'
        },{
            fieldLabel: 'Signout Type',
            name: 'signoutType'
        },{
            fieldLabel: 'Time Out',
            renderer: Ext.util.Format.dateRenderer('D m/j g:i A'),
            name: 'checktime'
        },{
            fieldLabel: 'Expected Return',
            renderer: Ext.util.Format.dateRenderer('D m/j g:i A'),
            name: 'estTimeReturn'
        },{
            fieldLabel: 'Actual Time Return',
            renderer: Ext.util.Format.dateRenderer('D m/j g:i A'),
            name: 'actualTimeReturn'
        },{
            fieldLabel: 'Need SLI Approval',
            name: 'needSliApproval'
        },{
            fieldLabel: 'Approved',
            name: 'approveStatus'
        },{
            fieldLabel: 'SLI Approver',
            name: 'sliApprover'
        }]
    }]
});

