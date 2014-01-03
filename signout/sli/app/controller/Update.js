Ext.define('Signout.controller.Update', {
    extend: 'Ext.app.Controller',
    
    refs:[{
        ref: 'infoform',
        selector: 'updatecard > form'
    }],
    models:['SliInfo'],
    stores:['SliInfos'],

    init: function(){
        var id = tokobj.ssid;
        var me = this;
        this.control({
            'updatecard > form':{
                render: function(){me.loadSliUpdateForm(id)}
            },
            'updatecard > * > * > #revertbtn':{
                click: function(){me.loadSliUpdateForm(id)}
            },
            'updatecard > * > * > #updatebtn':{
                click: function(){me.postSliUpdateForm(id)}
            }
        });
    },
    loadSliUpdateForm: function(id){
        var me = this;
        this.getSliInfosStore().load({
            url: '/ncssm/resources/slis/'+id,
            method: 'GET',
            callback: function(record){
                me.getInfoform().getForm().loadRecord(record[0]);
            }
        });
    },
    postSliUpdateForm: function(id){
        var me = this;
        this.getInfoform().getForm().submit({
            url: '/ncssm/resources/slis/update_sli',
            waitMsg: 'Loading...',
            method: 'POST',
            params: {
                sliid: id
            },
            success: function(record){
                Ext.Msg.alert('Success!', 'Your information was successfully updated.');
            },
            failure: function (response){
                Ext.Msg.alert('Failed', 'Unable to update your information');
            }
        });
    }
});
