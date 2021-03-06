// ==UserScript==
// @name           Youtube Old Player For Channels
// @namespace      userscripts.org
// @description    It replaces the new player with the old one
// @version        0.1
// @include        http://youtube.com/user/*
// @include        https://www.youtube.com/user/*
// @include        http://*.youtube.com/user/*
// @include        https://*.youtube.com/user/*
// ==/UserScript==

/*var dUrl = document.URL;

var newurl;

if(!dUrl.match('&fmt=18')){

	(dUrl.match('&'))? newurl = dUrl.replace(/&/, '&fmt=18&'): newurl = dUrl+'&fmt=18';
	
window.location.replace(newurl);

}*/


var vidID;

var dUrl = document.URL

vidID = document.location.toString().split("v=")[1].split("&")[0].split("#")[0];

var mp = document.getElementById('movie_player');

var fvars = mp.getAttribute('flashvars');

var l = fvars.slice( fvars.indexOf('&l=')+3, fvars.indexOf( '&', fvars.indexOf('&l=')+3 ) );

var t = fvars.slice( fvars.indexOf('&t=')+3, fvars.indexOf( '&', fvars.indexOf('&t=')+3 ) );  

document.getElementById('watch-player-div').innerHTML = 
'<embed width="480" height="395" flashvars="sourceid=yw&video_id='+vidID+'&l='+l+'&t='+t+'&ap=%26fmt=18"'+
' allowfullscreen="true" quality="high" bgcolor="#FFFFFF" name="movie_player" id="movie_player" src="/player2.swf" type="application/x-shockwave-flash"/>';

var nB = document.createElement('nobr');


document.getElementById('watch-ratings-views').getElementsByTagName('div')[0].appendChild(nB);

document.getElementById('orig').addEventListener('click', function() {

	document.getElementById('watch-player-div').innerHTML = 
	'<embed width="480" height="395" flashvars="sourceid=yw&video_id='+vidID+'&l='+l+'&t='+t+'" allowfullscreen="true" quality="high" bgcolor="#FFFFFF" name="movie_player" id="movie_player" src="/player2.swf" type="application/x-shockwave-flash"/>';
	
	nB.innerHTML = '';
			
}, false);