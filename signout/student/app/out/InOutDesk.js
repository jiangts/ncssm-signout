Ext.define("Signout.controller.InOutDesk",{extend:"Ext.app.Controller",refs:[{ref:"daylight",selector:"daylight"},{ref:"headstatus",selector:"#app-header-bbar"},{ref:"outdesk",selector:"mainview"},{ref:"indesk",selector:"sign-in-desk"},{ref:"signinform",selector:"sign-in-info"}],models:["MyInfo","LatestSignout"],stores:["MyInfos","LatestSignouts"],init:function(){var a=tokobj.ssid,b=this;this.refreshStatus(a,b);this.control({"daylight > * > #submitbtn":{click:function(){this.getDaylight()&&this.submitForm(this.getDaylight().getForm(),
"Daylight",a,b)}},"sign-in-info > * > #signinbtn":{click:function(){this.signIn(a,b)}},"sign-in-info":{afterrender:function(){this.loadLatestSignout(a,b)}}})},submitForm:function(a,b,f,d){if(a.isValid()){var c=new Date,e="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")[c.getMonth()],g=c.getDate(),h=Ext.getCmp("timereturn").value.toString().substr(16,8),c=c.getFullYear(),e=e+" "+g+" "+h+" "+c;console.log(e);a.submit({url:"/ncssm/resources/students/sign_out",waitMsg:"Loading...",method:"POST",
params:{sid:f,esttimereturn:e,signout_type:b},success:function(b,c){console.log(c.response.responseText);d.refreshStatus(f,d);Ext.Msg.alert("Signout successful!");a.reset();d.loadLatestSignout(f,d)},failure:function(){Ext.Msg.alert("Sign-Out Failed!","Try refreshing the page")}})}},updateHeader:function(a){this.getHeadstatus()&&this.getHeadstatus().update(a)},signIn:function(a,b){Ext.Ajax.request({url:"/ncssm/resources/students/sign_in",method:"GET",params:{sid:a},success:function(){b.refreshStatus(a,
b);Ext.Msg.alert("Sign-in successful!")}})},refreshStatus:function(a,b){this.getMyInfosStore().load({url:"/ncssm/resources/students/"+a,method:"GET",callback:function(a){a=this.first().data;mystatus=a.checkin_inout;myname=a.firstname+" "+a.lastname;b.updateHeader(myname+"<br>Status: Signed "+mystatus);"out"==mystatus?(b.getOutdesk().setDisabled(!0),b.getIndesk().setDisabled(!1)):(b.getIndesk().setDisabled(!0),b.getOutdesk().setDisabled(!1))}})},loadLatestSignout:function(a,b){this.getLatestSignoutsStore().load({url:"/ncssm/resources/students/get_latest_signout",
method:"GET",params:{sid:a},callback:function(a){a=a[0];b.setRemainTime(a.data.estTimeReturn);b.getSigninform().getForm().loadRecord(a)}})},setRemainTime:function(a){var a=Math.floor(((new Date(a)).getTime()-(new Date).getTime())/1E3/60),b=Math.floor(a/60);0>b&&(b+=1);a=Math.floor(a%60);Ext.getCmp("timeremaining").setValue(b+" hr "+a+" min")}});
//Allan Jiang 2013-07-27 16:57:11 app ./controller/InOutDesk.js
