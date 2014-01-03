Ext.define('Signout.view.components.FormTabs', {
    extend: 'Ext.tab.Panel',
    xtype: 'form-tabs',
    //border: false,
    border: false,

    requires: [
        'Ext.tab.*',
        'Signout.view.forms.cards.DaylightCard',
        'Signout.view.forms.cards.6PMCard'
    ],

    plain: false,
    activeTab: 0,
    //bodyPadding: 10,
    tabPosition: 'top',
    title: 'Sign-Out Desk',

    frame: true,
    
    defaults: {
        //border: false
    },
    layout: 'card',
    items: [{
        title: 'Daylight',
        xtype: 'daylightcard'
    }/*, {
        disabled: 'true',
        title: '6 pm',
        xtype: '6pmcard'
    }, {
        disabled: 'true',
        title: 'Curfew'
    },{
        disabled: 'true',
        title: 'Overnight'
    }*/]

/*
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
*/
});
