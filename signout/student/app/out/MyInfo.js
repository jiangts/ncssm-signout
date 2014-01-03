Ext.define("Signout.model.MyInfo",{extend:"Ext.data.Model",fields:[{name:"checkin_inout"},{name:"firstname"},{name:"lastname"},{name:"hall_hall"}],proxy:{type:"ajax",actionMethods:{create:"GET",read:"GET",update:"GET",destroy:"GET"},reader:{type:"xml",root:"student",record:"student"}}});
//Allan Jiang 2013-07-27 16:56:06 app ./model/MyInfo.js
