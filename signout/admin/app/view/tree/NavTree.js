var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true,
        children: [
            { text: "SLI account manager", leaf: true },
            { text: "Student account manager", leaf: true },
            { text: "Hall manager", leaf: true },
        ]
    }
});

/*
var treenode;
var win;
var wintype;
*/

Ext.define('Signout.view.tree.NavTree', {
    extend: 'Ext.tree.Panel',
    xtype: 'navtree',
    requires: [
        'Ext.window.*',
        'Ext.layout.container.Border',
        'Signout.view.windows.*'
    ],
    border: 0,
    width: 640,
    height: 150,
    store: store,
    rootVisible: false,
    useArrows: true,
    colspan: 2,
    /*
    listeners: {
        itemclick: function(node, model, item, idx, e){
            var name = model.data.text;
            if(name=='Add SLI'){
                Ext.getCmp('peoplecard').doLayout();
            }
//            {this.openForm('AddSliWindow');}
            if(name=='Student account manager'){
                Ext.getCmp('peoplecard').doLayout();
            }
//            treenode = this;
        }
    },
    */
/*
    openForm: function(nom){
        //var win; this must be global
        if (!win) {
            var str = 'Signout.view.windows.' + nom;
            win = Ext.create(str);
            wintype=nom;
        }
        if (nom!=wintype) {
            var str = 'Signout.view.windows.' + nom;
            win.hide(this, function() {
                //button.dom.disabled = false;
            });
            win = Ext.create(str);
            wintype=nom;
        }
        //button.dom.disabled = true;
        if (win.isVisible()) {
            win.hide(this, function() {
                //button.dom.disabled = false;
            });
        } else {
            win.show(this, function() {
                //button.dom.disabled = false;
            });
        }
    }
*/
});
