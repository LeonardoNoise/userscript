// ==UserScript==
// @name           TribalWars Ad Remover
// @namespace      TW Ad Remover
// @description    Removes the logout screen/ad when you click the Logout button and the ad block in TribalWars.
// @include        http://en*.tribalwars.net/*
// @include        http://www.tribalwars.net/*
// @include        http://sv*.tribalwars.se/*
// @include        http://www.tribalwars.se/*
// @include        http://no*.tribalwars.no/*
// ==/UserScript==

var url=window.location.href;
if(url.indexOf("logout.php") != -1){
	window.stop();
	window.location="http://tribalwars.se";
}

var frmsets = document.getElementsByTagName("frameset");
if(frmsets.length > 0){
	var frmset = frmsets[0];
	for(kk=0; kk<frmset.childNodes.length; kk++){
		var frm = frmset.childNodes[kk];
		if(frm.tagName=="FRAME" && frm.getAttribute("name") != "main"){
			frm.src = "about:blank";
			frm.cols ='10';
		}
	}
	if(frmset.getAttribute("rows")) frmset.setAttribute("rows", "0, *");
	else frmset.setAttribute("cols", "*, 0");

	// Remove ads timer
	unsafeWindow.reload = function(ad_top, ad_sky){; };

	// No need to go any further; this must be the top page
	return;
}else{
	var ad_iframe = $("ad");
	if(ad_iframe && ad_iframe.tagName == "IFRAME"){
		ad_iframe.style.display = "none";
		var body_iframe = $("main");
		if(body_iframe && body_iframe.tagName == "IFRAME"){
			body_iframe.style.top = "0px";
			body_iframe.style.left = "0px";
		}
	}
}