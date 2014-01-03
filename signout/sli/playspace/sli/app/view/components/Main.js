Ext.Loader.setConfig({
    enabled: true
});
Ext.Loader.setPath('Ext.ux', '../../../../ext/examples/ux');

var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
var halls = Ext.create('Signout.store.Halls');
var hallstemp = Ext.create('Signout.store.Halls2');
var transportation = Ext.create('Signout.store.Transportations');

Ext.define('Signout.view.components.Main', {
    extend: 'Ext.panel.Panel',
    id: 'mainview',
    xtype: 'mainview',
    
    requires: [
        'Ext.ux.DataTip',
        /*
        'Signout.store.Halls',
        'Signout.view.formCards.Daylight',
        'Signout.view.formCards.6PM',
        'Signout.view.formCards.Curfew',
        'Signout.view.formCards.Overnight',
        'Signout.view.formCards.Registration',
        */
        'Signout.view.tables.CurrentSignouts',
        'Signout.view.tables.Students',
        'Signout.view.tables.MyStudents',
        'Signout.view.components.UpdateCard',
        'Signout.view.components.HomeCard'
        //'Signout.view.components.Notes'
    ],

    title: 'Main',
    margins: '5 0',

    layout: 'card',
    activeItem: 4,
    
    items:[
        {
            xtype: 'viewmystudents'
        },
        {
            xtype: 'signedoutlist'
        },
        {
            xtype: 'viewstudents'
        },
        {
            xtype: 'updatecard'
        },
        {
            xtype: 'homecard'
        }
    ]
});
