var imgstr = "data:image/png;base64,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" 
var today = new Date();
var y = today.getFullYear();
var m = today.getMonth() + 1;
var d = today.getDate();
var durham = new SunriseSunset(y, m, d, 36.0225, -78.9764);
var sunrise = durham.sunriseLocalHours(-4);
var sunset = durham.sunsetLocalHours(-4);
var sunRiseHour = Math.floor(sunrise); //always AM
var sunRiseMin  = Math.floor((sunrise - Math.floor(sunrise)) * 60);
var sunSetHour = Math.floor(sunset) - 12;    //always PM
var sunSetMin = Math.floor((sunset - Math.floor(sunset)) * 60);

sunRiseMin = "" + sunRiseMin;
sunRiseHour = "" + sunRiseHour;
sunSetMin = "" + sunSetMin;
sunSetHour = "" + sunSetHour;

if( sunRiseMin.length < 2)
    sunRiseMin = "0" + sunRiseMin;
if( sunSetMin.length < 2)
    sunSetMin = "0" + sunSetMin;

Ext.define('Signout.view.components.Header', {
	extend: 'Ext.panel.Panel',
	xtype: 'appheader',

	/*
    border: 1,
    style: {borderColor:'#000000', borderStyle:'solid', borderWidth:'1px'},
    */

	frame: true,
	dock: 'top',
	//baseCls: 'app-header',
	//width: 0,
	//margins: '20',
	layout: {
		type: 'hbox'
		//align: 'middle'
	},
    initComponent: function(){
	    this.items = [{
            margins: '7 0 7 7',
            height: 30,
            width: 30,
            xtype : 'image',
            src: imgstr
        },{
	    	xtype: 'component',
	    	id: 'app-header-title',
	    	html: 'NCSSM Off-Campus Record',
	    	flex: 1
	    },{
            xtype: 'component',
            //id: , TODO marginalize, stylize (bolds, nice colors, Signed In should be Green or something
            id: 'app-header-bbar',
            html: 'Allan Jiang<br>Status: Signed In'
	    }];
	    this.bbar = [{
	    	text: 'My NCSSM',
            handler: function(){
                var win=window.open('https://my.ncssm.edu/', '_blank');
                win.focus();
            }
	    },{
	    	text: 'NCSSM Home',
            handler: function(){
                var win=window.open('http://www.ncssm.edu/', '_blank');
                win.focus();
            }
	    },{
	    	text: 'SG Home',
            handler: function(){
                var win=window.open('http://www.ncssm.edu/sg/', '_blank');
                win.focus();
            }
	    }, '-',
        'Sunrise: ' + sunRiseHour+':' + sunRiseMin + ' AM', '-', 
        'Sunset: ' + sunSetHour+':' + sunSetMin + ' PM', '-',
	    // begin using the right-justified button container
	    '->', // same as { xtype: 'tbfill' }
        /*
	    {
	    	xtype: 'textfield',
	    	name: 'field1',
	    	emptyText: 'enter search term'
	    },
        */
	    // add a vertical separator bar between toolbar items
	    '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
	    //{
	    //	xtype: 'tbspacer'
	    //},
	    // same as ' ' to create Ext.toolbar.Spacer
	    //'text 2', {
	    //	xtype: 'tbspacer',
	    //	width: 50
	    //},
	    // add a 50px space
	    //'text 3',
        {
	    	xtype: 'button',
	    	text: 'Log Out',
	    	handler: function() {
	    		location.href = '../login/index.html';
	    		delCookie('token', 'student');
	    	}
	    }]
        this.callParent(arguments);
    }
});
