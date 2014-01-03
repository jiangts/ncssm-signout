var timeAgoInWords = function(date) {
    try {
        var now = Math.ceil(Number(new Date()) / 1000),
            dateTime = Math.ceil(Number(new Date(date)) / 1000),
            diff = now - dateTime,
            str;

        if (diff < 60) {
            return String(diff) + ' seconds ago';
        } else if (diff < 3600) {
            str = String(Math.ceil(diff / (60)));
            return str + (str == "1" ? ' minute' : ' minutes') + ' ago';
        } else if (diff < 86400) {
            str = String(Math.ceil(diff / (3600)));
            return str + (str == "1" ? ' hour' : ' hours') + ' ago';
        } else if (diff < 60 * 60 * 24 * 365) {
            str = String(Math.ceil(diff / (60 * 60 * 24)));
            return str + (str == "1" ? ' day' : ' days') + ' ago';
        } else {
            return Ext.Date.format(new Date(date), 'jS M \'y');
        }
    } catch (e) {
        return '';
    }
};
//find date2 - date1
var timeCompareInWords = function(date1,date2) {
    try {
        var now = Math.ceil(Number(new Date(date2)) / 1000),
            dateTime = Math.ceil(Number(new Date(date1)) / 1000),
            diff = now - dateTime,
            str;

        if (Math.abs(diff) < 60) {
            return String(diff) + ' seconds ago';
        } else if (Math.abs(diff) < 3600) {
            str = String(Math.ceil(diff / (60)));
            return str + (str == "1" ? ' minute' : ' minutes');
        } else if (Math.abs(diff) < 86400) {
            str = String(Math.ceil(diff / (3600)));
            return str + (str == "1" ? ' hour' : ' hours');
        } else if (Math.abs(diff) < 60 * 60 * 24 * 365) {
            str = String(Math.ceil(diff / (60 * 60 * 24)));
            return str + (str == "1" ? ' day' : ' days');
        } else {
            return Ext.Date.format(new Date(date1), 'jS M \'y');
        }
    } catch (e) {
        return '';
    }
};
