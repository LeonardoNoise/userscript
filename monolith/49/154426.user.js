// ==UserScript==
// @id             Orkut feelings
// @name           Confuse
// @namespace      http://www.facebook.com/groups/293345604081845/
// @description    Uso privado
// @author         Based on the Delzon
// @icon           http://i.imgur.com/FEoMq.png
// @include *.facebook.com/*
// @include http://userscripts.org/*/114888*
// @include	*.youtube.com/*
// @include	http://www.notengotele.com/*
// @include	http://www.vayagif.com/*
// @include	http://www.vistoenfb.com/*
// @include	http://www.cuantarazon.com/*
// @include	http://www.teniaquedecirlo.com/*
// @include	http://www.ascodevida.com/*
// @include	http://*www.facebook.com/groups/*
// @include	https://plus.google.com/*
// @include	http://plus.google.com/*
// @include	https://www.tumblr.com/*
// @include	https://talkgadget.google.com/*
// @include	http://talkgadget.google.com/*
// @include	http://www.tumblr.com/*
// @include	http://www.funnyjunk.com/*
// @include	http://*.grou.ps/*
// @include http*://*.jimdo.com/*
// @include http://imgur.com/*
// @include	*.deviantart.com/*
// @include	http://pinterest.com/*
// @include	*.facebook.com/plugins/comments.php*
// @exclude *.youtube.com/embed/*
// @exclude *.facebook.com/plugins/likebox.php*
// @exclude *.facebook.com/plugins/like.php*
// @exclude *.facebook.com/connect/connect.php?*
// @exclude *.facebook.com/plugins/recommendations.php*
// @exclude *.facebook.com/plugins/activity.php*
// @exclude http://plus.google.com/u/0/_/notifications/*
// @exclude https://plus.google.com/u/0/_/notifications/*
// @version        1.0
// ==/UserScript==

(function() {
var css = "@namespace url(http://www.w3.org/1999/xhtml);.uiComposerMessageBoxControls .uiButtonConfirm {position: relative !important; z-index: 9999 !important}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
})();

body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "50px";
	div.style.left = "0px";
	div.style.color = "#888";
	div.style.border = "0px solid #888";
	div.style.zIndex = "999999";
	div.style.padding = "0px";
	div.innerHTML = "<style>#btmeme {opacity:0.5;}#btmeme:hover{opacity:1.0;}#loliframe {border: 0 !important;}</style><a title=\"Ver codigos\" style=\"opacty:0.1;text-decoration:none;color:#888;\" href=\"http://adf.ly/196180/memecodigos\" target=\"_blank\" onClick=\"window.open(this.href, this.target, 'scrollbars=yes,toolbar=no,menubar=no,status=no,width=810,height=502'); return false\"><img id=\"btmeme\" src=\"http://i.imgur.com/UU6zM.png\" /></a>"
	body.appendChild(div);
}

String.prototype.isPrefixOf = function(str, from){
	if (arguments.length < 2) 
		from = 0;
	else 
		from = parseInt(from);
	
	if (from < 0 || from >= str.length) 
		return false;
	
	if (from + this.length > str.length) 
		return false;
	
	for (var i = 0; i < this.length; i++) 
		if (this.charCodeAt(i) != str.charCodeAt(from + i)) 
			return false;
	
	return true;
}
	
	
	var emoticons = [];
	
//--PLUS: Confuse
emoticons["[/)]"] = { src: "http://i.imgur.com/ARaQx.jpg", alt: "confuse" };

	
var emotxt = [];
var yemo = [];
var c;
for (var emo in emoticons) 
	if (!(emoticons[emo] instanceof Function)) {
		c = emo.charCodeAt(0);
		if (!yemo[c]) 
			yemo[c] = [];
		
		yemo[c].push({
			emoticon: emo,
			src: emoticons[emo].src
		});
	}
	
function f(o1, o2){
	if (o1.emoticon.isPrefixOf(o2.emoticon)) 
		return 1;
	
	if (o1.emoticon > o2.emoticon) 
		return 1;
	
	if (o1.emoticon < o2.emoticon) 
		return -1;
	
	return 0;
}
var i;	
for (i = 0; i < yemo.length; i++) 
	if (yemo[i]) 
		yemo[i].sort(f);
	
function replaceTextNode(textNode, sortedEmoticonSet)
{
	var content = textNode.textContent;
	var currentStopPosition;
	var i, j;
	var firstChar;
	var found = false;
	var htmls = [];
	var img;
	currentStopPosition = i = 0;
	while (i < content.length) {
		firstChar = content.charCodeAt(i);
		if (sortedEmoticonSet[firstChar]) 
			for (j = 0; j < sortedEmoticonSet[firstChar].length; j++) 
				if (sortedEmoticonSet[firstChar][j].emoticon.length && sortedEmoticonSet[firstChar][j].emoticon.isPrefixOf(content, i)) {
					if (currentStopPosition < i) 
						htmls.push(document.createTextNode(content.substr(currentStopPosition, i - currentStopPosition)))
					
					img = document.createElement('img');
					img.src = sortedEmoticonSet[firstChar][j].src;
					img.title = sortedEmoticonSet[firstChar][j].emoticon;
					htmls.push(img);
					
					
					i += sortedEmoticonSet[firstChar][j].emoticon.length;
					currentStopPosition = i;
					found = true;
					break;
				}
		
		if (found) {
			found = false;
			continue;
		}
		i++;
	}
	
	if(currentStopPosition>0&&currentStopPosition<content.length-1)
		htmls.push(document.createTextNode(content.substr(currentStopPosition)));
	
	var span=null;
	if (htmls.length) {
		span=document.createElement('span');
		for (i = 0; i < htmls.length; i++) 
			span.appendChild(htmls[i]);
	}
	return span;
}

function replaceElement(element, emos){
	var pathResult = document.evaluate(".//text()", element, null, 7, null);
	
	for (i = 0; i < pathResult.snapshotLength; i++) {
		var tNode = pathResult.snapshotItem(i);
		if (tNode.parentNode) {
			var span = replaceTextNode(tNode, emos);
			if (span) 
				tNode.parentNode.replaceChild(span, tNode);
		}
	}
}

replaceElement(document, yemo);

function listen(evt)
{
	var node = evt.target;
	if (node.nodeType == document.ELEMENT_NODE) 
		replaceElement(node, yemo);
	
	if (node.nodeType == document.TEXT_NODE) {
		var parent = node.parentNode;
		var span = replaceTextNode(node, yemo);
		if (span) 
			parent.replaceChild(span, node);
	}
}		

document.body.addEventListener('DOMNodeInserted', listen, true);


//Auto SOlo Firefox
var SUC_script_num = 114888; //

try
{
	function updateCheck(forced)
	{
		if ((forced) || (parseInt(GM_getValue('SUC_last_update', '0')) + 3600000 <= (new Date().getTime()))) // Checks once a day (24 h * 60 m * 60 s * 1000 ms)
		{
			try
			{
				GM_xmlhttpRequest(
				{
					method: 'GET',
					url: 'http://userscripts.org/scripts/source/'+SUC_script_num+'.meta.js?'+new Date().getTime(),
					headers: {'Cache-Control': 'no-cache'},
					onload: function(resp)
					{
						var local_version, remote_version, rt, script_name;
						
						rt=resp.responseText;
						GM_setValue('SUC_last_update', new Date().getTime()+'');
						remote_version=parseInt(/@uso:version\s*(.*?)\s*$/m.exec(rt)[1]);
						local_version=parseInt(GM_getValue('SUC_current_version', '-1'));
						if(local_version!=-1)
						{
							script_name = (/@name\s*(.*?)\s*$/m.exec(rt))[1];
							GM_setValue('SUC_target_script_name', script_name);
							if (remote_version > local_version)
							{
								if(confirm('New update for "'+script_name+'."\nGo to script page? Remember click on install its free!'))
								{
									GM_openInTab('http://userscripts.org/scripts/show/'+SUC_script_num);
									GM_setValue('SUC_current_version', remote_version);
								}
							}
							else if (forced)
								alert('No update is available for "'+script_name+'."');
						}
						else
							GM_setValue('SUC_current_version', remote_version+'');
					}
				});
			}
			catch (err)
			{
				if (forced)
					alert('An error occurred while checking for updates:\n'+err);
			}
		}
	}
	GM_registerMenuCommand(GM_getValue('SUC_target_script_name', '???') + ' - Manual Update', function()
	{
		GM_openInTab("http://userscripts.org/scripts/show/114888");
	});
	updateCheck(false);
}
catch(err)
{}