Ext.define('Signout.view.cards.People', {
    extend: 'Ext.panel.Panel',
    id: 'peoplecard',
    requires: [
        'Signout.view.tables.SLIlist',
        'Signout.view.forms.AddSli',
    ],
    xtype: 'peoplecard',
    border: false,
    layout: {
        type: 'hbox',
    },
    defaults: {margins: '5'},
    items: [{
        xtype: 'slilist',
        flex: 1,
        height: '100%',
        rowspan: 2
    },{
        layout: 'vbox',
        border:false,
        defaults: {border: 'false'},
        items:[{
            xtype: 'addsli'
        }/*,{
        html: 'update form here' 
        }*/]
    }]
});
