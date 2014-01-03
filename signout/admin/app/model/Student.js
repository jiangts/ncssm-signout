Ext.define('Signout.model.Student', {
    extend : 'Ext.data.Model',
    fields: [
        {name:'firstname'},
        {name:'lastname'},
        {name:'email'},
        {name:'hall_hall'},
        {name:'sid'}
    ],
	proxy : {
		type : 'ajax',
		url: '/ncssm/resources/students',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        extraParams: {
            min:0,max:600//auth_token:tokstr
        },
		reader : { 
            type : 'xml',
			root: 'students',
			record: 'student'
        },
	},
});
