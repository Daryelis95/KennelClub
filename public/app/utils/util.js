/**
 * Created by WillAular on 22/01/2017.
 */

//var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
/*var Auth={
    token:function(user,md5){var token = Base64.encode(user.user+':'+md5.createHash(user.pass)); return token;}
};
var util={
    token : '',
    list:function(model,$http,data){
        var token= window.sessionStorage.getItem('token');
        $http.get('/services/model/'+model,{
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic ' + token
            }
        }).then(function (response) {
            data = response.data.data;
        });
    },
    services:""
};*/
var functions={
    /*getToken:function(){
        return window.sessionStorage.getItem("token");
    },
    setToken:function(token){
        window.sessionStorage.setItem("token",token);
    },
    removeToken:function(){
        window.sessionStorage.removeItem("token");
    },
    getUser:function(){
        return JSON.parse(window.sessionStorage.getItem("user"));
    },
    setUser:function(user){
        window.sessionStorage.setItem("user",JSON.stringify(user));
    },
    removeUser:function(){
        window.sessionStorage.removeItem("user");
    },
    getToday:function(){
        var date= new Date();
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    },*/
    post:function($http,url,req,success){
        $http.post("/api" + url,req, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(success,function errorCallback(response) {
            let status = response.status;
            console.log(response);
        });
    },
    get:function($http,url,success){
        $http.get("/api" + url, {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(success,function errorCallback(response) {
            let status = response.status;
            console.log(response);
        });
    },
    setAlert:function(color,message){
        let options = {
            "success":{icon:'check-circle', color:'success'},
            "warning":{icon:'exclamation-circle', color:'warning'},
            "error":{icon:'exclamation-circle', color:'danger'},
            "info":{icon:'exclamation-circle', color:'info'}
        };
        return {show:true, message:message,icon:options[color].icon,color:options[color].color};
    }
};
/*
var dates={
    getDateFormat:function(date){
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    },
    addMonth:function(cant){
        var date= new Date();
        return date.setMonth(date.getMonth()+cant);
    }
};
var storage={
    set:function(item,value){ window.localStorage.setItem(item,JSON.stringify(value));},
    get:function(item){ return JSON.parse(window.localStorage.getItem(item));},
    remove:function(item){ window.localStorage.removeItem(item);}
};

var save= function(url,data,$http){
    let userToken={user:'Will',pass:'123456'};
    $http.post(url ,data,{
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Authorization': 'Basic' + Auth.token(userToken)
            }
        }
    ).then(function successCallback(response) {
            return response;
        },function errorCallback(response) {
            return response;
        });
};
*/