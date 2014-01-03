Ext.define('Signout.model.SliModel', {
    extend : 'Ext.data.Model',
    fields: [
        {name:'firstname'},
        {name:'lastname'},
        {name:'email'},
        {name:'hall_hall'},
        {name:'id'}
    ],
	proxy : {
		type : 'ajax',
		url: '/ncssm/resources/slis',
        actionMethods: {
            create : 'GET',
            read   : 'GET',
            update : 'GET',
            destroy: 'GET'
        },
        extraParams: {
            min:0,max:100//auth_token:tokstr
        },
		reader : { 
            type : 'xml',
			root: 'slis',
			record: 'sli'
        },
        /*
		timeout : 20000,
		listeners : {
			exception : function() {
			}
		}
        */
	},
});
