// ==UserScript==
// @name           Check for Glowing AirShark/Coatl Tanks	
// @description    Checks for glowing arishark and giant stone coatl tanks glowing. Only these two high trigger fish. May include mixed tanks with other high trigger fish.
// @include        *
// @require        http://sizzlemctwizzle.com/updater.php?id=76781
// @version        2
// ==/UserScript==

function seconds2HMS(inputval){
	var hh = Math.floor(inputval / 3600);
	var ss_remaining = (inputval - (hh * 3600));
	var mm = Math.floor(ss_remaining / 60);
	var ss = (ss_remaining - (mm * 60));	
	if(hh<10){
		hh='0'+hh;
	}
	if(mm<10){
		mm='0'+mm;
	}
	if(ss<10){
		ss='0'+ss;
	}
	return hh+':'+mm+':'+ss;
}
function checkTank(tankId,open,username){
	if(!open){
		open=false;
	}
	if(!username){
		var username = "Unknown";
	}
	GM_xmlhttpRequest({
		method: "GET",
		url: 'http://www.gaiaonline.com/chat/gsi/index.php?'+'v=json&m=[[6500%2C[1]]%2C[6510%2C["'+tankId+'"%2C0%2C1]]%2C[6511%2C["'+tankId+'"%2C0]]%2C[6512%2C["'+tankId+'"%2C0]]%2C[107%2C["null"]]]&X='+(new Date().getTime().toString().substring(0, 10)),
		onload: function(r){
			try{
				if(typeof JSON != 'undefined'){
					var json=JSON.parse(r.responseText);
				}
				else{
					var json=eval(r.responseText);
				}
				var gaiaT=json[0][2]['gaia_curr_time'];
				try{
					var glowT=json[1][2][tankId]['game_info'][1]["open_time"];
				}
				catch(e){}
				if(glowT){
					if(json[1][2][tankId]['game_info'][1]["instance_id"]!=GM_getValue('instance_id~'+tankId,0)){
						var aquaN=json[1][2][tankId]['name'];
						if(aquaN=='<undefined string>'||!aquaN){
							aquaN=tankId;
						}
						GM_setValue('instance_id~'+tankId,json[1][2][tankId]['game_info'][1]["instance_id"]);
						if(glowT<=gaiaT){
							if(glowT+720>gaiaT){
								alert(username+' ('+tankId+') has been glowing for '+seconds2HMS(gaiaT-glowT)+'.');
								if(open===true){
									GM_openInTab('http://www.gaiaonline.com/landing/flashaquarium/?userid='+json[1][2][tankId]['user_id']);
								}
								else{
									GM_openInTab('http://www.gaiaonline.com/forum/compose/topic/new/?f=393&tank='+aquaN);
								}
							}
							else{
								//alert('over');
							}
						}
						else{
							alert(username+' ('+tankId+') will glow in '+seconds2HMS(glowT-gaiaT));
							if(open===true){
								GM_openInTab('http://www.gaiaonline.com/landing/flashaquarium/?userid='+json[1][2][tankId]['user_id']);
							}
							else{
								GM_openInTab('http://www.gaiaonline.com/forum/compose/topic/new/?f=393&tank='+aquaN);
							}
						}
						var fish='';
						var fishCt=0;
						var glowCt=0;
						var playCt=json[1][2][tankId]['game_info'][1]["player_count"];
						for(var i in json[2][2]){
							if(json[2][2][i]['in_env']==1){
								fishCt++;
								fish+=json[2][2][i]['item_id']+',';
								if(json[2][2][i]['game_specifics']){
									glowCt++;
								}
							}
						}
						GM_xmlhttpRequest({
							method: "POST",
							headers: {
								"Content-Type": "application/x-www-form-urlencoded"
							},
							data: "tankId="+tankId+"&fishCt="+fishCt+"&glowCt="+glowCt+"&playCt="+playCt+"&glowT="+glowT+"&fish="+fish.substr(0,fish.length-1),
							url: 'http://absol.site88.net/gtools/background/glowRecorder.php',
							onload: function(r){}
						});
					}
				}
				else{
					//alert('not glowing');
				}
			}
			catch(e){GM_log('n'+e)}
		}
	});
}
var time=Number(new Date().getTime().toString().substring(0,10));
if(time>=GM_getValue('date',time-20)+20){
	GM_setValue('date',time);
	checkTank(8297017,true,"Nekrowe Mancer");
	checkTank(2223001,true,"Lord Uesugi Kenshin");
	checkTank(1129505,true,"Elegant Walnut");
	checkTank(79494791,true,"Purgatorium");
	checkTank(6183545,true,"Mikeguin8");
        checkTank(1044195,true,"Gtsluvr");
    checkTank(46847,true,"Absol Ruler of Chaos");
    checkTank(13753,true,"tsubaki01");
    checkTank(393371,true,"iTATCHYAiKAWA");
    checkTank(7354393,true,"Prince Maikeru");
    checkTank(1011611,true,"Razumi Yazura");
    checkTank(76061,true,"Lace_Gaara");
    checkTank(5109705,true,"Virtual Earthquake v2");
    checkTank(2976477,true,"smartalaku2");
    checkTank(7233399,true,"II smartalaku2 II");
    checkTank(5460819,true,"Virtual Earthquake");
    checkTank(3921317,true,"Humphreypoptart");
    checkTank(5152433,true,"TaylorGS");
    checkTank(393995,true,"shellsmachine");
    checkTank(4418099,true,"Caffeinated McKayla");
    checkTank(2958495,true,"x-Kenna-Bear-x");
    checkTank(2485485,true,"purrfectly yours");
    checkTank(6183545,true,"Mikeguin8");
    checkTank(3892709,true,"rainzdropz");
    checkTank(5994943,true,"felinophiles alter ego");
    checkTank(4320543,true,"la fleur noire");
    checkTank(5909863,true,"Angeni1");
    checkTank(4487235,true,"Wings of Tranquility");
    checkTank(7912971,true,"EXI7IUM");
    checkTank(2907819,true,"Nymphadora_Tonks");
    checkTank(7562851,true,"RILEYZZZ3");
    checkTank(6873281,true,"ll blaise ll");
    checkTank(5948255,true,"Nashoba1");
    checkTank(3892709,true,"rainzdropz");
    checkTank(345515,true,"Aislanaire");
    checkTank(3308707,true,"Ziggy Luv");
    checkTank(6803921,true,"quirkyone");
    checkTank(1150667,true,"Amai-Ten Tsukihime");
    checkTank(236535,true,"Hirome Chan");
    checkTank(3754887,true,"Firstpoke");
    checkTank(5580677,true,"Hellbilly Storm");
    checkTank(4764113,true,"Trulee Trubble");
    checkTank(6396299,true,"Nipster Joe");
    checkTank(1129505,true,"Elegant Walnut");
    checkTank(1939629,true,"Keira Loach");
    checkTank(3707169,true,"Droitz");
    checkTank(5498815,true,"Princess Uesugi Girly");
    checkTank(5599649,true,"Professor Uesugi Purple");		
}
function addTank(){
	if(confirm('Would you like to add a tank?')===true){
		GM_openInTab('http://www.awesomolocity.herobo.com/script/addTank.html');
	}
}
function reportTank(){
	if(confirm('Would you like to report a tank?')===true){
		GM_openInTab('http://www.awesomolocity.herobo.com/script/reportTank.html');
	}
}
GM_registerMenuCommand("Stalk Good Monster Tanks: Add Tank", addTank);
GM_registerMenuCommand("Stalk Good Monster Tanks: Report Tank", reportTank);