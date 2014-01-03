    /*
	data: {
		'items': [{
			'name': 'Destination',
			"email": "Rite Aid",
			"phone": "555-111-1224"
		},
		{
			'name': 'Departure Time',
			"email": "4:45 pm",
			"phone": "555-222-1234"
		},
		{
			'name': 'Expected Return Time',
			"email": "5:00 pm",
			"phone": "555-222-1244"
		},
		{
			'name': 'Time Remaining',
			"email": "3 min",
			"phone": "555-222-1254"
		}]
	},
    */
Ext.define('Signout.view.grids.SignInInfo', {
	extend: 'Ext.grid.Panel',
	requires: ['Ext.ux.PreviewPlugin'],
	xtype: 'sign-in-info-grid',
	store: Ext.data.StoreManager.lookup('history'),
	title: 'Signing-in from...',

	loadMask: true,
	hideHeaders: true,
	disableSelection: true,
	viewConfig: {
		trackOver: false,
		stripeRows: false,
		plugins: [{
			ptype: 'preview',
			bodyField: 'excerpt',
			expanded: true,
			pluginId: 'preview'
		}]
	},
	columns: [{
		text: 'Name',
		dataIndex: 'name',
		width: 120
	},
	{
		text: 'Email',
		dataIndex: 'email',
		flex: 1
        /*
		renderer: function(value) {
			return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
		}
        */
	}]
});

