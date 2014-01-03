var asdf;
Ext.define('Signout.controller.SODesk', {
    extend: 'Ext.app.Controller',

    requires: [
        //for swipe delete button. Bad design. Not easily reusable.
        //https://gist.github.com/altintx/2431182
        'Ext.Anim',
        'Signout.view.Transportation'
    ],
    config: {
        models:['UserDefault'],
        stores:['UserDefaults'],

        control: {
            //Destination
            destlist: {
                itemtap: 'ondestinationchosen',
                itemswipe: 'deleteitem'
            },
            nextbtn: {
                tap: 'validselection'
            },
            //Transporatation
            transbtn: {
                tap: 'showtransportationpicker'
            }
        },
        refs: {
            //Main view
            nextbtn: '#nextbtn',
            main: 'main',
            //Destination
            destlist: 'destinationview > list',
            destfield: 'destinationview > fieldset > textfield',
            //Transportation
            transbtn: 'transportationview > fieldset > button',
            transpicker: 'transportationview > picker'
        }
    },

    /*
    changetransportationbtntext: function(picker, The, slot, eOpts) {
        asdf = slot;
        console.log(slot.text);
    },
    */
    showtransportationpicker: function() {
        var picker = this.getTranspicker();
        picker.show();
        
        var done = picker.getDoneButton();
        var me = this;
        done.on('tap', function() { 
            me.getTransbtn().setText(picker.getActiveItem().selected.items[0].data.text);
        });
    },
    ondestinationchosen: function(list, idx, target, record, evt) {
        this.getDestfield().setValue(record.data.destination);
    },
    validselection: function(){
        //add selection to list if it's not already present
        //each name is under store.data.all[i].data.destination
        var str = this.getDestfield().getValue();
        var olddata = this.getDestlist().getStore().data.all;
        var oldnames = [];
        for(var i=0; i<olddata.length; i++){
            oldnames.push(olddata[i].data.destination);
        }
        if(oldnames.indexOf(str) == -1){
            var store = this.getDestlist().getStore();
            store.add({destination:str});
            store.sync();
        }
        if(str != ''){
            this.getMain().push({
                xtype: 'transportationview'
            });
        }
        if(str == ''){
            Ext.Msg.alert('Please enter a destination.');
        }
    },
    deleteitem: function(list, idx, target, record, event, options){
        var del = Ext.create("Ext.Button", {
            ui: "decline",
            text: "Delete",
            style: "position:absolute;right:0.125in;top:.05in",
            handler: function() {
                list.getStore().remove(record);
                list.getStore().sync();
            }
        });
        //all this fade stuff isn't even working lol
        var removeDeleteButton = function() {
            Ext.Anim.run(del, 'fade', {
                after: function() {
                    del.destroy();
                },
                out: true
            });
        };
        del.renderTo(Ext.DomQuery.selectNode(".deleteplaceholder", target.element.dom));
        list.on({
            single: true,
            buffer: 250,
            itemtouchstart: removeDeleteButton
        });
        list.element.on({
            single: true,
            buffer: 250,
            touchstart: removeDeleteButton
        });
    }

});
