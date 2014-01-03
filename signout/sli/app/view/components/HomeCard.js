Ext.define('Signout.view.components.HomeCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'homecard',
    margins: '0',
    autoScroll: true,
    border: false,
    //html: 'Note*: SLI approval needed',
    layout: {
        type : 'vbox',
        align: 'middle'
        //pack : 'center'
    },
    defaults: {border:false},
    initComponent: function(){
    this.items=[{
        height: 180,
        layout: {
            type : 'hbox'
            //pack : 'center'
        },
        defaults: {border:false},
        width: '100%',
        bodyPadding:'5',
        items:[{
            width: 200,
            maxHeight: '100%',
            maxWidth: '100%',
            xtype : 'image',
            src: '../resources/images/cupola-real.jpg'
        },{
            bodyPadding: '5',
            xtype: 'form',
            defaults: {border:false},
            flex: 1,
            defaultType: 'displayfield',
            items:[{
                xtype: 'container',
                html: 'Welcome!',
                margins: '5',
                cls: 'welcome-text-homecard'
            },{
                fieldLabel: 'First Name',
                name: 'firstname'
            },{
                fieldLabel: 'Last Name',
                name: 'lastname'
            },{
                fieldLabel: 'Hall',
                name: 'hall_hall'
            }]
        }
        //,{
        //    xtype: 'container',
        //    items:[{
        //         fieldLabel:'Search records for student',
        //        ///xtype: 'combobox',
        //         labelStyle: 'width:155px',
        //         xtype: 'combobox',
        //         store: halls,
        //         queryMode: 'local',
        //         displayField: 'name',
        //         valueField: 'abbr', 
        //         value: 'ALL', //abbrev for all halls
        //         forceSelection: true,
        //         typeAhead: true/*
        //         listeners:{
        //            change: function(field, newvalue){
        //                var str = newvalue;
        //                currentsignoutsstore.filterBy(function(record){
        //                    //if the record contains the string anywhere, include
        //                    if(record.data.sid_hall.search(new RegExp(str, 'i')) != -1 || str == 'ALL')
        //                        {return true;}
        //                    //else don't include
        //                    else {return false;}
        //                });
        //            }
        //         }*/

        //    }]
        //}
        ]
    }//,
    //{
    //    border: true,
    //    title: 'Students Needing Sign-Out Approval',
    //    width : '100%',
    //    flex: 4
    //    //margin: '30'
    //}
    ]
    this.callParent(arguments);
    }
});
