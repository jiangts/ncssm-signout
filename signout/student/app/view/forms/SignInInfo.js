Ext.define('Signout.view.forms.SignInInfo', {
	extend: 'Ext.form.Panel',
	xtype: 'sign-in-info',
	title: 'Signing-in from...',

    bodyPadding: '8',
    defaultType: 'displayfield',
    defaults: {labelWidth: 110},
    items:[{
        fieldLabel: 'Destination',
        name: 'destination'
    },{
        fieldLabel: 'Departure',
        name: 'checktime',
        renderer: Ext.util.Format.dateRenderer('D m/j g:i A')
    },{
        fieldLabel: 'Expected Return',
        name: 'estTimeReturn',
        renderer: Ext.util.Format.dateRenderer('D m/j g:i A')
    },{
        fieldLabel: 'Time Remaining',
        id: 'timeremaining'
    }]
});

