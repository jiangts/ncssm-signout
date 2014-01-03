/*
thesliliststore.load({
    method: 'GET',
//    params: {auth_token:tokstr},
    scope: this,
    callback: function(records, operation, success) {
            // do something after the load finishes
            console.log('sli load finished!');
    },
});
*/
var sliliststore = Ext.data.StoreManager.lookup('sliliststoretwo');
sliliststore.load();
Ext.define('Signout.view.tables.SLIlist', {
    extend: 'Ext.grid.Panel',
    xtype: 'slilist',
    id: 'slilist',
    title: 'All SLIs',
    collapsible: true,
//    multiSelect: true,
    store: sliliststore,//thesliliststore, //
    //features: [filters],
    emptyText: 'No Matching SLIs',
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        //'Ext.ux.grid.FiltersFeature',
    ],
    columns: [
        { text: 'First Name',  dataIndex: 'firstname', hideable: false},
//        { text: 'Middle Name',  dataIndex: 'middle_name'},
        { text: 'Last Name',  dataIndex: 'lastname', hideable: false},
        { text: 'Email', dataIndex: 'email'},
//        { text: 'Created', dataIndex: 'created_at', type: 'date'},
        { text: 'Hall', dataIndex: 'hall_hall'}
        //{ text: 'Class', dataIndex: 'yrgrad'}
    ],
    // make the table searchable
    searchValue: null,
    indexes: [],
    currentIndex: null,
    searchRegExp: null,
    caseSensitive: false,
    regExpMode: false,
    matchCls: 'x-livesearch-match',
    defaultStatusText: 'Nothing Found',
    initComponent: function() {
        var me = this;
        me.tbar = ['Search',{
                 xtype: 'textfield',
                 name: 'searchField',
                 id: 'searchField',
                 hideLabel: true,
                 enableKeyEvents: true,
                 width: 300,
                 listeners: {
                     change: {
                         fn: me.onTextFieldChange,
                         scope: this,
                         buffer: 100
                     },
                 /*
                     keydown: function(tf, e){
                         if(e.getKey() == Ext.EventObject.ENTER){
                         var str = Ext.getCmp('searchField').value;
                            griddy.store.filterBy(function(record){
                                //if the record contains the string anywhere, include
                                for(var val in record.data){
                                    if(record.data[val].search(new RegExp(str, 'i')) != -1 || str == null)
                                        {return true;}
                                }
                                //else don't include
                                return false;
                            });
                         }
                         //fn: me.
                     }
                 */
                 }
            }, {
                xtype: 'button',
                text: 'Search',
                id: 'searchbtn',
                tooltip: 'Same as pressing Enter',
            },
            {
                xtype: 'button',
                text: 'Refresh',
                id: 'refreshbtn',
                scope: me
            }, 
            
            
            {
                xtype: 'button',
                id: 'deletebtn',
                text: 'Delete User',
            }];

        me.bbar = Ext.create('Ext.ux.StatusBar', {
            defaultText: me.defaultStatusText,
            name: 'searchStatusBar'
        });

        me.callParent(arguments);
    },
    // afterRender override: it adds textfield and statusbar reference and start monitoring keydown events in textfield input 
    /*afterRender: function() {
        var me = this;
        me.callParent(arguments);
        me.textField = me.down('textfield[name=searchField]');
        me.statusBar = me.down('statusbar[name=searchStatusBar]');
    },*/
});
/*

    // configure whether filter query is encoded or not (initially)
    var encode = false; //?
var filters = {
    ftype: 'filters',
    // encode and local configuration options defined previously for easier reuse
    encode: encode, // json encode the filter query
    local: true,   // defaults to false (remote filtering)

    // Filters are most naturally placed in the column definition, but can also be
    // added here.
    filters: [{
        type: 'boolean',
        dataIndex: 'visible'
    }]
};
*/
