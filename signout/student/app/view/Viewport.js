Ext.define('Signout.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Signout.view.components.Header',
        'Signout.view.components.Main',
        'Signout.view.components.SignInDesk'
    ],

    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    },
    defaults: {
        bodyPadding: 10//30
    },
    bodyBorder: false,
    items: [{
    //the middle panel where all content lies.
        xtype: 'panel',
        //width: '60%',
        width: 700,
        flex: 1,
        border: false,
        layout: {
            type: 'vbox',
            align : 'stretch',
            pack  : 'start'
        },
        items: [{
            xtype: 'appheader',
            margins: '0 15',
            height: 80
        },{
        //next content: sign-out desk and sign-in desk
            xtype: 'panel',
            bodyPadding: 10,
            border: false,
            layout: {
                type: 'hbox',
                align: 'stretch',
                pack: 'start'
            },
            defaults: {border: false},
            items: [{
                xtype: 'mainview',
                flex: 4,
                margins: '0 5',
                height: 230
            },{
                //disabled: true,
                xtype: 'sign-in-desk',
                flex: 3,
                margins: '0 5',
                height: 230
            }]
        },{xtype:'container',flex:1},{
            xtype: 'container',
            html: 'Created by Tian-Shun Allan Jiang <br>NCSSM Class of 2014 -  33rd Session NCSSM SG Director of IT',
            style: 'text-align:center;'
        }]
    }]
});
