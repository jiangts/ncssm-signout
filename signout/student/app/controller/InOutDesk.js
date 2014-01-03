Ext.define('Signout.controller.InOutDesk', {
    extend: 'Ext.app.Controller',
    
    refs:[{
        ref: 'daylight',
        selector: 'daylight'
    },{
        ref: 'headstatus',
        selector: '#app-header-bbar'
    },{
        ref: 'outdesk',
        selector: 'mainview'
    },{
        ref: 'indesk',
        selector: 'sign-in-desk'
    },{
        ref: 'signinform',
        selector: 'sign-in-info'
    }],
    models:['MyInfo', 'LatestSignout'],
    stores:['MyInfos', 'LatestSignouts'],

    init: function(){
        var sid = tokobj.ssid;
        var me = this;
        var mystatus, myname;
        this.refreshStatus(sid, me);
        this.control({
            /*
            'appheader > #app-header-bbar':{
                afterrender: function(){this.updateHeader(myname+'<br>Status:'+myname);}
            },
            */
            'daylight > * > #submitbtn':{
                click: function(){
                if(this.getDaylight())
                    this.submitForm(this.getDaylight().getForm(), 'Daylight', sid, me)
                    //in callback
                    //this.loadLatestSignout(sid,me);
                }
            },
            'sign-in-info > * > #signinbtn':{
                click: function(){
                    this.signIn(sid, me);
                }
            },
            'sign-in-info':{
                afterrender: function(){
                    this.loadLatestSignout(sid, me);
                    //setInterval(me.loadLatestSignout(sid,me), 15000*60);
                }
            }
        });
    },
    submitForm: function(theform, type, sid, me) {
        if(theform.isValid()){
            var d = new Date();
            var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
            var mo = monthNames[d.getMonth()];
            var day = d.getDate();
            var hms = Ext.getCmp('timereturn').value.toString().substr(16,8);
            var yr = d.getFullYear();
            var timestr = mo + ' ' + day + ' ' + hms + ' ' + yr;
            console.log(timestr);
            theform.submit({
                url: '/ncssm/resources/students/sign_out',
                waitMsg: 'Loading...',
                method: 'POST',
                params: {
                    sid : sid,
                    //checktime: 'Jul 17 01:46:23 2013'
                    //Jul 21 07:30:00 2013 
                    esttimereturn: timestr,
                    //transportation: Ext.getCmp('transportation').value,
                    //destination: Ext.getCmp("destination").value,
                    //companions: Ext.getCmp("companions").value,
                    signout_type: type
                },
                success: function (form, action) {
                    console.log(action.response.responseText);                                   
                    me.refreshStatus(sid, me);
                    Ext.Msg.alert('Signout successful!');
                    theform.reset();
                    me.loadLatestSignout(sid,me);
                },
                failure: function (response){
                    Ext.Msg.alert('Sign-Out Failed!', 'Try refreshing the page');
                }
                /* callback not working for some reason
                callback: function(){
                }
                */
            });
        }
    },
    updateHeader: function(text){
        if(this.getHeadstatus())
        this.getHeadstatus().update(text);
    },
    signIn: function(sid, me){
        Ext.Ajax.request({
            url: '/ncssm/resources/students/sign_in',
            method: 'GET',
            params:{
                sid: sid
            },
            success: function(){
                me.refreshStatus(sid, me);
                Ext.Msg.alert('Sign-in successful!');
            }
        });
    },
    refreshStatus: function(sid, me){
        this.getMyInfosStore().load({
            url: '/ncssm/resources/students/'+sid,
            method: 'GET',
            callback: function(record){
                var record = this.first().data;
                mystatus = record.checkin_inout;
                myname = record.firstname + ' ' + record.lastname;
                me.updateHeader(myname+'<br>Status: Signed '+mystatus);
                if(mystatus=='out'){
                    me.getOutdesk().setDisabled(true);
                    me.getIndesk().setDisabled(false);
                }
                else{
                    me.getIndesk().setDisabled(true);
                    me.getOutdesk().setDisabled(false);
                }
            }
        });
    },
    loadLatestSignout: function(sid, me){
        this.getLatestSignoutsStore().load({
            url: '/ncssm/resources/students/get_latest_signout',
            method: 'GET',
            params: {sid:sid},
            callback: function(records){
//                var record = this.last();
                var record = records[0];
                if(record){
                    me.setRemainTime(record.data.estTimeReturn);
                    me.getSigninform().getForm().loadRecord(record);                
                }
            }
        });
    },
    setRemainTime: function(backtime){
        var mindiff = Math.floor(((new Date(backtime)).getTime()-
        (new Date()).getTime())/1000/60);
        var hourdiff = Math.floor(mindiff/60);
        //math.floor always rounds down!
        if(hourdiff<0){hourdiff = hourdiff+1;}
        var mindiff = Math.floor(mindiff%60);
        Ext.getCmp('timeremaining').setValue(hourdiff + ' hr ' + mindiff + ' min');
    }
});    
