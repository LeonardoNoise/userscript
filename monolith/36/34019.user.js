// Need Script doesn't take credit for this script. I only modified it as //an inside joke for my friend. 
//Facebook - Mate-ify v0.1
// Made By Luke Stevenson {http://www.lucanos.com/} Modified by Need Script
// Distributed and Maintained via GMVC
// Last updated: 22 March 2008
//
//   This script, built on the example Greasemonkey script at
// http://diveintogreasemonkey.org/casestudy/dumbquotes.html searches all
// text nodes on pages within Facebook and replaces any instances of the
// string 'friend' with 'cunt'.
//
// ==UserScript==
// @name              Super Secret Script home change
// @namespace         
// @description       (v0.1) Replaces any instances of the word "home" with "casa". Enjoy, cunt.
// @include           *.facebook.com*
// ==/UserScript==

(function () {

  var replacements, regex, key, textnodes, node, s;

replacements = {
  "Home": "Casa",
  "home": "Casa"
  };
regex = {};
for ( key in replacements ) {
  regex[key] = new RegExp(key, 'g');
}

textnodes = document.evaluate( "//text()" , document , null , XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE , null );
for ( var i=0 ; i<textnodes.snapshotLength ; i++ ) {
  node = textnodes.snapshotItem(i);
  s = node.data;
  for ( key in replacements ) {
    s = s.replace( regex[key] , replacements[key] );
  }
  node.data = s;
}

})();