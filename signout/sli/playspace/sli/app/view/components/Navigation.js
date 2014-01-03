Ext.define('Signout.view.components.Navigation', {
    extend: 'Ext.panel.Panel',
    xtype: 'viewNavigation',
    requires: [
        'Signout.view.tree.NavTree'
    ],

    title: 'Navigation',
    margins: '5 0',
    floatable: false,
    //width: 200,
    minWidth: 100,
    maxWidth: 350,
    layout: 'vbox',
    items:[{
        xtype: 'navtree',
        flex: 1
    },{
        width: '100%',
        xtype:'container',
        html: 'Created by Tian-Shun Allan Jiang <br>NCSSM Class of 2014 -  33rd Session SGA Director of IT',
        style: 'text-align:center;'
    }]
});
