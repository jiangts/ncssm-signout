Ext.define('Signout.store.SliStore', {
		extend : 'Ext.data.Store',
        xtype : 'slistore',
        storeId: 'sliliststore',
		//config : {
        //data:[{"class_of":null,"created_at":"2013-06-13T01:25:26Z","dob":null,"email":"corl@ncssm.edu","first_name":"Emmie","gender":null,"hall_id":5,"id":7,"last_name":"Corl","middle_name":"","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-13T02:35:46Z"},{"class_of":null,"created_at":"2013-06-12T02:54:51Z","dob":null,"email":"jiang14t@ncssm.edu","first_name":"Allan","gender":null,"hall_id":1,"id":2,"last_name":"Jiang","middle_name":"","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-12T23:56:10Z"},{"class_of":null,"created_at":"2013-06-13T00:57:50Z","dob":null,"email":"newbauer@ncssm.edu","first_name":"Michael","gender":null,"hall_id":4,"id":6,"last_name":"Newbauer","middle_name":"","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-13T03:32:31Z"},{"class_of":null,"created_at":"2013-06-13T00:44:14Z","dob":null,"email":"johnson@ncssm.edu","first_name":"Ellis","gender":null,"hall_id":2,"id":4,"last_name":"Johnson","middle_name":"B","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-13T00:44:14Z"},{"class_of":null,"created_at":"2013-06-13T15:50:32Z","dob":null,"email":"knight@ncssm.edu","first_name":"Ross","gender":null,"hall_id":1,"id":9,"last_name":"Knight","middle_name":"M","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-15T17:53:15Z"},{"class_of":null,"created_at":"2013-06-13T00:50:09Z","dob":null,"email":"bystrynski@ncssm.edu","first_name":"Jon","gender":null,"hall_id":3,"id":5,"last_name":"Bystrynski","middle_name":"B","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-15T17:53:34Z"},{"class_of":null,"created_at":"2013-06-15T19:00:52Z","dob":null,"email":"idk@ncssm.edu","first_name":"idky","gender":null,"hall_id":6,"id":10,"last_name":"Dunno","middle_name":"B","phone":null,"room":null,"signed_out":null,"signout_record_id":null,"type":"sli","updated_at":"2013-06-15T19:00:52Z"}],
			model : 'Signout.model.SliModel',
            autoload: true,
			proxy : {
				type : 'ajax',
				url: '/admin/user/list_slis',
				reader : { 
                    type : 'json',
					rootProperty : ''
                },
				timeout : 20000,
				listeners : {
					exception : function() {
					}
				}
			},
			sorters : 'last_name'
		//}
});
