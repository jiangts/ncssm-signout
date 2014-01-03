Ext.define('Signout.model.LatestSignout', {
    extend: 'Ext.data.Model',

    /*
	'name': 'Destination',
	'name': 'Departure Time',
	'name': 'Expected Return Time',
	'name': 'Time Remaining',
    */
    fields: [
        {name:'destination'},
        {name:'checktime'},
        {name:'estTimeReturn'}
    ],
    
	proxy : {
		type : 'ajax',
		//url: '/ncssm/resources/students/get_history',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
		reader : { 
            type : 'xml',
			root: 'checkins',
			record: 'checkin'
        }
	}

});
