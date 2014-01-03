Ext.define('Signout.controller.Navigation', {
    extend: 'Ext.app.Controller',

    requires: [
        'Signout.view.Destination'
    ],
    //models:['MyInfo', 'LatestSignout'],
    //stores:['MyInfos', 'LatestSignouts'],

    config: {
        control: {
            outdesk: {
                tap: 'outsequence'
            },
            main: {
                initialize: function() {
                    this.getNextbtn().setHidden(true);
                },
                activeitemchange: 'hidenextbtn'
            }
        },
        refs: {
            outdesk: '#outdesk',
            indesk: '#indesk',
            nextbtn: '#nextbtn',
            main: 'main'
        }
    },

    outsequence: function() {
        this.getMain().push({
            xtype: 'destinationview'
        });
    //reloadlist: function() {
        //for some reason I can't attach this stupid thing to the on show listener of the list!!
        Ext.ComponentQuery.query('list')[0].getStore().load();
    //},
    },

    //params list, value, oldValue come from handler activeitemchange
    hidenextbtn: function(list, value, oldValue) {
        //unreliable due to js compression!!
        //if(value.iconCls != 'home'){
        //happens to be reliable!
        if(value.config.title != 'Student Sign-Out: Mobile'){
            this.getNextbtn().setHidden(false);
        } else {
            this.getNextbtn().setHidden(true);
        }
    }

});
