Ext.define('Signout.view.components.SignInDesk', {
    extend: 'Ext.panel.Panel',
    xtype: 'sign-in-desk',
    
    requires: [
        'Ext.ux.DataTip',
        'Signout.view.grids.cards.SignInInfoCard'
    ],

    title: 'Sign-In Desk',
    frame: true,

    margins: '0',

    layout: 'card',
    items:[{
        xtype: 'sign-in-info-card',
        width: '100%',
        height: '100%'
    }]
});
