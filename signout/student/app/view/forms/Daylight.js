Ext.define('Signout.view.forms.Daylight', {
    extend: 'Ext.form.Panel',
    xtype: 'daylight',

//    frame: true,
//    title: 'Daylight Hours',
    headerPosition: 'left',
    plugins: {
        ptype: 'datatip'
    },

    layout: 'form',
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },
    defaultType: 'textfield',

    bodyPadding: '15',

    autoScroll: 'true',

    items: [{
        fieldLabel: 'Destination',
        afterLabelTextTpl: required,
        name: 'destination',
        id: 'destination',
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
        forceSelection: true,
        queryMode: 'local',
        //random.
        valueField: 'type',

        fieldLabel: 'Transportation',
        afterLabelTextTpl: required,
        name: 'transportation',
        id: 'transportation',
        allowBlank: false,
        tooltip: 'Enter Mode of Transportation'
    },{
        fieldLabel: 'Companions',
        id: 'companions',
        afterLabelTextTpl: required,
        name: 'companions',
        allowBlank: false,
        enforceMaxLength: true,
        maxLength: 100,
        tooltip: 'Enter Companions'
    },{
        xtype: 'timefield',
        fieldLabel: 'Return Time',
        id: 'timereturn',
        name: 'time',
        minValue: '6:00am',
        maxValue: '8:00pm',
        tooltip: 'Enter a time',
        plugins: {
            ptype: 'datatip',
            tpl: 'Select time {date:date("G:i")}'
        },
        afterLabelTextTpl: required,
        allowBlank: false
    }],

    margins: '0 0 7',
    buttonAlign: 'center',
    buttons: [{
        text: 'Submit',
        id: 'submitbtn',
        formBind: true,
        disabled: true
    },{
        text: 'Cancel',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }]
});

