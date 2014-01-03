var asdf;
Ext.define('Signout.controller.Grids', {
    extend: 'Ext.app.Controller',
    
    refs:[{
        ref: 'ckboxes',
        selector: 'buildingchecker > checkboxgroup'
    },{
        ref: 'currentsolist', 
        selector: 'signedoutlist'
    },{
        ref: 'mystudentlist', 
        selector: 'viewmystudents'
    },{
        ref: 'allstudentlist', 
        selector: 'viewstudents'
    },{
        ref: 'studenthistory', 
        selector: 'historylist'
    }],
    models:['SignedOutStudent'],
    stores:['SignedOutStudents'],

    init: function(){
        var win;
        var me = this;
        var gridtype;
        this.control({
            'signedoutlist > * > #bldgfilter':{
                click: function(){
                    win = Ext.create('Signout.view.windows.BuildingChecker');
                    win.show();
                    gridtype = 'currentsignouts';
                }
            },
            'signedoutlist > * > #currexportbtn':{
                click: function(){this.exportcsv(me.getCurrentsolist(), 'SignedOutStudents');}
            },
            '#myexportcsv':{
                click: function(){this.exportcsv(me.getMystudentlist(), 'MyStudents');}
            },
            '#studexportcsv':{
                click: function(){this.exportcsv(me.getAllstudentlist(), 'AllStudents');}
            },
            'viewstudents > * > #bldgfilter2':{
                click: function(){
                    win = Ext.create('Signout.view.windows.BuildingChecker');
                    win.show();
                    gridtype = 'allstudents';
                }
            },
            'buildingchecker > * > button':{
                click: function(){
                    var ckboxes = me.getCkboxes().items.items;
                    var out = [];
                    for(var i=0; i<ckboxes.length; i++){
                        if(ckboxes[i].getValue() == true){
                            out.push(ckboxes[i].boxLabel);
                        }
                    }
                    console.log('bldgs selected: ' + out);
                    me.filterstudbybldg(out, gridtype);
                    win.destroy();
                }
            }
        });
    },
    filterstudbybldg: function(bldgs, type){
        if(type == 'allstudents'){
            this.getAllstudentlist().store.filterBy(function(record){
                for(var nom in bldgs){
                    if(record.data.hall_halldname.search(new RegExp(bldgs[nom], 'i')) != -1 || bldgs.length==6)
                    {return true;}
                }
                return false;
            });
        }
        if(type == 'currentsignouts'){
            this.getCurrentsolist().store.filterBy(function(record){
                for(var nom in bldgs){
                    if(record.data.sid_halldname.search(new RegExp(bldgs[nom], 'i')) != -1 || bldgs.length==6)
                    {return true;}
                }
                return false;
            });
        }
    },
    exportcsv: function(list, filename){
        var rawlist = list.getStore().data.items
        asdf = rawlist;
        //console.log(rawlist);
        var data = [];
        var keys = [];
        for (var key in rawlist[0].data) {
            keys.push(key);
        }
        data.push(keys);
        for(var i = 0; i < rawlist.length; i++){
            var tmp = []
            /*for (var j = 0; j<keys.length; j++) {
                tmp.push(rawlist[i].data[keys[j]].replace(/,/g, ''));
            }*/
            for (var j = 0; j<keys.length; j++){
                tmp.push(rawlist[i].data[keys[j]].replace(/,/g, ''));
            }
            data.push(tmp);
        }
        //var data = [["name1", "city1", "some other info"], ["name2", "city2", "more info"]];
        var csvContent = "data:text/csv;charset=utf-8,";
        data.forEach(function(infoArray, index){
           dataString = infoArray.join(",");
           //incorrect!! comparing record index with number of fields!
           //csvContent += index < infoArray.length ? dataString+ "\n" : dataString;
           csvContent += dataString+ "\n";
        }); 
        var encodedUri = encodeURI(csvContent);
        //window.open(encodedUri);
        //http://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename+".csv");
        
        link.click();
    }
});
