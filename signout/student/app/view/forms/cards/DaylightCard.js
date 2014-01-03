Ext.define('Signout.view.forms.cards.DaylightCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'daylightcard',
    requires: [
        'Signout.view.forms.Daylight'
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
        xtype: 'daylight',
        flex:1,
        width: '100%'
    }]
});
