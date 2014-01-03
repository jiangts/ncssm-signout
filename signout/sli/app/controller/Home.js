Ext.define('Signout.controller.Home', {
    extend: 'Ext.app.Controller',
    
    refs:[{
        ref: 'infoform',
        selector: 'homecard > * > form'
    }],
    models:['SliInfo'],
    stores:['SliInfos'],

    init: function(){
        var id = tokobj.ssid;
        var me = this;
        this.control({
            'homecard > * > form': {
                render: function(){me.loadSliInfoForm(id)}
            }
        });
    },
    loadSliInfoForm: function(id){
        var me = this;
        this.getSliInfosStore().load({
            url: '/ncssm/resources/slis/'+id,
            method: 'GET',
            callback: function(record){
                me.getInfoform().getForm().loadRecord(record[0]);
            }
        });
    }
});
