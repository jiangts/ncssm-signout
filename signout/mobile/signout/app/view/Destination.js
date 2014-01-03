Ext.define('Signout.view.Destination', {
    extend: 'Ext.Container',
    xtype: 'destinationview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.dataview.List',
        'Signout.store.Destinations'
    ],
    config: {
        title: 'Destination',
        layout: 'vbox',

        items: [{
            xtype: 'fieldset',
            title: 'Enter or Choose Destination',
            items: [{
                xtype: 'textfield',
                label: 'Destination',
                name: 'destination'
            }]
        },{
            xtype: 'list',
            width: '100%',
            itemTpl: '<p class="deleteplaceholder">{destination}</p>',
            store: { xclass : 'Signout.store.Destinations'},
            flex: 1
            //put a textfield and list view here.
            //style: 'background-color: #5E99CC;'
        }]
    }
});
