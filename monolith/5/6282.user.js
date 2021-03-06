// ==UserScript==
// @name          Freefall - Comic Is Next
// @namespace     http://norman.rasmussen.co.za/freefall
// @description   Links the main comic image to the next page, so you don't have to hit the tiny next button
// @include       http://freefall.purrsia.com/*
// ==/UserScript==

(function() {

var comicImgs = document.evaluate(
    '//img',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

var comicImg = comicImgs.snapshotItem(0);
var comicImgSibling = comicImg.nextSibling;
var comicImgParent = comicImg.parentNode;

var nextLinks = document.evaluate(
    '//a[.="Next"]',
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null);

var nextLink = nextLinks.snapshotItem(0);

if (nextLink == null) return;

if (comicImgSibling == null)
{
	var newLink = comicImgParent;
}
else
{
	var newLink = document.createElement('a');
}
newLink.href = nextLink.href;

if (newLink != comicImgParent)
{
	comicImg.style.border = 'none';
	newLink.appendChild(comicImg);

	comicImgParent.insertBefore(newLink, comicImgSibling);
}

if (window.top == window) {
	var preloadIframe = document.createElement('iframe');
	preloadIframe.src = nextLink.href;
	preloadIframe.style.position = 'absolute';
	preloadIframe.style.top = 0;
	preloadIframe.style.left = 0;
	preloadIframe.style.visibility = 'hidden';
	document.body.appendChild(preloadIframe);
}

})();
