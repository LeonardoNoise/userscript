// ==UserScript==
// @name          	MyBrute Captcha Bypass
// @namespace      	http://mybrute.forumotion.com/
// @version        	1.0.0
// @author        	MSox - Modified by Sioc
// @description    	Removes captcha for given brutes on MyBrute LaBrute ElBrute MeinBrutalo.
// @include			http://*.meinbrutalo.de/
// @include			http://*.labrute.fr/
// @include			http://*.mybrute.com/
// @include			http://*.elbruto.es/
// ==/UserScript==

//*************************************************************************************************************************************
// SEE http://mybrute.forumotion.com/cheats-scripts-f13/release-mybrute-captcha-bypass-t9334.htm for instructions on how to set this up
//*************************************************************************************************************************************

(function(){

   //Getting the brute URL name and defining the keys when there are less than 100 pupils
   var thebrute=document.location.host
   var includedpage='1';
   switch(thebrute){
      //*************************************************************************************************************************
	  // TO BE EDITED BY THE USER
	  //*************************************************************************************************************************
      case 'darktze-037.mybrute.com':
         thekey='oy2%3A_cfy2%3A_hy11%3Adarktze-037y2%3A_mi4833590g&k=96da4b6c&bv';
         break;
      case 'episzo.meinbrutalo.de':
         thekey='oy2%3A_cfy2%3A_hy6%3Aepiszoy2%3A_mi9799280g&k=e03dcb6c&bv';
         break;
      case 'manisitonnn-m3n.elbruto.es':
         thekey='oy2%3A_cfy2%3A_hy15%3Amanisitonnn-m3ny2%3A_mi7169077g&k=a9da4b6c&bv';
         break;
      case 'gbnnivxax.elbruto.es':
         thekey='oy2%3A_cfy2%3A_hy9%3Agbnnivxaxy2%3A_mi4987804g&k=f4cf4b6c&bv';
         break;
      case 'spczpdygj.mybrute.com':
         thekey='oy2%3A_cfy2%3A_hy9%3Aspczpdygjy2%3A_mi511438g&k=dfff4b6c&bv';
         break;		 
	  //*************************************************************************************************************************
      // END OF USER EDIT
      //************************************************************************************************************************* 
      default:
         includedpage='-1';
         break;
   }
   
   //Getting the server with suffix
   var srv=document.location.host.match(/.+\.(.+)\..+/)[1];
   var theurl=srv;
   var v1='1';
   var v2='1';
   var lng='en';
   switch(srv){
      case 'mybrute':
         theurl=theurl+'.com';
         v1='18';
         v2='22';
         lng='en';
         break;
      case 'labrute':
         theurl=theurl+'.fr';
         v1='17';
         v2='22';
         lng='fr';
         break;
      case 'elbruto':
         theurl=theurl+'.es';
         v1='18';
         v2='22';
         lng='es';
         break;
      case 'meinbrutalo':
         theurl=theurl+'.de';
         v1='17';
         v2='22';
         lng='de';
   }

   //Captcha bypass
   var e = document.getElementById('swf_create_form');
   if(includedpage=='1'){if(e)
      e.innerHTML='<embed type="application/x-shockwave-flash" src="http://data.'+theurl+'/swf/uc.swf?v='+v1+'" id="create_form" name="create_form" bgcolor="#FAF8C3" quality="high" menu="false" wmode="transparent" allowscriptaccess="always" flashvars="__file=http://data.'+theurl+'/swf/create_form_versus.swf?v='+v2+'&__key=http://data_labrute_fr/swf_key&lang='+lng+'&path=http://data.'+theurl+'/swf/&lang='+lng+'&i='+thekey+'bv=http://data.'+theurl+'/img/'+lng+'/btn_valb.gif&bvo=http://data.'+theurl+'/img/'+lng+'/btn_valb_over.gif" scale="noscale" height="380" width="250">'
	}
         
})();