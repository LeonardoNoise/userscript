// ==UserScript==
// @description    Remove all Tapuz gif/swf/text banners.
// ==/UserScript==
var s = document.body.innerHTML;
s = s.replace(/<iframe.+realmedia/ig,'<iii');
s = s.replace(/(\/mlinks\/clickOnLink[^>]+)>[^<]+/ig,'$1');
document.body.innerHTML = s;