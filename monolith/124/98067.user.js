// ==UserScript==
// @name           klavogonki - Ford2
// @version        0.0.4
// @namespace      klavogonki
// @author         novkostya&Wяnd
// @description    just for fun
// @include        http://klavogonki.ru/play/*
// @include        http://klavogonki.ru/profile/*
// ==/UserScript==

function doIt()
{
	$$(".you .imgcont div")[0].style.background = 'url("http://habreffect.ru/files/263/dfca2c9db/ford2.png") no-repeat scroll 0 0 transparent';
}

var script = document.createElement("script");
script.innerHTML = "(" + doIt + ")()";
document.body.appendChild(script);