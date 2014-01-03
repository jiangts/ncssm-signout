Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', '../../../../ext/examples/ux');

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
var halls = Ext.create('Signout.store.Halls');
var slistore = Ext.create('Signout.store.SliStoreTwo');
var transportation = Ext.create('Signout.store.Transportations');

Ext.define('Signout.view.components.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    id: 'mainview',
    
    requires: [
        'Ext.ux.DataTip',
        //'Signout.store.Halls',
    //    'Signout.view.formCards.AddSliCard',
    //    'Signout.view.tables.SLIlist',
        'Signout.view.cards.People',
        'Signout.view.cards.Hall'
    ],

    title: 'Main',
    margins: '5 0',

    layout: 'card',
    
    items:[
        {
            xtype: 'peoplecard'
        },
        {
            xtype: 'hallcard'
        }
    ]
});
