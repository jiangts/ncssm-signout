//TODO put this in separate thing to link to. Need to go fast for now
var halls = Ext.create('Ext.data.Store', {
    fields: ['abbr', 'name'],
    data : [
        {"abbr":"ALL", "name":"All Halls"},
        {"abbr":"1st Beall", "name":"1st Beall"},
        {"abbr":"2nd Beall", "name":"2nd Beall"},
        {"abbr":"3rd Beall", "name":"3rd Beall"},
        {"abbr":"2nd Bryan", "name":"2nd Bryan"},
        {"abbr":"3rd Bryan", "name":"3rd Bryan"},
        {"abbr":"4th Bryan", "name":"4th Bryan"},
        {"abbr":"1st_Hill", "name":"1st Hill"},
        {"abbr":"2nd Hill East", "name":"2nd Hill East"},
        {"abbr":"2nd Hill North", "name":"2nd Hill North"},
        {"abbr":"1st Hunt", "name":"1st Hunt"},
        {"abbr":"2nd Hunt East", "name":"2nd Hunt East"},
        {"abbr":"2nd Hunt West", "name":"2nd Hunt West"},
        {"abbr":"3rd Hunt East", "name":"3rd Hunt East"},
        {"abbr":"3rd Hunt West", "name":"3rd Hunt West"},
        {"abbr":"4th Hunt East", "name":"4th Hunt East"},
        {"abbr":"4th Hunt West", "name":"4th Hunt West"},
        {"abbr":"1C2C1D", "name":"1C2C1D"},
        {"abbr":"1E2E2D", "name":"1E2E2D"},
        {"abbr":"Ground Reynolds", "name":"Ground Reynolds"},
        {"abbr":"Ground Royal", "name":"Ground Royall"},
        {"abbr":"1st Royal", "name":"1st Royall"}
    ]
});
//var tok = Ext.decode(getCookie('token')).token;
Ext.define('Signout.view.forms.AddSli', {
    extend: 'Ext.form.Panel',
    xtype: 'addsli',
    id: 'addsli',

    collapsible: false,
    //id: 'addsliform',
    //url: 'save-form.php',
    frame: true,
//    title: 'Enter new SLI credentials',
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
    //TODO AUTH TOKEN
    defaultType: 'textfield',
    initComponent: function(){
        /*if(globaltype == 'sli'){this.title = 'Create SLI Form'};
        if(globaltype == 'student'){this.title = 'Create Student Form'};*/
        this.title = 'Create SLI Form';
        this.items= [{
            fieldLabel: 'First Name',
            id: 'createfname',
            afterLabelTextTpl: required,
            name: 'fname',
            allowBlank: false,
        /*},{
            fieldLabel: 'Middle Name',
            name: 'middlename',*/
        },{
            fieldLabel: 'Last Name',
            id: 'createlname',
            afterLabelTextTpl: required,
            name: 'lname',
            allowBlank: false,
        },{
            fieldLabel: 'Email',
            id: 'createemail',
            afterLabelTextTpl: required,
            vtype: 'email',
            name: 'email',
            width: 140,
            allowBlank: false,
        },{
            xtype: 'combobox',
            id: 'createhall',
            displayField: 'name',
            valueField: 'abbr',
            queryMode: 'local',
            store: halls,
            typeAhead: true,

            fieldLabel: 'Hall',
            name: 'hallid',
            afterLabelTextTpl: required,
            allowBlank: false,
            forceSelection: true
        },{
            xtype: 'numberfield',
            id: 'classof',
            disabled: true,
            fieldLabel: 'Class of',
            minValue: 2014,
            // Remove spinner buttons, and arrow key and mouse wheel listeners
            hideTrigger: false,
            keyNavEnabled: true,
            //mouseWheelEnabled: true,
            name: 'yrgrad',
            afterLabelTextTpl: required
        }];
        this.buttons= [{
            text: 'Create',
            id: 'savebtn',
        },{
            text: 'Update',
            id: 'updatebtn',
            disabled: true
        },{
            text: 'Cancel',
            id: 'cancelbtn',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
            this.callParent(arguments);
    }

});
