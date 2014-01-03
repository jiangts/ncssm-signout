Ext.define('Signout.model.MyInfo', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'checkin_inout'},
        {name:'firstname'},
        {name:'lastname'},
        {name:'hall_hall'}
    ],
    
	proxy : {
		type : 'ajax',
		//url: '/ncssm/resources/slis',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
		reader : { 
            type : 'xml',
			root: 'student',
			record: 'student'
        }
	}

});


