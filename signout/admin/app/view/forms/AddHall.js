Ext.define('Signout.view.forms.AddHall', {
    extend: 'Ext.form.Panel',
    xtype: 'addhall',
    id: 'addhall',

    collapsible: false,
    frame: true,
    bodyPadding: '5 5 0',
    minheight: 200,
    width: 350,
    fieldDefaults: {
        msgTarget: 'side',
        labelWidth: 85
    },
    plugins: {
        ptype: 'datatip'
    },
    layout: 'form',
    defaultType: 'textfield',
    initComponent: function(){
        this.title = 'Create SLI Form';
        this.items= [{
            fieldLabel: 'Hall Name',
            afterLabelTextTpl: required,
            name: 'hall',
            allowBlank: false,
        },{
            fieldLabel: 'Hall Gender',
            afterLabelTextTpl: required,
            name: 'gender',
            allowBlank: false,
        }];
        this.buttons= [{
            text: 'Create',
            id: 'hallsavebtn',
        },{
            text: 'Update',
            id: 'hallupdatebtn',
            disabled: true
        },{
            text: 'Cancel',
            id: 'hallcancelbtn',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
        this.callParent(arguments);
    }

});

/*
var halls = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"1BL", "name":"1 Beall"},
        {"abbr":"2BL", "name":"2 Beall"},
        {"abbr":"3BL", "name":"3 Beall"},
        {"abbr":"2BR", "name":"2 Bryan"},
        {"abbr":"3BR", "name":"3 Bryan"},
        {"abbr":"4BR", "name":"4 Bryan"},
        {"abbr":"1st_Hill", "name":"1 Hill"},
        {"abbr":"2HLE", "name":"2 Hill East"},
        {"abbr":"2HLN", "name":"2 Hill North"},
        {"abbr":"1st Hunt", "name":"1 Hunt"},
        {"abbr":"2nd Hunt East", "name":"2 Hunt East"},
        {"abbr":"2nd Hunt West", "name":"2 Hunt West"},
        {"abbr":"3HE", "name":"3 Hunt East"},
        {"abbr":"3HW", "name":"3 Hunt West"},
        {"abbr":"4HE", "name":"4 Hunt East"},
        {"abbr":"4HW", "name":"4 Hunt West"},
        {"abbr":"CCD", "name":"1C2C1D"},
        {"abbr":"EED", "name":"1E2E1D"},
        {"abbr":"GdRe", "name":"Ground Reynolds"},
        {"abbr":"Ground Royal", "name":"Ground Royal"},
        {"abbr":"1st Royal", "name":"1 Royal"},
    ]
});
*/
