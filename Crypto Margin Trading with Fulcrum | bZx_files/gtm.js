
// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"12",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value",["macro",2]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-112248873-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-112248873-4",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_TRANSACTION",
      "vtp_gaSettings":["macro",3],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsTransaction":true,
      "tag_id":2
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Trade",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",3],
      "vtp_eventAction":"Open position",
      "vtp_eventLabel":"Buy button",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":3
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Lend",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",3],
      "vtp_eventAction":"Lend",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":4
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",5],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":28
    },{
      "function":"__hl",
      "tag_id":29
    },{
      "function":"__cl",
      "tag_id":30
    },{
      "function":"__cl",
      "tag_id":31
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.historyChange"
    },{
      "function":"_sw",
      "arg0":["macro",1],
      "arg1":"https:\/\/fulcrum.trade\/"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"purchase"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trade-form__submit-button trade-form__submit-button--buy"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.click"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"lend-form__submit-button lend-form__submit-button--lend"
    }],
  "rules":[
    [["if",0],["add",0,5,6,7]],
    [["if",1],["add",0]],
    [["if",3],["add",1]],
    [["if",4,5],["add",2]],
    [["if",5,6],["add",3]],
    [["if",0,2],["add",4],["block",0]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ha;a:{var ia={pf:!0},ja={};try{ja.__proto__=ia;ha=ja.pf;break a}catch(a){}ha=!1}ca=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=ca,la=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var qa=function(){},ra=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},sa=function(a){return"number"==typeof a&&!isNaN(a)},va=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},wa=function(a,b){if(a&&va(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},xa=function(a,b){if(!sa(a)||
!sa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},za=function(a,b){for(var c=new ya,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Aa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ba=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ea=function(a){var b=[];if(va(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Fa=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ga=function(){return(new Date).getTime()},ya=function(){this.prefix="gtm.";this.values={}};ya.prototype.set=function(a,b){this.values[this.prefix+a]=b};ya.prototype.get=function(a){return this.values[this.prefix+a]};
var Ha=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ia=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ja=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ka=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},La=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ma=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Na=function(a){var b=
[];Aa(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Oa=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Pa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Qa=function(a){if(null==a)return String(a);var b=Pa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ra=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Sa=function(a){if(!a||"object"!=Qa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ra(a,"constructor")&&!Ra(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ra(a,b)},C=function(a,b){var c=b||("array"==Qa(a)?[]:{}),d;for(d in a)if(Ra(a,d)){var e=a[d];"array"==Qa(e)?("array"!=Qa(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Sa(e)?(Sa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};var rb;
var sb=[],tb=[],ub=[],wb=[],xb=[],yb={},zb,Ab,Bb,Cb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Db=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=yb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):rb(c,e,b)},Fb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Eb(a[e],b,c));
return d},Gb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=yb[b];return c?c.priorityOverride||0:0},Eb=function(a,b,c){if(va(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Eb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=sb[f];if(!h||b.Lc(h))return;c[f]=!0;try{var k=Fb(h,b,c);k.vtp_gtmEventId=b.id;d=Db(k,b);Bb&&(d=Bb.Of(d,k))}catch(y){b.ue&&b.ue(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Eb(a[l],b,c)]=Eb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Eb(a[n],b,c);Ab&&(m=m||q===Ab.ub);d.push(q)}return Ab&&m?Ab.Rf(d):d.join("");case "escape":d=Eb(a[1],b,c);if(Ab&&va(a[1])&&"macro"===a[1][0]&&Ab.og(a))return Ab.Kg(d);d=String(d);for(var u=2;u<a.length;u++)Ta[a[u]]&&(d=Ta[a[u]](d));return d;case "tag":var p=a[1];if(!wb[p])throw Error("Unable to resolve tag reference "+p+".");return d={he:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Ib(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ib=function(a,b,c){try{return zb(Fb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Jb=function(){var a=function(b){return{toString:function(){return b}}};return{rd:a("convert_case_to"),sd:a("convert_false_to"),td:a("convert_null_to"),ud:a("convert_true_to"),vd:a("convert_undefined_to"),sh:a("debug_mode_metadata"),ra:a("function"),Re:a("instance_name"),Ve:a("live_only"),Xe:a("malware_disabled"),Ye:a("metadata"),th:a("original_vendor_template_id"),bf:a("once_per_event"),Ed:a("once_per_load"),Md:a("setup_tags"),Od:a("tag_id"),Pd:a("teardown_tags")}}();var Kb=null,Nb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Kb=Lb(a);for(var e=0;e<tb.length;e++){var f=tb[e],h=Mb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<wb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Mb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Kb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Kb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Lb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ib(ub[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,E=document,hc=navigator,ic=E.currentScript&&E.currentScript.src,jc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},kc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},lc=function(a,b,c){var d=E.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;kc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=la.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=E.getElementsByTagName("script")[0]||E.body||E.head;l.parentNode.insertBefore(d,l);return d},mc=function(){if(ic){var a=ic.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},nc=function(a,b){var c=E.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=E.body&&E.body.lastChild||
E.body||E.head;d.parentNode.insertBefore(c,d);kc(c,b);void 0!==a&&(c.src=a);return c},oc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},pc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},rc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},sc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},tc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},uc=function(a){var b=E.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},vc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},wc=function(a){hc.sendBeacon&&hc.sendBeacon(a)||oc(a)},xc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var zc=function(a){return yc?E.querySelectorAll(a):null},Ac=function(a,b){if(!yc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!E.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Bc=!1;if(E.querySelectorAll)try{var Cc=E.querySelectorAll(":root");Cc&&1==Cc.length&&Cc[0]==E.documentElement&&(Bc=!0)}catch(a){}var yc=Bc;var H={qa:"_ee",nc:"event_callback",tb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",oc:"restricted_data_processing",Qa:"allow_google_signals",Y:"cookie_expires",sb:"cookie_update",Ra:"session_duration",ba:"user_properties"};H.fe=[H.X,H.Qa,H.sb];H.ne=[H.Y,H.tb,H.Ra];var Sc=/[A-Z]+/,Tc=/\s/,Uc=function(a){if(g(a)&&(a=Fa(a),!Tc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Sc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Wc=function(a){for(var b={},c=0;c<a.length;++c){var d=Uc(a[c]);d&&(b[d.id]=d)}Vc(b);var e=[];Aa(b,function(f,h){e.push(h)});return e};
function Vc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Xc={},I=null,Yc=Math.random();Xc.s="GTM-N8H9C42";Xc.yb="2j0";var Zc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},ad="www.googletagmanager.com/gtm.js";var bd=ad,cd=null,dd=null,ed=null,fd="//www.googletagmanager.com/a?id="+Xc.s+"&cv=12",gd={},hd={},id=function(){var a=I.sequence||0;I.sequence=a+1;return a};var jd={},P=function(a,b){jd[a]=jd[a]||[];jd[a][b]=!0},kd=function(a){for(var b=[],c=jd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var ld=function(){return"&tc="+wb.filter(function(a){return a}).length},od=function(){md||(md=D.setTimeout(nd,500))},nd=function(){md&&(D.clearTimeout(md),md=void 0);void 0===pd||qd[pd]&&!rd&&!sd||(td[pd]||ud.qg()||0>=vd--?(P("GTM",1),td[pd]=!0):(ud.Tg(),oc(wd()),qd[pd]=!0,xd=yd=sd=rd=""))},wd=function(){var a=pd;if(void 0===a)return"";var b=kd("GTM"),c=kd("TAGGING");return[zd,qd[a]?"":"&es=1",Ad[a],b?"&u="+b:"",c?"&ut="+c:"",ld(),rd,sd,yd,xd,"&z=0"].join("")},Bd=function(){return[fd,"&v=3&t=t","&pid="+
xa(),"&rv="+Xc.yb].join("")},Cd="0.005000">Math.random(),zd=Bd(),Dd=function(){zd=Bd()},qd={},rd="",sd="",xd="",yd="",pd=void 0,Ad={},td={},md=void 0,ud=function(a,b){var c=0,d=0;return{qg:function(){if(c<a)return!1;Ga()-d>=b&&(c=0);return c>=a},Tg:function(){Ga()-d>=b&&(c=0);c++;d=Ga()}}}(2,1E3),vd=1E3,Ed=function(a,b){if(Cd&&!td[a]&&pd!==a){nd();pd=a;xd=rd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Ad[a]="&e="+c+"&eid="+a;od()}},Fd=function(a,b,c){if(Cd&&!td[a]&&
b){a!==pd&&(nd(),pd=a);var d,e=String(b[Jb.ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;rd=rd?rd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(yb[h]?"1":"2")+d;xd=xd?xd+"."+k:"&ti="+k;od();2022<=wd().length&&nd()}},Gd=function(a,b,c){if(Cd&&!td[a]){a!==pd&&(nd(),pd=a);var d=c+b;sd=sd?sd+
"."+d:"&epr="+d;od();2022<=wd().length&&nd()}};var Hd={},Id=new ya,Jd={},Kd={},Nd={name:"dataLayer",set:function(a,b){C(Ma(a,b),Jd);Ld()},get:function(a){return Md(a,2)},reset:function(){Id=new ya;Jd={};Ld()}},Md=function(a,b){if(2!=b){var c=Id.get(a);if(Cd){var d=Od(a);c!==d&&P("GTM",5)}return c}return Od(a)},Od=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Qd(d)},Qd=function(a){for(var b=Jd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Sd=function(a,b){Kd.hasOwnProperty(a)||(Id.set(a,b),C(Ma(a,b),Jd),Ld())},Ld=function(a){Aa(Kd,function(b,c){Id.set(b,c);C(Ma(b,void 0),Jd);C(Ma(b,c),Jd);a&&delete Kd[b]})},Td=function(a,b,c){Hd[a]=Hd[a]||{};var d=1!==c?Od(b):Id.get(b);"array"===Qa(d)||"object"===Qa(d)?Hd[a][b]=C(d):Hd[a][b]=d},Ud=function(a,b){if(Hd[a])return Hd[a][b]},Vd=function(a,b){Hd[a]&&delete Hd[a][b]};var Wd=function(){var a=!1;return a};var R=function(a,b,c,d){return(2===Xd()||d||"http:"!=D.location.protocol?a:b)+c},Xd=function(){var a=mc(),b;if(1===a)a:{var c=bd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=E.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var le=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),me={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ne={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},oe="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var qe=function(a){var b=Md("gtm.whitelist");b&&P("GTM",9);var c=b&&La(Ea(b),me),d=Md("gtm.blacklist");d||(d=Md("tagTypeBlacklist"))&&P("GTM",3);d?
P("GTM",8):d=[];pe()&&(d=Ea(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ea(d),"google")&&P("GTM",2);var e=d&&La(Ea(d),ne),f={};return function(h){var k=h&&h[Jb.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=hd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>r(c,l[q])){P("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=za(e,l||[]);t&&P("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=za(e,oe));return f[k]=v}},pe=function(){return le.test(D.location&&D.location.hostname)};var re={Of:function(a,b){b[Jb.rd]&&"string"===typeof a&&(a=1==b[Jb.rd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Jb.td)&&null===a&&(a=b[Jb.td]);b.hasOwnProperty(Jb.vd)&&void 0===a&&(a=b[Jb.vd]);b.hasOwnProperty(Jb.ud)&&!0===a&&(a=b[Jb.ud]);b.hasOwnProperty(Jb.sd)&&!1===a&&(a=b[Jb.sd]);return a}};var se={active:!0,isWhitelisted:function(){return!0}},te=function(a){var b=I.zones;!b&&a&&(b=I.zones=a());return b};var ue=function(){};var ve=!1,we=0,xe=[];function ye(a){if(!ve){var b=E.createEventObject,c="complete"==E.readyState,d="interactive"==E.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ve=!0;for(var e=0;e<xe.length;e++)G(xe[e])}xe.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function ze(){if(!ve&&140>we){we++;try{E.documentElement.doScroll("left"),ye()}catch(a){D.setTimeout(ze,50)}}}var Ae=function(a){ve?a():xe.push(a)};var Be={},Ce={},De=function(a,b,c,d){if(!Ce[a]||Zc[b]||"__zone"===b)return-1;var e={};Sa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return Ce[a].tags.push(e)-1},Ee=function(a,b,c,d){if(Ce[a]){var e=Ce[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Fe(a){for(var b=Be[a]||[],c=0;c<b.length;c++)b[c]();Be[a]={push:function(d){d(Xc.s,Ce[a])}}}
var Ie=function(a,b,c){Ce[a]={tags:[]};ra(b)&&Ge(a,b);c&&D.setTimeout(function(){return Fe(a)},Number(c));return He(a)},Ge=function(a,b){Be[a]=Be[a]||[];Be[a].push(Ia(function(){return G(function(){b(Xc.s,Ce[a])})}))};function He(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ia(function(){b++;d&&b>=c&&Fe(a)})},Af:function(){d=!0;b>=c&&Fe(a)}}};var Je=function(){function a(d){return!sa(d)||0>d?0:d}if(!I._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=sa(Nd.get("gtm.start"))?Nd.get("gtm.start"):0;I._li={cst:a(c-b),cbt:a(dd-b)}}};var Ne={},Oe=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Pe=!1;
var Qe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||P("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}Je();return D[b]},Re=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Oe();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Te=function(a){},Se=function(){return D.GoogleAnalyticsObject||"ga"};var Ve=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var We=/:[0-9]+$/,Xe=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},$e=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ye(a.protocol)||Ye(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(We,"").toLowerCase());var f=b,h,k=Ye(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Ze(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(We,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||P("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Xe(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ye=function(a){return a?a.replace(":","").toLowerCase():""},Ze=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
af=function(a){var b=E.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||P("TAGGING",1),c="/"+c);var d=b.hostname.replace(We,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function ff(a,b,c,d){var e=wb[a],f=gf(a,b,c,d);if(!f)return null;var h=Eb(e[Jb.Md],c,[]);if(h&&h.length){var k=h[0];f=ff(k.index,{B:f,w:1===k.he?b.terminate:f,terminate:b.terminate},c,d)}return f}
function gf(a,b,c,d){function e(){if(f[Jb.Xe])k();else{var w=Fb(f,c,[]),y=De(c.id,String(f[Jb.ra]),Number(f[Jb.Od]),w[Jb.Ye]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Ga()-z;Fd(c.id,wb[a],"5");Ee(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Ga()-z;Fd(c.id,wb[a],"6");Ee(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Fd(c.id,f,"1");var B=function(){var A=Ga()-z;Fd(c.id,f,"7");Ee(c.id,y,"exception",A);x||(x=!0,k())};var z=Ga();try{Db(w,c)}catch(A){B(A)}}}var f=wb[a],h=b.B,k=b.w,l=b.terminate;if(c.Lc(f))return null;var m=Eb(f[Jb.Pd],c,[]);if(m&&m.length){var n=m[0],q=ff(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.he?l:q}if(f[Jb.Ed]||f[Jb.bf]){var u=f[Jb.Ed]?xb:c.bh,p=h,t=k;if(!u[a]){e=Ia(e);var v=hf(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function hf(a,b,c){var d=[],e=[];b[a]=jf(d,e,c);return{B:function(){b[a]=kf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=lf;for(var f=0;f<e.length;f++)e[f]()}}}function jf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function kf(a){a()}function lf(a,b){b()};var of=function(a,b){for(var c=[],d=0;d<wb.length;d++)if(a.kb[d]){var e=wb[d];var f=b.add();try{var h=ff(d,{B:f,w:f,terminate:f},a,d);h?c.push({Fe:d,Ae:Gb(e),Zf:h}):(mf(d,a),f())}catch(l){f()}}b.Af();c.sort(nf);for(var k=0;k<c.length;k++)c[k].Zf();return 0<c.length};function nf(a,b){var c,d=b.Ae,e=a.Ae;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Fe,k=b.Fe;f=h>k?1:h<k?-1:0}return f}
function mf(a,b){if(!Cd)return;var c=function(d){var e=b.Lc(wb[d])?"3":"4",f=Eb(wb[d][Jb.Md],b,[]);f&&f.length&&c(f[0].index);Fd(b.id,wb[d],e);var h=Eb(wb[d][Jb.Pd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var pf=!1,qf=function(a,b,c,d,e){if("gtm.js"==b){if(pf)return!1;pf=!0}Ed(a,b);var f=Ie(a,d,e);Td(a,"event",1);Td(a,"ecommerce",1);Td(a,"gtm");var h={id:a,name:b,Lc:qe(c),kb:[],bh:[],ue:function(){P("GTM",6)}};h.kb=Nb(h);var k=of(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Te(Xc.s);if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=wb[l];if(m&&!Zc[String(m[Jb.ra])])return!0}return!1};var sf=/^https?:\/\/www\.googletagmanager\.com/;function tf(){var a;return a}function vf(a,b){}
function uf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function wf(){var a=!1;return a};var xf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},yf=function(a){var b=new xf;b.eventModel=a;return b},zf=function(a,b){a.targetConfig=b;return a},Af=function(a,b){a.containerConfig=b;return a},Bf=function(a,b){a.h=b;return a},Cf=function(a,b){a.globalConfig=b;return a},Df=function(a,b){a.B=b;return a},Ef=function(a,b){a.w=b;return a};
xf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Ff=function(a){function b(e){Aa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Aa(c,function(e){d.push(e)});return d};var Gf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Jf=function(a,b,c,d){var e=Hf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=If(e,function(f){return f.Jb},b);if(1===e.length)return e[0].id;e=If(e,function(f){return f.lb},c);return e[0]?e[0].id:void 0}};
function Kf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Gf(b,e).indexOf(c)}
var Nf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Lf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Mf(y,u)&&Kf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Mf(q,u)&&Kf(m,a,l)}return k};function If(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Hf(a,b){for(var c=[],d=Gf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Jb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var Of=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Pf=/(^|\.)doubleclick\.net$/i,Mf=function(a,b){return Pf.test(document.location.hostname)||"/"===b&&Of.test(a)},Lf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Pf.test(e)||Of.test(e)||a.push("none");return a};function Qf(){for(var a=Rf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Sf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Rf,Tf;function Uf(a){Rf=Rf||Sf();Tf=Tf||Qf();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Rf[l],Rf[m],Rf[n],Rf[q])}return b.join("")}
function Vf(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Tf[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Rf=Rf||Sf();Tf=Tf||Qf();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Wf;var $f=function(){var a=Xf,b=Yf,c=Zf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){pc(E,"mousedown",d);pc(E,"keyup",d);pc(E,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},bg=function(a,b,c){for(var d=Zf().decorators,e={},f=0;f<d.length;++f){var h=d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==E.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof
RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ja(e,h.callback())}}return e},Zf=function(){var a=jc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var cg=/(.*?)\*(.*?)\*(.*)/,dg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,eg=/^(?:www\.|m\.|amp\.)+/,fg=/([^?#]+)(\?[^#]*)?(#.*)?/;function gg(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var ig=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Uf(String(d))))}var e=b.join("*");return["1",hg(e),e].join("*")},hg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Wf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Wf=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Wf[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},kg=function(){return function(a){var b=af(D.location.href),c=b.search.replace("?",""),d=Xe(c,"_gl",!0)||"";a.query=jg(d)||{};var e=$e(b,"fragment").match(gg("_gl"));a.fragment=jg(e&&e[3]||"")||{}}},lg=function(){var a=kg(),b=Zf();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ja(c,d.query),Ja(c,d.fragment));return c},jg=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=cg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===hg(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=Vf(u[p+1]);return q}}}}catch(t){}};
function mg(a,b,c,d){function e(n){var q=n,u=gg(a).exec(q),p=q;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=fg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function ng(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=bg(b,1,c),e=bg(b,2,c),f=bg(b,3,c);if(Ka(d)){var h=ig(d);c?og("_gl",h,a):pg("_gl",h,a,!1)}if(!c&&Ka(e)){var k=ig(e);pg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){pg(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){og(m,n,q);break a}}"string"==typeof q&&mg(m,n,q,void 0)}}
function pg(a,b,c,d){if(c.href){var e=mg(a,b,c.href,void 0===d?!1:d);Ve.test(e)&&(c.href=e)}}
function og(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=E.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=mg(a,b,c.action);Ve.test(m)&&(c.action=m)}}}
var Xf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||ng(e,e.hostname)}}catch(h){}},Yf=function(a){try{if(a.action){var b=$e(af(a.action),"host");ng(a,b)}}catch(c){}},qg=function(a,b,c,d){$f();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d,sameHost:!1};Zf().decorators.push(f)},rg=function(){var a=E.location.hostname,
b=dg.exec(E.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(eg,""),l=e.replace(eg,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},sg=function(a,b){return!1===a?!1:a||b||rg()};var tg={};var ug=/^\w+$/,vg=/^[\w-]+$/,wg=/^~?[\w-]+$/,xg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function yg(a){return a&&"string"==typeof a&&a.match(ug)?a:"_gcl"}
var Ag=function(){var a=af(D.location.href),b=$e(a,"query",!1,void 0,"gclid"),c=$e(a,"query",!1,void 0,"gclsrc"),d=$e(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Xe(e,"gclid",void 0);c=c||Xe(e,"gclsrc",void 0)}return zg(b,c,d)},zg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(vg))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
tg.gtm_3pds?0:tg.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Cg=function(a){var b=Ag();Bg(b,a)};
function Bg(a,b,c){function d(q,u){var p=Dg(q,e);p&&Nf(p,u,h,f,l,!0)}b=b||{};var e=yg(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Ga();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Mh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Fg=function(a,b,c,d,e){for(var f=lg(),h=yg(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==xg[l]){var m=Dg(l,h),n=f[m];if(n){var q=Math.min(Eg(n),Ga()),u;b:{for(var p=q,t=Gf(m,E.cookie),v=0;v<t.length;++v)if(Eg(t[v])>p){u=!0;break b}u=!1}u||Nf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Bg(zg(f.gclid,f.gclsrc),w)},Dg=function(a,b){var c=xg[a];if(void 0!==c)return b+c},Eg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Gg(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Hg=function(a,b,c,d,e){if(va(b)){var f=yg(e);qg(function(){for(var h={},k=0;k<a.length;++k){var l=Dg(a[k],f);if(l){var m=Gf(l,E.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Ig=function(a){return a.filter(function(b){return wg.test(b)})},Jg=function(a,b){for(var c=yg(b&&b.prefix),d={},e=0;e<a.length;e++)xg[a[e]]&&(d[a[e]]=xg[a[e]]);Aa(d,function(f,h){var k=Gf(c+h,E.cookie);if(k.length){var l=k[0],m=Eg(l),n={};n[f]=[Gg(l)];Bg(n,b,m)}})};function Kg(){var a=Ag(),b=a.gclid,c=a.gclsrc;if(b&&(!c||"aw.ds"===c)){var d;I.reported_gclid||(I.reported_gclid={});d=I.reported_gclid;if(!d[b]){d[b]=!0;var e="/pagead/landing?gclid="+encodeURIComponent(b);c&&(e+="&gclsrc="+encodeURIComponent(c));wc("https://www.google.com"+e)}}};var Lg;if(3===Xc.yb.length)Lg="g";else{var Mg="G";Lg=Mg}
var Ng={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Lg,OPT:"o"},Og=function(a){var b=Xc.s.split("-"),c=b[0].toUpperCase(),d=Ng[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Xc.yb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Xc.yb+e};var Yg=function(){for(var a=hc.userAgent+(E.cookie||"")+(E.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ga()/1E3)].join(".")},ah=function(a,b,c,d){var e=Zg(b);return Jf(a,e,$g(c),d)},bh=function(a,b,c,d){var e=""+Zg(c),f=$g(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Zg=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},$g=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ch=["1"],dh={},hh=function(a,b,c,d){var e=eh(a);dh[e]||fh(e,b,c)||(gh(e,Yg(),b,c,d),fh(e,b,c))};function gh(a,b,c,d,e){var f=bh(b,"1",d,c);Nf(a,f,c,d,0==e?void 0:new Date(Ga()+1E3*(void 0==e?7776E3:e)))}function fh(a,b,c){var d=ah(a,b,c,ch);d&&(dh[a]=d);return d}function eh(a){return(a||"_gcl")+"_au"};var ih=function(){for(var a=[],b=E.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({ed:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].ed]||(f[a[h].ed]=[]),f[a[h].ed].push({timestamp:k[1],bg:k[2]}))}return f};var jh=/^\d+\.fls\.doubleclick\.net$/;function kh(a){var b=af(D.location.href),c=$e(b,"host",!1);if(c&&c.match(jh)){var d=$e(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function lh(a,b){if("aw"==a||"dc"==a){var c=kh("gcl"+a);if(c)return c.split(".")}var d=yg(b);if("_gcl"==d){var e;e=Ag()[a]||[];if(0<e.length)return e}var f=Dg(a,d),h;if(f){var k=[];if(E.cookie){var l=Gf(f,E.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Gg(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Ig(k)}else h=k}else h=k}else h=[];return h}
var mh=function(){var a=kh("gac");if(a)return decodeURIComponent(a);var b=ih(),c=[];Aa(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].bg);f=Ig(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},nh=function(a,b,c,d,e){hh(b,c,d,e);var f=dh[eh(b)],h=Ag().dc||[],k=!1;if(f&&0<h.length){var l=I.joined_au=I.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk";q=q+"?gclid="+h[n]+"&auiddc="+f;wc(q);k=l[m]=!0}}null==a&&(a=k);if(a&&f){var u=eh(b),
p=dh[u];p&&gh(u,p,c,d,e)}};var fi={},gi=["G","GP"];fi.Ge="";var hi=fi.Ge.split(",");function ii(){var a=I;return a.gcq=a.gcq||new ji}
var ki=function(a,b,c){ii().register(a,b,c)},li=function(a,b,c,d){ii().push("event",[b,a],c,d)},mi=function(a,b){ii().push("config",[a],b)},ni={},oi=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},pi=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},ji=function(){this.i={};this.m={};this.h=[]},qi=function(a,b){var c=Uc(b);return a.i[c.containerId]=a.i[c.containerId]||new oi},ri=function(a,b,c,d){if(d.N){var e=qi(a,d.N),
f=e.m;if(f){var h=C(c),k=C(e.targetConfig[d.N]),l=C(e.containerConfig),m=C(e.i),n=C(a.m),q=Md("gtm.uniqueEventId"),u=Uc(d.N).prefix,p=Ef(Df(Cf(Bf(Af(zf(yf(h),k),l),m),n),function(){Gd(q,u,"2");}),function(){Gd(q,u,"3");});try{Gd(q,u,"1");f(d.N,b,d.m,p)}catch(t){
Gd(q,u,"4");}}}};
ji.prototype.register=function(a,b,c){if(3!==qi(this,a).status){qi(this,a).m=b;qi(this,a).status=3;c&&(qi(this,a).i=c);var d=Uc(a),e=ni[d.containerId];if(void 0!==e){var f=I[d.containerId].bootstrap,h=d.prefix.toUpperCase();I[d.containerId]._spx&&(h=h.toLowerCase());var k=Md("gtm.uniqueEventId"),l=h,m=Ga()-f;if(Cd&&!td[k]){k!==pd&&(nd(),pd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);yd=yd?yd+","+n:"&cl="+n}delete ni[d.containerId]}this.flush()}};
ji.prototype.push=function(a,b,c,d){var e=Math.floor(Ga()/1E3);a:if(c){var f=Uc(c),h;if(h=f){var k;if(k=1===qi(this,c).status)b:{var l=f.prefix;k=!0}h=k}if(h)if(qi(this,c).status=2,this.push("require",[],f.containerId),ni[f.containerId]=Ga(),Wd()){}else{var n=encodeURIComponent(f.containerId),q=("http:"!=D.location.protocol?"https:":"http:")+"//www.googletagmanager.com";
lc(q+"/gtag/js?id="+n+"&l=dataLayer&cx=c")}}this.h.push(new pi(a,e,c,b,d));d||this.flush()};
ji.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==qi(this,c.N).status&&!a)return;break;case "set":Aa(c.h[0],function(l,m){C(Ma(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Qb];delete d[H.Qb];var f=qi(this,c.N),h=Uc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||ri(this,H.D,d,c);f.h=!0;delete d[H.qa];k?C(d,f.containerConfig):C(d,f.targetConfig[c.N]);break;
case "event":ri(this,c.h[1],c.h[0],c)}this.h.shift()}};var si=["GP"],ti="G".split(/,/),ui=!1;ui=!0;var vi=null,wi={},xi={},yi;function zi(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.nc]&&(c.eventCallback=b[H.nc]),b[H.tb]&&(c.eventTimeout=b[H.tb]));return c}
var Fi={config:function(a){},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Sa(a[2])&&void 0!=a[2])return;c=a[2]}var d=zi(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Sa(a[1])?b=C(a[1]):3==a.length&&
g(a[1])&&(b={},Sa(a[2])||va(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Gi={policy:!0};var Hi=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Ji=function(a){var b=Ii(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Ki=!1,Li=[];function Mi(){if(!Ki){Ki=!0;for(var a=0;a<Li.length;a++)G(Li[a])}}var Ni=function(a){Ki?G(a):Li.push(a)};var cj=function(a){if(bj(a))return a;this.h=a};cj.prototype.fg=function(){return this.h};var bj=function(a){return!a||"object"!==Qa(a)||Sa(a)?!1:"getUntrustedUpdateValue"in a};cj.prototype.getUntrustedUpdateValue=cj.prototype.fg;var dj=[],ej=!1,fj=function(a){return D["dataLayer"].push(a)},gj=function(a){var b=I["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function hj(a){var b=a._clear;Aa(a,function(f,h){"_clear"!==f&&(b&&Sd(f,void 0),Sd(f,h))});cd||(cd=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=id(),a["gtm.uniqueEventId"]=d,Sd("gtm.uniqueEventId",d));ed=c;var e=
ij(a);ed=null;switch(c){case "gtm.init":P("GTM",19),e&&P("GTM",20)}return e}function ij(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=I.zones;d=e?e.checkState(Xc.s,c):se;return d.active?qf(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function jj(){for(var a=!1;!ej&&0<dj.length;){ej=!0;delete Jd.eventModel;Ld();var b=dj.shift();if(null!=b){var c=bj(b);if(c){var d=b;b=bj(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Md(h,1);if(va(k)||Sa(k))k=C(k);Kd[h]=k}}try{if(ra(b))try{b.call(Nd)}catch(v){}else if(va(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Md(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=Fi[b[0]];if(t&&(!c||!Gi[b[0]])){b=t(b);break a}}b=void 0}if(!b){ej=!1;continue}}a=hj(b)||a}}finally{c&&Ld(!0)}}ej=!1}
return!a}function kj(){var a=jj();try{Hi(D["dataLayer"],Xc.s)}catch(b){}return a}
var mj=function(){var a=jc("dataLayer",[]),b=jc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Ae(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ni(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<I.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new cj(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);dj.push.apply(dj,d);if(300<
this.length)for(P("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return jj()&&h};dj.push.apply(dj,a.slice(0));lj()&&G(kj)},lj=function(){var a=!0;return a};var nj={};nj.ub=new String("undefined");
var oj=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===nj.ub?b:a[d]);return c.join("")}};oj.prototype.toString=function(){return this.h("undefined")};oj.prototype.valueOf=oj.prototype.toString;nj.lf=oj;nj.xc={};nj.Rf=function(a){return new oj(a)};var pj={};nj.Ug=function(a,b){var c=id();pj[c]=[a,b];return c};nj.ce=function(a){var b=a?0:1;return function(c){var d=pj[c];if(d&&"function"===typeof d[b])d[b]();pj[c]=void 0}};nj.og=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};nj.Kg=function(a){if(a===nj.ub)return a;var b=id();nj.xc[b]=a;return'google_tag_manager["'+Xc.s+'"].macro('+b+")"};nj.zg=function(a,b,c){a instanceof nj.lf&&(a=a.h(nj.Ug(b,c)),b=qa);return{Jc:a,B:b}};var qj=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||sc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},rj=function(a){I.hasOwnProperty("autoEventsSettings")||(I.autoEventsSettings={});var b=I.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},sj=function(a,b,c){rj(a)[b]=c},tj=function(a,b,c,d){var e=rj(a),f=Ha(e,b,d);e[b]=c(f)},uj=function(a,b,c){var d=rj(a);return Ha(d,b,c)};var vj=["input","select","textarea"],wj=["button","hidden","image","reset","submit"],xj=function(a){var b=a.tagName.toLowerCase();return!wa(vj,function(c){return c===b})||"input"===b&&wa(wj,function(c){return c===a.type.toLowerCase()})?!1:!0},yj=function(a){return a.form?a.form.tagName?a.form:E.getElementById(a.form):vc(a,["form"],100)},zj=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(xj(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Aj=!!D.MutationObserver,Bj=void 0,Cj=function(a){if(!Bj){var b=function(){var c=E.body;if(c)if(Aj)(new MutationObserver(function(){for(var e=0;e<Bj.length;e++)G(Bj[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;pc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Bj.length;e++)G(Bj[e])}))})}};Bj=[];E.body?b():G(b)}Bj.push(a)};var Xj=D.clearTimeout,Yj=D.setTimeout,V=function(a,b,c){if(Wd()){b&&G(b)}else return lc(a,b,c)},Zj=function(){return D.location.href},ak=function(a){return $e(af(a),"fragment")},bk=function(a){return Ze(af(a))},W=function(a,b){return Md(a,b||2)},ck=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=fj(a)):d=fj(a);return d},dk=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},ek=function(a,b,c){return Gf(a,b,void 0===c?!0:!!c)},fk=function(a,b){if(Wd()){b&&G(b)}else nc(a,b)},gk=function(a){return!!uj(a,"init",!1)},hk=function(a){sj(a,"init",!0)},ik=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":bd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";V(R("https://","http://",c))},jk=function(a,b){var c=a[b];return c};
var kk=nj.zg;var Hk=new ya;function Ik(a,b){function c(h){var k=af(h),l=$e(k,"protocol"),m=$e(k,"host",!0),n=$e(k,"port"),q=$e(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Jk(a){return Kk(a)?1:0}
function Kk(a){var b=a.arg0,c=a.arg1;if(a.any_of&&va(c)){for(var d=0;d<c.length;d++)if(Jk({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Hk.get(p);t||(t=new RegExp(c,u),Hk.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Ik(b,
c)}return!1};var Lk=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Mk={},Nk=encodeURI,Y=encodeURIComponent,Ok=oc;var Pk=function(a,b){if(!a)return!1;var c=$e(af(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Qk=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Mk.pg=function(){var a=!1;return a};var bm=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||xa();return a.hid};var mm=window,nm=document,om=function(a){var b=mm._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===mm["ga-disable-"+a])return!0;try{var c=mm.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Gf("AMP_TOKEN",nm.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return nm.getElementById("__gaOptOutExtension")?!0:!1};var rm=function(a){Aa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ba]||{};Aa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var vm=function(a,b,c){li(b,c,a)},wm=function(a,b,c){li(b,c,a,!0)},ym=function(a,b){};
function xm(a,b){}var Z={a:{}};



Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ud(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=W("gtm.referrer",1)||E.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?$e(af(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bk(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=qj(c,"gtm.click");ck(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!gk("cl")){var c=X("document");pc(c,"click",a,!0);hk("cl")}G(b.vtp_gtmOnSuccess)})}();

Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=W("gtm.url",1);c=c||Zj();var d=b[a("vtp_component")];if(!d||"URL"==d)return bk(String(c));var e=af(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?va(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=$e(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=$e(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=W(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Qk(n.vtp_fieldsToSet,"fieldName","value"),f);C(Qk(n.vtp_contentGroup,"index","group"),h);C(Qk(n.vtp_dimension,"index","dimension"),k);C(Qk(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Qk(d.vtp_fieldsToSet,"fieldName","value"),f);C(Qk(d.vtp_contentGroup,
"index","group"),h);C(Qk(d.vtp_dimension,"index","dimension"),k);C(Qk(d.vtp_metric,"index","metric"),l);var u=Qe(d.vtp_functionName);if(ra(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+id(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},B=function(O,K){if(K)for(var ta in K)K.hasOwnProperty(ta)&&
y("set",O+ta,K[ta])},z=function(){var O=function(Cm,aj,Dm){if(!Sa(aj))return!1;for(var $c=Ha(Object(aj),Dm,[]),ag=0;$c&&ag<$c.length;ag++)y(Cm,$c[ag]);return!!$c&&0<$c.length},K;if(d.vtp_useEcommerceDataLayer){var ta=!1;ta||(K=W("ecommerce",1))}else d.vtp_ecommerceMacroData&&
(K=d.vtp_ecommerceMacroData.ecommerce);if(!Sa(K))return;K=Object(K);var Hb=Ha(f,"currencyCode",K.currencyCode);void 0!==Hb&&y("set","&cu",Hb);O("ec:addImpression",K,"impressions");if(O("ec:addPromo",K[K.promoClick?"promoClick":"promoView"],"promotions")&&K.promoClick){y("ec:setAction","promo_click",K.promoClick.actionField);return}for(var Da="detail checkout checkout_option click add remove purchase refund".split(" "),Za="refund purchase remove checkout checkout_option add click detail".split(" "),
$a=0;$a<Da.length;$a++){var lb=K[Da[$a]];if(lb){O("ec:addProduct",lb,"products");y("ec:setAction",Da[$a],lb.actionField);if(Cd)for(var vb=0;vb<Za.length;vb++){var qc=K[Za[vb]];if(qc){qc!==lb&&P("GTM",13);break}}break}}},A=function(O,K,ta){var Hb=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(ta&&v[Da]||!ta&&void 0===v[Da])){var Za=w[Da]?Ca(O[Da]):O[Da];"anonymizeIp"!=Da||Za||(Za=void 0);K[Da]=Za;Hb++}return Hb},F={name:t};A(f,F,
!0);u("create",d.vtp_trackingId||e.trackingId,F);y("set","&gtm",Og(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");B("contentGroup",h);B("dimension",k);B("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;ra(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),z());var U={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Ba,d.vtp_eventValue||e.value)};A(M,U,!1);y("send",U);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){y("require","ecommerce","//www.google-analytics.com/plugins/ua/ecommerce.js");var T=function(O){return W("transaction"+O,1)},da=T("Id");y("ecommerce:addTransaction",{id:da,affiliation:T("Affiliation"),revenue:T("Total"),shipping:T("Shipping"),tax:T("Tax")});for(var ea=T("Products")||[],N=0;N<ea.length;N++){var L=ea[N];y("ecommerce:addItem",{id:da,sku:L.sku,name:L.name,category:L.category,price:L.price,quantity:L.quantity})}y("ecommerce:send");
}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),z());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var pa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:pa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ma="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ma})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ua=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ua="internal/"+ua);a=!0;var ab=R("https:","http:","//www.google-analytics.com/"+ua,f&&f.forceSSL);
V(ab,function(){var O=Oe();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();






Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Jb.ra]=null;c[Jb.Re]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Zj()}function b(f,h){pc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:bk(l),J:ak(l)})})}function c(f,h){pc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:bk(l),J:ak(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(ra(m))try{l[f]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:bk(Zj()),
J:ak(Zj())})}}catch(n){}}function e(){var f={source:null,state:X("history").state||null,url:bk(Zj()),J:ak(Zj())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;ck(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=X("self");if(!gk("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);hk("hl")}G(f.vtp_gtmOnSuccess)})}();











var zm={};zm.macro=function(a){if(nj.xc.hasOwnProperty(a))return nj.xc[a]},zm.onHtmlSuccess=nj.ce(!0),zm.onHtmlFailure=nj.ce(!1);zm.dataLayer=Nd;zm.callback=function(a){gd.hasOwnProperty(a)&&ra(gd[a])&&gd[a]();delete gd[a]};function Am(){I[Xc.s]=zm;Ja(hd,Z.a);Ab=Ab||nj;Bb=re}
function Bm(){tg.gtm_3pds=!0;I=D.google_tag_manager=D.google_tag_manager||{};if(I[Xc.s]){var a=I.zones;a&&a.unregisterChild(Xc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)sb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)wb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)ub.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);tb.push(q)}yb=Z;zb=Jk;Am();mj();ve=!1;we=0;if("interactive"==E.readyState&&!E.createEventObject||"complete"==E.readyState)ye();else{pc(E,"DOMContentLoaded",ye);pc(E,"readystatechange",ye);if(E.createEventObject&&E.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&ze()}pc(D,"load",ye)}Ki=!1;"complete"===E.readyState?Mi():pc(D,
"load",Mi);a:{if(!Cd)break a;D.setInterval(Dd,864E5);}
dd=(new Date).getTime();
}}Bm();

})()
