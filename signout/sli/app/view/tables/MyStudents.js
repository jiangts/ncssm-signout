var mystudentsstore = Ext.create('Signout.store.MyStudents');
var mystudentstable = Ext.define('Signout.view.tables.MyStudents', {
    extend: 'Ext.grid.Panel',
    xtype: 'viewmystudents',
    id:'mystudentsgrid',
    title: 'My Students',
//    collapsible: true,
    multiSelect: true,

    store: mystudentsstore,
    requires: [
        'Ext.toolbar.TextItem',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Text',
        'Ext.ux.statusbar.StatusBar',
        'Ext.ux.grid.FiltersFeature'
    ],
    columns: [
        { 
            text: 'Name',  dataIndex: 'firstname', hideable: false, 
            renderer: function(value, p, r)
               {return r.data['firstname'] + ' ' + r.data['lastname']}
            //filter: {type:'string'}, 
            //flex: 2
        },
        {  
            text: 'Phone', dataIndex: 'phone',
            renderer: function(value)
               {return Ext.String.format('<a href="callto:{0}">{1}</a>', value, value);}
        },
        { 
            text: 'Email', dataIndex: 'email',
                renderer: function(value) {
                return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
            },
            width:140
        },
        {  
            text: 'Hall', dataIndex: 'hall_halldname'
        },
       /* {  
            text: 'Room', dataIndex: 'room'
        },*/
        {
            text: 'Current Status', dataIndex: 'checkin_inout'
        }
        
    ],
    listeners:{
        celldblclick: function(th, td, cellIndex, rec, tr, rowIndex, e, eOpts) {
            //var val = rec.student.checkinCollection_latest;
            var val = rec.data.checkinCollection_latest;
            if(val==-1){Ext.Msg.alert('Message', 'Student has no Sign-Out records yet!');}
            else{
                Signout.Storage.setSid(rec.data.sid);
                console.log('clicked sid '+Signout.Storage.getSid());
                var win = Ext.create('Signout.view.windows.SignoutDetail');
                win.show();
                var list = win.down('historylist');
                list.setTitle(list.title+rec.data.firstname + ' ' + rec.data.lastname);
                var store = Ext.data.StoreManager.lookup('student-history')
                store.loadData([],false);
                store.load({params:{min:0,max:100,sid: Signout.Storage.getSid() }});
                //Ext.create('Signout.model.SignoutDetail');
                /*
                Signout.model.SignoutDetail.load(val, {
                    success: function(record){
                        win.down('form').getForm().loadRecord(record);
                    },
                    failure: function(record, operation) {
                        Ext.Msg.alert('Error', 'Could not load data!');
                    }
                });
                */
            }
        }
    },
    tools:[{
        type: 'save',
        id: 'myexportcsv',
        tooltip: 'Export to Excel'
    }],
    // make the table searchable
    searchValue: null,
    indexes: [],
    currentIndex: null,
    searchRegExp: null,
    caseSensitive: false,
    regExpMode: false,
    matchCls: 'x-livesearch-match',
    
    defaultStatusText: 'Nothing Found',
    
    // Component initialization override: adds the top and bottom toolbars and setup headers renderer.
    initComponent: function() {
        var me = this;
        me.tbar = [/*'Display: ',{
                 xtype: 'combobox',
                 store: halls,
                 queryMode: 'local',
                 displayField: 'name',
                 valueField: 'abbr', 
                 value: 'ALL', //abbrev for all halls
                 allowBlank: false,
                 forceSelection: true,
                 typeAhead: true,
             },*/ 'Search',{
                 xtype: 'textfield',
                 name: 'searchField',
                 id: 'mystudentsgridsearchbox',
                 hideLabel: true,
                 enableKeyEvents: true,
                 width: 300,
           //      flex: 1,
                 listeners: {
                     change: {
                         fn: me.onTextFieldChange,
                         scope: this,
                         buffer: 100
                     },
                     keydown: function(tf, e){
                         if(e.getKey() == Ext.EventObject.ENTER){
                         var str = Ext.getCmp('mystudentsgridsearchbox').value;
                            mystudentsstore.filterBy(function(record){
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
                 }
            }, {
                xtype: 'button',
                text: '&lt;',
                tooltip: 'Find Previous Row',
                handler: me.onPreviousClick,
                scope: me
            },{
                xtype: 'button',
                text: '&gt;',
                tooltip: 'Find Next Row',
                handler: me.onNextClick,
                scope: me
            }, '-', /*{
                xtype: 'checkbox',
                hideLabel: true,
                margin: '0 0 0 4px',
                handler: me.regExpToggle,
                scope: me                
            }, 'Regular expression', {
                xtype: 'checkbox',
                hideLabel: true,
                margin: '0 0 0 4px',
                handler: me.caseSensitiveToggle,
                scope: me
            }, 'Case sensitive', '-',*/
            {
                xtype: 'button',
                text: 'Refresh',
                handler: function() {
                    mystudentsstore.reload();
                },
                scope: me
            }],

        me.bbar = Ext.create('Ext.ux.StatusBar', {
            defaultText: me.defaultStatusText,
            name: 'searchStatusBar'
        });
        
        me.callParent(arguments);
    },
    // afterRender override: it adds textfield and statusbar reference and start monitoring keydown events in textfield input 
    afterRender: function() {
        var me = this;
        me.callParent(arguments);
        me.textField = me.down('textfield[name=searchField]');
        me.statusBar = me.down('statusbar[name=searchStatusBar]');
    },
    // detects html tag
    tagsRe: /<[^>]*>/gm,
    
    // DEL ASCII code
    tagsProtect: '\x0f',
    
    // detects regexp reserved word
    regExpProtect: /\\|\/|\+|\\|\.|\[|\]|\{|\}|\?|\$|\*|\^|\|/gm,
    
    /**
     * In normal mode it returns the value with protected regexp characters.
     * In regular expression mode it returns the raw value except if the regexp is invalid.
     * @return {String} The value to process or null if the textfield value is blank or invalid.
     * @private
     */
    getSearchValue: function() {
        var me = this,
            value = me.textField.getValue();
            
        if (value === '') {
            return null;
        }
        if (!me.regExpMode) {
            value = value.replace(me.regExpProtect, function(m) {
                return '\\' + m;
            });
        } else {
            try {
                new RegExp(value);
            } catch (error) {
                me.statusBar.setStatus({
                    text: error.message,
                    iconCls: 'x-status-error'
                });
                return null;
            }
            // this is stupid
            if (value === '^' || value === '$') {
                return null;
            }
        }

        return value;
    },
    
    /**
     * Finds all strings that matches the searched value in each grid cells.
     * @private
     */
     onTextFieldChange: function() {
         var me = this,
             count = 0;

         me.view.refresh();
         // reset the statusbar
         me.statusBar.setStatus({
             text: me.defaultStatusText,
             iconCls: ''
         });

         me.searchValue = me.getSearchValue();
         me.indexes = [];
         me.currentIndex = null;

         if (me.searchValue !== null) {
             me.searchRegExp = new RegExp(me.searchValue, 'g' + (me.caseSensitive ? '' : 'i'));
             
             
             me.store.each(function(record, idx) {
                 var td = Ext.fly(me.view.getNode(idx)).down('td'),
                     cell, matches, cellHTML;
                 while(td) {
                     cell = td.down('.x-grid-cell-inner');
                     matches = cell.dom.innerHTML.match(me.tagsRe);
                     cellHTML = cell.dom.innerHTML.replace(me.tagsRe, me.tagsProtect);
                     
                     // populate indexes array, set currentIndex, and replace wrap matched string in a span
                     cellHTML = cellHTML.replace(me.searchRegExp, function(m) {
                        count += 1;
                        if (Ext.Array.indexOf(me.indexes, idx) === -1) {
                            me.indexes.push(idx);
                        }
                        if (me.currentIndex === null) {
                            me.currentIndex = idx;
                        }
                        return '<span class="' + me.matchCls + '">' + m + '</span>';
                     });
                     // restore protected tags
                     Ext.each(matches, function(match) {
                        cellHTML = cellHTML.replace(me.tagsProtect, match); 
                     });
                     // update cell html
                     cell.dom.innerHTML = cellHTML;
                     td = td.next();
                 }
             }, me);

             // results found
             if (me.currentIndex !== null) {
                 me.getSelectionModel().select(me.currentIndex);
                 me.statusBar.setStatus({
                     text: count + ' match(es) found.',
                     iconCls: 'x-status-valid'
                 });
             }
         }

         // no results found
         if (me.currentIndex === null) {
             me.getSelectionModel().deselectAll();
         }

         // force textfield focus
         me.textField.focus();
//filtereddata = me.indexes;
     },
    
    /**
     * Selects the previous row containing a match.
     * @private
     */   
    onPreviousClick: function() {
        var me = this,
            idx;
            
        if ((idx = Ext.Array.indexOf(me.indexes, me.currentIndex)) !== -1) {
            me.currentIndex = me.indexes[idx - 1] || me.indexes[me.indexes.length - 1];
            me.getSelectionModel().select(me.currentIndex);
         }
    },
    
    /**
     * Selects the next row containing a match.
     * @private
     */    
    onNextClick: function() {
         var me = this,
             idx;
             
         if ((idx = Ext.Array.indexOf(me.indexes, me.currentIndex)) !== -1) {
            me.currentIndex = me.indexes[idx + 1] || me.indexes[0];
            me.getSelectionModel().select(me.currentIndex);
         }
    },
    
    /**
     * Switch to case sensitive mode.
     * @private
     */    
    caseSensitiveToggle: function(checkbox, checked) {
        this.caseSensitive = checked;
        this.onTextFieldChange();
    },
    
    /**
     * Switch to regular expression mode
     * @private
     */
    regExpToggle: function(checkbox, checked) {
        this.regExpMode = checked;
        this.onTextFieldChange();
    }
});


