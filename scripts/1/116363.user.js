// ==UserScript==
// @name DACH Plugin
// @namespace 
// @version 
// @description 
// @copyright 2011 - Maksim Gorkiy
// ==/UserScript==

function SWI(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/show-worst-items.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function FamInfo(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/family_info.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function MFCB(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://www.exellerate.com/mafia/MarketplaceFCPurchase.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function RJN(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/repeatjob.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function RJR(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/repeatjob.redux.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function InvHist(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/inventory_history.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function Chucker(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://simony.dk/gs/Chucker.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function Robbit(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://helvetica.mstuff.ch/robbit.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function RJB(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/repeatjob-brazil.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function LaN(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://www.exellerate.com/mafia/link-a-nator.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function ZMC(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/zmc-beta.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function Assasins(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/assassin-a-nator.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function FamilyBF(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/family-boss-fighter.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function PropertyManager(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/property.manager.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function SwitchFB(){location.href='javascript:(function(){var a=document.createElement("script");a.type="text/javascript";a.src="http://spocklet.com/bookmarklet/switch.js?"+Math.random();document.getElementsByTagName("head")[0].appendChild(a)})();'}function gotoURL(a){unsafeWindow.open(a)}MWAddon.addMenu({name:"Helvetica",position:0,icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",action:function(){gotoURL("http://www.facebook.com/Helvetica.Clan?sk=wall&filter=2")},subMenu:function(){return[{name:"Helvetica Links",icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",click:{func:gotoURL,params:"http://www.facebook.com/Helvetica.Clan"},menu:function(){return[{name:"Helvetica ClanPage",icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",click:{func:gotoURL,params:"http://www.facebook.com/Helvetica.Clan"}},{name:"Helvetica Forum",icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",click:{func:gotoURL,params:"http://helvetica.forumprofi.de/index.php"}},{name:"Helvetica Battlefield",icon:"http://helvetica.mstuff.ch/bilder/toolbar/wp.jpg",click:{func:gotoURL,params:"http://www.facebook.com/Helvetica.BattleField"}},{name:"Helvetica HELP-CENTER",icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",click:{func:gotoURL,params:"http://www.facebook.com/groups/139838929429937/"}},{name:"Helvetica - Gift Links",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gl.jpg",css:{"border-bottom":"1px solid white"},click:{func:gotoURL,params:"http://www.facebook.com/groups/helvetica.links"}},{name:"Helvetica ICED-Ranking",icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",click:{func:gotoURL,params:"http://tinyurl.com/Helvetica-ICE"}},{name:"Wichtige Beiträge",icon:"http://helvetica.mstuff.ch/bilder/toolbar/cp.jpg",css:{"border-bottom":"1px solid white"},click:{func:gotoURL,params:"http://www.facebook.com/Helvetica.Clan?sk=wall&filter=2"}}]}},{name:"Weitere Scripte",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",css:{"border-bottom":"1px solid white"},menu:function(){return[{name:"Assasins-a-Nator",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",css:{"border-bottom":"1px solid white"},click:{func:Assasins}},{name:"RepeatJob NewYork",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:RJN}},{name:"RepeatJob Vegas/Italy",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:RJR}},{name:"RepeatJob Brazil/Chicago",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",css:{"border-bottom":"1px solid white"},click:{func:RJB}},{name:"Chucker",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:Chucker}},{name:"Robbit",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",css:{"border-bottom":"1px solid white"},click:{func:Robbit}},{name:"Inventory History",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:InvHist}},{name:"Marketplace Fight Club Buyer",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:MFCB}},{name:"Family Info",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:FamInfo}}]}},{name:"Open MW Unframed",icon:"http://helvetica.mstuff.ch/bilder/toolbar/unfm.png",click:{func:gotoURL,params:"http://facebook.mafiawars.zynga.com/mwfb/index.php?skip_req_frame=1&mwcom=1"}},{name:"SWITCH to FB-Profile",icon:"http://helvetica.mstuff.ch/bilder/toolbar/switchb.png",css:{"border-bottom":"1px solid white"},click:{func:SwitchFB}},{name:"Show Worst Items",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:SWI}},{name:"Property Manager",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:PropertyManager}},{name:"Family Boss Fighter",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",css:{"border-bottom":"1px solid white"},click:{func:FamilyBF}},{name:"Zynga Message Center",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",click:{func:ZMC}},{name:"Link-a-Nator",icon:"http://helvetica.mstuff.ch/bilder/toolbar/gm.jpg",css:{"border-bottom":"1px solid white"},click:{func:LaN}},{name:"DOWNGRADE Addon",icon:"http://helvetica.mstuff.ch/bilder/toolbar/downg.gif",click:{func:gotoURL,params:"http://userscripts.org/scripts/versions/90615"}}]}});