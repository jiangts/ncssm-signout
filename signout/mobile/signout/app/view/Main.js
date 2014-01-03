Ext.define('Signout.view.Main', {
    //extend: 'Ext.tab.Panel',
    extend: 'Ext.navigation.View',
    xtype: 'main',
    requires: [
        //'Ext.TitleBar',
        'Ext.Img'
    ],
    config: {
        //tabBarPosition: 'bottom',

        items: [
            {
                title: 'Student Sign-Out: Mobile',
                //neccessary for controller
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: null,
                
                layout: {
                    pack: 'center',
                    type: 'hbox'
                },

                items: [/*{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Student Sign-Out: Mobile'
                },*/{
                    xtype: 'button',
                    id: 'outdesk',
                    width: '40%',
                    text: 'Sign-Out Desk'
                },{
                    xtype: 'spacer',
                    width: 20
                },{
                    xtype: 'button',
                    id: 'indesk',
                    width: '40%',
                    text: 'Sign-In Desk'
                },{
                    docked: 'bottom',
                    xtype: 'container',
                    height: '50%',
                    margin: '0 0 18',
                    layout : {
                        type : 'hbox',
                        pack : 'center'
                    },
                    items:{
                        xtype: 'image',
                        width: '80%',
                        height: '100%',
                        src: 'resources/images/ncssm.jpg'
                    }
                }]
            }
        ],
        navigationBar : {
            docked : 'top',
            items : [
                {
                    id: 'nextbtn',
                    text : 'Next',
                    align : 'right'
                }
            ]
        }
    }
});
