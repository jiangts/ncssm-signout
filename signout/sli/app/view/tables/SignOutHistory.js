var historystore = Ext.create('Signout.store.StudentHistory');//.load(),
Ext.define('Signout.view.tables.SignOutHistory', {
    extend: 'Ext.grid.Panel',
    xtype: 'historylist',
    title: 'Current Sign-Out Records for ',
    store: historystore,
    height: 500,
    scroll: true,
    columns: [{ 
        text: 'Name',  dataIndex: 'sid_name', hideable: true, hidden: true
    },
    {
        text: 'Hall', dataIndex: 'sid_halldname', hidden: true
    },
    {
        text: 'Phone', dataIndex: 'sid_phone', hidden: true
    },
    {  
        text: 'Destination', dataIndex: 'destination'
    },
    { 
        text: 'Transportation', dataIndex: 'transportation'
    },
    {  
        text: 'Companions', dataIndex: 'companions', flex:1
    },
    {  
        text: 'Time Out', dataIndex: 'checktime',
        renderer: Ext.util.Format.dateRenderer('D m/j g:i A'),
        width:120
    },
    {
        text: 'Expected Return', dataIndex: 'estTimeReturn',
        renderer: Ext.util.Format.dateRenderer('D m/j g:i A'),
        width: 120
    },
    {
        text: 'Signout Type', dataIndex: 'signoutType'
    }],
    tools: [{
        type: 'save',
        id: 'historyexportbtn',
        tooltip: 'Export to Excel'
    }]
});
