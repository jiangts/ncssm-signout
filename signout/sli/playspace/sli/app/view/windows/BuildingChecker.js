Ext.define('Signout.view.windows.BuildingChecker', {
    extend: 'Ext.window.Window',
    xtype: 'buildingchecker',
    requires: ['Ext.window.*'],
    title: 'Select Buildings to View:',
    header: {
        titlePosition: 2,
        titleAlign: 'center'
    },
    constrainHeader: true,
    resizable: false,
    bodyPadding: '10',
    defaults: {border:true},
    items:[{
        xtype: 'checkboxgroup',
        columns: 2,
        vertical: true,
        width: 160,
        height: 80,
        items:[
            { boxLabel: 'Hill', inputValue: '1' },
            { boxLabel: 'Hunt', inputValue: '2' },
            { boxLabel: 'Royall', inputValue: '3' },
            { boxLabel: 'Reynolds', inputValue: '4' },
            { boxLabel: 'Beall', inputValue: '5' },
            { boxLabel: 'Bryan', inputValue: '6' }
        ]
    }],
    tbar: [{
        xtype: 'checkbox',
        boxLabel  : 'Select All Buildings',
        inputValue: '1',
        handler: function(ckbox, ck) {
            var checks = this.up('buildingchecker').down('checkboxgroup').items.items;
            var ckvalue;
            if(ck == true){
                ckvalue = true;
            }
            else{ckvalue = false;}
            for(var i=0; i<checks.length; i++){
                checks[i].setValue(ckvalue);
            }
        }
    }],
    bbar:[{
        xtype: 'button',
        text: 'Filter Records'
    }]
});

