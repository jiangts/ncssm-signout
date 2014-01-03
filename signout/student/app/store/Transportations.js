Ext.define('Signout.store.Transportations', {
    extend: 'Ext.data.Store',
    storeId: 'transportations',
//    model: 'Signout.model.Transportation',
    
    //I have no clue how this part works.
    fields: ['type'],
    data: [

    {
        id:1,
        type:"by foot"
    },
    {
        id:2,
        type:"bike"
    },
    {
        id:3,
        type:"car"
    },
    {
        id:4,
        type:"bus"
    },
    {
        id:5,
        type:"scooter"
    }
    ],
                            
    autoLoad: true,
    proxy: {
        type: 'memory'
    //    url : 'resources/json/transportation.json'
    }
});
