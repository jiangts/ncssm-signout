Ext.define('Signout.store.Halls2', {
    extend: 'Ext.data.Store',
    storeId: 'hallsstore',
    //model: 'Signout.model.Hall',
    
    //I have no clue how this part works.
//    fields: ['name'],
    fields: ['abbr', 'name'],
    autoload: true,
    data : { 'temp':[
        {"abbr":"ALL", "name":"All Halls"},
        {"abbr":"1st Beall", "name":"1st Beall"},
        {"abbr":"2nd Beall", "name":"2nd Beall"},
        {"abbr":"3rd Beall", "name":"3rd Beall"},
        {"abbr":"2nd Bryan", "name":"2nd Bryan"},
        {"abbr":"3rd Bryan", "name":"3rd Bryan"},
        {"abbr":"4th Bryan", "name":"4th Bryan"},
        {"abbr":"1st_Hill", "name":"1st Hill"},
        {"abbr":"2nd Hill East", "name":"2nd Hill East"},
        {"abbr":"2nd Hill North", "name":"2nd Hill North"},
        {"abbr":"1st Hunt", "name":"1st Hunt"},
        {"abbr":"2nd Hunt East", "name":"2nd Hunt East"},
        {"abbr":"2nd Hunt West", "name":"2nd Hunt West"},
        {"abbr":"3rd Hunt East", "name":"3rd Hunt East"},
        {"abbr":"3rd Hunt West", "name":"3rd Hunt West"},
        {"abbr":"4th Hunt East", "name":"4th Hunt East"},
        {"abbr":"4th Hunt West", "name":"4th Hunt West"},
        {"abbr":"1C2C1D", "name":"1C2C1D"},
        {"abbr":"1E2E2D", "name":"1E2E2D"},
        {"abbr":"Ground Reynolds", "name":"Ground Reynolds"},
        {"abbr":"Ground Royal", "name":"Ground Royall"},
        {"abbr":"1st Royal", "name":"1st Royall"}
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'temp'
        }
    }
});
