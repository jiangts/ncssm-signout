Ext.define("Signout.store.SignedOutStudents",{extend:"Ext.data.Store",storeId:"signedoutstudentsstore",model:"Signout.model.SignedOutStudent",data:{items:[{name:"Lisa",email:"lisa@simpsons.com",phone:"555-111-1224"},{name:"Bart",email:"bart@simpsons.com",phone:"555-222-1234"},{name:"Homer",email:"home@simpsons.com",phone:"555-222-1244"},{name:"Marge",email:"marge@simpsons.com",phone:"555-222-1254"}]},proxy:{type:"memory",url:"resources/json/signedoutstudentdata.json",reader:{type:"json",root:"items"}}});
//Allan Jiang 2013-07-27 16:58:06 app ./store/SignedOutStudents.js
