var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>';
//var transportation = Ext.create('Signout.store.Transportations');

Ext.define('Signout.view.components.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'mainview',
    
    requires: [
        'Signout.view.components.FormTabs'
    ],

    margins: '0',

    layout: 'card',
    items:[{
            xtype: 'form-tabs',
            width: '100%',
            height: '100%'
    }]
    
});
