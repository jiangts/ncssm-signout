Ext.define('Signout.model.Hall', {
    extend: 'Ext.data.Model',

    fields: [
        {name:'hall'},
        {name:'gender'}
    ],
	proxy : {
		type : 'ajax',
		url: '/ncssm/resources/halls',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        extraParams: {
            min:0,max:100
        },
		reader : { 
            type : 'xml',
			root: 'halls',
			record: 'hall'
        },
	}

});
