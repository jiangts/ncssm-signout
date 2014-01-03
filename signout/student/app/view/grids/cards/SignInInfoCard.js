Ext.define('Signout.view.grids.cards.SignInInfoCard', {
	//extend: 'Ext.panel.Panel',
	extend: 'Ext.container.Container',
	xtype: 'sign-in-info-card',
    requires: [
        //'Signout.view.grids.SignInInfo'
        'Signout.view.forms.SignInInfo'
    ],
	autoScroll: true,

	layout: {
		type: 'vbox',
		align: 'middle',
		pack: 'center'
	},
    /*
	defaults: {
		border: false,
	},
    */
	items: [{
        xtype: 'sign-in-info',
		flex: 1,
		width: '100%',
		margins: '0 0 7',
		buttonAlign: 'center',
		buttons: [{
			width: '50%',
			text: 'Sign-In',
            id: 'signinbtn'
		}]
	}]
});

