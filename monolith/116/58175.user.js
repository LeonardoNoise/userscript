// ==UserScript==
// @name           ChatAnywhere_fr
// @author         Tei (translated by skull42)
// @include        http://www.erepublik.com/*
// ==/UserScript==

var mainBlock = document.getElementById('content');

var text = "<div id='cboxdiv' style='text-align: center; line-height: 0pt;'><div><iframe src='http://www7.cbox.ws/box/?boxid=20940&amp;boxtag=fsac9n&amp;sec=main' marginheight='2' marginwidth='2' allowtransparency='yes' name='cboxmain' style='' id='cboxmain' scrolling='auto' frameborder='0' height='105' width='100%'></iframe></div><div><iframe src='http://www7.cbox.ws/box/?boxid=20940&amp;boxtag=fsac9n&amp;sec=form' marginheight='2' marginwidth='2' allowtransparency='yes' name='cboxform' style='border-style: none solid solid; border-color: -moz-use-text-color rgb(255, 255, 255) rgb(255, 255, 255); border-width: 0px 1px 1px;' id='cboxform' scrolling='no' frameborder='0' height='75' width='100%'></iframe></div></div>";


var containerForChat = document.createElement("div");

containerForChat .innerHTML = text;

//crappy append
//mainBlock.insertBefore( containerForChat  ,mainBlock.firstChild );

mainBlock.appendChild( containerForChat  );