﻿// ==UserScript==
// @name           XSAK
// @version        X.2.4
// @namespace      XSAK
// @description    Strumenti di utilità 
// @include        http://apps.facebook.com/gloryofrome/*
// @resource 	   URL_CASTLE_BUT 	http://i.imgur.com/MPlZr.png
// @resource 	   URL_CASTLE_BUT_SEL 	http://i.imgur.com/XWR4B.png
// @include        http://*.gloryofrome.com/*main_src.php*
// @include        http://*.gloryofrome.com/*gameChrome_src.php*
// @include        http://www.gloryofrome.com/iframeCanvas.php*
// ==/UserScript==

var Version  = 'X.2.4';

var EVersion ="Versione "+ Version +" progetto di BeWorld 2011 in versione italiana grazie a magomagu";

var DISABLE_BULKADD_LIST = false;
var DEBUG_TRACE = true;
var MAP_DELAY = 1500;
var DEFAULT_ALERT_SOUND_URL = 'http://koc.god-like.info/alarm.mp3';
var SWF_PLAYER_URL = 'http://koc.god-like.info/alarmplayer.swf';   


var URL_CASTLE_BUT = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXCAMAAAGkBsQ5AAABa1BMVEX%2F%2F8X%2F98X%2F973%2F97X%2F77X%2F7633773%2F76X377X3763%2F5q3%2F5qX%2F5pz35q335qX%2F3pz%2F3pT33pz%2F1pT%2F1oz%2F1oT31pT31oz%2FzoT%2Fznv3zoT%2FxXv%2FxXP%2FxWv3xXv3xXP%2FvWv%2FvWP3vWv3vWP%2FtWP%2FtVr%2FtVLmvWv3tWP3tVr3tVL%2FrVL%2FrUrmtWP3rVL3rUrvrVL%2FpUrvrUr%2FpULmrVrmrVL3pUr3pULmpUL3nDrepULWpVLWpUrmnDrFpUK1pVrOnDqcnFKcnEqMnEp7lHN7lGtzlGNrlGtjjEpajFpShFJSe2NChEJKe1o6hDohjDFCc1oZjDEhhDEQjDEAlDEpezoZhDEhezoQhDEAjDEpczoZezoIhDEhc0IhczoAhDEZczoIezEhazoAezEhY0IAczEAcykIazEhWkIAazEAaykIYzEhUkIAYzEAWjEAUjEAUikASjEASikAQjEAQikAOjEAOikAMTEAMSkAKSlOGAcLAAAACXBIWXMAAAsSAAALEgHS3X78AAABVklEQVQYGQXBPW4TYRiF0ee%2B3x2DRSxRIFJTGIkVUFDQIbEDlkE5%2B8kWWEKKIBSB5AohXBGUSAaCIdgz3x%2FnaARztjS3RSPodPkmfuzReLbOh1fm72a4h3kxyWgE8NXPz8%2F%2FhC%2FzRXLM3cmeqvGDl7Mfa9ztT9pvp3%2FDOpjOr7Yft9PXjPHxE%2Bl6p4SJqSq5RsL4EAtZaUAjAABoBADAt%2Fty8ovVnhQ%2Bfx%2BbDTfXQ9Bz5H7IdWGV9k588NJWrQiXjMkdly6Fo9beRap29F4QJBxTE%2Bo9bF7XuUpJsp8BAGjcATSgADOQWRsfLu8WT0%2B33wcePknfJj%2B6j3Hb17m5HQsr1%2Fm4aGBEbtp8uXPWzcSBlhYYXKunObLoOyU1jFH02oVRZNFJQ2CCko26MIrC3MAEpRdcSVkYFYzBuaAuQFFAgzFBK0GVZhYoaUYYVm8b0IAGNDr8B8ZXpEbZNGQ6AAAAAElFTkSuQmCC";
var URL_CASTLE_BUT_SEL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAXAgMAAAHuttyYAAAACVBMVEX%2F%2F%2F8AOjEAKSnbo5E5AAAACXBIWXMAAAsSAAALEgHS3X78AAAAW0lEQVQI12NYwdAAhCsYOICwQQGEpiYwrGpgCHRgcIChUAeGqaERDBMZJRgmMCDwqlUrgHgBQ2hoAIMjiwAYOzBgxyA1ILVTQ4GggWEKK4MIK4JiYGAgiYKYAgBFlyWR9CCfyAAAAABJRU5ErkJggg%3D%3D";


var Options = {
  ptWinIsOpen : false,
  ptWinDrag : true,
  enableFoodWarnTchat : false,
  pbGoldEnable : false,
  foodWarnHours : 24,
  pbChatOnRight	: false,
  pbWideMap : false,
  pbGoldHappy : 75,
  pbRessTime : 15,
  pbRessEnable : false,
  ptWinPos : {},
  HelpRequest : true,
  DeleteRequest : false,
  alertConfig : {aChat:true, aPrefix:'**ATTACCANO!**'},
  towerMarches : {},
};

var GlobalOptions = {
  pbWideScreen : true,
};

var JSON;if(!JSON){JSON={};}(function(){"use strict";function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}if(typeof rep==='function'){value=rep.call(holder,key,value);}switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}return str('',{'':value});};}if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}return reviver.call(holder,key,value);}text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}}());
var JSON2 = JSON; 


var my = {};
var Cities = {};
var currentName = 'Overview';
var Seed = unsafeWindow;
var currentPage ='';

var mainPop;
var Tabs = [
  ['Overview', 'Sommario'],
  ['AllianceList', 'Ricerche'],
  ['Hud', 'Rapporti'],
  ['Reassign', 'Riassegna'],
  ['TranspAuto', 'Trasporti'],
  ['Wilds', 'Terre'],
  ['Crests', 'Requisiti'],
  ['Options' , 'Opzioni']
];

var ptStartupTimer = null;
var myServerId     = null;

function getServerId() {
  if (myServerId == null){
    var m=/^[a-zA-Z]+([0-9]+)\./.exec(document.location.hostname);
    if (m)
      myServerId = m[1];
    else
      myServerId = '??';
    }
    return myServerId;
  }
  if (document.URL.search(/apps.facebook.com\/gloryofrome/i) >= 0){
    facebookInstance ();
    return;
  }

  function setWide (){
    var iFrame = null;
    var e = document.body;
    if(e){
      for (var c=0; c<e.childNodes.length; c++){
        if (e.childNodes[c].tagName=='DIV') {
          if (e.childNodes[c].firstChild.tagName == 'IFRAME'){
            iFrame = e.childNodes[c].firstChild; 
            break;
          }
        }
      }
    }   
    iFrame.style.width = '100%';
  }
  setTimeout (setWide, 1000);

/***  Run only in "apps.facebook.com" instance ... ***/
  function facebookInstance (){

    function setWide (){
      var iFrame = null;
      var e = document.getElementById('app_content_140956165916773');
      if(e){
        e = e.firstChild.firstChild;
        for (var c=0; c<e.childNodes.length; c++){
          if (e.childNodes[c].tagName=='SPAN' && e.childNodes[c].firstChild.className == 'canvas_iframe_util'){
            iFrame = e.childNodes[c].firstChild; 
            break;
          }
        }
      }
      if (!iFrame){
        var iframes = document.getElementsByTagName('iframe');
        for (var i=0; i<iframes.length; i++){
          if (iframes[i].className=='canvas_iframe_util'){
            iFrame = iframes[i];
            break; 
          } 
        }
      }
      if (!iFrame){
        setTimeout (setWide, 1000);
        return;
      }
      try{    
        document.getElementById('rightCol').parentNode.removeChild(document.getElementById('rightCol'));
        document.getElementById('leftColContainer').parentNode.removeChild(document.getElementById('leftColContainer'));
        document.getElementById('sidebar_ads').parentNode.removeChild(document.getElementById('sidebar_ads'));
        document.getElementById('canvas_nav_content').parentNode.removeChild(document.getElementById('canvas_nav_content'));
      } catch (e){
        // toolkit may have removed them already!
      }
      var e = document.getElementById('mainContainer');
      if(e){
        document.getElementById('content').style.minWidth = '1220px';
        for(i=0; i<e.childNodes.length; i++){
          if(e.childNodes[i].id == 'contentCol'){
            e.childNodes[i].style.width = '100%';
            e.childNodes[i].style.margin = '0px';
            e.childNodes[i].style.paddingTop = '5px';
            e.childNodes[i].childNodes[1].style.width = '99%';
            break;
          }
        }
      }
      var e = document.getElementById('globalContainer');
      if(e){
        e.style.width = '100%';
        if(e.firstChild){
          e.firstChild.style.width = '80%';
          e.firstChild.style.margin = '0 10%';
        }
      }
      var e = document.getElementById('bottomContent');
      if(e){
        e.style.padding = "0px 0px 12px 0px";
      }
      var e = document.getElementById('contentArea');
      if(e){
        e.style.width = '100%';
        for(i=0; i<e.childNodes.length; i++){
          if(e.childNodes[i].tagName == 'div'){
            e.childNodes[i].style.width = '100%';
            e.childNodes[i].firstChild.style.width = '100%';
            break;
          }
        }
      }
      iFrame.style.width = '100%';
      var div = searchDOM (document.getElementById('content'), 'node.tagName=="DIV" && node.className=="UIStandardFrame_Content"', 7);
      if (div){
        div.style.width ='100%';
      }
      var div = searchDOM (document.getElementById('content'), 'node.tagName=="DIV" && node.className.indexOf("SidebarAds")>=0', 7);
      if (div){
        div.style.display ='none';
      }
    }
    setWide();
  }
  var WideScreen = {
    chatIsRight : false,
    useWideMap  : false,
    rail        : null,
    init : function (){
      t = WideScreen;
      if (GlobalOptions.pbWideScreen){
        t.rail = searchDOM (document.getElementById('mod_maparea'), 'node.className=="maparea_rrail"', 10);
        GM_addStyle ('.modalCurtain {width:760px !important} .mod_comm_mmb{z-index:0 !important}');
        try {
          document.getElementById('mainCrossBar').parentNode.removeChild(document.getElementById('mainCrossBar'));
          document.getElementById('crossPromoBarContainer').parentNode.removeChild(document.getElementById('crossPromoBarContainer'));
        } catch (e) {
        }
      }
    },
    setChatOnRight : function (tf){
      t = WideScreen;
      if (tf == t.chatIsRight || !GlobalOptions.pbWideScreen)
        return;
      if (tf){
        var chat = document.getElementById('kocmain_bottom').childNodes[1];
        if (!chat || chat.className!='mod_comm')
          setTimeout (function (){t.setChatOnRight(tf)}, 1200);
        document.getElementById("comm_tabs").style.left = '761px';
        document.getElementById("comm_tabs").style.top = '-590px';
        document.getElementById("comm_tabs").style.backgroundColor="#60533E";
        var div = searchDOM (document.getElementById('kocmain_bottom'), 'node.tagName=="DIV" && node.className.indexOf("comm_body comm_global")>=0', 7);
        if (div){
          //alert('troue!!');
          div.style.left = '761px';
          div.style.top = '-565px';
          div.style.height= '700px';
          div.style.backgroundColor="#60533E";
          var div1 = searchDOM (div, 'node.tagName=="DIV" && node.className.indexOf("chat-wrapper")>=0', 7);
          if (div1){
            div1.style.height='700px';
          }
        }
        document.getElementById("mod_comm_list1").style.height= '650px';
        document.getElementById("mod_comm_list2").style.height= '650px';
      } else {
        document.getElementById("comm_tabs").style.left = '';
        document.getElementById("comm_tabs").style.top = '';
        document.getElementById("comm_tabs").style.backgroundColor="";
        var div = searchDOM (document.getElementById('kocmain_bottom'), 'node.tagName=="DIV" && node.className.indexOf("comm_body comm_global")>=0', 7);
        if (div){
          div.style.left = '';
   	  div.style.top = '';
          div.style.backgroundColor="";
          var div1 = searchDOM (div, 'node.tagName=="DIV" && node.className.indexOf("chat-wrapper")>=0', 7);
          if (div1){
            div1.style.height= '';
          }
        }
        document.getElementById("mod_comm_list1").style.height= '100%';
        document.getElementById("mod_comm_list2").style.height= '100%';
      }
      t.chatIsRight = tf;
    },
    useWideMap : function (tf) {
      t = WideScreen;
      if (tf == t.useWideMap || !GlobalOptions.pbWideScreen)
        return;
      if (tf){
        t.rail.style.display = 'none';
        document.getElementById('mapwindow').style.height = "436px";
        document.getElementById('mapwindow').style.width = "1220px";
        document.getElementById('mapwindow').style.zIndex = "50";
      } else {
        t.rail.style.display = 'block';
        document.getElementById('mapwindow').style.height = "439px";
        document.getElementById('mapwindow').style.width = "760px";
        document.getElementById('mapwindow').style.zIndex = "";
      }
    },
  }

  function ptStartup() {
    readOptions();
    var Seed = unsafeWindow;
    var metc = getClientCoords(document.getElementById('main_engagement_tabs'));
    if (metc.width==null || metc.width==0){
      ptStartupTimer = setTimeout (ptStartup, 1000);
      return;
    }
    var styles = '.xtab {padding-right: 5px; border:none; background:none; white-space:nowrap;}\
    .hostile td { background:crimson; }.friendly td{background:lightblue; }.ally td{background:royalblue; }\
    .Hostile td { background:crimson; }.Friendly td{background:lightblue; }.Ally td{background:royalblue; }\
    .neutral td { background:lightgreen; }.unaligned td { background:gold; }\
    .Neutral td { background:lightgreen; }.Unaligned td { background:gold; }\
    .xtabBR {padding-right: 5px; border:none; background:none;}\
    div.ptDiv {background-color:#f0f0f0;}\
    table.ptTab tr td {border:none; background:none; white-space:nowrap;}\
    table.ptTabPad tr td {border:none; background:none; white-space:nowrap; padding: 2px 4px 2px 8px;}\
    table.ptTabBR tr td {border:none; background:none;}\
    table.ptTabLined tr td {border:1px none none solid none;}\
    table.ptTabPad tr td.ptentry {background-color:#ffeecc; padding-left: 8px;}\
    table.ptTabOverview tr td {border:1px none none solid none; white-space:nowrap; padding: 1px 2px;  font-size:12px;}\
    table.ptNoPad tr td {border:none; background:none; white-space:nowrap; padding:0px}\
    .ptOddrow {background-color:#eee}\
    .ptstat {border:1px solid; border-color:#ffffff; font-weight:bold; padding-top:2px; padding-bottom:2px; text-align:center; color:#ffffff; background-color:#357}\
    .ptStatLight {color:#ddd}\
    .ptentry {padding: 7px; border:1px solid; border-color:#000000; background-color:#ffeecc; white-space:nowrap;}\
    .ptErrText {font-weight:bold; color:#600000}\
    .castleBut {outline:0px; margin-left:0px; margin-right:0px; width:24px; height:26px; font-size:12px; font-weight:bold;}\
    .castleBut:hover {border-size:3px; border-color:#000;}\
    .castleButNon {background-image:url("'+ URL_CASTLE_BUT +'")}\
    .castleButSel {background-image:url("'+ URL_CASTLE_BUT_SEL +'")}\
    button::-moz-focus-inner, input[type="submit"]::-moz-focus-inner { border: none; }\
    .ptChatWhisper {}\
    .ptChatAttack {color: #000; font-weight:bold; background-color: #FF7D7D; }\
    .ptChatAlliance {}\
    .ptChatGlobal {background-color: #fdd}\
    .ptChatIcon {border: 2px inset blue}\
    span.whiteOnRed {padding-left:3px; padding-right:3px; background-color:#700; color:white; font-weight:bold}\
    span.boldRed {color:#800; font-weight:bold}\
    span.boldDarkRed {color:#600; font-weight:bold}\
    a.ptButton20 {color:#ffff80}\
    .matTab {}\
    .matTabNotSel { padding:0 0 0 20px;  color : #2F230E; font: bold 11px Georgia; white-space: nowrap; cursur:pointer; padding:0 0px 0 0;height: 17px; }\
    .matTabNotSel span { background: url("http://cdn1.kingdomsofcamelot.com/fb/e2/src/img/nav/tab_unselected.png") no-repeat scroll left 0 transparent;    display: inline-block;    height: 16px;    padding: 1px 2px 0 7px;    text-decoration: none;   }\
    .matTabSel { color : #2F230E; font: bold 11px Georgia; white-space: nowrap; cursur:pointer; padding:0 0px 0 0;height: 17px;   }\
    .matTabSel span { background: url("http://cdn1.kingdomsofcamelot.com/fb/e2/src/img/nav/tab_selected.png") no-repeat scroll left top transparent; display: inline-block;    height: 16px;    padding: 1px 2px 0 7px;    text-decoration: none;   }\
    tr.CPopupTop td { background-color:#dde; border:none; height: 15px;  padding:0px; }\
    .BOptretry_top { background-color:#a00; color:#fff; border:none; height: 21px; padding:0px; }\
    input.ptButCancel {background-color:#a00; font-weight:bold; color:#fff}\
    .id2_CPopupTop td { background-color:#ffffff;}\
    .CPopup .CPopMain { background-color:#f8f8f8; padding:3px;}\
    .CPopup .id2_CPopMain { background-color:#8ff; }\
    .CPopup  { border:3px ridge #666 }\
    .idp2_CPopup { opacity:0.9; }';

    setCities();
    if (Options.ptWinPos==null || Options.ptWinPos.x==null|| Options.ptWinPos.x=='' || isNaN(Options.ptWinPos.x)){
      var c = getClientCoords (document.getElementById('main_engagement_tabs'));
      Options.ptWinPos.x = c.x+4;
      Options.ptWinPos.y = c.y+c.height;
      saveOptions ();
    }
    GM_addStyle (styles); 
    mainPop = new CPopup ('idp', Options.ptWinPos.x, Options.ptWinPos.y, 850,605, true, 
      function (){
        my[currentName].hide();
        Options.ptWinIsOpen=false; 
        saveOptions()
      }
    );
    var mainDiv = mainPop.getMainDiv();
    mainPop.getMainDiv().innerHTML = '<STYLE>'+ styles +'</style>';
    mainPop.getTopDiv().innerHTML = '<TABLE cellspacing=0 width=100%><TR class=CPopupTop valign=bottom><TD><SPAN id=idTabs></span></td><TD align=right>'+ Version +'&nbsp;</td></tr></table>';
    var eTabs = document.getElementById('idTabs');
    for (k=0; k<Tabs.length; k++){
      var a=document.createElement('a');
      a.className='matTabNotSel';
      a.id = 'aa'+ Tabs[k][0];
      a.innerHTML='<span id="sp'+ Tabs[k][0] +'" class="matTab">'+ Tabs[k][1] +'</span>';
      eTabs.appendChild(a);
      a.addEventListener('click', clickedTab, false);
      my[Tabs[k][0]].init();
      cont = my[Tabs[k][0]].getContent();
      cont.style.display = 'none';
      mainDiv.appendChild(cont);
    }
    setTabStyle (document.getElementById ('aaOverview'), true);
    my.Overview.getContent().style.display = 'block';
  
    if (Options.ptWinIsOpen){
      mainPop.show (true);
      my[currentName].show();
    }
    window.addEventListener('unload', onUnload, false);
    AddMainTabLink("X-GOR", eventHideShow, mouseMainTab);
 
    CollectGold.init();
    CollectRessource.init();
    FoodAlerts.init();
    WideScreen.init ();
    WideScreen.setChatOnRight (Options.pbChatOnRight);
    WideScreen.useWideMap (Options.pbWideMap);
  TowerAlerts.init();
  TowerAlerts.setPostToChatOptions(Options.alertConfig);
  
    setInterval (HandleChatPane,2500);
  }


  function onUnload (){
    Options.ptWinPos = mainPop.getLocation();
    saveOptions();
  }

/*************************************** TAB SOMMARIO ************************************************/

my.Overview = {
 
  cont : null,
  displayTimer : null,
  checkBox:null,
  checkBox1:null,
  Overview : function (){
  },

  init : function (){
    this.cont = document.createElement('div');
    return this.cont;
  },

  getContent : function (){
    return my.Overview.cont;
  },

  hide : function (){
    clearTimeout (my.Overview.displayTimer);
  },

  show : function (){
    var rownum = 0;
    var totalentre = 0;  
    var t = my.Overview;
    clearTimeout (t.displayTimer);
    dt = new Date ();
    dt.setTime (unsafeWindow.player.datejoinUnixTime * 1000);
    str = '<div style="height:550px;max-height:550px;overflow-y:auto"><DIV class=ptstat style="margin-top:2px; margin-bottom:2px; "><TABLE cellspacing=0 cellpadding=0 class=ptTab width=97% align=center>\
      <TR align=left><TD>' + unsafeWindow.player.name + ' <SPAN class=ptStatLight>Entrato il:</span> '+ dt.toLocaleDateString() +'</td>\
      <TD><SPAN class=ptStatLight>Gloria: </span> ' + addCommasInt(unsafeWindow.player.might()) +'</td>\
      <TD><SPAN class=ptStatLight>Alleanza: </span> ' + getMyAlliance()[1] + '</td>\
      <TD align=right><SPAN class=ptStatLight>Mondo:</span> ' + unsafeWindow.domainName +'</td></tr></table></div><span id="debugtest"></span>';
    str += "<TABLE class='ptTabOverview' cellpadding=0 cellspacing=0><TR valign=top align=right><TD width=100></td><TD width=88 style='background: #ffc'><B>TOTALI</b></td>";
    for(i=0; i<Cities.numCities; i++) {
      Gate = Cities.cities[i].c.defending;
      if(Gate == 0) var couleurr="#77EE77";
      if(Gate != 0) var couleurr="#EE7777";
      str += "<TD width=81 style='background-color:"+couleurr+"' align=center><B>"+ Cities.cities[i].c.name +'</b><BR><a onclick="KB.Controllers.MapHelper.gotoCoord('+Cities.cities[i].c.x +','+ Cities.cities[i].c.y+');">('+Cities.cities[i].c.x +','+ Cities.cities[i].c.y+')</a></td>';
    }
    str +="</tr>";
    str += "<tr><td><br></td></tr>";
    var m="";
    for(i=0; i<Cities.numCities; i++) {
      color='black';
      if (Cities.cities[i].c.queues.building.activeSlots()[0] || Cities.cities[i].c.queues.building.activeSlots()[1]) {
        if (parseInt(Cities.cities[i].c.queues.building.activeSlots()[0].typeId())!=99) { 
          var temprestant=Cities.cities[i].c.queues.building.activeSlots()[0].secondsLeft();
        } else {
          if (Cities.cities[i].c.queues.building.activeSlots()[1]) {
            var temprestant=Cities.cities[i].c.queues.building.activeSlots()[1].secondsLeft();
          } else {
            var temprestant=0;
            color='red';
          }
        }
        m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ timestrShort(temprestant) + "</td>";
      } else {
        m += "<TD align=right width=81 style='background:#e8e8e8;color:red;'>"+ timestrShort(0)+"</td>";
      }
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Construzioni</td><td style='background: #e8e8e8' align=right>&nbsp;"+ m +"</tr>"; 
    var m="";
    for(i=0; i<Cities.numCities; i++) {
      color='black';
      if (Cities.cities[i].c.queues.research.activeSlots()[0]) {
        m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ timestrShort(Cities.cities[i].c.queues.research.activeSlots()[0].secondsLeft())+"</td>";
      } else {
        m += "<TD align=right width=81 style='background:#e8e8e8;color:red;'>"+ timestrShort(0)+"</td>";
      }
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Ricerche</td><td style='background: #e8e8e8' align=right>&nbsp;"+ m +"</tr>"; 
    str += "<tr><td><br></td></tr>";
    var m="";
    var popTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.population.cap()) +"</td>";
      popTotal+=parseInt(Cities.cities[i].c.population.cap());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Limite popolazione</td><td style='background: #e8e8e8' align=right>"+addCommas(popTotal)+" "+ m+"</tr>"; 
    var m="";
    var popTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.population.count()) +"</td>";
      popTotal+=parseInt(Cities.cities[i].c.population.count());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Popolazione attuale</td><td style='background: #e8e8e8' align=right>"+addCommas(popTotal)+" "+ m+"</tr>"; 
    var m="";
    var popTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.population.labor()) +"</td>";
      popTotal+=parseInt(Cities.cities[i].c.population.labor());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Manodopera</td><td style='background: #e8e8e8' align=right>"+addCommas(popTotal)+" "+ m+"</tr>"; 
    var m="";
    var popTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.population.count()-Cities.cities[i].c.population.labor()) +"</td>";
      popTotal+=parseInt(Cities.cities[i].c.population.count()-Cities.cities[i].c.population.labor());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Popolazione disponibile</td><td style='background: #e8e8e8' align=right>"+addCommas(popTotal)+" "+ m+"</tr>"; 
    var m="";
    var popTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      if (Cities.cities[i].c.population.happiness()<50)
        m += "<TD align=right width=81 style='background:#e8e8e8;color:red'><b>"+ Cities.cities[i].c.population.happiness() +" %</td>";
      else
        m += "<TD align=right width=81 style='background:#e8e8e8'>"+ Cities.cities[i].c.population.happiness() +" %</td>";
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Felicità</td><td style='background: #e8e8e8' align=right>&nbsp; "+ m+"</tr>"; 
    var m="";
    var popTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.taxRate()) +" %</td>";
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Imposte</td><td style='background: #e8e8e8' align=right>&nbsp; "+ m+"</tr>"; 
    str += "<tr><td><br></td></tr>";
    var m="";
    var goldTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD width=81 style='background:#e8e8e8' align=right>"+ addCommas(Cities.cities[i].c.silver()) +'</td>';
      goldTotal+=parseInt(Cities.cities[i].c.silver());
    }
    str += "<tr align=right><td style='background:#e8e8e8' align=right><b>Argento</td><td style='background:#e8e8e8' align=right>"+addCommas(goldTotal)+" "+ m + "</tr>" ; 
    for (var nbr=1; nbr<=4; nbr++) {
      if (nbr % 2)
        style = '';
      else
        style = " style = 'background: #e8e8e8'";
        var m="";
        var resTotal=0;
        for(var i=0; i<Cities.numCities; i++) {
          m += "<TD width=81 "+style+" align=right>"+ addCommas(Cities.cities[i].c.resources[nbr].count) +'</td>';
          resTotal+=parseInt(Cities.cities[i].c.resources[nbr].count);
        }
        str += "<tr><td "+style+" align=right><b>"+unsafeWindow.arStrings.ResourceName[nbr]+"</td><td "+style+" align=right>"+addCommas(resTotal)+" "+ m+"</tr>"; 
    }
    str += "<tr><td><br></td></tr>";
    // Production de nourriture + ENTRETIEN !
    var m="";
    var prodTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.resources[1].hourlyTotalRate())+"/"+unsafeWindow.arStrings.TimeStr.timeHr+"</td>";
      prodTotal+=parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>"+unsafeWindow.arStrings.Common.Production+"</td><td style='background: #e8e8e8' align=right>"+addCommas(prodTotal)+"/"+unsafeWindow.arStrings.TimeStr.timeHr+""+ m+"</tr>"; 
    var m="";
    var entTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      color='black';
      // if ( parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) < Cities.cities[i].c.upkeep() ) color='red';
      m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ addCommas(Cities.cities[i].c.upkeep())+"/"+unsafeWindow.arStrings.TimeStr.timeHr+"</td>";
      entTotal+=parseInt(Cities.cities[i].c.upkeep());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>"+unsafeWindow.arStrings.Common.UpKeep+"</td><td style='background: #e8e8e8' align=right>"+addCommas(entTotal)+"/"+unsafeWindow.arStrings.TimeStr.timeHr+""+ m+"</tr>"; 
    var m="";
    var entTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      color='black';
      if ( parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) < parseInt(Cities.cities[i].c.upkeep()) ) {
        // entretien supérieur à la production
        difference = parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) - parseInt(Cities.cities[i].c.upkeep());
        var timeLeft = parseInt(Cities.cities[i].c.resources[1].count)  / (0-difference) * 3600;
        if (timeLeft > 86313600)
          autonomi = '----';
        else {
          if (timeLeft<(Options.foodWarnHours*3600)) {
            autonomi = '<SPAN class=whiteOnRed><b>'+ timestrShort(timeLeft) +'</b></span>';
          } else {
            autonomi = ''+ timestrShort(timeLeft) +'';
          }
        }
        m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ autonomi +"</td>";
      } else {
        m += "<TD align=right width=81 style='background:#e8e8e8;color:black;'>---</td>";
      }
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Autonomia</td><td style='background: #e8e8e8' align=right>&nbsp;"+ m+"</tr>"; 
    str += "<tr><td><br></td></tr>";
    for (var nbu=1; nbu<=12;nbu++) {
      var m="";
      var unitTotal=0;
      if (unsafeWindow.arStrings.unitName["u"+nbu]) {
        if (nbu % 2)
          style = '';
        else
          style = " style = 'background: #e8e8e8'";
          for(var i=0; i<Cities.numCities; i++) {
            m += "<TD width=81 "+style+" align=right>"+ addCommas(Cities.cities[i].c.troops[nbu].count()) +'</td>';
            unitTotal+=parseInt(Cities.cities[i].c.troops[nbu].count());
          }
          str += "<tr><td "+style+" align=right><b>"+unsafeWindow.arStrings.unitName["u"+nbu]+"</td><td "+style+" align=right>"+addCommas(unitTotal)+" "+ m + "</tr>"; 
      }
    }
    str += "<tr><td><br></td></tr>";
    var m="";
    var genTotal=0;
    for(i=0; i<Cities.numCities; i++) {
      color='black';
      m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ Cities.cities[i].c.generalsCount()+"</td>";
      genTotal+=parseInt(Cities.cities[i].c.generalsCount());
    }
    str += "<tr><td style='background: #e8e8e8' align=right><b>Generali</td><td style='background: #e8e8e8' align=right>"+genTotal+""+m+"</tr>"; 
    str += "</table>";
    my.Overview.cont.innerHTML = str +'</div><br>'+EVersion;
    t.displayTimer = setTimeout (t.show, 4000);
  },
};


/************************ Tower Alerts ************************/
var TowerAlerts = {
  viewImpendingFunc : null,
  generateIncomingFunc : null,
  fixTargetEnabled : false,
  
  init : function (){
    var t = TowerAlerts; 
  },
  secondTimer : null,
  setPostToChatOptions : function (obj){
    var t = TowerAlerts;
    clearTimeout(t.secondTimer);
    if (Options.alertConfig.aChat)
      t.e_eachSecond();
  },
  e_eachSecond : function (){   // check for incoming marches
    var t = TowerAlerts;
    var now = unixTime();
    //logit("on scan pour attaque !");
    unsafeWindow.player.allCities().sortBy(function(c){return c.number}).each(function(f,c){
      var d="",e="";
      if(f.underAttack()) {
        Cities.byID[f.id].c.incomingAttackMarches().each(function(c){
          var b=Cities.byID[f.id].c.marches.incoming[c.id];
          var arrivalTime = b.secondsToDestination()>0?b.secondsToDestination():0;
          logit("rilevato attacco" +t.getTowerMarch(b.id) + " " + arrivalTime);
          if ((arrivalTime>0)  && (t.getTowerMarch(b.id)==null || t.getTowerMarch(b.id)==undefined)) 
          {
            t.addTowerMarch (b.id, arrivalTime);
            t.postToChat (f, c, false);
            saveOptions (); 
          }
        });
      }
    });
    t.secondTimer = setTimeout (t.e_eachSecond, 5000);
  },
  addTowerMarch : function (id, arrivalTime){
    var t = TowerAlerts;
    var now = unixTime();
    for (k in Options.towerMarches){
      if ((Options.towerMarches[k].arrival+Options.towerMarches[k].added) < now) {
        //Options.towerMarches[k] = null;
        delete Options.towerMarches[k];
      }
    }
    Options.towerMarches['m' + id] = { added:now, arrival:arrivalTime };
  },  
  getTowerMarch : function (mid){ 
    var t = TowerAlerts;
    return Options.towerMarches['m'+mid];
  },
  postToChat: function(f, c, force){
    var t = TowerAlerts;
    if(Cities.byID[f.id].c.wilds[c.to.tileId]){
      var a='Terra ' + unsafeWindow.Watchtower.generateCoords(c.to.cityId,c.to.tileId)
    } else{
      var a='Citta ' + unsafeWindow.player.cities[c.to.cityId].name + ' ('+unsafeWindow.player.cities[c.to.cityId].x +','+ unsafeWindow.player.cities[c.to.cityId].y +')';
    }
    var b=Cities.byID[f.id].c.marches.incoming[c.id];
    var attaquant=unsafeWindow.GOR.players[c.from.playerId]?unsafeWindow.GOR.players[c.from.playerId].name:"?";
    var attaou= "("+unsafeWindow.GOR.players[c.from.playerId].x+", "+unsafeWindow.GOR.players[c.from.playerId].y+")";
    var arrivalTime = b.secondsToDestination()>0?timestr(b.secondsToDestination()):message;
    var msg =' ***TRUPPE*** : ';
    unsafeWindow.Object.keys(b.units).each(function(h){
      if(b.units[h].sent>0) {
        msg += b.units[h].sent + ' ' + unsafeWindow.arStrings.unitName["u"+h] + ', ';
      }
    });
    msg = msg.slice(0, -2);
    msg += ' (arrivo tra ' + arrivalTime +').' ;
    var mess = Options.alertConfig.aPrefix +' la mia '+ a + ' attaccata da ' + attaquant + ' ' + msg;
    //logit(mess);
    sendChat("/a " + mess);
  }		
}

/************************ TAB RICERCA ************************/
 
my.Hud = {
  cont:null,
  state : null,
  popReport :null,
  getContent : function (){
    var t = my.Hud;
    return t.cont;
  },
   
  init : function (){
    var t = my.Hud;
    t.cont = document.createElement('div');
    return this.cont;
  },
  show : function () {
    var t = my.Hud;
    t.getAllianceReports();
    unsafeWindow.getReport = t.getReportBody;
    t.cont.innerHTML = '\
    <DIV class=ptstat>Ricerca attacchi nei report alleanza</div>\
    <DIV class=ptentry style="height:30px"><table>\
    <tr><td class=xtab> Pagine : \
    <span id=idSpanNumPages>1</span>\
    <select id="idHudSelect">\
    <option selected value=1> 1 </option>\
    <option value=2> 2 </option>\
    <option value=5> 5 </option>\
    <option value=10> 10 </option>\
    <option value=20> 20 </option>\
    <option value=30> 30 </option>\
    <option value=40> 40 </option>\
    <option value=50> 50 </option>\
    <option value=60> 60 </option>\
    <option value=70> 70 </option>\
    <option value=80> 80 </option>\
    <option value=90> 90 </option>\
    <option value=100> 100 </option>\
    <option value=99999> All </option>\
    </select></td>\
    <TD class=xtab><INPUT id="idHudSearch" type=submit value="Avviare la ricerca" />\
    <span id=idSpanHudErrorMsg></span><td><select id="idHudTypeSearch"><option value="">Tutti i report</option><option value="0">Attacchi subiti</option><option value="1">Attacchi fatti</option><option value="2">Rinforzi</option></select>\
    <select id="idHudMedSearch"><option value="">Tutti</option><option value=1>Solo i miei</option></select></td></tr>\
    </table></div>\
    <DIV id="hudResultsDiv" style="height:515px; max-height:545px; overflow-y:auto;"></div>';
    document.getElementById('idHudSearch').addEventListener ('click', t.handleHudSearch, false);
    document.getElementById('idHudSelect').addEventListener ('click', t.handleHudSelect, false);
    document.getElementById('idHudMedSearch').addEventListener ('click', t.DisplayReports, false);
    document.getElementById('idHudTypeSearch').addEventListener ('click', t.DisplayReports, false);
    setTimeout(function() {
      t.handleHudSearch();
    }, 100);
  },
  getReportBody : function(Date1,ID,TileId,SideNum, Nom1, Coord1, Nom2, Coord2){
    var t = my.Hud;
    if(SideNum=="Ent") SideNum=0;
    if(SideNum=="Sor") SideNum=1;
    if(SideNum=="Ren") SideNum=0;
    var c = {};
      c.pf=0;
      c.rid=ID;
      c.side=SideNum;
      if (SideNum=="Ren") SideNum = 2;
      unsafeWindow.AjaxCall.gPostRequest("fetchReport.php",c,
      function(rslt){
        t.showReportBody(Date1, rslt.data,TileId,SideNum,Nom1, Coord1, Nom2, Coord2);     
      },
      function (rslt) {
      }
      );
    },
    showReportBody: function (Date1,rslt,TileId,SideNum,Nom1,Coord1,Nom2,Coord2) {
      var t = my.Hud;
      if (t.popReport == null) {
        t.popReport = new CPopup('pbShowBarbs', 0, 0, 500, 400, true, function() {clearTimeout (1000);});
        t.popReport.centerMe (mainPop.getMainDiv());  
      }
      var m = ''; 
      m+='<TABLE class=ptTab cellpadding=3>';
    //alert(TileId + ' - ' + SideNum + ' - ' + rslt['winner']);
      if (SideNum==0) {
     // Seulement les attaques entrantes
      	if (TileId < 51 && rslt['tileLevel']!=undefined) m+='<TD><FONT size="4px">Terra selvaggia liv.'+rslt['tileLevel']+'</font></td>';
      	if (TileId < 51 && rslt['tileLevel']==undefined) m+='<TD><FONT size="4px">Terre selvaggia</font></td>';
      	if (rslt['conquered']==1) m+='<TD><FONT color="#CC0000" size="4px">Conquistata</font></td></tr>';
      	if (rslt['winner']==1) m+='<TR><TD><FONT color="#CC0000" size="4px"><b>Sconfitta</b><br></font></td></tr></table>';
      	if (rslt['winner']==0) m+='<TR><TD><FONT color="green" size="4px"><b>Vittoria</b><br></font></td></tr></table>';
    	if (rslt['fght'] != undefined){
          m+='<TABLE style="float:left;width:45%;" class=ptTab><tr><td colspan=3><b>Attaccante: '+Nom1+' <a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ Coord1 +');" class="coordinateLink">('+ Coord1 +')</a></b><br>Cavaliere: '+ rslt['s1KCombatLv'] +'<br>Round: '+rslt['rnds']+'<br>Bonus: '+ parseInt(rslt['s1atkBoost']*100)  +' % attacco - '+ parseInt(rslt['s1defBoost']*100) +' % difesa</td></tr>\
          <TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Truppe</td><TD align="center">Inviate</td><TD align="center">Sopravvissute</td></tr>'; 
          if (rslt['fght']["s1"] != undefined) {
            for (var i=1;i<=12;i++) {
              if (rslt['fght']["s1"]['u'+i] != undefined) {
                if (rslt['fght']["s1"]['u'+i][0] > rslt['fght']["s1"]['u'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s1"]['u'+i][0]+'</td><TD align="center"><FONT color="#CC0000">'+rslt['fght']["s1"]['u'+i][1]+'</font></td></tr>';
                else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></div></td><TD align="center">'+rslt['fght']["s1"]['u'+i][0]+'</td><TD align="center">'+rslt['fght']["s1"]['u'+i][1]+'</td></tr>';
              }
            }
          }
          m+='</table><TABLE style="float:right;width:45%;" class=ptTab><tr><td colspan=3><b>Attaccato: '+Nom2+' <a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ Coord2 +');" class="coordinateLink">('+ Coord2 +')</a></b><br>Cavaliere: '+ rslt['s0KCombatLv'] +'<br><br>Bonus: '+ parseInt(rslt['s0atkBoost']*100)  +' % attacco - '+ parseInt(rslt['s0defBoost']*100) +' % difesa</td></tr>';	  			  	
          if (rslt['fght']["s0"] != undefined) {
            m+='<TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Truppe</td><TD align="center">Presenti</td><TD align="center">Sopravvissute</td></tr>';
            for (var i=60;i<=63;i++) {
              if (rslt['fght']["s0"]['f'+i] != undefined) {
                if (rslt['fght']["s0"]['f'+i][0] > rslt['fght']["s0"]['f'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center"><FONT color="#CC0000">'+rslt['fght']["s0"]['f'+i][1]+'</font></td></tr>';
                else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center">'+rslt['fght']["s0"]['f'+i][1]+'</td></tr>';
              }
            }
            for (var i=1;i<=12;i++) {
              if (rslt['fght']["s0"]['u'+i] != undefined) {
                if (rslt['fght']["s0"]['u'+i][0] > rslt['fght']["s0"]['u'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['u'+i][0]+'</td><TD align="center"><FONT color="#CC0000">'+rslt['fght']["s0"]['u'+i][1]+'</font></td></tr>';
                else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['u'+i][0]+'</td><TD align="center">'+rslt['fght']["s0"]['u'+i][1]+'</td></tr>';
              }
            }
            for (var i=50;i<=55;i++) {
              if (rslt['fght']["s0"]['f'+i] != undefined) {
                if (rslt['fght']["s0"]['f'+i][0] > rslt['fght']["s0"]['f'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center"><FONT color="#CC0000">'+rslt['fght']["s0"]['f'+i][1]+'</font></td></tr>';
                else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center">'+rslt['fght']["s0"]['f'+i][1]+'</td></tr>';
              }
            }
          } else {
            m+="<tr><td><br>Nessuna truppa a difesa</td></tr>";
          }
          m+='<TR><TD></TD></TR></table>';
    	}
        if (rslt['unts']!= undefined) { // pour les renforts :) lol ca sert pas pour le moment
        //Renfort !
          m+='<TABLE style="float:right;width:45%;" class=ptTab><TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Troupes</td><TD align="center">Rinforzi;</td></tr>';
          for (var i=1;i<=12;i++) {
            if (rslt['unts']['u'+i] != undefined) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['unts']['u'+i]+'</td></tr>';
          }
          m+="</table>"; 
      	}
        m+='<TR><TD></TD></TR><TR><TD></TD></TR></table>';
        if (rslt['loot'] != undefined) {
          m+='<TABLE class=ptTab cellpadding=3><tr><td colspan=4><b><u>Risorse:</u></b><br>\
          </tr><TR><TD>Argento: </td><TD><FONT color="#CC0000">'+addCommas(parseInt(rslt['loot'][0]))+'</td>';
          m+='<TD> Cibo: </td><TD><FONT color="#CC0000">'+addCommas(parseInt(rslt['loot'][1]))+'</td>';
          m+='<TD> Legno: </td><TD><FONT color="#CC0000">'+addCommas(parseInt(rslt['loot'][2]))+'</td>';
          m+='<TD> Pietra: </td><TD><FONT color="#CC0000">'+addCommas(parseInt(rslt['loot'][3]))+'</td>';
          m+='<TD> Ferro: </td><TD><FONT color="#CC0000">'+addCommas(parseInt(rslt['loot'][4]))+'</td></table>';
    	}	
        if (rslt['rsc'] != undefined) {
          m+='<TABLE class=ptTab cellpadding=3><tr><td colspan=4><b><u>Risorse:</u></b><br></tr><TR>'
          if (rslt['gld']!= undefined) m+='<TD>Argento: </td><TD>'+addCommas(parseInt(rslt['gld']))+'</td>';
            m+='<TD> Cibo: </td><TD>'+addCommas(parseInt(rslt['rsc']['r1']))+'</td>';
            m+='<TD> Legno: </td><TD>'+addCommas(parseInt(rslt['rsc']['r2']))+'</td>';
            m+='<TD> Pietra: </td><TD>'+addCommas(parseInt(rslt['rsc']['r3']))+'</td>';
            m+='<TD> Ferro: </td><TD>'+addCommas(parseInt(rslt['rsc']['r4']))+'</td></table>';
          }
    	} else if ( SideNum == "2") {
          //Rinforzi
            m+='<TABLE style="float:left;width:45%;" class=ptTab><TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Truppe</td><TD align="center">Rinforzi</td></tr>';
            for (var i=1;i<=12;i++) {
              if (rslt['unts']['u'+i] != undefined) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['unts']['u'+i]+'</td></tr>';
            }
            m+="</table>"; 
          } else {
            m+='<table border=0 bgcolor=white width=100% cellpadding=3><tr><td colspan=2 style="background-color:white;"><table>';
            //attaquantes sortantes
            if (TileId < 51 && rslt['tileLevel']!=undefined) m+='<TD><FONT size="3px">Terre selvagge liv.'+rslt['tileLevel']+'</font></td>';
            if (TileId < 51 && rslt['tileLevel']==undefined) m+='<TD><FONT size="3px">Terre selvagge</font></td>';
            if (rslt['conquered']==1) m+='<TD><FONT color="#CC0000" size="3px">Conquistata</font></td></tr>';
            if (rslt['winner']==0) m+='<TR><TD style="background-color:white;"><FONT color="#CC0000" size="3px"><b>Sconfitta<br><br></font></td></TR></table>';
            if (rslt['winner']==1 || rslt['winner']==2) m+='<TR><TD style="background-color:white;"><FONT color="green" size="3px"><b>Vittoria<br><br></font></td></tr></table>';
            if (rslt['fght'] != undefined){
              m+='<TABLE style="float:left;width:45%;" class=ptTab><tr><td colspan=3><b>Attacanti: '+Nom1+' <a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ Coord1 +')" class="coordinateLink">('+ Coord1 +')</a></b>\
              <br>Cavaliere: '+ rslt['s1KCombatLv'] +'<br>Round: '+rslt['rnds']+'<br>Bonus: '+ parseInt(rslt['s1atkBoost']*100)  +' % attacco - '+ parseInt(rslt['s1defBoost']*100) +' % difesa</td></tr>\
              <TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Truppe</td><TD align="center">Inviate</td><TD align="center">Sopravissute</td></tr>'; 
  	  			if (rslt['fght']["s1"] != undefined) {
  	  					for (var i=1;i<=12;i++) {
  	  						if (rslt['fght']["s1"]['u'+i] != undefined) {
  	  							if (rslt['fght']["s1"]['u'+i][0] > rslt['fght']["s1"]['u'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['fght']["s1"]['u'+i][0])+'</td><TD align="center"><FONT color="#CC0000">'+addCommas(rslt['fght']["s1"]['u'+i][1])+'</font></td></tr>';
  	  							else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['fght']["s1"]['u'+i][0])+'</td><TD align="center">'+addCommas(rslt['fght']["s1"]['u'+i][1])+'</td></tr>';
  	  						}
  	  					}
  	  					
  	  			}
  	  			m+='</table><TABLE style="float:right;width:45%;" class=ptTab><tr><td colspan=3><b>Difensore: '+Nom2+' <a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ Coord2 +');" class="coordinateLink">('+ Coord2 +')</a></b><br>Cavaliere: '+ rslt['s0KCombatLv'] +'<br>';
  	  			if (rslt['lstlgn'] != undefined)
  	  			{
  	  			 m+="Derni&egrave;re connexion : " + unsafeWindow.formatDateByUnixTime(rslt['lstlgn'])+"<br>";
  	  			} else {
  	  			 m+="<br>";
  	  			}
  	  			m+='Bonus: '+ parseInt(rslt['s0atkBoost']*100)  +' % attacco - '+ parseInt(rslt['s0defBoost']*100) +' % difesa</td></tr>';	  	
  	  		  	if (rslt['fght']["s0"] != undefined) {
  	  				  	m+='<TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Truppe</td><TD align="center">Inviate</td><TD align="center">Sopravvisute</td></tr>';
  	  				 	for (var i=60;i<=63;i++) {
  							if (rslt['fght']["s0"]['f'+i] != undefined) {
  							if (rslt['fght']["s0"]['f'+i][0] > rslt['fght']["s0"]['f'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center"><FONT color="#CC0000">'+rslt['fght']["s0"]['f'+i][1]+'</font></td></tr>';
  							else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center">'+rslt['fght']["s0"]['f'+i][1]+'</td></tr>';
  							}
  						 }
  	  				  	for (var i=1;i<=12;i++) {
  	  				  		if (rslt['fght']["s0"]['u'+i] != undefined) {
  	  				  			if (rslt['fght']["s0"]['u'+i][0] > rslt['fght']["s0"]['u'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['fght']["s0"]['u'+i][0])+'</td><TD align="center"><FONT color="#CC0000">'+addCommas(rslt['fght']["s0"]['u'+i][1])+'</font></td></tr>';
  	  				  			else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['fght']["s0"]['u'+i][0])+'</td><TD align="center">'+addCommas(rslt['fght']["s0"]['u'+i][1])+'</td></tr>';
  	  				  		}
  	  				  	}
  	  				  	
  						for (var i=50;i<=55;i++) {
  							 if (rslt['fght']["s0"]['f'+i] != undefined) {
  							  if (rslt['fght']["s0"]['f'+i][0] > rslt['fght']["s0"]['f'+i][1]) m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center"><FONT color="#CC0000">'+rslt['fght']["s0"]['f'+i][1]+'</font></td></tr>';
  				   			  else m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+rslt['fght']["s0"]['f'+i][0]+'</td><TD align="center">'+rslt['fght']["s0"]['f'+i][1]+'</td></tr>';
  						}
    				  	}
  	  				  	
  	  				  	
  	  				  	
  	  		  	} else if ((rslt['unts']!=undefined) || (rslt['frt']!=undefined)) {
  	  		  	    if (rslt['frt']!=undefined) {
  	  		  	       m+='<TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">D&eacute;fences</td><TD align="center">Compte</td></tr>';
  				   
  				   	for (var i=60;i<=63;i++) {
  				     	  if (rslt['frt']['f'+i] != undefined) {
  				     	     m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['frt']['f'+i])+'</td></tr>';
  				     	  }
    				  	}
  				      for (var i=50;i<=55;i++) {
  				   	 if (rslt['frt']['f'+i] != undefined) {
  				           m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['frt']['f'+i])+'</td></tr>';
  				   	 }
  				      }
  				    }
  				    if (rslt['frt']!=undefined) {
  	  			      m+='<TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Truppe</td><TD align="center">Compte</td></tr>';
  				      for (var i=1;i<=12;i++) {
  					 if (rslt['unts']['u'+i] != undefined) {
  					    m+='<TR><TD align="center"><div  class="pic px30 units unit_'+i+'"></td><TD align="center">'+addCommas(rslt['unts']['u'+i])+'</td></tr>';
  					  }
  	  			       }
  	  			    }
  	  			  
  	  			} else {
  	  		  	 m+="<tr><td><br>Nessuna truppa a difesa</td></tr>";
  	  		  	}
  	  		  	m+='<TR><TD></TD></TR></table>';
    	        }
   	        m+="</td></tr><tr><td><br></tr>";
  	  	if (rslt['pop'] != undefined) {
  	  	
  	  	   m += '<tr><td style="background-color:white;"><b><u>Esplorazione</u></b><br><br>';
  	  	
  	  	
  	  	   m+='<table style="float:left;width:45%;"class=ptTab><TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><td align="center">Città<td align="center">&nbsp;</tr><TR><TD><img width=30 height=30 src=http://cdn1.kingdomsofcamelot.com/fb/e2/src/img/population_30.png><TD>'+addCommas(parseInt(rslt['pop']))+'</td></tr>';
  	  	   if (rslt['hap'] != undefined) {
  	  	    m+='<tr><td>Felicità<td>'+rslt['hap'] +'</td>';
  	  	   }
  	  	   if (rslt['knt'] != undefined) {
  	  	    m+='<tr><td>Cavaliere<td>'+rslt['knt']['cbt']+'</td>';
  	  	   }
  	  	   
  	  	   if (rslt['blds'] != undefined) {
  	  	     m+='<TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><td align="center">Costruzione<td align="center">Liv.</tr>';
  	  	 
  	  	    if (rslt['blds']['b1']!=undefined) {
  	  	        m+='<tr><td width=40%>Fattoria ('+rslt['blds']['b1'].length+')</td><td>';
  	  	        zz="";
  	  	        for (var i=0;i<rslt['blds']['b1'].length;i++) {
  	  	         if (i%9==0 && i!=0) zz += '<br>';
  	  	         zz += rslt['blds']['b1'][i] + ", ";
  	  	        }
  	  	        m += zz.substr(0,zz.length-2);
  	  	        m +='</td><tr>';
  	  	    }
  	  	    if (rslt['blds']['b2']!=undefined) {
  		    	m+='<tr><td>Segheria ('+rslt['blds']['b2'].length+')</td><td>';
  	  	        zz="";
  	  	        for (var i=0;i<rslt['blds']['b2'].length;i++) {
  	  	         if (i%9==0 && i!=0) zz += '<br>';
  	  	         zz += rslt['blds']['b2'][i] + ", "
  	  	        }
  	  	        
  	  	        m += zz.substr(0,zz.length-2);
  	  	        m +='</td><tr>';
  	  	    }
  	  	    if (rslt['blds']['b3']!=undefined) {
  		        m+='<tr><td>Cava ('+rslt['blds']['b3'].length + ')</td><td>';
  	  	        zz="";
  	  	        for (var i=0;i<rslt['blds']['b3'].length;i++) {
  	  	         if (i%9==0 && i!=0) zz += '<br>';
  	  	         zz += rslt['blds']['b3'][i] + ", "
  	  	        }
  	  	        m += zz.substr(0,zz.length-2);
  	  	        m +='</td><tr>';
  	  	    }
  	  	    if (rslt['blds']['b4']!=undefined) {
  		    	m+='<tr><td>Miniera ('+rslt['blds']['b4'].length + ')</td><td>';
  	  	        zz="";
  	  	        for (var i=0;i<rslt['blds']['b4'].length;i++) {
  	  	         if (i%9==0 && i!=0) zz += '<br>';
  	  	         zz += rslt['blds']['b4'][i] + ", "
  	  	        }
  	  	        m += zz.substr(0,zz.length-2);
  	  	        m +='</td><tr>';
  	  	    }
  	  	   
  	  	   }
  	  	   
  	  	   m+='</table>';
  	  	}
  	  	
  	  	
    	        if (rslt['tch'] != undefined) {
    	        
    	           m+='<table style="float:right;width:45%;" class=ptTab><TR style="background-color:#E5DDC9;color: #422714;font-size: 12px;font-weight: bold;"><TD align="center">Tech</td><TD align="center">Liv.</td></tr>';
  	  				
    	           for (var i=1;i<=16;i++) {
    	           
    	            if (rslt['tch']['t'+i]!=undefined) {
    	             m+='<tr><TD>' + unsafeWindow.techcost['tch'+i][0] + '</td><TD>'+rslt['tch']['t'+i]+'</td></tr>';
    	            }
  	  		       
    	           }
    	           
    	           
    	           
    	           m+='</table>';
  	     }
  	     var typebutin ='';
  		     	
  	     	if (rslt['loot'] != undefined) {
  	     		m+='</td><tr><td style="background-color:white;"><b><u>Risorse '+typebutin+' :</u></b><br>';
  	     	  		  	m+='<TABLE class=ptTab cellpadding=3><TR><TD>Argento: </td><TD>'+addCommas(parseInt(rslt['loot'][0]))+'</td>';
  	     	  		  	m+='<TD> Cibo: </td><TD>'+addCommas(parseInt(rslt['loot'][1]))+'</td>';
  	     	  		  	m+='<TD> Legna: </td><TD>'+addCommas(parseInt(rslt['loot'][2]))+'</td>';
  	     	  		  	m+='<TD> Pietra: </td><TD>'+addCommas(parseInt(rslt['loot'][3]))+'</td>';
  	     	  		  	m+='<TD> Ferro: </td><TD>'+addCommas(parseInt(rslt['loot'][4]))+'</td></table>';
  	  	}
  	     
  	  	if (rslt['rsc'] != undefined) {
  	    		  	m+='<TABLE class=ptTab cellpadding=3><tr><td colspan=4><b><u>Risorse:</u></b><br></tr><TR>';
  	    		  	if (rslt['gld']!= undefined) m+='<TD>Argento: </td><TD>'+addCommas(parseInt(rslt['gld']))+'</td>';
  	    		  	m+='<TD> Cibo: </td><TD>'+addCommas(parseInt(rslt['rsc']['r1']))+'</td>';
  	    		  	m+='<TD> Legna: </td><TD>'+addCommas(parseInt(rslt['rsc']['r2']))+'</td>';
  	    		  	m+='<TD> Pietra: </td><TD>'+addCommas(parseInt(rslt['rsc']['r3']))+'</td>';
  	    		  	m+='<TD> Ferro: </td><TD>'+addCommas(parseInt(rslt['rsc']['r4']))+'</td></table>';
    		}
  	   m+="</table>";
     	
  	  	 
    	}
    	
    	
      	t.popReport.getMainDiv().innerHTML = '<DIV style="max-height:370px; height:370px; overflow-y:scroll">' + m + '</div>';
      	t.popReport.getTopDiv().innerHTML = '<TD align="center"><B>Rapporto Battaglia - '+unsafeWindow.formatDateByUnixTime(Date1)+'</td>';
      	t.popReport.show(true);
      	
      	
      	
    },
    DisplayReports : function (){
      var t = my.Hud;
      var data = t.data;
      var filtre =  document.getElementById("idHudTypeSearch").value;
      var filtre2 =  document.getElementById('idHudMedSearch').value;
      var results=document.getElementById("hudResultsDiv");
      if(!t.data.length) {
         results.innerHTML = '<center><b>Nessun rapporto trovato</b></center>';
         return;
      }
      var m = '<center><table width=100% cellspacing=0 cellpadding=3><thead><th>Pag.</th><th>R.</th><th>Data</th><th colspan=3>Attaccanti</th><th>Tipo</th><th colspan=4>Destinazione</th></thead>';
      m += '<tbody>';

      for ( var i=0; i<t.data.length;i++) {
         var rpt = data[i];
         if (rpt.side0Name=='undefined') 
            continue;
            
          style='padding:2px;' ; 
          if (rpt.TypeName=="Ent") {
             style=' style="background-color:#EF9999;padding:2px;"';
          }
           if (rpt.TypeName=="Ren") {
  	   style=' style="background-color:#99EF99;padding:2px;"';
          }
  
          if (((filtre2=="" || filtre2=="1" && (rpt.side1Name==Seed.player.name|| rpt.side0Name==Seed.player.name))) && (filtre=="" || (filtre=="0" && rpt.TypeName=="Ent") || (filtre=="1" && rpt.TypeName=="Sor") || (filtre=="2" && rpt.TypeName=="Ren"))) {
          
          
          m += '<tr ><td '+style+'><SPAN onclick="ptAllianceReports('+rpt.page+')"> <a>'+rpt.page+'</a></span></td>\
           <td '+style+'>';
          if (rpt.marchType != 3) m+='<img onclick="getReport('+rpt.reportUnixTime+','+ rpt.marchReportId +','+rpt.side0TileType +',\''+rpt.TypeName+'\',\''+rpt.side1Name+'\',\''+ rpt.side1XCoord +','+ rpt.side1YCoord +'\',\''+rpt.side0Name+'\',\''+ rpt.side0XCoord +','+ rpt.side0YCoord +'\');" border=0 src="http://cdn1.iconfinder.com/data/icons/woothemesiconset/16/search_button.png">';
          m+='&nbsp;</td>\
            <td '+style+'>'+unsafeWindow.formatDateByUnixTime(rpt.reportUnixTime)+'</td>\
              <td '+style+'>'+rpt.side1Name+'</td>\
              <td '+style+'>'+rpt.side1AllianceName.replace('unaligned','-')+'</td>\
              <td '+style+'><a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ rpt.side1XCoord +','+ rpt.side1YCoord +')" class="coordinateLink">('+ rpt.side1XCoord +','+ rpt.side1YCoord +')</a></td>';
              if (rpt.marchType == 3) 
               m +='<TD '+style+'><FONT color="00FF00">'+rpt.marchName+'</font></td>';
  	    else if (rpt.marchType == 4) 
  	     m +='<TD '+style+'><FONT color="FF0033">'+rpt.marchName+'</font></td>';
  	    else 
  	      m +='<TD '+style+'><FONT color="339933">'+rpt.marchName+'</font></td>';
              m+='<td '+style+'>'+rpt.side0Name+'</td>\
                <td '+style+'>'+rpt.side0AllianceName.replace('unaligned','-')+'</td>\
              <td '+style+'><a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ rpt.side0XCoord +','+ rpt.side0YCoord +')" class="coordinateLink">('+ rpt.side0XCoord +','+ rpt.side0YCoord +')</a></td>';
              if (rpt.side0TileType < 51 && rpt.side0TileLevel!=undefined) {
              m+='<td '+style+'>TS '+rpt.side0TileLevel+'</td>';
              } else {
              m+='<td '+style+'>Città</td>';
              }
              
              m+='</tr>';
          }
      }
      m += '</tbody></table></center>';
      results.innerHTML = m;
    },
    handleHudSelect : function(rslt, page) {
      var t = my.Hud;
      t.maxPages=document.getElementById("idHudSelect").value;
      if ( t.maxPages==99999)
         t.maxPages=t.totalPages;
      document.getElementById("idSpanNumPages").innerHTML = t.maxPages+'';
    },
    handleHudSearchCB : function(rslt, page) {
      var t = my.Hud;
      if (rslt) {
        if (!rslt.ok) {
          document.getElementById("idSpanHudErrorMsg").innerHTML = rslt.errorMsg;
          return;
        }
        t.totalPages=rslt.totalPages;
        if (rslt.arReports && page) {
          var ar = rslt.arReports;
          var rptkeys = unsafeWindow.Object.keys(ar);
        var myAllianceId = getMyAlliance()[0];
        for (var i = 0; i < rptkeys.length; i++) {
          var rpt = ar[rptkeys[i]];
          rpt.page = page;     
          var side0Name = rslt.arPlayerNames['p'+rpt.side0PlayerId];
          rpt.side0Name = side0Name;
          rpt.side1Name = rslt.arPlayerNames['p'+rpt.side1PlayerId];
          if (rpt.side0AllianceId > 0)
            rpt.side0AllianceName = rslt.arAllianceNames['a'+rpt.side0AllianceId];
          else
            rpt.side0AllianceName = '----';
          if (rpt.side1AllianceId > 0)
            rpt.side1AllianceName = rslt.arAllianceNames['a'+rpt.side1AllianceId];
          else
            rpt.side1AllianceName = '----';
          if (rpt.side0CityId > 0)
            rpt.side0CityName = rslt.arCityNames['c'+rpt.side0CityId];
          else
            rpt.side0CityName = 'Nessuna';
          if (rpt.side1CityId > 0)
            rpt.side1CityName = rslt.arCityNames['c'+rpt.side1CityId];
          else
            rpt.side1CityName = 'Nessuna';
          if (rpt.marchType == 1)
            rpt.marchName = 'Trasporto';
          else if (rpt.marchType == 3)
            rpt.marchName = 'Esplorazione';
          else if (rpt.marchType == 2)
            rpt.marchName = 'Rinforzo';
          else if (rpt.marchType == 4)
            rpt.marchName = 'Attacco';
          else rpt.marchName = 'sconosciuto';
            rpt.targetDiplomacy = getDiplomacy (rpt.side0AllianceId);
            if (myAllianceId != rpt.side1AllianceId) {
              rpt.TypeName = "Ent";
            }
            if (myAllianceId == rpt.side1AllianceId) {
              rpt.TypeName = "Sor";      
            }
            if (rpt.marchType == 2) {
              rpt.TypeName = "Ren"; 
            }
            t.data.push(rpt); 
          }
        }
        if (parseInt(page)+1 <= t.maxPages) {
          var results=document.getElementById("hudResultsDiv");
          results.innerHTML = '<center><b>...Ricerca in corso: '+(parseInt(page)+1)+'...</b></center>';
          t.getAllianceReports(parseInt(page)+1);
        } 
      else if (page) 
        t.DisplayReports();
      }
    },
    maxPages:1,
    data:[],
    totalPages:0,
    handleHudSearch : function() {
      var t = my.Hud;
      var results=document.getElementById("hudResultsDiv");
    //logit("handleHudSearch");
      t.maxPages=document.getElementById("idHudSelect").value;
      if ( t.maxPages==99999)
        t.maxPages=t.totalPages;
      results.innerHTML = '<center><b>...Ricerca in corso '+t.maxPages+' pag.</b></center>';
      t.data=[];
      t.getAllianceReports(1);
    },
    getAllianceReports : function (pageNum){
      var t = my.Hud;
      var c= {};
      c.pageNo = pageNum;
      c.group = "a";
      unsafeWindow.AjaxCall.gPostRequest("listReports.php",c,
        function(rslt){
          t.handleHudSearchCB (rslt, pageNum);     
        },
        function (rslt) {
          t.handleHudSearchCB (rslt, pageNum);     
        }
      );
    },
    hide : function (){
  },
}

/************ TAB TERRE **************/

my.Wilds = {
  cont : null,
  state : null,
  upGoldTimer : null,
  wildList : [],
  buildList : {},
  
  init : function (){
    var t = my.Wilds;
    t.cont = document.createElement('div');
    unsafeWindow.BOTerres = t.show;
    return t.cont;
  },

  getContent : function (){
    var t = my.Wilds;
    return t.cont;
  },

  hide : function (){
    var t = my.Wilds;
  },
  
  show : function (){
    var t = my.Wilds;
    clearTimeout (t.displayTimer);
    if (t.state == null){
      t.cont.innerHTML = '<DIV id=wildContent style="height:580px; max-height:580px; overflow-y:auto">';
      t.state = 1;
    }
    m = "<DIV class=ptstat>Gestione terre</div>";
    m += '<TABLE cellspacing=0 cellpadding=0 class=ptTabPad align=center>';
    for (var c=0; c<Cities.numCities; c++){
      var city = Cities.cities[c]; 
      var row = 0;  
      m += '<TR><TD colspan=20><DIV class=ptstat>'+ city.c.name +' &nbsp; ('+ city.c.x +','+ city.c.y +')</a></div></td></tr>';
      if(city.c.wildernessCount()===0){
      }else {
        m += '<TR style="background-color:white; font-weight:bold;" align=right><TD align=left>'+unsafeWindow.arStrings.Common.Abandon+'</td><TD align=left>Type</td><td align=left>'+unsafeWindow.arStrings.Common.Level+'</td><TD align=left>'+unsafeWindow.arStrings.Common.Coordinates+'</td></tr>';
        city.c.wilderness().each(function(wild)
      {
      m += '<TR align=right'+ (row++%2?'':' class=ptOddrow') +'><TD align=left>\
      <a onclick="this.style.display=\'none\';setTimeout (function (){Castle.abandonWild('+wild.id+');setTimeout(function() { BOTerres() },1000); },500);return false;"><img src="http://cdn1.iconfinder.com/data/icons/musthave/16/Remove.png" border=0></a></td><td align=left>'+wild.name +'</td>\
      <TD>'+ wild.level +'</td><TD align=center><a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+wild.x +','+  wild.y+');">('+ wild.x +','+ wild.y +')</a></td></tr>';     
    });    
    }
  }
  document.getElementById('wildContent').innerHTML = m + '</table></div>';
  t.displayTimer = setTimeout (t.show, 20000);
  },
}
 
/************************ Food Alerts *************************/
var FoodAlerts = {
  init : function (){
    var f = FoodAlerts;
    f.e_eachMinute();
  },
  minuteTimer : null,
  e_eachMinute : function (){   
    var f = FoodAlerts;
    var now = unixTime();
    row = [];  
    if (Options.enableFoodWarnTchat)  {
      for(i=0; i < Cities.numCities; i++) {
        //var rp = getResourceProduction (Cities.cities[i].id);
        var foodleft = parseInt(Cities.cities[i].c.resources[1].count);
        var usage = parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) - parseInt(Cities.cities[i].c.upkeep());
        //row[i] = rp[1] - usage;
        var timeLeft = parseInt(Cities.cities[i].c.resources[1].count)  / (0-usage) * 3600;
        var msg = '';
        if (timeLeft<0){
        }
        else if (timeLeft<(Options.foodWarnHours*3600)) {
          msg += 'La mia città ' + Cities.cities[i].c.name.substring(0,10) + ' (' +
             Cities.cities[i].c.x +','+ Cities.cities[i].c.y + ') ';
          msg += ' emmergenza cibo, attuale riserva: '+addCommasWhole(foodleft).replace(',','.').replace(',','.').replace(',','.').replace(',','.')+' ('+timestrShort(timeLeft)+') Produzione : '+addCommas(usage).replace(',','.').replace(',','.').replace(',','.').replace(',','.')+'/h';
          sendChat ("/a " + msg);
          //alert(msg);
        }
      }  
      f.minuteTimer = setTimeout (f.e_eachMinute, 1800000);
    }
  },  
}

function sendChat (msg){
  document.getElementById ("mod_comm_input").value = msg;
  unsafeWindow.Chat.sendChat ();
}

/************************  TAB RIASSEGNA *************************/
my.Reassign = {
  cont : null,
  displayTimer : null,
  state : null,
  curTabBut : null,
  curTabName : null,
  sourceCity : {},
  destinationCity : {},
  rows : [],

  init : function (){
    var t = my.Reassign;
    t.cont = document.createElement('div');
    t.state = null;
    return t.cont;
  },
  getContent : function (){
    var t = my.Reassign;
    return t.cont;
  },
  hide : function (){
    var t = my.Reassign;
    t.state = null;
    clearTimeout (t.displayTimer);
  },
  
  show : function (){  
    var t = my.Reassign;
    var ModelCity = {};
    var rownum = 0;
    var rownum2 = 0;
    clearTimeout (t.displayTimer);
    if (t.state == null) {  
      m = "<DIV class=ptstat>Riassegna truppe</div>";
      m +="<div id='statpourREA'></div>";
      m += "<TABLE width='450px' class=ptTab border=0 align=left cellpadding=2>\
      <td colspan=1><b>Sorgente</b><br><span id=REAsrcRptspeedcity></span></td>\
      <td colspan=1><b>Destinazione</b><br><span id=REAdesRptspeedcity></span></td>\
      <td colspan=1><input type=button style='font-weight:bold' id=REAaction value='Riassegna'></td>\
      <td colspan=1>&nbsp;</td></tr>\
      <tr align=ceneter valign=top><td width=100><div id=REAstatsource></div></td>\
      <td ><table cellspacing=0 cellpadding=0 width=99%>";
      for (r=1; r<13; r++){
        if (unsafeWindow.arStrings.unitName["u"+r]) {
          if (rownum++ % 2)
            style = '';
          else
            style = ' style = "background: #e8e8e8"';
            m += '<tr '+style+'><td  align=right>&nbsp;</td><td align=left><input style="border:1px solid black;height:16px;font-size:11px;" id="REAnbunit'+r+'" type=text size=7 value="0"></td></tr>';
          }
        }
        m += "</table></td><td><div id=REAstatdest></div></td>";
        m += "<td colspan=2><table cellspacing=0 cellpadding=0 width=80%><tr><td>&nbsp;</table>";
        m += "</tr><tr><td colspan=4><div id='ptREAStatus' style='text-align:center;overflow-y:auto; max-height:30px; height: 30px;'></div></td></tr></table>";
        t.cont.innerHTML = m; 
        t.statpourREA = document.getElementById ('statpourREA');
        t.statutREA = document.getElementById ('ptREAStatus');
        t.actionREA = document.getElementById ('REAaction');
        t.actionREA.addEventListener ('click', t.clickReassigneDo, false);
        var dcp1 = new CdispCityPicker ('ptREA1', document.getElementById('REAdesRptspeedcity'), false, t.clickREACityDestinationSelect, 1);
        var dcp0 = new CdispCityPicker ('ptREA0', document.getElementById('REAsrcRptspeedcity'), false, t.clickREACitySourceSelect, Cities.byID[unsafeWindow.currentcityid].idx);
        t.state = 1;
      }
      var str = "<TABLE class=ptTabLined cellspacing=0><TR valign=top align=right><TD width=120></td><TD width=88 style='background: #ffc'><B>TOTALI</b></td>";
      for(i=0; i<Cities.numCities; i++) {
        Gate = Cities.cities[i].c.defending;
        if(Gate == 0) var couleurr="#77EE77";
        if(Gate != 0) var couleurr="#EE7777";
        str += "<TD width=81 style='background-color:"+couleurr+"' align=center><B>"+ Cities.cities[i].c.name +'</b><BR><a onclick="KB.Controllers.MapHelper.gotoCoord('+Cities.cities[i].c.x +','+ Cities.cities[i].c.y+');">('+Cities.cities[i].c.x +','+ Cities.cities[i].c.y+')</A></td>';
      }
      str +="</tr>";
      str += "<tr><td><br></td></tr>";
      for (r=1; r<13; r++){
        var unitTotal=0;
        var m="";
        if (unsafeWindow.arStrings.unitName["u"+r]) {
          style = " style = 'background: #e8e8e8'";
          for(var i=0; i<Cities.numCities; i++) {
            m += "<TD width=81 "+style+" align=right>"+ addCommas(Cities.cities[i].c.troops[r].count()) +'</td>';
            unitTotal+=parseInt(Cities.cities[i].c.troops[r].count());
          }
          str += "<tr><td "+style+" align=right><b>"+unsafeWindow.arStrings.unitName["u"+r]+"</td><td "+style+" align=right>"+addCommas(unitTotal)+" "+ m + "</tr>"; 
        }
      }
      t.statpourREA.innerHTML = str;       
      t.displayTimer = setTimeout (t.show, 10000);
    },
    clickREACitySourceSelect : function (city){
      var t = my.Reassign;
      var rownum=0;
      t.sourceCity = city; 
      // on remplit les stat du DIV source
      //on efface le nbunit
      for (r=1; r<13; r++){
        if (ById("REAnbunit"+r))  ById("REAnbunit"+r).value="0";
      }
      t.actionREA.disabled=false;
      var m="";
      m="<table cellspacing=0 cellpadding=0 width=80%>";
      for (r=1; r<13; r++){  
        if (unsafeWindow.arStrings.unitName["u"+r]) {
          if (rownum++ % 2)
    	    style = '';
          else
            style = 'background: #e8e8e8;';
            m += '<tr style="'+style+'"><td align=right><b>'+unsafeWindow.arStrings.unitName["u"+r]+'</b></td>\
            <td align=left><input style="border:1px solid black;height:16px;font-size:11px;" id="REAdestunit'+r+'" type=text size=7 readonly value="'+parseInt(Cities.cities[t.sourceCity.idx].c.troops[r].count())+'">&nbsp;\
            <input type=button value=">" id="REApdestunit'+r+'"  style="border:1px solid black;height:16px;font-size:11px;"></td></tr>';
        }
      }
      m += "</table>";
      ById("REAstatsource").innerHTML = m;
      for (r=1; r<13; r++){
        if (unsafeWindow.arStrings.unitName["u"+r]) {
          ById("REApdestunit"+r).addEventListener ('click', function() {
          var nomcha=this.id.replace("REApdest","REAdest");
          var nomcha2=this.id.replace("REApdestunit","REAnbunit");
          ById(nomcha2).value=0; // on met Ã  0
        //for(i=0; i<Cities.numCities; i++) {
          //alert(Cities.cities[i].c.buildings[12].level());
          //alert();
        //}
        //var niveauPointRall=parseInt(getCityBuilding (t.sourceCity.id, 12).maxLevel); // 12=Point de ralliement
        //if (niveauPointRall==11) {
          //var maxtroupe=150000;
        //} else {
          //var maxtroupe=parseInt(niveauPointRall*10000);
        //}
          var maxtroupe=150000;
          var nbunitto=0;
          for (r=1; r<13; r++) {
            if (ById("REAnbunit"+r))      nbunitto+=parseInt(ById("REAnbunit"+r).value);
          }
          var libre = parseInt(maxtroupe - nbunitto);
          if (ById(nomcha).value>=libre) {
            ById(nomcha2).value = libre;
          }  else {
            ById(nomcha2).value= ById(nomcha).value;
          }
        }, false);
      }
    }
    //t.estimerTemps();
  },
  clickREACityDestinationSelect : function (city){
    var t = my.Reassign;
    var rownum=0;
    t.destinationCity = city;
    //on remplit les stat du DIV destination
    var m="";
    m="<table cellspacing=0 cellpadding=0 width=80%>";
    for (r=1; r<13; r++){
      if (unsafeWindow.arStrings.unitName["u"+r]) {
        if (rownum++ % 2)
    	  style = '';
    	else
          style = 'background: #e8e8e8;';
          m += '<tr style="'+style+'"><td align=right>&nbsp;</td><td align=left><input style="border:1px solid black;height:16px;font-size:11px;" type=text size=7 readonly value="'+parseInt(Cities.cities[t.destinationCity.idx].c.troops[r].count())+'"></td></tr>';
      }
    }
    m += "</table>";
    ById("REAstatdest").innerHTML = m;
    //t.estimerTemps();
  },  
  clickReassigneDo: function() {
    var t = my.Reassign;
    var totalunit=0;
    var SourceId = t.sourceCity.c.id;
    var DestinationId = t.destinationCity.c.id;
    nHtml.Click(document.getElementById("city_"+SourceId));
    // faire les test d'unité !
    for (r=1; r<13; r++){
      if (document.getElementById("REAnbunit"+r)) {
        if (parseInt(document.getElementById("REAnbunit"+r).value) > parseInt(document.getElementById("REAdestunit"+r).value)) {
          document.getElementById("REAnbunit"+r).style.backgroundColor="red";
          return false;
        }
        totalunit=totalunit+parseInt(document.getElementById("REAnbunit"+r).value);
        document.getElementById("REAnbunit"+r).style.backgroundColor="";
        }
      }
      if (t.sourceCity.c.id==t.destinationCity.c.id) {
        t.statutREA.innerHTML = '<FONT COLOR=#550000>Impossibile sulla stessa città !.</font>';
        return;
      }
      if (totalunit==0) {
        t.statutREA.innerHTML = '<FONT COLOR=#550000>Impossibile riassegnare avete 0 unità!.</font>';
        return;
      }
      // var niveauPointRall=parseInt(getCityBuilding (t.sourceCity.id, 12).maxLevel); // 12=Point de ralliement
      // if (niveauPointRall==11) {
      var maxtroupe=150000;
      // } else {
      //  var maxtroupe=niveauPointRall*10000;
      // }
      if (totalunit>maxtroupe) {
        t.statutREA.innerHTML = '<FONT COLOR=#550000>Impossibile riassegnare più di '+maxtroupe+' unità alla volta.</font>';
        return;
      }
      t.actionREA.disabled=true;
      var x=t.destinationCity.c.x;
      var y=t.destinationCity.c.y;
      t.statutREA.innerHTML = "<i><b>Elaborazione in corso....</b></i>";
      unsafeWindow.Modal.hideModalAll();
      unsafeWindow.March.open(5,x,y);
      setTimeout(function() {
      for (r=1; r<13; r++){
        if (document.getElementById("modal_attack_unit_ipt_"+r)) 
        document.getElementById("modal_attack_unit_ipt_"+r).value=parseInt(document.getElementById("REAnbunit"+r).value);
      }
      unsafeWindow.March.check(5);
      t.statutREA.innerHTML ="<font color=red size='3px'><b>Truppe in marcia...<b></font>";
      t.actionREA.disabled=false; 
    },1000);
  },
}

// returns {count, maxlevel}
function getCityBuilding (cityId, buildingId){
  var b = Seed.buildings['city'+cityId];
  var ret = {count:0, maxLevel:0};
  for (var i=1; i<33; i++){
    if (b['pos'+i] && b['pos'+i][0] == buildingId){
      ret.count;
      if (parseInt(b['pos'+i][1]) > ret.maxLevel)
        ret.maxLevel = parseInt(b['pos'+i][1]);
    }
  }
  return ret;
}


/*************** TRANSPORT **********/
my.TranspAuto = {
 cont : null,
 displayTimer : null,
 state : null,
 curTabBut : null,
 curTabName : null,
 sourceCity : {},
 destinationCity : {},
 rows : [],

 init : function (){
   var t = my.TranspAuto;
   t.cont = document.createElement('div');
   t.state = null;
   clearTimeout (t.displayTimer);
   return t.cont;
 },
  getContent : function (){
    var t = my.TranspAuto;
    return t.cont;
  },
  hide : function (){
    var t = my.TranspAuto;
    t.state = null;
    clearTimeout (t.displayTimer);
  },
  
  show : function (){  
   var t = my.TranspAuto;
   var rownum = 0;

   var ModelCity = {};
   

    if (t.state == null) {  
      m = "<DIV class=ptstat>Trasporto risorse tra città</div>";
      m +="<div id='statpourTr'></div>";
      m += "<TABLE width=100% class=ptTab border=0 cellpadding=3>\
       <tr align=center><td colspan=2><HR></td></tr>\
       <tr align=center valign=top><td colspan=1 width=50%><b><u>Sorgente</b></u><br><span id=srcptspeedcity></span></td>\
       <td colspan=1 width=50%  rowspan=2><b><u>Destinazione</b></u><br><span id=desptspeedcity></span><br>\
       inserimento coord. <br>X: <input type=text size=4 id=typetrpx value=0>&nbsp;Y: <input type=text size=4 id=typetrpy value=0><br><br><INPUT id='ptttButTransport' type=submit value='Trasporta' style='font-weight:bold'>\
       </td></tr>\
       <tr align=center><td colspan=1>tipo truppa: <select id=typetrp><option selected value='1'>"+unsafeWindow.arStrings.unitName["u1"]+"</option><option selected value='9'>"+unsafeWindow.arStrings.unitName["u9"]+"</option><option selected value='8'>"+unsafeWindow.arStrings.unitName["u8"]+"</option><option selected value='7'>"+unsafeWindow.arStrings.unitName["u7"]+"</option></select>\
       <br>Quantità: <input type=text size=6 value='100' id='Choixnbwagon'><input type=button id='trswagmax' value='Max'\><br><i>(il massimo della quantità per il numero delle truppe selezionate)</i>\
       <br><b>Tipologia risorsa:</b><br><input type=radio id='ChoixRess0' name='ChoixRess' value='gold'> " + unsafeWindow.arStrings.ResourceName[0] + "\
       <input type=radio id='ChoixRess1' name='ChoixRess' value='rec1'> " + unsafeWindow.arStrings.ResourceName[1] + "\
       <input type=radio id='ChoixRess2' name='ChoixRess' value='rec2'> " + unsafeWindow.arStrings.ResourceName[2] + "\
       <input type=radio id='ChoixRess3' name='ChoixRess' value='rec3'> " + unsafeWindow.arStrings.ResourceName[3] + "\
       <input type=radio id='ChoixRess4' name='ChoixRess' value='rec4'> " + unsafeWindow.arStrings.ResourceName[4] + "\
       </td></tr>\
       <tr><td colspan=2>"+ unsafeWindow.arStrings.March.ResourcesToSend +" : <span id=BOEstimationR></td></tr>\
       </table>\
       <TABLE align=center width=100% class=ptTab><TR><TD><div id=ptTranportStatus style='text-align:center;overflow-y:auto; max-height:78px; height: 78px;'></div></td></tr></table>";
    t.cont.innerHTML = m; 
    t.destinationCityx = document.getElementById ('typetrpx');
    t.destinationCityy = document.getElementById ('typetrpy');
    
    t.destinationCityx.addEventListener ('change', t.estimerRes, false);
    t.destinationCityy.addEventListener ('change', t.estimerRes, false);
    document.getElementById ('ChoixRess0').addEventListener ('click', t.estimerRes, false);
    document.getElementById ('ChoixRess1').addEventListener ('click', t.estimerRes, false);
    document.getElementById ('ChoixRess2').addEventListener ('click', t.estimerRes, false);
    document.getElementById ('ChoixRess3').addEventListener ('click', t.estimerRes, false);
    document.getElementById ('ChoixRess4').addEventListener ('click', t.estimerRes, false);
    
    t.estimationRes = document.getElementById ('BOEstimationR');
    var dcp1 = new CdispCityPicker ('ptspeed1', document.getElementById('desptspeedcity'), false, t.clickCityDestinationSelect, 1);
    t.TTbutTransport = document.getElementById ('ptttButTransport');
    t.TTbutTransport.addEventListener ('click', t.clickTransportDo, false);
    t.divTranportStatus = document.getElementById ('ptTranportStatus');
    t.statpourTr = document.getElementById ('statpourTr');
    t.typetrp = document.getElementById ('typetrp');
    t.typetrp.addEventListener ('click', t.estimerRes, false); 
    t.trswagmax = document.getElementById ('trswagmax');
    t.trswagmax.addEventListener ('click', t.clickUniteMax, false);
    t.Choixnbwagon  = document.getElementById ('Choixnbwagon');
    t.Choixnbwagon.addEventListener ('keyup', t.verifierWagons, false);
    var dcp0 = new CdispCityPicker ('ptspeed0', document.getElementById('srcptspeedcity'), false, t.clickCitySourceSelect, Cities.byID[unsafeWindow.currentcityid].idx);
    t.state = 1;
   }

   str = "<TABLE class=ptTabLined cellspacing=0><TR valign=top align=right><TD width=65></td><TD width=88 style='background: #ffc'><B>TOTALI</b></td>";
   for(i=0; i<Cities.numCities; i++) {
     Gate = Cities.cities[i].c.defending;
              if(Gate == 0) var couleurr="#77EE77";
              if(Gate != 0) var couleurr="#EE7777";
                str += "<TD width=81 style='background-color:"+couleurr+"' align=center><B>"+ Cities.cities[i].c.name +'</b><BR><a onclick="KB.Controllers.MapHelper.gotoCoord('+Cities.cities[i].c.x +','+ Cities.cities[i].c.y+');">('+Cities.cities[i].c.x +','+ Cities.cities[i].c.y+')</A></td>';
                
   }
   str +="</tr>";
   str += "<tr><td><br></td></tr>";
   var m="";
          var goldTotal=0;
          for(i=0; i<Cities.numCities; i++) {
                      m += "<TD width=81 style='background:#e8e8e8' align=right>"+ addCommas(Cities.cities[i].c.silver()) +'</td>';
                      goldTotal+=parseInt(Cities.cities[i].c.silver());
           }
          str += "<tr align=right><td style='background:#e8e8e8' align=right><b>" + unsafeWindow.arStrings.ResourceName[0] + "</td><td style='background:#e8e8e8' align=right>"+addCommas(goldTotal)+" "+ m + "</tr>" ; 
          
                   
            for (var nbr=1; nbr<=4; nbr++) {
                 if (nbr % 2)
    		        style = '';
    	     else
                        style = " style = 'background: #e8e8e8'";
                var m="";
                var resTotal=0;
                for(var i=0; i<Cities.numCities; i++) {
                            m += "<TD width=81 "+style+" align=right>"+ addCommas(Cities.cities[i].c.resources[nbr].count) +'</td>';
                            resTotal+=parseInt(Cities.cities[i].c.resources[nbr].count);
                 }
                str += "<tr><td "+style+" align=right><b>"+unsafeWindow.arStrings.ResourceName[nbr]+"</td><td "+style+" align=right>"+addCommas(resTotal)+" "+ m+"</tr>"; 
          
      
            
              }
             str += "<tr><td><br></td></tr>";
            // Production de nourriture + ENTRETIEN !
            var m="";
    	var prodTotal=0;
    	for(i=0; i<Cities.numCities; i++) {
    	           m += "<TD align=right width=81 style='background:#e8e8e8'>"+ addCommas(Cities.cities[i].c.resources[1].hourlyTotalRate())+"/"+unsafeWindow.arStrings.TimeStr.timeHr+"</td>";
    	          prodTotal+=parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate());
    	}
            str += "<tr><td style='background: #e8e8e8' align=right><b>"+unsafeWindow.arStrings.Common.Production+"</td><td style='background: #e8e8e8' align=right>"+addCommas(prodTotal)+"/"+unsafeWindow.arStrings.TimeStr.timeHr+""+ m+"</tr>"; 
            var m="";
    	var entTotal=0;
     	for(i=0; i<Cities.numCities; i++) {
     	       color='black';
     	      // if ( parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) < Cities.cities[i].c.upkeep() ) color='red';
    	       m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ addCommas(Cities.cities[i].c.upkeep())+"/"+unsafeWindow.arStrings.TimeStr.timeHr+"</td>";
    	       entTotal+=parseInt(Cities.cities[i].c.upkeep());
    	}
            str += "<tr><td style='background: #e8e8e8' align=right><b>"+unsafeWindow.arStrings.Common.UpKeep+"</td><td style='background: #e8e8e8' align=right>"+addCommas(entTotal)+"/"+unsafeWindow.arStrings.TimeStr.timeHr+""+ m+"</tr>"; 
    
            var m="";
    	 	var entTotal=0;
    	  	for(i=0; i<Cities.numCities; i++) {
    	  	       color='black';
    	  	       if ( parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) < parseInt(Cities.cities[i].c.upkeep()) ) {
    	  	        // entretien supérieur à la production
    	  	        difference = parseInt(Cities.cities[i].c.resources[1].hourlyTotalRate()) - parseInt(Cities.cities[i].c.upkeep());
    	  	        var timeLeft = parseInt(Cities.cities[i].c.resources[1].count)  / (0-difference) * 3600;
    			if (timeLeft > 86313600)
    			       autonomia= '----';
    			else {
    			      if (timeLeft<(Options.foodWarnHours*3600)) {
			     			     autonomia= '<SPAN class=whiteOnRed><b>'+ timestrShort(timeLeft) +'</b></span>';
			     			 } else {
			     			   autonomia= ''+ timestrShort(timeLeft) +'';
			 }
                    	}
    	  	        m += "<TD align=right width=81 style='background:#e8e8e8;color:"+color+";'>"+ autonomia +"</td>";
    	  	       } else {
    	  	       
    	  	         m += "<TD align=right width=81 style='background:#e8e8e8;color:black;'>---</td>";
    	  	       }
    	 	          
    
    	 	}
    	 str += "<tr><td style='background: #e8e8e8' align=right><b>Autonomia</td><td style='background: #e8e8e8' align=right>&nbsp;"+ m+"</tr>"; 
         var m="";
	 var unitTotal=0;
	  str += "<tr><td><br></td></tr>";
	 if (unsafeWindow.arStrings.unitName["u1"]) {
	  
	 	
	 
	            style = " style = 'background: #e8e8e8'";
	            
	 	 for(var i=0; i<Cities.numCities; i++) {
	 	                        m += "<TD width=81 "+style+" align=right>"+ addCommas(Cities.cities[i].c.troops[1].count()) +'</td>';
	 	                        unitTotal+=parseInt(Cities.cities[i].c.troops[1].count());
	 	 }
	          str += "<tr><td "+style+" align=right><b>"+unsafeWindow.arStrings.unitName["u1"]+"</td><td "+style+" align=right>"+addCommas(unitTotal)+" "+ m + "</tr>"; 
	         
	 }
	   var m="";
	 var unitTotal=0;
	 if (unsafeWindow.arStrings.unitName["u9"]) {
	  
	 	        style = '';
	
	            
	 	 for(var i=0; i<Cities.numCities; i++) {
	 	                        m += "<TD width=81 "+style+" align=right>"+ addCommas(Cities.cities[i].c.troops[9].count()) +'</td>';
	 	                        unitTotal+=parseInt(Cities.cities[i].c.troops[9].count());
	 	 }
	          str += "<tr><td "+style+" align=right><b>"+unsafeWindow.arStrings.unitName["u9"]+"</td><td "+style+" align=right>"+addCommas(unitTotal)+" "+ m + "</tr>"; 
	         
	 }
	         
        str += "<tr><td><br></td></tr>";
    t.statpourTr.innerHTML = str;
    t.displayTimer = setTimeout (t.show, 2500);
  },
  
  
  /******* transport ****/
  verifierWagons: function() {
   var t = my.TranspAuto;
   var maxw=parseInt(Cities.cities[t.sourceCity.idx].c.troops[t.typetrp.value].count());
   var saisw=parseInt(t.Choixnbwagon.value);
   if (saisw > maxw) {
      t.Choixnbwagon.value=maxw;
      t.divTranportStatus.innerHTML = '<FONT COLOR=#550000>La quantità eccede il massimo '+maxw+' !.</font>';
   }
   t.estimerRes();
  },
  estimerRes: function() {
   var t = my.TranspAuto;
   
   
   var esti = parseInt(unsafeWindow.Unit.stats[t.typetrp.value].load * t.Choixnbwagon.value * (1 + (unsafeWindow.player.technologies[10].bonus())));
    t.estimationRes.innerHTML = "<font size=3><b>" + addCommas(esti) + "</b></font>";
   //t.estimationRes.innerHTML += "<br>Tempi stimati di marcia: <b>" + m.friendEtaStr + "</b>" ; 
   
   // test sur les ressources choisit !
   
   var cityID = t.sourceCity.c.id;
   var ic=0;
   var resact=0;
   var ic_ty="gold"; 
   var ic_text="di argento";
   resact = Cities.cities[t.sourceCity.idx].c.silver();
   if (document.getElementById("ChoixRess1").checked) { ic_ty="rec1";ic=1;ic_text="di cibo";resact = parseInt(Cities.cities[t.sourceCity.idx].c.resources[1].count); }
   if (document.getElementById("ChoixRess2").checked) { ic_ty="rec2";ic=2;ic_text="di legno";resact = parseInt(Cities.cities[t.sourceCity.idx].c.resources[2].count); }
   if (document.getElementById("ChoixRess3").checked) { ic_ty="rec3";ic=3;ic_text="di pietra";resact = parseInt(Cities.cities[t.sourceCity.idx].c.resources[3].count); }
   if (document.getElementById("ChoixRess4").checked) { ic_ty="rec4";ic=4;ic_text="di ferro";resact = parseInt(Cities.cities[t.sourceCity.idx].c.resources[4].count); }

  
   if (resact < esti) {
     var nbparunit = parseInt(unsafeWindow.Unit.stats[t.typetrp.value].load * 1 * (1 + (unsafeWindow.player.technologies[10].bonus())));
     var uniteness = Math.round(resact / nbparunit) - 1;
     //t.estimationRes.innerHTML += "<br><font color=red><b>Risorse disponibili insufficienti:</b></font> Avete bisogno <a id='TRPclickunit' href='#'>" + uniteness + "</a> ";
     //t.TTbutTransport.disabled = true;
    // document.getElementById ('TRPclickunit').addEventListener ('click', 
    // function() {
      t.Choixnbwagon.value = uniteness;
      t.TTbutTransport.disabled = false;
      
      t.estimerRes();
      
    // }, false);
   } else {
    //t.TTbutTransport.disabled = false;
   }
   
  }, 
  
  clickUniteMax: function() {
    var t = my.TranspAuto;
    var maxw=parseInt(Cities.cities[t.sourceCity.idx].c.troops[t.typetrp.value].count());
    
    
   /* var niveauPointRall=parseInt(getCityBuilding (t.sourceCity.id, 12).maxLevel); // 12=Point de ralliement
    if (niveauPointRall==11) {
       var maxtroupe=150000;
    } else {
       var maxtroupe=niveauPointRall*10000;
    }
    if (maxw>maxtroupe) maxw=maxtroupe;
    */
    t.Choixnbwagon.value=maxw;
    t.estimerRes();
  },
  clickTransportDo: function() {   // fonction pour faire le transport
   var t = my.TranspAuto;
   var SourceId = t.sourceCity.c.id;
   
   var DestinationId = t.destinationCity.c.id;

   nHtml.Click(document.getElementById("city_"+SourceId));
   
   if (!document.getElementById("ChoixRess0").checked && !document.getElementById("ChoixRess1").checked && !document.getElementById("ChoixRess2").checked && !document.getElementById("ChoixRess3").checked && !document.getElementById("ChoixRess4").checked) {
       t.divTranportStatus.innerHTML = '<FONT COLOR=#550000>Selezionare una tipologia di risorsa!</font>';
      return;
   }
   if (t.sourceCity.c.x==t.destinationCityx.value && t.sourceCity.c.y==t.destinationCityy.value) {
      t.divTranportStatus.innerHTML = '<FONT COLOR=#550000>Impossibile trasportare sulla stessa città!.</font>';
     return;
   }
   if (parseInt(t.Choixnbwagon.value)=="0") {
   t.divTranportStatus.innerHTML = '<FONT COLOR=#550000>Impossibile trasportare avete 0 unità.</font>';
     return;
   }
   var x=t.destinationCityx.value;
   var y=t.destinationCityy.value;
   if (x == 0 || y == 0) {
      t.divTranportStatus.innerHTML = '<FONT COLOR=#550000>Impossibile trasportare a 0,0 !.</font>';
     return;
   }
   t.TTbutTransport.disabled=true;
   
   var c={};
   c.kid = 0;
   c.cid= t.sourceCity.c.id;
   c.type = "1";
   c.xcoord = x;
   c.ycoord = y;
   c.r1 = 0;
   c.r2 = 0; 
   c.r3 = 0; 
   c.r4 = 0; 
   c.gold = 0; 
   var cc=0;
   var esti =  parseInt(unsafeWindow.Unit.stats[t.typetrp.value].load * t.Choixnbwagon.value * (1 + (unsafeWindow.player.technologies[10].bonus())));
   if (document.getElementById("ChoixRess0").checked) { cc=0;c.gold = esti; }
   if (document.getElementById("ChoixRess1").checked) { cc=1;c.r1 = esti; }
   if (document.getElementById("ChoixRess2").checked) { cc=2;c.r2 = esti; }
   if (document.getElementById("ChoixRess3").checked) { cc=3;c.r3 = esti; }
   if (document.getElementById("ChoixRess4").checked) { cc=4;c.r4 = esti; }
   
   /*if (t.typetrp.value==1)  c.u1 = t.Choixnbwagon.value;
   if (t.typetrp.value==9)  c.u9 = t.Choixnbwagon.value;
   if (t.typetrp.value==7)  c.u7 = t.Choixnbwagon.value;
   if (t.typetrp.value==8)  c.u8 = t.Choixnbwagon.value;*/

  t.divTranportStatus.innerHTML = "<i><b>Elaborazione...</b></i>";
  unsafeWindow.Modal.hideModalAll();
  unsafeWindow.March.open(1,x,y);
 
  setTimeout(function() {
  
   document.getElementById("modal_attack_unit_ipt_"+t.typetrp.value).value=t.Choixnbwagon.value;
   
   document.getElementById("modal_attack_resource_"+cc).value=esti;
   
   unsafeWindow.March.check(1);
   
   t.divTranportStatus.innerHTML ="<font color=red size='3px'><b>Truppe in marcia...<b></font>";
   t.TTbutTransport.disabled=false; 
  
  },1000);
 
 
/*  
  unsafeWindow.AjaxCall.gPostRequest("march.php",c,
      function(rslt){
         
          var t = my.TranspAuto;  
	  var rslt = transport;
          if (rslt.ok) {
          var timediff = parseInt(rslt.eta) - parseInt(rslt.initTS);
	                     var ut = unsafeWindow.unixtime();
	                     var unitsarr=[0,0,0,0,0,0,0,0,0,0,0,0,0];
	                     for(i = 0; i <= unitsarr.length; i++){
	                     	if(params["u"+i]){
	                    	unitsarr[i] = params["u"+i];
	                    	}
	                     }
	                     var resources=new Array();
	                     resources[0] = params.gold;
	                     for(i=1; i<=4; i++){
	                    	resources[i] = params["r"+i];
	                     }
	                     var currentcityid =  t.sourceCity.id;
	                     unsafeWindow.attach_addoutgoingmarch(rslt.marchId, rslt.marchUnixTime, ut + timediff, params.xcoord, params.ycoord, unitsarr, params.type, params.kid, resources, rslt.tileId, rslt.tileType, rslt.tileLevel, currentcityid, true);
	                     //unsafeWindow.update_seed(rslt.updateSeed)
	                     if(rslt.updateSeed){unsafeWindow.update_seed(rslt.updateSeed)};
	                     //t.clickCitySourceSelect(t.sourceCity);
	                     t.divTranportStatus.innerHTML = "<font size='3px'><b>Trasporto effettuato</b>";
                   t.TTbutTransport.disabled=false;
          
          } else {
		    t.divTranportStatus.innerHTML ="<font color=red size='3px'><b>Errore, riprovare !<b></font>";
		     if (rslt.msg) {
		               t.divTranportStatus.innerHTML +="<br><font color=black size='2px'>" + rslt.msg +"</font>";
         	     }
                    t.TTbutTransport.disabled=false;
          }       
          
        }, function (rslt) {
          
           var t = my.TranspAuto;
           t.divTranportStatus.innerHTML ="<font color=red size='3px'><b>Errore!<b></font>";
           t.TTbutTransport.disabled=false; 
        }
    );
  */     
          
     
  },
  
  clickCitySourceSelect : function (city){
    var t = my.TranspAuto;
    t.sourceCity = city;
    t.TTbutTransport.disabled=false;
    // en cas de changement de ville, faire le test et mettre quantite max
    //var maxw=parseInt(rows[t.typetrp.value][t.sourceCity.idx]);
    //var saisw=parseInt(t.Choixnbwagon.value);
    //if (saisw > maxw)  t.Choixnbwagon.value=maxw;
    t.estimerRes();
   },
   clickCityDestinationSelect : function (city){
    var t = my.TranspAuto;
    t.destinationCity = city;
    t.destinationCityx.value=t.destinationCity.c.x;
    t.destinationCityy.value=t.destinationCity.c.y;
    t.TTbutTransport.disabled=false;
    t.estimerRes();
   }, 
 
}





my.Crests = {
  cont : null,
  state : null,

  init : function (div){
    var t = my.Crests;
    this.cont = document.createElement('div');
    return t.cont;
  },
  

  getContent : function (){
    var t = my.Crests;
    return t.cont;
  },

  hide : function (){
    var t = my.Crests;
  },

  show : function (){ 
    var t = my.Crests;
    
   
	var auguste,tiberus,caligula,claude,vespasien;
	if (unsafeWindow.items[1101].count>0){auguste=unsafeWindow.items[1101].count}else{auguste=0};
	if (unsafeWindow.items[1102].count>0){tiberus=unsafeWindow.items[1102].count}else{tiberus=0};
	if (unsafeWindow.items[1103].count>0){caligula=unsafeWindow.items[1103].count}else{caligula=0};
	if (unsafeWindow.items[1104].count>0){claude=unsafeWindow.items[1104].count}else{claude=0};
	if (unsafeWindow.items[1105].count>0){vespasien=unsafeWindow.items[1105].count}else{vespasien=0};

	if (Cities.cities[1]){ville2="#99EE99";}else{ville2="#EE9999";}
	if (Cities.cities[2]){ville3="#99EE99";}else{ville3="#EE9999";}
	if (Cities.cities[3]){ville4="#99EE99";}else{ville4="#EE9999";}
   
   if (t.state == null){
    
      var m = '<style>\
CAPTION.MYTABLE\
  {\
     background-color:eeffff;\
     color:black;\
     border-style:solid;\
     border-width:1px;\
     border-color:black;\
  }\
  TABLE.MYTABLE\
  { \
     font-family:arial;\
     border-collapse:collapse;\
     font-size:12pt;\
     background-color:F5F5F5;\
     width:100%;\
     border-style:solid;\
     border-color:black;\
     border-width:1px;\
  }\
\
  TH.MYTABLE\
  {\
     font-size:12pt;\
     color:black;\
     text-align:center;\
     border-style:solid;\
     border-color:black;\
     border-width:1px;\
  }\
\
\
  TR.MYTABLE\
  { \
  }\
\
  TD.MYTABLE\
  {  \
     font-size:12pt;\
     background-color:FFFFE5;\
     color:black;\
     border-style:solid;\
     border-width:1px;\
     text-align:left;\
  }\
</style>\
\
<TABLE CLASS="MYTABLE" CELLPADDING=3 CELLSPACING=0 align=center>\
    <CAPTION CLASS="MYTABLE"><center><b>Contrassegni necessari per ottenere gli atti di città</CAPTION>\
    \
    <THEAD >\
      <TR CLASS="MYTABLE">\
        <TH CLASS="MYTABLE">Città</TH>\
        <TH CLASS="MYTABLE">Requisiti</TH>\
      </TR>\
    </THEAD>\
    \
    <TBODY>\
      <TR CLASS="MYTABLE">\
        <TD CLASS="MYTABLE" style="background-color:'+ville2+';"><b><center>II Città</TD>\
        <TD CLASS="MYTABLE" style="background-color:'+ville2+';">Livello 7 (Attuale: ' + unsafeWindow.player.level + ')\
        <br>5 Cohortes</TD>\
      </TR>\
      <TR CLASS="MYTABLE">  \
        <TD CLASS="MYTABLE" style="background-color:'+ville3+';"><b><center>III Città</TD>\
        <TD CLASS="MYTABLE" style="background-color:'+ ( (auguste>=10 && tiberus>=5 && caligula>=2)?"#99EE99":ville3) +';">'+auguste+' / 10 '+unsafeWindow.arStrings.itemName["i1101"]+'<br>'+tiberus+' / 5 '+unsafeWindow.arStrings.itemName["i1102"]+'<br>'+caligula+' / 2 '+unsafeWindow.arStrings.itemName["i1103"]+'</TD>\
      </TR>\
            <TR CLASS="MYTABLE">  \
              <TD CLASS="MYTABLE" style="background-color:'+ville4+';"><b><center>IV Città</TD>\
              <TD CLASS="MYTABLE" style="background-color:'+ ( (auguste>=20 && tiberus>=15 && caligula>=9)?"#99EE99":ville4 ) +';">'+auguste+' / 20 '+unsafeWindow.arStrings.itemName["i1101"]+'\
              <br>'+tiberus+' / 15 '+unsafeWindow.arStrings.itemName["i1102"]+'\
              <br>'+caligula+' / 9 '+unsafeWindow.arStrings.itemName["i1103"]+'\
              <br>'+claude+' / 4 '+unsafeWindow.arStrings.itemName["i1104"]+'\
              <br>'+vespasien+' / 2 '+unsafeWindow.arStrings.itemName["i1105"]+'\
              </TD>\
      </TR>\
    </TBODY>\
  </TABLE>';
      t.cont.innerHTML = m;
      t.state = 1;
    }
  },

}

/************************ Gold Collector ************************/
var CollectGold = {
  timer : null,
  lastCollect : {},
      
  init : function (){
    var t = CollectGold;
    for (var c=0; c<Cities.numCities; c++)
      t.lastCollect['c'+ Cities.cities[c].c.id] = 0;
    if (Options.pbGoldEnable)
      t.setEnable (true);
  },
  
  setEnable : function (tf){
    var t = CollectGold;
    clearTimeout (t.timer);
    if (tf)
      t.tick();
  },

  colCityName : null,
  colHappy : 0,  
  tick : function (){
    var t = CollectGold;
    for (var c=0; c<Cities.numCities; c++){
      var city = Cities.cities[c];
      var since = unixTime() - t.lastCollect['c'+city.c.id];
      if (since>15*60 && city.c.population.happiness()>=Options.pbGoldHappy){
        t.lastCollect['c'+city.c.id] = unixTime();
        t.colCityName = city.c.name;
        t.ajaxCollectGold (city.c, t.e_ajaxDone); 
        break;
      }
    }
    t.timer = setTimeout (t.tick, 30000);    
  },

  e_ajaxDone : function (rslt){
    var t = CollectGold;
    //logit(rslt.ok);
  },
  
  ajaxCollectGold : function (city, notify){
    var c={};
    c.cid=city.id;
    c.eventid=1;
    //logit("Collect "+city.name +" !" );
    unsafeWindow.AjaxCall.gPostRequest("coliseumEvent.php",c,
    function(rslt){
       if (notify)  
        notify (rslt);
      }, function (rslt) {
        if (notify)  
          notify (rslt);
      }
    );
  },
}

/************************ Collecte de ressources en auto ************************/
var CollectRessource = {
  timer : null,
  lastCollect : {},
      
  init : function (){
    var t = CollectRessource;
    for (var c=0; c<Cities.numCities; c++)
      t.lastCollect['c'+ Cities.cities[c].c.id] = 0;
    if (Options.pbRessEnable)
      t.setEnable (true);
  },
  
  setEnable : function (tf){
    var t = CollectRessource;
    clearTimeout (t.timer);
    if (tf)
      t.tick();
  },

  colCityName : null,
  colHappy : 0,  
  tick : function (){
    var t = CollectRessource;
    for (var c=0; c<Cities.numCities; c++){
      var city = Cities.cities[c];
      var since = unixTime() - t.lastCollect['c'+city.c.id];
      //logit("CollectRessource tentative :  "+since +" ! " +  unsafeWindow.player.resourceAutoCollectExpireTime);
      if (since>Options.pbRessTime*60 && document.getElementById("btn_collect_all").style.display!='none'){ //AutoCollect
        t.lastCollect['c'+city.c.id] = unixTime();
        t.colCityName = city.c.name;
        t.ajaxCollectRessource (city.c, t.e_ajaxDone); 
        break;
      }
    }
    t.timer = setTimeout (t.tick, 30000);    
  },

  e_ajaxDone : function (rslt){
    var t = CollectRessource;
    //logit(rslt.ok);
  },
  
  ajaxCollectRessource : function (city, notify){
    var c={};
    c.cid=city.id;
    //logit("CollectRessource "+city.name +" !" );
    unsafeWindow.AjaxCall.gPostRequest("collectResource.php",c,
    function(rslt){
       if (notify)  
        notify (rslt);
      }, function (rslt) {
        if (notify)  
          notify (rslt);
      }
    );
  },
}


/*********************************** Options Tab ***********************************/

my.Options = {
  cont : null,
  state : null,
  fixAvailable : {},

  init : function (){
    var t = my.Options;
    t.cont = document.createElement('div');
    return t.cont;
  },


  getContent : function (){
    var t = my.Options;
    return t.cont;
  },

  togOpt : function (checkboxId, optionName, callEnable, callIsAvailable){
    var t = my.Options;
    var checkbox = document.getElementById(checkboxId);
    
    if (callIsAvailable && callIsAvailable()==false){
      checkbox.disabled = true;
      return;
    }
    if (Options[optionName])
      checkbox.checked = true;
    checkbox.addEventListener ('change', new eventToggle(checkboxId, optionName, callEnable).handler, false);
    function eventToggle (checkboxId, optionName, callOnChange){
      this.handler = handler;
      var optName = optionName;
      var callback = callOnChange;
      function handler(event){
        Options[optionName] = this.checked;
        saveOptions();
        if (callback != null)
          callback (this.checked);
      }
    }
  },


  show : function (){
    var t = my.Options;
      try {      
        m = '<DIV style="height:580px; max-height:580px; overflow-y:auto"><TABLE class=ptTab>\
        <TR><TD colspan=2><font size=4><B><u>Configurazione opzioni:</u></b></font><br></td></tr>\
        <TR><TD><INPUT id=ptAllowWinMove type=checkbox /></td><TD>Attivare il trascinamento della finestra</td></tr>\
        <TR><TD><INPUT id=pbGoldEnable type=checkbox /></td><TD>Raccolta automatica argento se la felicità è >= <INPUT id=pbgoldLimit type=text size=2 maxlength=3 \>%</td></tr>\
        <TR><TD><INPUT id=pbRessEnable type=checkbox /></td><TD>Raccolta automatica delle risorse ogni <INPUT id=pbLimitRess type=text size=2 maxlength=3 \> minuti</td></tr>\
        <TR><TD>&nbsp;</td><td>Mettere autonomia in rosso se inferiore a <INPUT id=optFoodHours type=text size=3 value="'+ Options.foodWarnHours +'"> ore</td></tr>\
        <TR><TD colspan=2><B>Configurazione chat:</b></td></tr>\
        <TR><TD><INPUT id=pbChatREnable type=checkbox /></td><TD>Impostare la chat a destra</td></tr>\
        <TR><TD><INPUT id=ptEnableFoodWarnTchat type=checkbox /></td><TD>Attivare il messaggio di allerta cibo nella chat alleanza</td></tr>\
        <TR><TD><INPUT id=HelpReq type=checkbox /></td><TD>Rispondere automaticamente ai messaggi di aiuto in chat</td></tr>\
        <TR><TD><INPUT id=DelReq type=checkbox /></td><TD>Cancellare i messaggi di aiuto dalla chat</td></tr>\
        <TR><TD colspan=2><BR><B>Configurazione torre:</b></td></tr>\
	<TR><TD><INPUT id=pcalertEnable type=checkbox '+ (Options.alertConfig.aChat?'CHECKED ':'') +'/></td><TD>Postare gli attacchi in arrivo nella chat alleanza.</td></tr>\
        <TR><TD align=right>Messaggio: &nbsp; </td><TD><INPUT id=pbalertPrefix type=text size=60 maxlength=120 value="'+ Options.alertConfig.aPrefix +'" \></td></tr>\
        </table></table><BR><BR><HR>'+ EVersion +'</div>'
        t.cont.innerHTML = m;
 
        t.togOpt ('ptAllowWinMove', 'ptWinDrag', mainPop.setEnableDrag);
        t.togOpt ('ptEnableFoodWarnTchat', 'enableFoodWarnTchat', FoodAlerts.init);
	t.togOpt ('pbGoldEnable', 'pbGoldEnable', CollectGold.setEnable);
	t.togOpt ('pbRessEnable', 'pbRessEnable', CollectRessource.setEnable);
	t.togOpt ('pbChatREnable', 'pbChatOnRight', WideScreen.setChatOnRight);
	t.togOpt ('HelpReq', 'HelpRequest');
	t.togOpt ('DelReq', 'DeleteRequest');
	t.changeOpt ('pbgoldLimit', 'pbGoldHappy');
	t.changeOpt ('pbLimitRess', 'pbRessTime');

	document.getElementById('optFoodHours').addEventListener ('change', function () {
	            var x = document.getElementById('optFoodHours').value; 
	            if (isNaN(x) || x<0.01 || x>99999){
	              document.getElementById('optFoodHours').value = Options.foodWarnHours;
	              return;
	            }
	            Options.foodWarnHours = x; 
	            saveOptions();
	          }, false);
        document.getElementById('pcalertEnable').addEventListener ('change', t.e_alertOptChanged, false); 
        document.getElementById('pbalertPrefix').addEventListener ('change', t.e_alertOptChanged, false);
      } catch (e) {
        t.cont.innerHTML = '<PRE>'+ e.name +' : '+ e.message +'</pre>';  
      }      
 
   },
   
   hide : function (){
    },

    togOpt : function (checkboxId, optionName, callOnChange){
      var t = my.Options;
      var checkbox = document.getElementById(checkboxId);
      if (Options[optionName])
        checkbox.checked = true;
      checkbox.addEventListener ('change', eventHandler, false);
      function eventHandler (){
        Options[optionName] = this.checked;
        saveOptions();
        if (callOnChange)
          callOnChange (this.checked);
      }
    },
    
    changeOpt : function (valueId, optionName, callOnChange){
      var t = my.Options;
      var e = document.getElementById(valueId);
      e.value = Options[optionName];
      e.addEventListener ('change', eventHandler, false);
      function eventHandler (){
        Options[optionName] = this.value;
        saveOptions();
        if (callOnChange)
          callOnChange (this.value);
      }
    },

     e_alertOptChanged : function (){
      Options.alertConfig.aChat = document.getElementById('pcalertEnable').checked;
      Options.alertConfig.aPrefix = document.getElementById('pbalertPrefix').value;      
      saveOptions();
      TowerAlerts.setPostToChatOptions(Options.alertConfig);
  },	
}



my.AllianceList = {
  cont : null,
  nombre: null,
  state : null,
  dat : [],

  init : function (){
    var t = my.AllianceList;
    t.cont = document.createElement('div');
    //t.nombre=0;
    //unsafeWindow.PTgetMembers = t.eventGetMembers;
    //unsafeWindow.PTDme = t.eventGetLienMember;
    unsafeWindow.PTpd = t.clickedPlayerDetail;
    unsafeWindow.PTpl = t.clickedPlayerLeaderboard;
    unsafeWindow.PCplo = t.clickedPlayerGetLastLogin;
    //unsafeWindow.PTalClickPrev = t.eventListPrev;
    //unsafeWindow.PTalClickNext = t.eventListNext;
    return t.cont;
  },
  getContent : function (){
    var t = my.AllianceList;
    return t.cont;
  },

  hide : function (){
    var t = my.AllianceList;

  },

  show : function (){
    var t = my.AllianceList;
    if (t.state == null){
    
     var m = '<DIV class=ptentry><TABLE width=100% cellpadding=0>\
              <TR><TD class=xtab align=right></td><TD class=xtab>Giocatore: &nbsp;</td>\
                <TD width=80% class=xtab><INPUT id=allPlayName size=20 type=text /> &nbsp; <INPUT id=playSubmit type=submit value="Cerca giocatore" /></td>\
              <TD class="xtab ptErrText"><SPAN id=ptplayErr></span></td></tr>\
            <TR><TD class=xtab></td><TD class=xtab>Alleanza: &nbsp;</td>\
             <TD class=xtab><INPUT id=allAllName type=text /> &nbsp; <INPUT id=allSubmit DISABLED type=submit value="Cerca alleanza" /></td>\
            <TD class="xtab ptErrText"><SPAN id=ptallErr></span></td></tr>\
             </table><span style="vertical-align:middle;" id=altInput></span></div>\
          <SPAN id=allListOut></span>';
      t.cont.innerHTML = m;
    
    document.getElementById('playSubmit').addEventListener ('click', t.eventPlayerSubmit, false);
    document.getElementById('allPlayName').addEventListener ('focus', function (){document.getElementById('ptplayErr').innerHTML='';}, false);
      t.state = 1;
    }
    
  },
  eventPlayerSubmit : function (){
      var t = my.AllianceList;
      document.getElementById('ptplayErr').innerHTML='';
      var name = document.getElementById('allPlayName').value;
      t.pName = name;
      if (name.length < 3){
        document.getElementById('ptplayErr').innerHTML = 'Minimo 3 caratteri';
        return;
      }
      document.getElementById('altInput').innerHTML = '';
      document.getElementById('allListOut').innerHTML = '<BR><BR><CENTER>Ricerca in corso...</center>';
      t.fetchPlayerList (name, t.eventGotPlayerList);
  },
  clickedPlayerLeaderboard : function (span, uid){
      var t = my.AllianceList;
      span.onclick = '';
      span.innerHTML = "Ricerca nella classifica...";
      t.fetchLeaderboard (uid, function (r) {t.gotPlayerLeaderboard(r, span)});
  },
  fetchLeaderboard : function (uid, notify) {
    unsafeWindow.AjaxCall.gPostRequest("getUserLeaderboard.php",{action:"view_player_detail", player_id:uid},
    function(rslt){
        notify (rslt);
   	},function(rslt){
   	        notify (rslt);
    	});
  },
  fetchPlayerList : function (name, notify){  
    unsafeWindow.AjaxCall.gPostRequest("searchPlayers.php",{subType:"ALLIANCE_INVITE", searchName:name},
    function(rslt){
        notify (rslt);
   	},function(rslt){
   	        notify (rslt);
    	});
  },
  gotPlayerLeaderboard : function (rslt, span){
      var t = my.AllianceList;
      if (!rslt.ok){
        span.innerHTML = rslt.errorMsg;
        return;
      }
      if (rslt.totalResults == 0){
        span.innerHTML = "<B>Classifica:</b> non trovato..(sotto nebbia?)";
        return;
      }
      var p = rslt.data[0];
      
      /*var an = p.allianceName;
      if (!an || an=='' || p.officerType==4)
        an = 'Aucun';
      else
        an += ' ('+ officerId2String(p.officerType) +')';
      m = '<TABLE cellspacing=0 class=ptTab><TR><TD><B>Classifica: </b></td><TD colspan=2> Gloria: '+ p.might  +' &nbsp; Alleanza: '+ an +'</td></tr>'; 
      for (var i=0; i<p.cities.length; i++){
        var c = p.cities[i];
        m += '<TR><TD align=right><B>Città #'+ (i+1) +':</b></td><TD> &nbsp; '+ c.cityName 
        +' <a href="javascript:void(0)" onclick="KB.Controllers.MapHelper.gotoCoord('+ c.xCoord +',' +c.yCoord+ ')" class="coordinateLink">('+ c.xCoord +',' +c.yCoord+ ')</a></td><TD width=75%> &nbsp; Livello: '

  
          + c.tileLevel +' &nbsp; &nbsp; status: '+ cityStatusString (c.cityStatus) +' &nbsp; &nbsp; creata il: ' + c.dateCreated.substr(0,10) +'</td></tr>';
      }  */
      //span.innerHTML = m + '</table>';
      span.innerHTML = "<B>Classifica:</b> Elaborazione<br>Numero città:"+p.numOfCities+"<br>Nomi delle provincie: "+p.numOfWilds;
  },
   eventGotPlayerList : function (rslt){
      var t = my.AllianceList;
      if (!rslt.ok){
        document.getElementById('allListOut').innerHTML = rslt.errorMsg;
        return;
      }
      t.playerList = rslt.matchedUsers;
      var uList = [];
      for (k in rslt.matchedUsers)
            uList.push (rslt.matchedUsers[k].userId);     
      t.fetchPlayerStatus (uList, function(r) {t.eventGotPlayerOnlineList(r)});    
  },  
  fetchPlayerStatus : function (uidArray, notify){
        unsafeWindow.AjaxCall.gPostRequest("getOnline.php",{checkArr:uidArray.join(',')},
	    function(rslt){
	        notify (rslt);
    	},function(rslt){
	        notify (rslt);
    	}); 
    },
   fetchPlayerInfo : function (uid, notify){
          unsafeWindow.AjaxCall.gPostRequest("getUserGeneralInfo.php",{uid:uid},
	 	    function(rslt){
	 	        notify (rslt);
	     	},function(rslt){
	 	        notify (rslt);
    	}); 
  },
   clickedPlayerDetail : function (span, uid){
        var t = my.AllianceList;
        span.onclick = '';
        span.innerHTML = "Caricamento dettagli...";
        t.fetchPlayerInfo (uid, function (r) {t.gotPlayerDetail(r, span)});
  },
   gotPlayerDetail : function (rslt, span){
      var t = my.AllianceList;
      if (!rslt.ok){
        span.innerHTML = rslt.errorMsg;
        return;
      }
      var u = rslt.userInfo[0];
      var a = 'Aucun';
      if (u.allianceName)
        a = u.allianceName +' ('+ getDiplomacy(u.allianceId) + ')';
      var m = '<TABLE cellspacing=0 class=ptTab><TR><TD><B>Dettagli:</b> &nbsp; </td><TD>Alleanza: '+ a +' &nbsp; Città: '
            + u.cities +' &nbsp; Popolazione: '+ u.population +'</td></tr><TR><TD></td><TD>Provincie: ';
      var pids = u.provinceIds.split (',');
      var p = [];
      for (var i=0; i<pids.length; i++)
        p.push(unsafeWindow.arStrings.provinceName['p'+pids[i]]);
      span.innerHTML = m + p.join (', ') +'</td></tr></table>';
  },
   eventGotPlayerOnlineList : function (rslt){
          var t = my.AllianceList;
          if (!rslt.ok){
            document.getElementById('allListOut').innerHTML = rslt.errorMsg;
            return;
      }
      var m = '<DIV class=ptstat>Risultati della ricerca per <B>"'+ t.pName +'"</b></div>\
        <DIV style="height:575px; max-height:575px; overflow-y:auto">\
        <TABLE width=95% align=center class=ptTab cellspacing=0><TR style="font-weight:bold"><TD width=20%>Nome</td>\
        <TD align=right>Gloria &nbsp;&nbsp;&nbsp;&nbsp;</td><TD>&nbsp;</td><TD width=60%>Informazioni aggiuntive</td></tr>';
      var row=0;
      var cl='';
      for (k in t.playerList){
        var u = t.playerList[k];
        if (++row % 2)
          cl = 'class=ptOddrow ';
        else
          cl = '';
          if (u.allianceName) { var alliancenammme=u.allianceName; }else {var alliancenammme="---"; }
        m += '<TR '+ cl +'valign=top><TD>'+ u.genderAndName +'<br>'+alliancenammme+'<br><A target="_tab" href="http://www.facebook.com/profile.php?id='+ u.fbuid +'">profilo</a></td><TD align=center>&nbsp;'+ addCommasInt(u.might) +'&nbsp;</td>\
            <TD>'+ (rslt.data[u.userId]?"&nbsp;<SPAN class=boldDarkRed> IN LINEA </span>":"") +'</td>\
           <TD><SPAN onclick="PTpd(this, '+ u.userId +')"><A>Dettagli</a></span><br><SPAN onclick="PCplo(this, \''+ u.userId +'\')"><A>Ultimo collegamento</a></span></td></tr>';
      }
      m += '</table></div>';
      document.getElementById('allListOut').innerHTML = m;
  },
  
  
  clickedPlayerGetLastLogin : function (span, uid){
        var t = my.AllianceList;
        span.onclick = '';
        span.innerHTML = "Eleaborazione...";
        t.fetchPlayerLastLogin (uid, function (r) {t.gotPlayerLastLogin(r, span)});
  },
  fetchPlayerLastLogin : function (uid, notify){
     
       unsafeWindow.AjaxCall.gPostRequest("viewCourt.php",{pid:uid},
      	   function(rslt){
      	        notify (rslt);
           },
           function(rslt){
      	        notify (rslt);
      });
  },
  gotPlayerLastLogin : function (rslt, span){
        var t = my.AllianceList;
        if (!rslt.ok){
          span.innerHTML = rslt.errorMsg;
          return;
        }
    
        var p = rslt.playerInfo;
        var lastLogin = rslt.playerInfo.lastLogin;
        
        if (lastLogin) {
          m = '<span style="color:black">'+lastLogin+'</span>';
        } else {
           m = '<span style="color:red">?</span>';
        }  
        span.innerHTML = m + '';
  },
}



function CdispCityPicker (id, span, dispName, notify, selbut){
  function CcityButHandler (t){
    var that = t;
    this.clickedCityBut = clickedCityBut;
    function clickedCityBut (e){
      if (that.selected != null)
        that.selected.className = "castleBut castleButNon";
      that.city = Cities.cities[e.target.id.substr(that.prefixLen)];
      if (that.dispName)
        document.getElementById(that.id+'cname').innerHTML = that.city.c.name;
      e.target.className = "castleBut castleButSel";
      that.selected = e.target;
      if (that.coordBoxX){
        that.coordBoxX.value = that.city.c.x;
        that.coordBoxY.value = that.city.c.y;
        that.coordBoxX.style.backgroundColor = '#ffffff';
        that.coordBoxY.style.backgroundColor = '#ffffff';
      }
      if (that.notify != null)
        that.notify(that.city, that.city.c.x, that.city.c.y);
    }
  }

  function selectBut (idx){
    document.getElementById(this.id+'_'+idx).click();
  }

  function bindToXYboxes (eX, eY){
    function CboxHandler (t){
      var that = t;
      this.eventChange = eventChange;
      if (that.city){
        eX.value = that.city.c.x;
        eY.value = that.city.c.y;
      }
      function eventChange (){
        var x = parseInt(that.coordBoxX.value, 10);
        var y = parseInt(that.coordBoxY.value, 10);
        if (isNaN(x) || x<0 || x>750){
          that.coordBoxX.style.backgroundColor = '#ff8888';
          return;
        }
        if (isNaN(y) || y<0 || y>750){
          that.coordBoxY.style.backgroundColor = '#ff8888';
          return;
        }
        that.coordBoxX.style.backgroundColor = '#ffffff';
        that.coordBoxY.style.backgroundColor = '#ffffff';
        if (that.notify != null)
          that.notify (null, x, y);
      }
    }
    
    this.coordBoxX = eX;
    this.coordBoxY = eY;
    var bh = new CboxHandler(this);
    eX.size=2;
    eX.maxLength=3;
    eY.size=2;
    eY.maxLength=3;
    eX.addEventListener('change', bh.eventChange, false);
    eY.addEventListener('change', bh.eventChange, false);
  }

  this.selectBut = selectBut;
  this.bindToXYboxes = bindToXYboxes;
  this.coordBoxX = null;
  this.coordBoxY = null;
  this.id = id;
  this.dispName = dispName;
  this.prefixLen = id.length+1;
  this.notify = notify;
  this.selected = null;
  this.city = null;
  var m = '';
  for (var i=0; i<Cities.cities.length; i++)
    m += '<INPUT class="castleBut castleButNon" id="'+ id +'_'+ i +'" value="'+ (i+1) +'" type=submit \>';
  if (dispName)
    m += ' &nbsp; <SPAN style="display:inline-block; width:85px; font-weight:bold;" id='+ id +'cname' +'></span>';
  span.innerHTML = m;
  var handler = new CcityButHandler(this);
  for (var i=0; i<Cities.cities.length; i++)
    document.getElementById (id+'_'+i).addEventListener('click', handler.clickedCityBut, false);
  if (selbut != null)
    this.selectBut(selbut);
}



function setTabStyle (e, selected){
  if (selected){
    e.className = 'matTabSel';
  } else {
    e.className = 'matTabNotSel';
  }
}

function clickedTab (e){
  who = e.target.id.substring(2);
  newObj = my[who];
  currentObj = my[currentName];
  if (currentName != who){
    setTabStyle (document.getElementById ('aa'+currentName), false);
    setTabStyle (document.getElementById ('aa'+who), true);
    if (currentObj){
      currentObj.hide ();
      currentObj.getContent().style.display = 'none';
    }
    currentName = who;
    cont = newObj.getContent();
    newObj.getContent().style.display = 'block';
  }
  newObj.show();
}

function mouseMainTab (me){
  if (me.button == 2){
    var c = getClientCoords (document.getElementById('main_engagement_tabs'));
    mainPop.setLocation ({x: c.x+4, y: c.y+c.height});
  }
}

function eventHideShow (){
  if (mainPop.toggleHide(mainPop)){
    my[currentName].show();
    Options.ptWinIsOpen = true;
  } else {
    my[currentName].hide();
    Options.ptWinIsOpen = false;
  }
  saveOptions();
}


function hideMe (){
  mainPop.show (false);
  my[currentName].hide();
  Options.ptWinIsOpen = false;
  saveOptions();
}

function logit (msg){
  var serverID = getServerId();
  var now = new Date();
  GM_log (serverID +' @ '+ now.toTimeString().substring (0,8) +'.' + now.getMilliseconds() +': '+  msg);
}

function saveOptions (){
  var serverID = getServerId();
  GM_setValue ('BOOptions_'+serverID, JSON2.stringify(Options));
}

function readOptions (){
  var serverID = getServerId();
  s = GM_getValue ('BOOptions_'+serverID);
  if (s != null){
    opts = JSON2.parse (s);
    for (k in opts)
      Options[k] = opts[k];
  }
}

function createButton (label){
  var a=document.createElement('a');
  a.className='button20';
  a.innerHTML='<span style="color: #ff6">'+ label +'</span>';
  return a;
}

function AddMainTabLink(text, eventListener, mouseListener) {
  var a = createButton (text);
  a.className='tab';
  a.id = 'ptOfficial';
  var tabs=document.getElementById('main_engagement_tabs');
  if(tabs) {
  
    //if (eNew.firstChild){
      tabs.insertBefore (a, tabs.firstChild);
    //}else{
      tabs.appendChild(a);
    // }
    
    a.addEventListener('click',eventListener, false);
    if (mouseListener != null)
      a.addEventListener('mousedown',mouseListener, true);
    return a;
  }
  return null;
}


function setCities(){
 if (unsafeWindow.player.cities) {
  
  var nbville=0;
  Cities.cities = [];
  Cities.byID = {};
  
   unsafeWindow.player.allCities().each(function(c){
   
    city = {};
    city.idx = nbville;
    //logit("ID de ville : " +c.id);
    city.id = parseInt(c.id);
    /*
    city.name = c.name;
    city.x = parseInt(c.x);
    city.y = parseInt(c.y);
    city.tileId = c.tileId;
    city.provId = c.provId;
    city.population = c.population;
    */
    city.c = c;
    Cities.cities[nbville] = city;
    Cities.byID[c.id] = city;
     nbville++;
    
   });
   

  Cities.numCities = nbville;
  
 }
 
}
 
function getMyAlliance(){
  if (unsafeWindow.seed.allianceDiplomacies==null || unsafeWindow.seed.allianceDiplomacies.allianceName==null)
    return [0, 'Aucune'];
  else
    return [unsafeWindow.seed.allianceDiplomacies.allianceId, unsafeWindow.seed.allianceDiplomacies.allianceName];
}
// returns: 'neutral', 'friendly', or 'hostile'
function getDiplomacy (aid) {
  if (unsafeWindow.seed.allianceDiplomacies == null)
    return 'neutral';
  if (unsafeWindow.seed.allianceDiplomacies.friendly && unsafeWindow.seed.allianceDiplomacies.friendly['a'+aid] != null)
    return 'friendly';
  if (unsafeWindow.seed.allianceDiplomacies.hostile && unsafeWindow.seed.allianceDiplomacies.hostile['a'+aid] != null)
    return 'hostile';
  return 'neutral';
};
/************  LIB classes/functions .... **************/
function parseIntNan (n){
  x = parseInt(n, 10);
  if (isNaN(x))
    return 0;
  return x; 
}

  function searchDOM (node, condition, maxLevel, doMult){
    var found = [];
    eval ('var compFunc = function (node) { return ('+ condition +') }');
    doOne(node, 1);
    if(!doMult){
      if (found.length==0)
        return null;
      return found[0];
    }
    return found;
    function doOne (node, curLevel){
      try {
        if (compFunc(node))
          found.push(node);
      } catch (e){
      }      
      if (!doMult && found.length>0)
        return; 
      if (++curLevel<maxLevel && node.childNodes!=undefined)
        for (var c=0; c<node.childNodes.length; c++)
          doOne (node.childNodes[c], curLevel);
    }
  }

function getClientCoords(e){
  if (e==null)
    return {x:null, y:null, width:null, height:null};
  var x=0, y=0;
  ret = {x:0, y:0, width:e.clientWidth, height:e.clientHeight};
  while (e.offsetParent != null){
    ret.x += e.offsetLeft;
    ret.y += e.offsetTop;
    e = e.offsetParent;
  }
  return ret;
}

// creates a 'popup' div
function CPopup (prefix, x, y, width, height, enableDrag, onClose) {
  // protos ...
  
  this.BASE_ZINDEX = 111111;
  
   if (unsafeWindow.cpopupWins == null)
        unsafeWindow.cpopupWins = {};
    unsafeWindow.cpopupWins[prefix] = this;
    
  this.stmaxh = height;
  this.show = show;
  this.toggleHide = toggleHide;
  this.getTopDiv = getTopDiv;
  this.getMainDiv = getMainDiv;
  this.getZindex = getZindex;
  this.setZindex = setZindex;
  this.setEnableDrag = setEnableDrag;
  this.getLocation = getLocation;
  this.setLocation = setLocation;
  this.focusMe = focusMe;
  this.unfocusMe = unfocusMe;
  this.centerMe = centerMe;
  this.destroy = destroy;
  this.autoHeight = autoHeight;
  
  // object vars ...
  this.div = document.createElement('div');
  this.prefix = prefix;
  this.onClose = onClose;
  
  var t = this;
  this.div.className = 'CPopup '+ prefix +'_CPopup';
  this.div.style.background = "#fff";
  this.div.style.zIndex = this.BASE_ZINDEX;        // KOC modal is 100210 ?
  this.div.style.display = 'none';
  this.div.style.width = width + 'px';
  this.div.style.height = height + 'px';
  this.div.style.maxHeight = height + 'px';
  this.div.style.overflowY = 'hidden';
  this.div.style.position = "absolute";
  this.div.style.top = y +'px';
  this.div.style.left = x + 'px';
  
    
  var m = '<TABLE cellspacing=0 width=100% height=100%><TR id="'+ prefix +'_bar" class="CPopupTop"><TD id="'+ prefix +'_top" width=99%></td>\
      <TD id='+ prefix +'_X align=right valign=middle onmouseover="this.style.cursor=\'pointer\'" style="color: #fff; background: #555; padding-left: 5px; padding-right: 5px; height:15px;">X</td></tr>\
      <TR><TD valign=top class="CPopMain '+ prefix +'_CPopMain" colspan=2 id="'+ prefix +'_main"></td></tr></table>';
  document.body.appendChild(this.div);
  this.div.innerHTML = m;
  document.getElementById(prefix+'_X').addEventListener ('click', new CeventXClose(this).handler, false);
  this.dragger = new CWinDrag (document.getElementById(prefix+'_bar'), this.div, enableDrag);

  this.div.addEventListener ('mousedown', e_divClicked, false);

  function autoHeight (onoff){
     if (onoff) {
       t.div.style.height = '';  
       t.div.style.maxHeight ='';
    } else{
       t.div.style.height = t.stmaxh;
       t.div.style.maxHeight = t.stmaxh;
       }
  }
  
  function e_divClicked (){
    t.focusMe();
  }  
  function CeventXClose (that){
    var t = that;
    this.handler=handler;
    function handler (){
      t.show(false);
      if (t.onClose != null)
        t.onClose();
    }
  }
  
  function focusMe (){
   //alert((this.BASE_ZINDEX + 5));
    t.div.style.zIndex = (this.BASE_ZINDEX + 5);
    for (k in unsafeWindow.cpopupWins){
      if (k != t.prefix)
        unsafeWindow.cpopupWins[k].unfocusMe(); 
    }
  }
    function destroy (){
      document.body.removeChild(t.div);
      //WinManager.delete (t.prefix);
  }
  
  function centerMe (parent){
      if (parent == null){
        var coords = getClientCoords(document.body);
      } else
        var coords = getClientCoords(parent);
      var x = ((coords.width - parseInt(t.div.style.width)) / 2) + coords.x;
      var y = ((coords.height - parseInt(t.div.style.height)) / 2) + coords.y;
      if (x<0)
        x = 0;
      if (y<0)
        y = 0;
      t.div.style.left = x +'px';
      t.div.style.top = y +'px';
  }
  function unfocusMe (){
    //alert((this.BASE_ZINDEX - 5));
    t.div.style.zIndex = ''+ (this.BASE_ZINDEX - 5);
  }
  function getLocation (){
    return {x: parseInt(this.div.style.left), y: parseInt(this.div.style.top)};
  }

  function setLocation (loc){
    t.div.style.left = loc.x +'px';
    t.div.style.top = loc.y +'px';
  }

  function setEnableDrag (tf){
    t.dragger.setEnable(tf);
  }
  function setLayer(zi){
    t.div.style.zIndex = this.BASE_ZINDEX + zi;
  }
  function getLayer(){
    return parseInt(t.div.style.zIndex) - this.BASE_ZINDEX;
  }
  function setZindex(zi){
    this.div.style.zIndex = ''+zi;
  }

  function getZindex(){
    return parseInt(this.div.style.zIndex);
  }

  function getTopDiv(){
    return document.getElementById(this.prefix+'_top');
  }

  function getMainDiv(){
    return document.getElementById(this.prefix+'_main');
  }
    function getMainTopDiv(){
    	return document.getElementById(this.prefix+'_top');
  }
  function isShown (){
    return t.div.style.display == 'block';
  }
  function show(tf){
     if (tf){
       t.div.style.display = 'block';
       t.focusMe ();
     } else {
       t.div.style.display = 'none';
     }
     return tf;
   }
   function toggleHide(t){
     if (t.div.style.display == 'block') {
       return t.show (false);
     } else {
       return t.show (true);
     }
  }
}
function CWinDrag (clickableElement, movingDiv, enabled) {
  var t=this;
  this.setEnable = setEnable;
  this.setBoundRect = setBoundRect;
  this.debug = debug;
  this.dispEvent = dispEvent;
  this.lastX = null;
  this.lastY = null;
  this.enabled = true;
  this.moving = false;
  this.theDiv = movingDiv;
  this.body = document.body;
  this.ce = clickableElement;
  this.moveHandler = new CeventMove(this).handler;
  this.outHandler = new CeventOut(this).handler;
  this.upHandler = new CeventUp(this).handler;
  this.downHandler = new CeventDown(this).handler;
  this.clickableRect = null;
  this.boundRect = null;
  this.bounds = null;
  this.enabled = false;
  if (enabled == null)
    enabled = true;
  this.setEnable (enabled);

  function setBoundRect (b){    // this rect (client coords) will not go outside of current body
    this.boundRect = boundRect;
    this.bounds = null;
  }

  function setEnable (enable){
    if (enable == t.enabled)
      return;
    if (enable){
      clickableElement.addEventListener('mousedown',  t.downHandler, false);
      t.body.addEventListener('mouseup', t.upHandler, false);
    } else {
      clickableElement.removeEventListener('mousedown', t.downHandler, false);
      t.body.removeEventListener('mouseup', t.upHandler, false);
    }
    t.enabled = enable;
  }

  function CeventDown (that){
    this.handler = handler;
    var t = that;
    function handler (me){
      if (t.bounds == null){
        t.clickableRect = getClientCoords(clickableElement);
        t.bodyRect = getClientCoords(document.body);
        if (t.boundRect == null)
          t.boundRect = t.clickableRect;
        t.bounds = {top:10-t.clickableRect.height, bot:t.bodyRect.height-25, left:40-t.clickableRect.width, right:t.bodyRect.width-25};
      }
      if (me.button==0 && t.enabled){
        t.body.addEventListener('mousemove', t.moveHandler, true);
        t.body.addEventListener('mouseout', t.outHandler, true);
        t.lastX = me.clientX;
        t.lastY = me.clientY;
        t.moving = true;
      }
    }
  }

  function CeventUp  (that){
    this.handler = handler;
    var t = that;
    function handler (me){
      if (me.button==0 && t.moving)
        _doneMoving(t);
    }
  }

  function _doneMoving (t){
    t.body.removeEventListener('mousemove', t.moveHandler, true);
    t.body.removeEventListener('mouseout', t.outHandler, true);
    t.moving = false;
  }

  function CeventOut  (that){
    this.handler = handler;
    var t = that;
    function handler (me){
//t.dispEvent ('eventOUT', me);
      if (me.button==0){
        t.moveHandler (me);
      }
    }
  }

  function CeventMove (that){
    this.handler = handler;
    var t = that;
    function handler (me){
      if (t.enabled && !t.wentOut){
//t.dispEvent ('eventMOVE', me);
        var newTop = parseInt(t.theDiv.style.top) + me.clientY - t.lastY;
        var newLeft = parseInt(t.theDiv.style.left) + me.clientX - t.lastX;
        if (newTop < t.bounds.top){     // if out-of-bounds...
          newTop = t.bounds.top;
          _doneMoving(t);
        } else if (newLeft < t.bounds.left){
          newLeft = t.bounds.left;
          _doneMoving(t);
        } else if (newLeft > t.bounds.right){
          newLeft = t.bounds.right;
          _doneMoving(t);
        } else if (newTop > t.bounds.bot){
          newTop = t.bounds.bot;
          _doneMoving(t);
        }
        t.theDiv.style.top = newTop + 'px';
        t.theDiv.style.left = newLeft + 'px';
        t.lastX = me.clientX;
        t.lastY = me.clientY;
      }
    }
  }

  function debug  (msg, e){
    logit ("*************** "+ msg +" ****************");
    logit ('clientWidth, Height: '+ e.clientWidth +','+ e.clientHeight);
    logit ('offsetLeft, Top, Width, Height (parent): '+ e.offsetLeft +','+ e.offsetTop +','+ e.offsetWidth +','+ e.offsetHeight +' ('+ e.offsetParent +')');
    logit ('scrollLeft, Top, Width, Height: '+ e.scrollLeft +','+ e.scrollTop +','+ e.scrollWidth +','+ e.scrollHeight);
  }

  function dispEvent (msg, me){
    logit (msg + ' Button:'+ me.button +' Screen:'+ me.screenX +','+ me.screenY +' client:'+  me.clientX +','+ me.clientY +' rTarget: '+ me.relatedTarget);
  }
}



function inspect(obj, maxLevels, level, doFunctions){
  var str = '', type, msg;
  if(level == null)  level = 0;
  if(maxLevels == null) maxLevels = 1;
  if(maxLevels < 1)
      return 'Inspect Error: Levels number must be > 0';
  if(obj == null)
    return 'ERROR: Object is NULL\n';
  var indent = '';
  for (var i=0; i<level; i++)
    indent += '  ';
  for(property in obj) {
    try {
        type =  matTypeof(obj[property]);
        if (doFunctions==true && (type == 'function')){
          str += indent + '(' + type + ') ' + property + "[FUNCTION]\n";
        } else if (type != 'function') {
          str += indent + '(' + type + ') ' + property + ( (obj[property]==null)?(': null'):('')) +' = '+ obj[property] +"\n";
        }
        if((type=='object' || type=='array') && (obj[property] != null) && (level+1 < maxLevels))
          str += inspect(obj[property], maxLevels, level+1, doFunctions);  // recurse
    }
    catch(err) {
      // Is there some properties in obj we can't access? Print it red.
      if(typeof(err) == 'string') msg = err;
      else if(err.message)        msg = err.message;
      else if(err.description)    msg = err.description;
      else                        msg = 'Unknown';
      str += '(Error) ' + property + ': ' + msg +"\n";
    }
  }
  str += "\n";
  return str;
}

Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if (this[i].compare) { 
            if (!this[i].compare(testArr[i])) return false;
        }
        if (this[i] !== testArr[i]) return false;
    }
    return true;
}

String.prototype.entityTrans = { '&':'&amp;', '<':'&lt;',  '>':'&gt;',  '\"':'&quot;' };
String.prototype.htmlEntities = function() {
  var ret = this.toString();
  for (k in this.entityTrans)
     ret  = ret.split(k).join(this.entityTrans[k]);
  return ret;
}

String.prototype.stripTags = function(){ 
  return this.replace(/<\w+(\s+("[^"]*"|'[^']*'|[^>])+)?>|<\/\w+>/gi, '');
}

String.prototype.capitalize = function(){ 
  return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase();
}

function objectName (o){
  var s = o.toString();
  return s.substr(7,s.length-8);
}

function matTypeof (v){
  if (v == undefined)
    return 'undefined';
  if (typeof (v) == 'object'){
    if (!v)
      return 'null';
    else if (v.constructor.toString().indexOf("Array")>=0 && typeof(v.splice)=='function')
      return 'array';
    else return 'object';
  }
  return typeof (v);
}

function addCommasInt(n){
  nStr = parseInt(n) + '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(nStr)) {
    nStr = nStr.replace(rgx, '$1' + ',' + '$2');
  }
  return nStr;
}

function addCommas(nStr){
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}


function htmlSelector (valNameArray, curVal, tags){
  m = [];
  m.push ('<SELECT');
  if (tags){
    m.push (' ');
    m.push (tags);
  }  
  for (k in valNameArray){
    m.push ('><OPTION ');
    if (k == curVal)
      m.push ('SELECTED ');
    m.push ('value="');
    m.push (k);
    m.push ('">');
    m.push (valNameArray[k]);
    m.push ('</option>');
  }
  m.push ('</select>');
  return m.join ('');

}


function unixTime (){
  return parseInt (new Date().getTime() / 1000) + unsafeWindow.g_timeoff;
}
function htmlOptions (a, curVal){
  m = '';
  for (k in a)
    m += '<OPTION value="'+ k +'"'+ (k==curVal?' SELECTED':'')  +'>'+ a[k] +'</option>';
  return m;
}
function getFunctionName (func){
  var name=/\W*function\s+([\w\$]+)\(/.exec(func);
  if (!name)
    return '';
  return name[1];
}

function findAllBetween (txt, find1, find2){
  var m = [];
  var last = 0;
  while ( (i1=txt.indexOf(find1, last))>=0 && (i2=txt.indexOf (find2, i1))>=0 ) {
    m.push (txt.substring(i1+find1.length, i2));
    last = i2 + find2.length;
  }
  return m;
}

function strUpTo (s, find){
  var i = s.indexOf(find);
  if (i > 0)
    return s.substr(0, i);
  return s;
}



function timestrShort(time) {
  time = parseInt (time);
  if (time > 86400){
    var m = [];
    time /= 3600;
    m.push (parseInt(time/24)); 
    m.push ('d ');
    m.push (parseInt(time%24)); 
    m.push ('h ');
    return m.join ('');    
  } else
    return timestr (time);
}

function timestr(time, full) {
  time = parseInt (time);
  var m = [];
  var t = time;
  if (t < 61)
    return  t + 's';
  if (t > 86400){
    m.push (parseInt(t/86400)); 
    m.push ('d ');
    t %= 86400;
  }  
  if (t>3600 || time>3600){
    m.push (parseInt(t/3600)); 
    m.push ('h ');
    t %= 3600;
  }  
  m.push (parseInt(t/60)); 
  m.push ('m');
  if (full || time<=3600 ){
    m.push (' ');
    m.push (t%60);
    m.push ('s');  
  }
  return m.join ('');
}

// emulate protoype's Ajax.Request ...
function AjaxRequest (url, opts){
  var headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'X-Prototype-Version': '1.7',
    'Accept': 'text/javascript, text/html, application/xml, text/xml, */*'
  };
  var ajax = null;
    
  if (window.XMLHttpRequest)
    ajax=new XMLHttpRequest();
  else
    ajax=new ActiveXObject("Microsoft.XMLHTTP");
  
  if (opts.method==null || opts.method=='')
    method = 'GET';
  else
    method = opts.method.toUpperCase();  
    
  if (method == 'POST'){
    headers['Content-type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  } else if (method == 'GET'){
    addUrlArgs (url, opts.parameters);
  }

  ajax.onreadystatechange = function(){
//  ['Uninitialized', 'Loading', 'Loaded', 'Interactive', 'Complete']; states 0-4
    if (ajax.readyState==4) {
      if (ajax.status >= 200 && ajax.status < 305)
        if (opts.onSuccess) opts.onSuccess(ajax);
      else
        if (opts.onFailure) opts.onFailure(ajax);
    } else {
      if (opts.onChange) opts.onChange (ajax);
    }
  }  
    
  ajax.open(method, url, true);   // always async!

  for (var k in headers)
    ajax.setRequestHeader (k, headers[k]);
  if (matTypeof(opts.requestHeaders)=='object')
    for (var k in opts.requestHeaders)
      ajax.setRequestHeader (k, opts.requestHeaders[k]);
      
  if (method == 'POST'){
    var a = [];
    for (k in opts.parameters)
      a.push (k +'='+ opts.parameters[k] );
    ajax.send (a.join ('&'));
  } else               {
    ajax.send();
  }
}   

function MyAjaxRequest (url, o, noRetry){

  var opts = unsafeWindow.Object.clone(o);
  var wasSuccess = o.onSuccess;
  var wasFailure = o.onFailure;
  var retry = 0;
  var delay = 5;
  var noRetry = noRetry===true?true:false;
  opts.onSuccess = mySuccess;
  opts.onFailure = myFailure;


  new AjaxRequest(url, opts);
  return;

  function myRetry(){
    ++retry;
    new AjaxRequest(url, opts);
    delay = delay * 1.25;
  }

  function myFailure(){
    var o = {};
    o.ok = false;
    o.errorMsg = "AJAX Communication Failure";
    wasFailure (o);
  }

  function mySuccess (msg){
    var rslt = eval("(" + msg.responseText + ")");
    var x;
    if (rslt.ok){
      rslt.errorMsg = null;   ///// !!!!!!!!!!!!!  ************
      if (rslt.updateSeed)
        unsafeWindow.update_seed(rslt.updateSeed);
      wasSuccess (rslt);
      return;
    }
    rslt.errorMsg = rslt.error_code ; //unsafeWindow.printLocalError((rslt.error_code || null), (rslt.msg || null), (rslt.feedback || null));
    //if ( (x = rslt.errorMsg.indexOf ('<br><br>')) > 0)
    //  rslt.errorMsg = rslt.errorMsg.substr (0, x-1);
    if (!noRetry && (rslt.error_code==0 ||rslt.error_code==8 || rslt.error_code==1 || rslt.error_code==3)){
      //dialogRetry (rslt.errorMsg, delay, function(){myRetry()}, function(){wasSuccess (rslt)});
    } else {
      wasSuccess (rslt);
    }
  }
}


function cityStatusString (cs){
  if (cs==4)
    return 'Vacances';
  if (cs==3)
    return 'Truce';
  if (cs==2)
    return 'Beg Protection';
  return 'Normal';
}   
function officerId2String (oid){
  if (oid==null)
    return '';
  else if (oid==3)
    return 'Uff.';
  else if (oid==2)
    return 'Vice';
  else if (oid==1)
    return 'Canc';
  return '';
}

/************  LIB singletons .... **************/
  // TODO: fix REopening window
  var WINLOG_MAX_ENTRIES = 1000;     // TODO
  var WinLog = {
    state     : null,
    win       : null,
    eOut      : null,
    lastE     : null,
    enabled   : true,
    reverse   : true,
    busy      : false,
    isOpening : false,
    open : function (){
      var t = WinLog;
      function eventButClear(){
        var t = WinLog;
        t.lastE = null;
        t.eOut.innerHTML ='';
      }
      function eventButReverse(){
        var t = WinLog;
        if (t.busy)
          return;
        t.busy = true;
        if (t.reverse){
          t.win.document.getElementById('wlRev').value= 'Top';
          t.reverse = false;
        } else{
          t.win.document.getElementById('wlRev').value= 'Bottom';
          t.reverse = true;
        }
        var n = t.eOut.childNodes.length;
        if (n < 2)
          return;
        for (i=n-2; i>=0; i--){
        t.eOut.appendChild (t.eOut.childNodes[i]);
      }
      t.busy = false;
    }
    if (!t.win || t.win.closed){
      t.isOpening = true;  
      // Firefox bug??? It appears as if a new thread is started on open, withOUT reusing same window
      t.win = window.open('', 'uwtrace', 'top=30,left=0,width=900,height=700,scrollbars=no,location=no,menubar=no,directories=no,status=no');
      t.isOpening = false; 
      t.state = null; 
    }
    
    if (t.state == null){
      t.win.document.body.innerHTML = '<STYLE>pre{margin:0px} hr{margin:3px; height:1px; border:0px; color:#cee; background-color:#cee}</style>\
      <BODY style="margin:0px; padding:0px; border:none">\
      <DIV id=winlogtop style="background-color:#d0d0d0; margin:0px; padding:0px; border:1px solid">\
      <INPUT id=wlClear type=submit value="Clear"> &nbsp; <INPUT id=wlRev type=submit value="Bottom"></div>\
      <DIV id=wlOut style="overflow-y:auto; height:100%; max-height:100%"></div></body>';
      t.win.document.getElementById('wlClear').addEventListener('click', eventButClear, false);
      t.win.document.getElementById('wlRev').addEventListener('click', eventButReverse, false);
      t.eOut =  t.win.document.getElementById('wlOut');
      t.lastE = null;
      t.state = 1;
    }
  },
  writeText : function (msg){
    WinLog.write (msg.htmlEntities()); 
  },
  write : function (msg){
    var t = WinLog;
    if (!t.enabled || t.isOpening)
      return;
      t.open();
      var te = document.createElement('pre');
      var now = new Date();
      var m = [];
      var millis = now.getMilliseconds();
      m.push (now.toTimeString().substring (0,8));
      m.push ('.');
      if (millis<100)
        m.push('0');
        if (millis<10)
          m.push('0');
          m.push(millis);
          m.push (': ');
          m.push (msg);
          te.innerHTML = m.join('');
          if (t.reverse){
            if (t.lastE == null){
              t.eOut.appendChild(te);
              t.lastE = te;
            } else {
              t.eOut.insertBefore(te, t.lastE);
            }
            var hr = document.createElement('hr');
            t.eOut.insertBefore(hr, te);
            t.lastE = hr;
          } else {
            t.eOut.appendChild(te);
            t.eOut.appendChild(document.createElement('hr'));
          }
        },
      };
      function ById(id) {
        return document.getElementById(id);
      }
      function addCommasWhole(nStr){
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1;
      }
      function SelectAll(id){
        document.getElementById(id).focus();document.getElementById(id).select();
      } 
      var nHtml={
        FindByXPath:function(obj,xpath,nodetype) {
          if(!nodetype){
            nodetype = XPathResult.FIRST_ORDERED_NODE_TYPE;
          }
          try {
            var q=document.evaluate(xpath,obj,null,nodetype,null);
          } catch(e) {
            log('bad xpath:'+xpath);
          }
          if(nodetype == XPathResult.FIRST_ORDERED_NODE_TYPE){
            if(q && q.singleNodeValue) { return q.singleNodeValue; }
          }else{
            if(q){
              return q;
            }
          }
	  return null;
        },
        ClickWin:function(win,obj,evtName) {
          var evt = win.document.createEvent("MouseEvents");
          evt.initMouseEvent(evtName, true, true, win,
          0, 0, 0, 0, 0, false, false, false, false, 0, null);
	  return !obj.dispatchEvent(evt);
        },
        Click:function(obj) {
	  return this.ClickWin(window,obj,'click');
        },
        ClickTimeout:function(obj,millisec) {
	  window.setTimeout(function() {
	  return nHtml.ClickWin(window,obj,'click');
        },millisec+Math.floor(Math.random()*500));
      },
      SetSelect:function(obj,v) {
      for(var o=0; o<obj.options.length; o++) {
        if(v==obj.options[o].value) { obj.options[o].selected=true; return true; }
      }
      return false;
    }
  };

  function HandleChatPane() {
    var DisplayName = GetDisplayName();
    var AllianceChatBox=document.getElementById('mod_comm_list2');
    if(AllianceChatBox){
      var chatPosts = document.evaluate(".//div[contains(@class,'chatwrap')]", AllianceChatBox, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
      if(chatPosts){
        for (var i = 0; i < chatPosts.snapshotLength; i++) {
          thisPost = chatPosts.snapshotItem(i);
          if(true){
            //if(this.options.autoHelpAlliance){
            var postAuthor = document.evaluate('.//*[@class="nm"]', thisPost, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
            if(Options.HelpRequest){
              if(postAuthor.snapshotItem(0)){
                var postAuthorName = postAuthor.snapshotItem(0).innerHTML;
                if(postAuthorName != DisplayName){
                  var helpAllianceLinks=document.evaluate(".//a[contains(@onclick,'Chat.helpAlliance')]", thisPost, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );  
                  if(helpAllianceLinks){
                    for (var j = 0; j < helpAllianceLinks.snapshotLength; j++) {
                      thisLink = helpAllianceLinks.snapshotItem(j);
                      var alreadyClicked = thisLink.getAttribute("clicked");
                      if(!alreadyClicked){
                        thisLink.setAttribute('clicked', 'true');
                        var myregexp = /(Chat.helpAlliance\(.*\);)/;
                        var match = myregexp.exec(thisLink.getAttribute("onclick"));
                        if (match != null) {
                          onclickCode = match[0];
                          if(true){
                            DoUnsafeWindow(onclickCode);
                            AddToCommandHistory(onclickCode, 'alliance_help');
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          // Hide alliance requests in chat
          if(Options.DeleteRequest){
            var helpAllianceLinks=document.evaluate(".//a[contains(@onclick,'Chat.helpAlliance')]", thisPost, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null );
            if(helpAllianceLinks){
              for (var j = 0; j < helpAllianceLinks.snapshotLength; j++) {
                thisLink = helpAllianceLinks.snapshotItem(j);
                thisLink.parentNode.parentNode.parentNode.parentNode.removeChild(thisLink.parentNode.parentNode.parentNode);
              }
            }
          }
          // Hide alliance reports in chat
          if(Options.DeleteRequest){
            var myregexp1 = /sur 5 joueurs aidant/i;
            var myregexp2 = /dans ce projet./i;
            var myregexp3 = /Impossible d\'apporter de l\'aide pour l\'instant/i;
            var myregexp4 = /5 personnes ont d/i;
            if (thisPost.innerHTML.match(myregexp1) || thisPost.innerHTML.match(myregexp2) || thisPost.innerHTML.match(myregexp3) || thisPost.innerHTML.match(myregexp4)) {
              thisPost.parentNode.removeChild(thisPost);
            }
          }
        }	
      }	
    }
  }	

  function GetCommandHistory(history_log_name) {
    if(!history_log_name){
      var history_log_name = "default";
    }
    var json= "";
    if(json=='') json='{}';
    var json_object=JSON2.parse(json);
    if(!json_object['items']){
      json_object['items'] = Array();
    }
    return json_object;
  }

  function AddToCommandHistory(command_string, history_log_name, log_length_limit) {
    if(!command_string){ return false; }
    if(!history_log_name){ var history_log_name = "default"; }
    // Default to a history length of 20 commands
    if(!log_length_limit){ var log_length_limit = 20; }
    // Get the previous history of commands
    var previous_commands = GetCommandHistory(history_log_name);
    var items = previous_commands['items'];
    // Add the new command
    items.push(command_string);
    // Limit the history length
    if(items.length>log_length_limit){
      items = items.slice(items.length-log_length_limit);
    }
    previous_commands['items'] = items;
    //alert(history_log_name +' - '+JSON2.stringify(previous_commands));
    //History.push = {log_name_history_log_name,JSON2.stringify(previous_commands)};
    //alert(History.toSource());
  }		

  function FindInCommandHistory(command_string, history_log_name) {
    if(!command_string){ return false; }
    if(!history_log_name){ var history_log_name = "default"; }
    // Get the previous history of commands
    var previous_commands = GetCommandHistory(history_log_name);
    var items = previous_commands['items'];
    for(var i=0; i<items.length; i++){
      if(items[i] == command_string){
        return true;
      }
    }
    return false;
  }

  function DoUnsafeWindow(func, execute_by_embed) {
    if(this.isChrome || execute_by_embed) {
      var scr=document.createElement('script');
      scr.innerHTML=func;
      document.body.appendChild(scr);
    } else {
      try {  
        eval("unsafeWindow."+func);
      } catch (error) {
        this.Log("A javascript error has occurred when executing a function via DoUnsafeWindow. Error description: "+error.description);
      }
    }
  }	

  function GetDisplayName(){
    var DisplayName = document.getElementById('topnavDisplayName');
    if(DisplayName){
      DisplayName = DisplayName.innerHTML;
    }else{
      DisplayName = null;
    }
    return DisplayName
  }

  String.prototype.StripQuotes = function() {
    return this.replace(/"/g,'');
  };

  setTimeout(function() { 
  ptStartup (); 
},

6000);
