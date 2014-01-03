Ext.define('Signout.view.forms.6PM', {
    extend: 'Ext.form.Panel',
    xtype: '6pm',

    layout: 'form',
    bodyPadding: '15',
    margins: '0 0 10',
    autoScroll: 'true',

    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },

    plugins: {
        ptype: 'datatip'
    },

    defaultType: 'textfield',

    items: [{
        fieldLabel: 'Destination',
        afterLabelTextTpl: required,
        name: 'destination',
        allowBlank: false,
        tooltip: 'Enter Destination'
    },{
        xtype: 'combobox',
        displayField: 'type',
        store: //Ext.data.StoreManager.lookup('transportations'),
        {
            fields:['type'],
            data:{'items': [
                {id:1, type:"by foot"},
                {id:2, type:"bike"},
                {id:3, type:"car"},
                {id:4, type:"bus"},
                {id:5, type:"scooter"}
            ]},
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    root: 'items'
                }
            }
        },
        typeAhead: true,

        fieldLabel: 'Transportation',
        afterLabelTextTpl: required,
        name: 'transportation',
        allowBlank: false,
        tooltip: 'Enter Mode of Transportation'
    },{
        fieldLabel: 'Companions',
        afterLabelTextTpl: required,
        name: 'companions',
        allowBlank: false,
        tooltip: 'Enter Companions'
    },{
        xtype: 'timefield',
        fieldLabel: 'Return Time',
        name: 'time',
        minValue: '6:00pm',
        maxValue: '8:00pm',
        tooltip: 'Enter a time',
        plugins: {
            ptype: 'datatip',
            tpl: 'Select time {date:date("G:i")}'
        },
        afterLabelTextTpl: required,
        allowBlank: false
    }],

    margins: '0 0 10',
    buttonAlign: 'center',
    buttons: [{
        text: 'Submit',
        handler: function() {
            this.up('form').getForm().isValid();
        }
    },{
        text: 'Cancel',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }]
});
