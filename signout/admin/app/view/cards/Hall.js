Ext.define('Signout.view.cards.Hall', {
    extend: 'Ext.panel.Panel',
    xtype: 'hallcard',
    id: 'hallcard',
    requires: [
        'Signout.view.tables.HallList',
        'Signout.view.forms.AddHall',
    ],
    border: false,
    layout: {
        type: 'hbox',
    },
    defaults: {margins: '5'},
    items: [{
        xtype: 'hallList',
        flex: 1,
        height: '100%',
        rowspan: 2
    },{
        layout: 'vbox',
        border:false,
        defaults: {border: 'false'},
        items:[{
            xtype: 'addhall'
        }]
    }]
});
