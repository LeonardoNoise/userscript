// ==UserScript==
// @name All in one smileys for Orkut-By mudassir
// @author Mudassir<http://www.orkut.com/Profile.aspx?uid=9046960911480388727>
// @description Adds animated smileys to your scrapbok
// @include http://www.orkut.com/Scrapbook.aspx*
// @include http://www.orkut.com/CommMsgPost.aspx*
// ==/UserScript==


addEventListener('load', function(event) {
function getTextArea(n) {
	return document.getElementsByTagName('textarea')[n];
}

function insertSmiley(){
	var image = this.getElementsByTagName('img')[0].getAttribute("src");
	getTextArea(this.getAttribute("gult")).focus();
	getTextArea(this.getAttribute("gult")).value += "<img src="+image+">";
}

function dip() {
	var smileyarr = new Array();	


	smileyarr["A"]="http://smileyjungle.com/smilies/alphabet0.gif";
	smileyarr["B"]="http://smileyjungle.com/smilies/alphabet1.gif";
	smileyarr["C"]="http://smileyjungle.com/smilies/alphabet2.gif";
	smileyarr["D"]="http://smileyjungle.com/smilies/alphabet3.gif";
	smileyarr["E"]="http://smileyjungle.com/smilies/alphabet4.gif";
	smileyarr["F"]="http://smileyjungle.com/smilies/alphabet5.gif";
	smileyarr["G"]="http://smileyjungle.com/smilies/alphabet6.gif";
	smileyarr["H"]="http://smileyjungle.com/smilies/alphabet7.gif";
	smileyarr["I"]="http://smileyjungle.com/smilies/alphabet8.gif";
	smileyarr["J"]="http://smileyjungle.com/smilies/alphabet9.gif";
	smileyarr["K"]="http://smileyjungle.com/smilies/alphabet10.gif";
	smileyarr["L"]="http://smileyjungle.com/smilies/alphabet11.gif";
	smileyarr["M"]="http://smileyjungle.com/smilies/alphabet12.gif";
	smileyarr["N"]="http://smileyjungle.com/smilies/alphabet13.gif";
	smileyarr["O"]="http://smileyjungle.com/smilies/alphabet14.gif";
	smileyarr["P"]="http://smileyjungle.com/smilies/alphabet15.gif";
	smileyarr["Q"]="http://smileyjungle.com/smilies/alphabet16.gif";
	smileyarr["R"]="http://smileyjungle.com/smilies/alphabet17.gif";
	smileyarr["S"]="http://smileyjungle.com/smilies/alphabet18.gif";
	smileyarr["T"]="http://smileyjungle.com/smilies/alphabet19.gif";
	smileyarr["U"]="http://smileyjungle.com/smilies/alphabet20.gif";
	smileyarr["V"]="http://smileyjungle.com/smilies/alphabet21.gif";
	smileyarr["W"]="http://smileyjungle.com/smilies/alphabet22.gif";
	smileyarr["X"]="http://smileyjungle.com/smilies/alphabet23.gif";
	smileyarr["Y"]="http://smileyjungle.com/smilies/alphabet24.gif";
	smileyarr["Z"]="http://smileyjungle.com/smilies/alphabet25.gif";
	smileyarr["BLANK"]="http://smileyjungle.com/smilies/alphabet26.gif";
	smileyarr["Script By Mudassir0"]="http://smileyjungle.com/smilies/badtaste0.gif";
	smileyarr["Script By Mudassir1"]="http://smileyjungle.com/smilies/badtaste1.gif";
	smileyarr["Script By Mudassir2"]="http://smileyjungle.com/smilies/badtaste2.gif";
	smileyarr["Script By Mudassir3"]="http://smileyjungle.com/smilies/badtaste3.gif";
	smileyarr["Script By Mudassir4"]="http://smileyjungle.com/smilies/badtaste4.gif";
	smileyarr["Script By Mudassir5"]="http://smileyjungle.com/smilies/badtaste5.gif";
	smileyarr["Script By Mudassir6"]="http://smileyjungle.com/smilies/badtaste6.gif";
	smileyarr["Script By Mudassir7"]="http://smileyjungle.com/smilies/badtaste7.gif";
	smileyarr["Script By Mudassir8"]="http://smileyjungle.com/smilies/badtaste8.gif";
	smileyarr["Script By Mudassir9"]="http://smileyjungle.com/smilies/badtaste9.gif";
	smileyarr["Script By Mudassir10"]="http://smileyjungle.com/smilies/badtaste10.gif";
	smileyarr["Script By Mudassir11"]="http://smileyjungle.com/smilies/badtaste11.gif";
	smileyarr["Script By Mudassir12"]="http://smileyjungle.com/smilies/badtaste12.gif";
	smileyarr["Script By Mudassir13"]="http://smileyjungle.com/smilies/badtaste13.gif";
	smileyarr["Script By Mudassir14"]="http://smileyjungle.com/smilies/badtaste14.gif";
	smileyarr["Script By Mudassir15"]="http://smileyjungle.com/smilies/badtaste15.gif";
	smileyarr["Script By Mudassir16"]="http://smileyjungle.com/smilies/badtaste16.gif";
	smileyarr["Script By Mudassir17"]="http://smileyjungle.com/smilies/badtaste17.gif";
	smileyarr["Script By Mudassir18"]="http://smileyjungle.com/smilies/badtaste18.gif";
	smileyarr["Script By Mudassir19"]="http://smileyjungle.com/smilies/badtaste19.gif";
	smileyarr["Script By Mudassir20"]="http://smileyjungle.com/smilies/badtaste20.gif";
	smileyarr["Script By Mudassir21"]="http://smileyjungle.com/smilies/badtaste21.gif";
	smileyarr["Script By Mudassir22"]="http://smileyjungle.com/smilies/badtaste22.gif";
	smileyarr["Script By Mudassir23"]="http://smileyjungle.com/smilies/badtaste23.gif";
	smileyarr["Script By Mudassir24"]="http://smileyjungle.com/smilies/badtaste24.gif";
	smileyarr["Script By Mudassir25"]="http://smileyjungle.com/smilies/badtaste25.gif";
	smileyarr["Script By Mudassir26"]="http://smileyjungle.com/smilies/badtaste26.gif";
	smileyarr["Script By Mudassir27"]="http://smileyjungle.com/smilies/badtaste27.gif";
	smileyarr["Script By Mudassir28"]="http://smileyjungle.com/smilies/celebrate0.gif";
	smileyarr["Script By Mudassir29"]="http://smileyjungle.com/smilies/celebrate7.gif";
	smileyarr["Script By Mudassir30"]="http://smileyjungle.com/smilies/celebrate13.gif";
	smileyarr["Script By Mudassir31"]="http://smileyjungle.com/smilies/celebrate15.gif";
	smileyarr["Script By Mudassir32"]="http://smileyjungle.com/smilies/celebrate17.gif";
	smileyarr["Script By Mudassir33"]="http://smileyjungle.com/smilies/seasonal1.gif";
	smileyarr["Script By Mudassir34"]="http://smileyjungle.com/smilies/seasonal2.gif";
	smileyarr["Script By Mudassir35"]="http://smileyjungle.com/smilies/seasonal3.gif";
	smileyarr["Script By Mudassir36"]="http://smileyjungle.com/smilies/seasonal4.gif";
	smileyarr["Script By Mudassir37"]="http://smileyjungle.com/smilies/seasonal5.gif";
	smileyarr["Script By Mudassir38"]="http://smileyjungle.com/smilies/seasonal6.gif";
	smileyarr["Script By Mudassir39"]="http://smileyjungle.com/smilies/seasonal7.gif";
	smileyarr["Script By Mudassir40"]="http://smileyjungle.com/smilies/seasonal8.gif";
	smileyarr["Script By Mudassir44"]="http://smileyjungle.com/smilies/guns3.gif";
	smileyarr["Script By Mudassir42"]="http://smileyjungle.com/smilies/guns6.gif";
	smileyarr["Script By Mudassir45"]="http://smileyjungle.com/smilies/guns7.gif";
	smileyarr["Script By Mudassir41"]="http://smileyjungle.com/smilies/guns8.gif";
	smileyarr["Script By Mudassir43"]="http://smileyjungle.com/smilies/guns11.gif";
	smileyarr["Script By Mudassir46"]="http://smileyjungle.com/smilies/guns15.gif";
	smileyarr["Script By Mudassir47"]="http://smileyjungle.com/smilies/animals1.gif";
	smileyarr["Script By Mudassir48"]="http://smileyjungle.com/smilies/animals4.gif";
	smileyarr["Script By Mudassir49"]="http://smileyjungle.com/smilies/animals11.gif";
	smileyarr["Script By Mudassir50"]="http://smileyjungle.com/smilies/animals14.gif";
	smileyarr["Script By Mudassir51"]="http://smileyjungle.com/smilies/animals18.gif";
	smileyarr["Script By Mudassir52"]="http://smileyjungle.com/smilies/animals21.gif";
	smileyarr["Script By Mudassir53"]="http://smileyjungle.com/smilies/signsandflags5.gif";
	smileyarr["Script By Mudassir54"]="http://smileyjungle.com/smilies/signsandflags7.gif";
	smileyarr["Script By Mudassir55"]="http://smileyjungle.com/smilies/signsandflags14.gif";
	smileyarr["Script By Mudassir56"]="http://smileyjungle.com/smilies/signsandflags20.gif";
	smileyarr["Script By Mudassir57"]="http://smileyjungle.com/smilies/signsandflags25.gif";
	smileyarr["Script By Mudassir58"]="http://smileyjungle.com/smilies/signsandflags28.gif";
	smileyarr["Script By Mudassir59"]="http://smileyjungle.com/smilies/signsandflags30.gif";
	smileyarr["Script By Mudassir60"]="http://smileyjungle.com/smilies/signsandflags34.gif";
	smileyarr["Script By Mudassir60*"]="http://smileyjungle.com/smilies/signsandflags36.gif";
	smileyarr["Script By Mudassir61"]="http://smileyjungle.com/smilies/signsandflags41.gif";
	smileyarr["Script By Mudassir62"]="http://smileyjungle.com/smilies/signsandflags45.gif";
	smileyarr["Script By Mudassir63"]="http://smileyjungle.com/smilies/signsandflags46.gif";
	smileyarr["Script By Mudassir63*"]="http://s240.photobucket.com/albums/ff289/otext/smiley/sm53.gif";
	smileyarr["Script By Mudassir64"]="http://smileyjungle.com/smilies/foodanddrink12.gif";
	smileyarr["Script By Mudassir65"]="http://smileyjungle.com/smilies/foodanddrink13.gif";
	smileyarr["Script By Mudassir66"]="http://smileyjungle.com/smilies/foodanddrink22.gif";
	smileyarr["Script By Mudassir67"]="http://smileyjungle.com/smilies/foodanddrink23.gif";
	smileyarr["Script By Mudassir68"]="http://smileyjungle.com/smilies/matrix0.gif";
	smileyarr["Script By Mudassir69"]="http://smileyjungle.com/smilies/matrix1.gif";
	smileyarr["Script By Mudassir70"]="http://smileyjungle.com/smilies/tv8.gif";
	smileyarr["Script By Mudassir71"]="http://smileyjungle.com/smilies/tv14.gif";
	smileyarr["Script By Mudassir72"]="http://smileyjungle.com/smilies/tv18.gif";	
	smileyarr["Script By Mudassir73"]="http://smileyjungle.com/smilies/angel5.gif";
	smileyarr["Script By Mudassir74"]="http://smileyjungle.com/smilies/angel9.gif";
	smileyarr["Script By Mudassir75"]="http://smileyjungle.com/smilies/laughing9.gif";
	smileyarr["Script By Mudassir76"]="http://smileyjungle.com/smilies/laughing25.gif";
	smileyarr["Script By Mudassir77"]="http://smileyjungle.com/smilies/medieval1.gif";
	smileyarr["Script By Mudassir78"]="http://smileyjungle.com/smilies/aloofandbored10.gif";
	smileyarr["Script By Mudassir79"]="http://smileyjungle.com/smilies/southpark7.gif";
	smileyarr["Script By Mudassir80"]="http://smileyjungle.com/smilies/agreement9.gif";
	smileyarr["Script By Mudassir81"]="http://smileyjungle.com/smilies/devils4.gif";
	smileyarr["Script By Mudassir82"]="http://smileyjungle.com/smilies/robots0.gif";
	smileyarr["Script By Mudassir83"]="http://smileyjungle.com/smilies/robots1.gif";
	smileyarr["Script By Mudassir84"]="http://smileyjungle.com/smilies/robots2.gif";
	smileyarr["Script By Mudassir85"]="http://smileyjungle.com/smilies/robots3.gif";
	smileyarr["Script By Mudassir86"]="http://smileyjungle.com/smilies/robots4.gif";
	smileyarr["Script By Mudassir87"]="http://smileyjungle.com/smilies/love27.gif";
	smileyarr["Script By Mudassir88"]="http://smileyjungle.com/smilies/love31.gif";
	smileyarr["Script By Mudassir89"]="http://smileyjungle.com/smilies/love41.gif";
	smileyarr["Script By Mudassir90"]="http://smileyjungle.com/smilies/music2.gif";
	smileyarr["Script By Mudassir91"]="http://smileyjungle.com/smilies/music4.gif";
	smileyarr["Script By Mudassir92"]="http://smileyjungle.com/smilies/music9.gif";
	smileyarr["Script By Mudassir93"]="http://smileyjungle.com/smilies/music10.gif";
	smileyarr["Script By Mudassir94"]="http://smileyjungle.com/smilies/music13.gif";
	smileyarr["Script By Mudassir95"]="http://smileyjungle.com/smilies/music18.gif";
	smileyarr["Script By Mudassir96"]="http://smileyjungle.com/smilies/music22.gif";
	smileyarr["Script By Mudassir97"]="http://smileyjungle.com/smilies/headgear13.gif";
	smileyarr["Script By Mudassir98"]="http://smileyjungle.com/smilies/headgear22.gif";
	smileyarr["Script By Mudassir99"]="http://smileyjungle.com/smilies/headgear28.gif";
	smileyarr["Script By Mudassir100"]="http://smileyjungle.com/smilies/infomilies10.gif";
	smileyarr["Script By Mudassir101"]="http://smileyjungle.com/smilies/infomilies14.gif";
	smileyarr["Script By Mudassir102"]="http://smileyjungle.com/smilies/infomilies21.gif";
	smileyarr["Script By Mudassir103"]="http://smileyjungle.com/smilies/infomilies31.gif";
	smileyarr["Script By Mudassir104"]="http://smileyjungle.com/smilies/infomilies37.gif";
	smileyarr["Script By Mudassir105"]="http://smileyjungle.com/smilies/infomilies38.gif";
	smileyarr["Script By Mudassir106"]="http://smileyjungle.com/smilies/infomilies44.gif";
        smileyarr["Script By Mudassir107"]="http://i214.photobucket.com/albums/cc149/abujug/c0cbd614.gif";
 	smileyarr["Script By Mudassir108"]="http://i214.photobucket.com/albums/cc149/abujug/124ffaa2.gif";
	smileyarr["Script By Mudassir109"]="http://i214.photobucket.com/albums/cc149/abujug/lol19-1.gif";
	smileyarr["Script By Mudassir110"]="http://i214.photobucket.com/albums/cc149/abujug/1ffdb125.gif";
	smileyarr["Script By Mudassir111"]="http://i214.photobucket.com/albums/cc149/abujug/lol11-1.gif";
	smileyarr["Script By Mudassir112"]="http://i214.photobucket.com/albums/cc149/abujug/bc344f65.gif";
	smileyarr["Script By Mudassir113"]="http://i214.photobucket.com/albums/cc149/abujug/065d6b91.gif";
	smileyarr["Script By Mudassir114"]="http://i214.photobucket.com/albums/cc149/abujug/096564ed.gif";
	smileyarr["Script By Mudassir115"]="http://i214.photobucket.com/albums/cc149/abujug/lol15.gif";
        smileyarr["Script By Mudassir116"]="http://s240.photobucket.com/albums/ff289/otext/smiley/sm51.gif";
	smileyarr["Script By Mudassir117"]="http://s240.photobucket.com/albums/ff289/otext/smiley/sm52.gif";
	smileyarr["Script By Mudassir118"]="http://s240.photobucket.com/albums/ff289/otext/smiley/sm24.gif";
	smileyarr["Script By Mudassir119"]="http://s240.photobucket.com/albums/ff289/otext/smiley/sm6.gif";
        smileyarr["smile"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/1.gif";
	smileyarr["sad"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/2.gif";
	smileyarr["angry"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/14.gif";
	smileyarr["bsmile"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/4.gif";
	smileyarr["funny"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/10.gif";
	smileyarr["surprise"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/13.gif";
	smileyarr["wink"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/3.gif";
	smileyarr["cool"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/16.gif";
	smileyarr["confuse"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/7.gif";
	smileyarr["hug"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/6.gif";
	smileyarr["heart"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/8.gif";
	smileyarr["kiss"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/11.gif";
	smileyarr["laugh"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/21.gif";
	smileyarr["drool"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/38.gif";
	smileyarr["doubt"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/23.gif";
	smileyarr["blush"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/9.gif";
	smileyarr["devil"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/19.gif";
	smileyarr["angel"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/25.gif";
	smileyarr["roll"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/24.gif";
	smileyarr["sleep"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/28.gif";
	smileyarr["notalk"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/33.gif";
	smileyarr["worried"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/17.gif";
	smileyarr["wait"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/45.gif";
	smileyarr["applause"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/41.gif";
	smileyarr["straight"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/22.gif";
	smileyarr["silly"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/35.gif";
	smileyarr["smug"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/15.gif";
	smileyarr["sick"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/31.gif";
	smileyarr["party"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/36.gif";
	smileyarr["dream"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/105.gif";
	smileyarr["irritated"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/102.gif";
	smileyarr["eyelash"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/104.gif";
	smileyarr["whew"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/18.gif";
	smileyarr["nerd"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/26.gif";
	smileyarr["phbbt"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/47.gif";
	smileyarr["hypno"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/43.gif";
	smileyarr["yawn"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/37.gif";
	smileyarr["sigh"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/46.gif";
	smileyarr["clown"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/34.gif";
	smileyarr["bye"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/103.gif";
	smileyarr["bringiton"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/70.gif";
	smileyarr["peace"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/67.gif";
	smileyarr["dancing"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/69.gif";
	smileyarr["worthy"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/77.gif";
	smileyarr["money"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/64.gif";
	smileyarr["pray"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/63.gif";
	smileyarr["chatter"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/76.gif";
	smileyarr["whistle"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/65.gif";
	smileyarr["puppy"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/108.gif";
	smileyarr["pig"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/49.gif";
	smileyarr["cow"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/50.gif";
	smileyarr["monkey"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/51.gif";
	smileyarr["chick"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/52.gif";
	smileyarr["rose"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/53.gif";
	smileyarr["skull"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/59.gif";
	smileyarr["star"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/79.gif";
	smileyarr["ying"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/75.gif";
	smileyarr["boy"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/72.gif";
	smileyarr["girl"]="http://i242.photobucket.com/albums/ff6/yahoo-emotions/74.gif";
	var tb = document.getElementsByTagName('textarea');
	for(i=0;i<tb.length;i++){
		text=tb[i];
		if (!text) return;
		c=text.parentNode;
		d=document.createElement("div");
		d.className="T";
		d.style.fontSize="11px";
		d.align="left";
		
	        
	    d.style.marginTop="10px";
		c.appendChild(d);
		
		for(title in smileyarr){
			mm=document.createElement("a");
			mm.href="javascript:;";
			mm.setAttribute("gult",i);
			mm.innerHTML="<img src='"+smileyarr[title]+"' title='"+title+"'>";
			mm.addEventListener("click", insertSmiley, true);
			d.appendChild(mm);
		}
	}	
}
dip();
}, false);