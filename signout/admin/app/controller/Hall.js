Ext.define('Signout.controller.Hall', {
    extend: 'Ext.app.Controller',
    
    refs: [{
         ref: 'hallgrid',
         selector: 'hallList'
    }],
    models: ['Hall'],
    stores: ['Halls'],

    init: function() {
        var me = this;

        this.control({
            'hallList':{
                render: function(){this.refreshGrid()}
            },
            '#hallsearchField':{
                keydown: function(tf, e){
                    if(e.getKey() == Ext.EventObject.ENTER){
                        this.filterGrid();
                    }
                }
            },
            'hallList > * > #hallsearchbtn':{
                click: function(){
                    this.filterGrid();
                }
            },
            'slilist > * > #refreshbtn':{
               click: function() {
                   this.refreshGrid();
               }
            },
            'hallList > * > #halldeletebtn': {
                click: function(){
                         //if something is selected
                         var grid = Ext.getCmp('slilist');
                         if (grid.getSelectionModel().hasSelection()) {
                             var row = grid.getSelectionModel().getSelection()[0];
                             Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete hall '
                             +row.data.hall.toString()+'?', function(btn){
                                  if(btn=='yes'){
                                      Ext.Ajax.request({
                                          url: '/ncssm/resources/halls/delete_hall',
                                          method: 'POST',
                                          params:{
                                              hall: row.data.hall
                                          },
                                          success: function(){
                                              Ext.Msg.alert('Status', 'Hall Deleted.');
                                              me.refreshGrid();
                                          }
                                      });
                                  };
                             });
                         }
                         else {
                             Ext.Msg.alert('No row selected!', 'Click on the row you would like to delete');
                         }
                 }
             },
            'addhall > * > #hallsavebtn':{
                click: function() {
                    var theform = Ext.ComponentQuery.query('#addhall')[0].getForm();
                    if(theform.isValid()){
                        theform.submit({
                            url: '/ncssm/resources/halls/create_hall',
                            waitMsg: 'Loading...',
                            method: 'POST',
                            params: {
                                auth_token: tokstr,
                            },
                            success: function (form, action) {
                                console.log(action.response.responseText);                                   
                                //reset the view
                                theform.reset();
                                me.refreshGrid();
                                Ext.Msg.alert('Success!', 'Hall added successfully!');
                            },
                            failure: function (response){
                                Ext.Msg.alert('Failed', 'Unable to add Hall');
                            }
                        });
                    }
                }
            },
            'addhall > * > #hallupdatebtn':{
            click: function() {
                var theform = Ext.ComponentQuery.query('#addhall')[0].getForm();
                if(theform.isValid()){
                    theform.submit({
                        url: '/ncssm/resources/halls/update_hall',
                        waitMsg: 'Loading...',
                        method: 'POST',
                        params: {
                        },
                        success: function (form, action) {
                            console.log(action.response.responseText);                                   
                            //reset the view
                            theform.reset();
                            me.refreshGrid();
                            Ext.Msg.alert('Success!', 'User updated successfully!');
                            me.getUpdatebtn().setDisabled(true);
                            me.getSubmitbtn().setDisabled(false);
                            me.getPeopleform().setTitle('Create Users');
                        },
                        failure: function (response){
                            Ext.Msg.alert('Failed', 'Unable to update User');
                        }
                    });
                }
            }
            },
            'addsli > * > #cancelbtn':{
            click: function() {
                me.getUpdatebtn().setDisabled(true);
                me.getSubmitbtn().setDisabled(false);
                me.getPeopleform().setTitle('Create Users');
            }
            }

        });
    }, 

    refreshGrid: function() {
        this.getHallgrid().store.reload();
    },
    filterGrid: function(){
        var str = Ext.getCmp('hallSearchField').value;
        this.getHallgrid().store.filterBy(function(record){
            //if the record contains the string anywhere, include
            for(var val in record.data){
                if(record.data[val].search(new RegExp(str, 'i')) != -1 || str == null)
                    {return true;}
            }
            //else don't include
            return false;
        });
    }
});


/*
    init: function() {
        this.control({
            'slilist': {
                celldblclick: function(th, td, cellIndex, rec, tr, rowIndex, e, eOpts) {
                    //var val = rec.student.checkinCollection_latest;
                    //var val = rec.data.id;
                    Ext.getCmp('createfname').setValue(rec.data.firstname);
                    Ext.getCmp('createlname').setValue(rec.data.lastname);
                    Ext.getCmp('createemail').setValue(rec.data.email);
                    Ext.getCmp('createhall').setValue(rec.data.hall_hall);
                    me.getPeopleform().setTitle('Updating ' + rec.data.firstname + ' ' + rec.data.lastname);
                    me.getUpdatebtn().setDisabled(false);
                    me.getSubmitbtn().setDisabled(true);
                    if(rec.data.sid){ssid = rec.data.sid;}
                    if(rec.data.id){ssid = rec.data.id;}
                }
            },
        });
    }, 

});
*/
