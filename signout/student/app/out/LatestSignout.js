Ext.define("Signout.model.LatestSignout",{extend:"Ext.data.Model",fields:[{name:"destination"},{name:"checktime"},{name:"estTimeReturn"}],proxy:{type:"ajax",actionMethods:{create:"GET",read:"GET",update:"GET",destroy:"GET"},reader:{type:"xml",root:"checkins",record:"checkin"}}});
//Allan Jiang 2013-07-27 16:57:01 app ./model/LatestSignout.js
