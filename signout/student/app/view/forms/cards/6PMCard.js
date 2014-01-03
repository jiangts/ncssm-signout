Ext.define('Signout.view.forms.cards.6PMCard', {
    extend: 'Ext.panel.Panel',
    xtype: '6pmcard',
    requires: [
        'Signout.view.forms.6PM'
    ],
    autoScroll: true,

    layout: {
        type : 'vbox',
        align: 'middle',
        pack : 'center'
    },
    defaults: {
        border: false
    },
    items:[{
        xtype: '6pm',
        flex:1,
        width: '100%'
    }]
});
