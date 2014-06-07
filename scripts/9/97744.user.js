// ==UserScript==
// @name           Animated Ikariam(IE7+ Edition)
// @autor          Angelo Verona alias Anilo, morths(for IE7+)
// @email          anilo4ever@gmail.com, morths@gmail.com
// @namespace      Ikariam
// @description    Animated graphic pack for Ikariam v0.8.2
// @include        http://*.ikariam.*/*
// @exclude        http://board.ikariam.*/*
// ==/UserScript==

//*********
//animationCSS += '';
//http://ikariam.bgt-angels.sk/game/animated/
//*********

(function(){ 
	//var of CORE
  var animationCSS  = '';

//Animated Ikariam regenerated by morths for IE7+, based on the original script(v0.8.2) made by Anilo for Firefox

//City 1
animationCSS += '#island #container #mainview #cities .level1 div.cityimg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_1_red.gif) no-repeat 13px 10px; }';
animationCSS += '#island #container #mainview #cities .level1 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_1_blue.gif) no-repeat 13px 10px; }';
animationCSS += '#island #container #mainview #cities .level1 div.allyCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_1_green.gif) no-repeat 13px 10px; }';
//City 2
animationCSS += '#island #container #mainview #cities .level2 div.cityimg, #island #container #mainview #cities .level3 div.cityimg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_2_red.gif) no-repeat 13px 13px; }';
animationCSS += '#island #container #mainview #cities .level2 div.ownCityImg, #island #container #mainview #cities .level3 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_2_blue.gif) no-repeat 13px 13px; }';
animationCSS += '#island #container #mainview #cities .level2 div.allyCityImg, #island #container #mainview #cities .level3 div.allyCityImg { background:url(Http://www.bgt-angels.sk/TW/city_2_green.gif) no-repeat 17px 7px; }';
//City 3
animationCSS += '#island #container #mainview #cities .level4 div.cityimg, #island #container #mainview #cities .level5 div.cityimg, #island #container #mainview #cities .level6 div.cityimg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_3_red.gif) no-repeat 13px 13px; }';
animationCSS += '#island #container #mainview #cities .level4 div.ownCityImg, #island #container #mainview #cities .level5 div.ownCityImg, #island #container #mainview #cities .level6 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_3_blue.gif) no-repeat 13px 13px; }';
animationCSS += '#island #container #mainview #cities .level4 div.allyCityImg, #island #container #mainview #cities .level5 div.allyCityImg, #island #container #mainview #cities .level6 div.allyCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_3_green.gif) no-repeat 13px 13px; }';
//City 4
animationCSS += '#island #container #mainview #cities .level7 div.cityimg, #island #container #mainview #cities .level8 div.cityimg, #island #container #mainview #cities .level9 div.cityimg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_4_red.gif) no-repeat 11px 13px; }';
animationCSS += '#island #container #mainview #cities .level7 div.ownCityImg, #island #container #mainview #cities .level8 div.ownCityImg, #island #container #mainview #cities .level9 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_4_blue.gif) no-repeat 11px 13px; }';
animationCSS += '#island #container #mainview #cities .level7 div.allyCityImg, #island #container #mainview #cities .level8 div.allyCityImg, #island #container #mainview #cities .level9 div.allyCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_4_green.gif) no-repeat 11px 13px; }';
//City 5
animationCSS += '#island #container #mainview #cities .level10 div.cityimg,#island #container #mainview #cities .level11 div.cityimg,#island #container #mainview #cities .level12 div.cityimg {background:url(http://ikariam.bgt-angels.sk/game/animated/city_5_red.gif) no-repeat 8px 13px;}';
animationCSS += '#island #container #mainview #cities .level10 div.ownCityImg, #island #container #mainview #cities .level11 div.ownCityImg, #island #container #mainview #cities .level12 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_5_blue.gif) no-repeat 8px 13px; }';
animationCSS += '#island #container #mainview #cities .level10 div.allyCityImg,#island #container #mainview #cities .level11 div.allyCityImg,#island #container #mainview #cities .level12 div.allyCityImg {	background:url(http://ikariam.bgt-angels.sk/game/animated/city_5_green.gif) no-repeat 8px 13px;}';
//City 6
animationCSS += '#island #container #mainview #cities .level13 div.cityimg,#island #container #mainview #cities .level14 div.cityimg,#island #container #mainview #cities .level15 div.cityimg {	background:url(http://ikariam.bgt-angels.sk/game/animated/city_6_red.gif) no-repeat 4px 7px;}';
animationCSS += '#island #container #mainview #cities .level13 div.ownCityImg,#island #container #mainview #cities .level14 div.ownCityImg,#island #container #mainview #cities .level15 div.ownCityImg {	background:url(http://ikariam.bgt-angels.sk/game/animated/city_6_blue.gif) no-repeat 4px 7px;}';
animationCSS += '#island #container #mainview #cities .level13 div.allyCityImg,#island #container #mainview #cities .level14 div.allyCityImg,#island #container #mainview #cities .level15 div.allyCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_6_green.gif) no-repeat 4px 7px;}';
//City 7
animationCSS += '#island #container #mainview #cities .level16 div.cityimg, #island #container #mainview #cities .level17 div.cityimg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_7_red.gif) no-repeat 4px 7px; }';
animationCSS += '#island #container #mainview #cities .level16 div.ownCityImg, #island #container #mainview #cities .level17 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_7_blue.gif) no-repeat 4px 7px; }';
animationCSS += '#island #container #mainview #cities .level16 div.allyCityImg, #island #container #mainview #cities .level17 div.allyCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_7_green.gif) no-repeat 4px 7px; }';
//City 8
animationCSS += '#island #container #mainview #cities .level18 div.cityimg, #island #container #mainview #cities .level19 div.cityimg, #island #container #mainview #cities .level20 div.cityimg, #island #container #mainview #cities .level21 div.cityimg, #island #container #mainview #cities .level22 div.cityimg, #island #container #mainview #cities .level23 div.cityimg, #island #container #mainview #cities .level24 div.cityimg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_8_red.gif) no-repeat 2px 4px; }';
animationCSS += '#island #container #mainview #cities .level18 div.ownCityImg, #island #container #mainview #cities .level19 div.ownCityImg, #island #container #mainview #cities .level20 div.ownCityImg, #island #container #mainview #cities .level21 div.ownCityImg, #island #container #mainview #cities .level22 div.ownCityImg, #island #container #mainview #cities .level23 div.ownCityImg, #island #container #mainview #cities .level24 div.ownCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_8_blue.gif) no-repeat 2px 4px; }';
animationCSS += '#island #container #mainview #cities .level18 div.allyCityImg, #island #container #mainview #cities .level19 div.allyCityImg, #island #container #mainview #cities .level20 div.allyCityImg, #island #container #mainview #cities .level21 div.allyCityImg, #island #container #mainview #cities .level22 div.allyCityImg, #island #container #mainview #cities .level23 div.allyCityImg, #island #container #mainview #cities .level24 div.allyCityImg { background:url(http://ikariam.bgt-angels.sk/game/animated/city_8_green.gif) no-repeat 2px 4px; }';

//WolrdMap resource view

animationCSS += '#worldmap_iso #worldmap .tradegood1 { background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_wine.gif); width:25px; height:25px; }';
animationCSS += '#worldmap_iso #worldmap .tradegood2 { background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_marble.gif); width:25px; height:25px; }';
animationCSS += '#worldmap_iso #worldmap .tradegood3 { background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_glass.gif); width:25px; height:25px; }';
animationCSS += '#worldmap_iso #worldmap .tradegood4 { background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_sulfur.gif); width:25px; height:25px; }';

// Main Banner without shadows of old resources

animationCSS += '#header {	position:relative;height:336px;margin:0 -132px -189px -132px;background:#f3dcb6 url(http://ikariam.bgt-angels.sk/game/animated/bg_header.jpg) no-repeat;}';

//island Boarders

animationCSS += '#worldmap_iso #worldmap .ownIslandMarked { /*	position:absolute; bottom:70px;	left:100px; width:39px;	height:60px; */	background:url(http://ikariam.bgt-angels.sk/game/animated/border-island7.png) no-repeat top center; height:100%; width:100%; z-index:9; }';

//City free point place

animationCSS += '#island #container #mainview #cities .buildplace .claim { display:block; position:absolute; left:26px; bottom:20px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/flag_yellow.gif); width:29px; height:40px; }';

//City and island selectors

animationCSS += '#island #container #mainview #cities .selectimg { position:absolute; top:22px; left:-17px; visibility:hidden;  background-image:url(http://ikariam.bgt-angels.sk/game/animated/select_city.gif); width:99px; height:52px; }';
animationCSS += '#island #container #mainview #cities .selected div.selectimg{ visibility:visible;z-index:-9999;}';
animationCSS += '#worldmap_iso #worldmap .islandMarked {  position:absolute; bottom:65px; left:80px; width:73px; height:97px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/select_island.gif); z-index:2000; }';


//Main view resources
animationCSS += '#container ul.resources .wood { background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_wood.gif); background-position:4px 2px; }';
animationCSS += '#container ul.resources .marble {	background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_marble.gif);	background-position:2px 2px;	}';
animationCSS += '#container ul.resources .wine { 	background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_wine.gif);	background-position:4px 2px;	}';
animationCSS += '#container ul.resources .glass {	background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_glass.gif);	background-position:4px 2px;	}';
animationCSS += '#container ul.resources .sulfur {	background-image:url(http://ikariam.bgt-angels.sk/game/animated/icon_sulfur.gif);	background-position:2px 2px;	}';

//Advisors

animationCSS += '#advisors #advDiplomacy a.normal {	background-image:url(Http://ikariam.bgt-angels.sk/game/animated/diplomat.gif);	}';
animationCSS += '#advisors #advCities a.normal { background-image:url(Http://ikariam.bgt-angels.sk/game/animated/mayor.gif); }';

//Inner City Flags

animationCSS += '#city #container #mainview #locations .land .flag {	background-image:url(http://ikariam.bgt-angels.sk/game/animated/flag_red.gif);	}';
animationCSS += '#city #container #mainview #locations .shore .flag {	background-image:url(http://ikariam.bgt-angels.sk/game/animated/flag_blue.gif); }';
animationCSS += '#city #container #mainview #locations .wall .flag {	background-image:url(http://ikariam.bgt-angels.sk/game/animated/flag_yellow.gif); }';

//Inner City buildings

animationCSS += '#city #container #mainview #locations .academy .buildingimg {	left:-19px; top:-31px; width:123px; height:90px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_academy.gif);	}';
animationCSS += '#city #container #mainview #locations .port .buildingimg {	left:-65px; top:-35px; width:163px; height:131px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_port.gif);	}';
animationCSS += '#city #container #mainview #locations .embassy .buildingimg {	left:-5px; top:-31px; width:93px; height:85px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_embassy.gif);	}';
animationCSS += '#city #container #mainview #locations .safehouse .buildingimg {	left:5px; top:-15px; width:84px; height:58px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_safehouse.gif); }';
animationCSS += '#city #container #mainview #locations .palace .buildingimg {	left:-10px; top:-42px; width:106px; height:97px;  background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_palace.gif); }';
animationCSS += '#city #container #mainview #locations .barracks .buildingimg {	left:0px; top:-33px; width:100px; height:76px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_barracks.gif); }';
animationCSS += '#city #container #mainview #locations .townHall .buildingimg {	left:-5px; top:-60px; width:104px; height:106px; background-image:url(Http://www.iescripts.org/upload/preview/src/352.20080514093805.gif); }';
animationCSS += '#city #container #mainview #locations .tavern .buildingimg {left:-10px; top:-37px; width:111px; height:84px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_tavern2.gif);}';
animationCSS += '#city #container #mainview #locations .workshop-army .buildingimg {left:-19px; top:-54px; width:106px; height:108px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_workshop.gif);}';
animationCSS += '#city #container #mainview #locations .museum .buildingimg {left:-8px; top:-38px; width:133px; height:98px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_museum64x.gif);}';
animationCSS += '#city #container #mainview #locations .branchOffice .buildingimg {left:-19px; top:-31px; width:120px; height:84px; background-image:url(http://ikariam.bgt-angels.sk/game/animated/building_marketplace2.gif);}';
animationCSS += '#city #container #mainview #locations .palaceColony .buildingimg {left:-10px; top:-42px; width:109px; height:95px; background-image:url(http://www.magyc.net/ikariam/images/building_palaceColony.gif);}';

//Inner City Backgrounds phases
animationCSS += '#city #container .phase1 {    background-image:url(http://ikariam.bgt-angels.sk/game/animated/city_phase1.gif);}';
animationCSS += '#city #container .phase2, #city #container .phase3 {    background-image:url(http://ikariam.bgt-angels.sk/game/animated/city_phase2.gif);}';
animationCSS += '#city #container .phase4, #city #container .phase5, #city #container .phase6 {    background-image:url(http://ikariam.bgt-angels.sk/game/animated/city_phase3.gif);}';
animationCSS += '#city #container .phase7, #city #container .phase8,#city #container .phase9 {    background-image:url(http://ikariam.bgt-angels.sk/game/animated/city_phase4.gif);}';
animationCSS += '#city #container .phase10, #city #container .phase11, #city #container .phase12 {    background-image:url(http://ikariam.bgt-angels.sk/game/animated/city_phase5.gif);}';
animationCSS += '#city #container .phase13, #city #container .phase14, #city #container .phase15 {    background-image:url(http://ikariam.bgt-angels.sk/game/animated/city_phase6.gif);}';
animationCSS += '#city #container .phase16, #city #container .phase17 {    background-image:url(http://www.magyc.net/ikariam/images/city_phase7.gif);}';
animationCSS += '#city #container .phase18, #city #container .phase19 {    background-image:url(http://www.magyc.net/ikariam/images/city_phase8.gif);}';
animationCSS += '#city #container .phase20 {    background-image:url(http://www.magyc.net/ikariam/images/city_phase8.gif);}';

	PRO_addStyle(animationCSS, document);
	
})()
 