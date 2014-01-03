/*
var tok = getCookie('token');
var tokobj = Ext.decode(tok);
if(tok==null||tokobj.type!='sli'){
    //location.href='../login/index.html'; alert("Redirecting to Login Page... You've either logged out or your session timed out!");
    //alert("FIX SECURITY");
};
*/
Ext.define('Signout.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Signout.view.components.Main',
//        'Signout.view.components.Announcements',
        'Signout.view.components.Navigation',
        'Signout.view.components.Header',
        'Ext.layout.container.Border'
    ],

    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: false,
        // resizable!
        split: false,
        bodyPadding: 15
    },

    items: [{
        xtype: 'appheader',
        region: 'north'
    },/*{
        xtype: 'viewAnnouncements',
        region: 'east',
        collapsible: true,
        split: true,
	flex: 1,
        bodyPadding: 0
    },*/ {
        xtype: 'viewNavigation',
        region:'west',
        collapsible: true,
	flex: 1,
        bodyPadding: 0
    },{
        xtype: 'mainview',
        region: 'center',
	flex: 3,
        bodyPadding: 10
    }/*,{
        xtype:'container',
        html: 'Created by Tian-Shun Allan Jiang <br>NCSSM Class of 2014 -  33rd Session NCSSM SG Director of IT',
        style: 'text-align:center;',
        region: 'south'
    }*/]
});
