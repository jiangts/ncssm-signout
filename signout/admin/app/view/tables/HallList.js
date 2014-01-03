var hallstore = Ext.create('Signout.store.Halls');
Ext.define('Signout.view.tables.HallList', {
    extend: 'Ext.grid.Panel',
    xtype: 'hallList',
    id: 'hallList',
    title: 'Hall Manager',
    collapsible: true,
    store: hallstore,
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
        { text: 'Hall Name',  dataIndex: 'hall', hideable: false},
        { text: 'Gender',  dataIndex: 'lastname', hideable: false},
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
                 id: 'hallSearchField',
                 hideLabel: true,
                 enableKeyEvents: true,
                 width: 300,
                 listeners: {
                     change: {
                         fn: me.onTextFieldChange,
                         scope: this,
                         buffer: 100
                     },
                 }
            }, {
                xtype: 'button',
                text: 'Search',
                id: 'hallsearchbtn',
                tooltip: 'Same as pressing Enter',
            },
            {
                xtype: 'button',
                text: 'Refresh',
                id: 'hallrefreshbtn',
                scope: me
            }, 
            {
                xtype: 'button',
                id: 'halldeletebtn',
                text: 'Delete Hall',
            }];

        me.callParent(arguments);
    },
});
