// ==UserScript==
// @name          Flickr tags for Geobloggers
// @description	  Add tags for Geobloggers on Google Maps
// @namespace     http://flickr.yuan.cc/
// @include       http://maps.google.com/maps?*

// created by CK 
// Instructions:
//
//   1. Download the user script gmaps.user.js
//   2. Center the map on Goolge Maps by double clicking at the position.
//   3. Click the link "Link to this page" on the right and upper corner.
//   4. You will see the tags shown above the link you just clicked.
//
// ==/UserScript==


(function() {

 	url_str = ''+document.location
 	re = /maps.google.com\/maps\?.*ll=([\+\-\d\.]+),([\+\-\d\.]+)/;
 	geo = url_str.match(re, "lat=$1, lon=$2")

	var link_anchor
	var links_ar = document.getElementsByTagName("a")
	var coords = document.createElement("span")
	var html_insert = ""
	html_insert += "<p><b style='font-size:16px'>Tags for Geobloggers</b>:<br />"
	html_insert += "<input size=40 style='font-size:12px;' value='geotagged geo:lat=" + geo[1] + " geo:lon="+ geo[2] + "'>"
	html_insert += "</p>"
	coords.innerHTML = html_insert;
	for(var i=0;i< links_ar.length;i++){
		if(links_ar[i].getAttribute("id")=="linktopage"){
			link_anchor = links_ar[i]
		}
	}
	link_anchor.parentNode.parentNode.insertBefore(coords,link_anchor.parentNode.parentNode.firstChild)
})();


