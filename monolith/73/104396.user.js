// ==UserScript==
// @name           Votar automatico em mim+1
// @namespace      http://burnermanx.pgemu.net
// @description    Votar automaticamente em mim+1
// @include        http://colirios.capricho.abril.com.br/batalha.php?idColirio=237854750
// ==/UserScript==
var scriptCode = new Array();  
scriptCode.push(' function a(){t=setTimeout("a()",6000);votar("http://colirios.capricho.abril.com.br/batalha.php?idColirio=237854750")};a() ');

var script = document.createElement('script');    // create the script element
    script.innerHTML = scriptCode.join('\n');         // add the script code to it
    scriptCode.length = 0;                            // recover the memory we used to build the script
document.getElementsByTagName('head')[0].appendChild(script);