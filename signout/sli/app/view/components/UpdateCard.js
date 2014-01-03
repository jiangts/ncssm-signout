function getBase64Image(img) {
//    Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

//     Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

//     Get the data-URL formatted image
//     Firefox supports PNG and JPEG. You could check img.src to
//     guess the original format, but be aware the using "image/jpg"
//     will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL;
}
var ellisname = 'Ellis Johnson II';
Ext.define('Signout.view.components.UpdateCard', {
    extend: 'Ext.panel.Panel',
    xtype: 'updatecard',
    margins: '0',
    autoScroll: true,
    border: false,
    //html: 'Note*: SLI approval needed',
    /*
    layout: {
        type : 'vbox',
        align: 'middle',
        //pack : 'center'
    },
    defaults: {border:false},
    items:[{
        flex: 5,
    */
        layout: {
            type : 'hbox'
//            align: 'middle',
            //pack : 'center'
        },
        defaults: {border:false},
        width: '100%',
        bodyPadding:'5',
    initComponent: function() {
        var me = this;
        this.items=[{
            width: 200,
            maxHeight: '100%',
            maxWidth: '100%',
            xtype : 'image',
            src: '../resources/images/cupola-real.jpg'
        },{
            bodyPadding: '5',
            xtype: 'form',
            defaults: {border:false},
            defaultType: 'textfield',
            items:[{
                xtype: 'displayfield',
                fieldLabel: 'First Name',
                allowBlank: false,
                name: 'firstname'
            },{
                xtype: 'displayfield',
                fieldLabel: 'Last Name',
                allowBlank: false,
                name: 'lastname'
            },{
                xtype: 'combobox',
                store: Ext.data.StoreManager.lookup('hallsstore'),
                fieldLabel: 'Hall',
                allowBlank: false,
                typeAhead: true,
                queryMode: 'local',
                displayField: 'name',
                valueField: 'abbr', 
                forceSelection: true,
                name: 'hall_hall'
            },{
                xtype: 'displayfield',
                fieldLabel: 'Email',
                allowBlank: false,
                name: 'email'
            },{
                fieldLabel: 'Phone',
                allowBlank: false,
                name: 'phone'
            }/*,{
        xtype: 'filefield',
        name: 'photo',
        fieldLabel: 'Photo',
        //labelWidth: 50,
        buttonOnly: true,
        anchor: '100%',
        msgTarget: 'side',
        buttonText: 'Select Photo...',
        listeners: {
            'change': function(fb, v){
                var el = Ext.get('fi-button-msg');
                el.update('<b>Selected:</b> '+v);
                if(!el.isVisible()){
                    el.slideIn('t', {
                        duration: 200,
                        easing: 'easeIn',
                        listeners: {
                            afteranimate: function() {
                                el.highlight();
                                el.setWidth(null);
                            }
                        }
                    });
                }else{
                    el.highlight();
                }
            }
        }

            }*/],
            buttons: [{
                text: 'Update',
                id: 'updatebtn',
                handler: function() {
                    this.up('form').getForm().isValid();
                }
            },{
                text: 'Revert',
                id: 'revertbtn',
                handler: function() {
                    this.up('form').getForm().reset();
                }
            }]
        }]
        this.callParent(arguments);
    }
    /*
    },
    {
        title: 'hi',
        width : '100%',
        flex: 4
        //margin: '30'
    }]*/
}/*,  
}*/);
