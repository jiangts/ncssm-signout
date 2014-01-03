Ext.define('Signout.view.Transportation', {
    extend: 'Ext.Container',
    xtype: 'transportationview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.dataview.List',
        'Ext.picker.Picker'
    ],
    config: {
        title: 'Transportation',
        layout: 'vbox',

        items: [{
            xtype: 'fieldset',
            title: 'Choose Transportation',
            items: [{
                xtype: 'button',
                //label: 'Destination',
                //name: 'destination'
                text: 'Choose...'
            }]
        },{
            xtype: 'picker',
//            width: '100%',
//            flex: 1,
//            doneButton: false,
//            cancelButton: false,
            hidden: true,
            toolbar: {
                ui: 'light',
                title: 'Choose From Below'
            },
            slots:[{
                name: 'slot',
                store: {
                    model: 'Signout.model.Transportation',
                    data: [
                        {text: 'by foot', value:'by foot'},
                        {text: 'bike', value:'bike'},
                        {text: 'car', value:'car'},
                        {text: 'bus', value:'bus'},
                        {text: 'scooter', value:'scooter'}
                    ]
                }
            }]
        }]
    }
});
