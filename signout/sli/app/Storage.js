Ext.define('Signout.Storage', {
    singleton: true,
    config: {
        name: '',
        sid: ''
    },
    constructor: function(config){
        this.initConfig(config)
    }
});
