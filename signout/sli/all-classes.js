tok = getCookie('token');
tokobj = JSON.parse(tok);
if(tok==null||tokobj.type!='sli'){
    location.href='../login/index.html'; 
};