// ==UserScript==
// @name           Test FloodColor
// @namespace      testFC
// @include        http://www.jeuxvideo.com/*
// ==/UserScript==

var chaine=document.body.innerHTML;

var reg=new RegExp("WWWWW");
chaine=chaine.replace(reg,"<font color=red>WWWWW</font>");

document.body.innerHTML=chaine;