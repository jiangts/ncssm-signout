Ext.define('Signout.controller.Tabs', {
    extend: 'Ext.app.Controller',
    
    refs: [{
         ref: 'peoplegrid',
         selector: 'slilist'
    },{
         ref: 'peopleform',
         selector: 'addsli'
    },{
         ref: 'submitbtn',
         selector: '#savebtn'
    },{
         ref: 'updatebtn',
         selector: '#updatebtn'
    },{
         ref: 'yrgradfield',
         selector: 'addsli > #classof'
    }],
    models: ['SliModel', 'Student'],
    stores: ['SliStoreTwo', 'Students'],

    init: function() {
        var slimodel, slistore, studentstore, urlstr, urlstrcreate, urlstrupdate, ssid;
        var me = this;

        slimodel = this.getSliModelModel();
        slistore = this.getSliStoreTwoStore();
        studentstore = this.getStudentsStore();
        //initial values
        urlstr = '/ncssm/resources/slis/delete_sli'; 
        urlstrcreate = '/ncssm/resources/slis/create_sli'; 
        urlstrupdate = '/ncssm/resources/slis/update_sli'; 
        var columns = [{ text: 'First Name',  dataIndex: 'firstname', hideable: false},
        { text: 'Last Name',  dataIndex: 'lastname', hideable: false},
        { text: 'Email', dataIndex: 'email'},
        { text: 'Hall', dataIndex: 'hall_hall'},
        { text: 'Class', dataIndex: 'yrgrad'}];
        var studentcolumns = columns;
        var slicolumns = columns.slice(0,columns.length - 1);

        this.control({
            'navtree':{
                itemclick: function(node, model, item, idx, e){
                    var name = model.data.text;
                    if(name=='SLI account manager'){
                        Ext.ComponentQuery.query('mainview')[0].getLayout().setActiveItem(0);
                        this.changeGridTitle('SLI Manager table');
                        this.changeFormTitle('Create SLIs');
                        this.changeGridStore(slistore, slicolumns);
                        this.refreshGrid();
                        me.getYrgradfield().setDisabled(true);
                        urlstr = '/ncssm/resources/slis/delete_sli';
                        urlstrcreate = '/ncssm/resources/slis/create_sli'; 
                        urlstrupdate = '/ncssm/resources/slis/update_sli'; 
                    }
                    if(name=='Student account manager'){
                        Ext.ComponentQuery.query('mainview')[0].getLayout().setActiveItem(0);
                        this.changeGridTitle('Student Manager table');
                        this.changeFormTitle('Create Students');
                        this.changeGridStore(studentstore, studentcolumns);
                        this.refreshGrid();
                        me.getYrgradfield().setDisabled(false);
                        urlstr = '/ncssm/resources/students/delete_student';
                        urlstrcreate = '/ncssm/resources/students/create_student';
                        urlstrupdate = '/ncssm/resources/students/update_student';
                    }
                    if(name == 'Hall manager'){
                        Ext.ComponentQuery.query('mainview')[0].getLayout().setActiveItem(1);
                    }
                }
            },
            'slilist > * > #deletebtn': {
                click: function(){
                         //if something is selected
                         var grid = Ext.getCmp('slilist');
                         if (grid.getSelectionModel().hasSelection()) {
                             var row = grid.getSelectionModel().getSelection()[0];
                             Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete user '
                             +row.data.email.toString()+'?', function(btn){
                                  if(btn=='yes'){
                                      Ext.Ajax.request({
                                          url: urlstr,
                                          method: 'POST',
                                          params:{
                                              sliid: row.data.id,
                                              sid: row.data.sid
                                          },
                                          success: function(){
                                              Ext.Msg.alert('Status', 'User Deleted.');
                                              me.refreshGrid();
                                          }
                                      });
                                  };
                             });
                         }
                         else {
                             Ext.Msg.alert('No row selected!', 'Click on the row you would like to delete');
                         }
                 }//this.deletebtnpressed('/ncssm/resources/slis/delete_sli');
             },
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
            '#searchField':{
                keydown: function(tf, e){
                    if(e.getKey() == Ext.EventObject.ENTER){
                        this.filterGrid();
                    }
                }
            },
            'slilist > * > #searchbtn':{
                click: function(){
                    this.filterGrid();
                }
            },
            'slilist > * > #refreshbtn':{
               click: function() {
                   this.refreshGrid();
               }
            },
            'addsli > * > #savebtn':{
            click: function() {
                var theform = Ext.ComponentQuery.query('#addsli')[0].getForm();
                if(theform.isValid()){
                    theform.submit({
                        url: urlstrcreate,
                        waitMsg: 'Loading...',
                        method: 'POST',
                        /*
                        params: {
                            auth_token: tokstr,
                        },
                        */
                        success: function (form, action) {
                            console.log(action.response.responseText);                                   
                            //reset the view
                            theform.reset();
                            me.refreshGrid();
                            Ext.Msg.alert('Success!', 'User added successfully!');
                        },
                        failure: function (response){
                            Ext.Msg.alert('Failed', 'Unable to add User');
                        }
                    });
                }
            }
            },
            'addsli > * > #updatebtn':{
            click: function() {
                var theform = Ext.ComponentQuery.query('#addsli')[0].getForm();
                if(theform.isValid()){
                    theform.submit({
                        url: urlstrupdate,
                        waitMsg: 'Loading...',
                        method: 'POST',
                        params: {
                            //auth_token: tokstr,
                            sliid: ssid,
                            sid: ssid
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
                me.getPeopleform().getForm().reset();
                me.getUpdatebtn().setDisabled(true);
                me.getSubmitbtn().setDisabled(false);
                me.getPeopleform().setTitle('Create Users');
            }
            }
        });
    }, 

    changeGridTitle: function(title) {
        this.getPeoplegrid().setTitle(title);
    },
    changeFormTitle: function(title) {
        this.getPeopleform().setTitle(title);
    },
    refreshGrid: function() {
        this.getPeoplegrid().store.reload();
    },
    changeGridStore: function(newstore, newcolumns) {
        this.getPeoplegrid().reconfigure(newstore, newcolumns);
    },
    filterGrid: function(){
        var str = Ext.getCmp('searchField').value;
        this.getPeoplegrid().store.filterBy(function(record){
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
