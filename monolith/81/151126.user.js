// ==UserScript== 
// @name barbie power
// @version 1
// @author Falconet
// @namespace http://localhost 
// @include http://primera.e-sim.org*
// @include http://secura.e-sim.org*
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js 
// @require http://jquery-json.googlecode.com/files/jquery.json-2.2.min.js
// ==/UserScript== 


GM_addStyle("body { background: url(https://lh6.googleusercontent.com/-JQbkHjzCpjk/T_hj9vqXJuI/AAAAAAAAAC8/p5MERM4M_XI/s0/bg.jpg) no-repeat top center !important; background-position:top; } .header { position:relative; width:990px; height:100px; margin:10px auto 0px; overflow:hidden; } .SearchBar { position:absolute; top:20px; right:0px; } .SearchBar br { display:none; } .SearchBar td { position:relative !important; width: 250px; background:none transparent !important; } .SearchBar a { margin:0px 0px 0px 65px !important; } .SearchBar td img { margin:-6px 10px 0px 0px !important; } .SearchBar td b { margin:0px 7px 0px 0px !important; } #searchForm { width: 200px !important; } #logo { width:300px; height:100px; } .rtShaded, .shadedTable > tbody > tr:first-child > td:first-child{ display:none; } .tShaded { height:14px; } .rightTabGrey { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/tabRightGrey.png') no-repeat scroll right top transparent !important; } .leftTabGrey { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/tabLeftGrey.png') no-repeat scroll left top transparent !important; padding-top:5px !important; } .rightTabBlue { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/tabRight.png') no-repeat scroll right top transparent !important; } .leftTabBlue { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/tabLeft.png') no-repeat scroll left top transparent !important; padding-top:5px !important; } .miniContent { border-left:1px solid #373737; border-right:1px solid #373737; border-bottom:1px solid #373737; border-top:none !important; background: #f0f0f0 !important; margin:0px; padding:5px 4px 5px 5px !important; } .littleDashedLine { border-top:1px solid white; border-bottom:1px solid #AAA; } .dashedLine { border-bottom:2px solid #AAA; } .shout2 { margin-bottom:7px !important; } .fightIcon, .crossIcon, .workIcon, .trainIcon { background:none !important; text-indent:0px !important; text-align:center !important; } a.button { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/button2.jpg') no-repeat scroll 0px 0px !important; text-shadow:0 -1px 0 #A63301 !important; font-weight:bold !important; font-size:14px !important; line-height:28px !important; color: #fff !important; margin-top:10px !important; } a.button:hover { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/button2.jpg') no-repeat scroll 0px -36px !important; line-height:32px !important; } #userMenu { width:183px !important; border-radius:5px 5px 5px 5px !important; border:1px solid black !important; } #userMenu a.button { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/button2_blue-1.png') no-repeat scroll 0px 0px !important; text-shadow:0 -1px 0 #666 !important; font-weight:bold !important; font-size:14px !important; line-height:35px !important; color: #fff !important; margin-top:10px !important; } #userMenu a.button:hover { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/button2_blue-1.png') no-repeat scroll 0px -36px !important; } .smallArticleTab{ background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/artTabSmall.png') repeat scroll 0 0 transparent !important; color:white !important; text-shadow:0 -1px 0 #666 !important; } .bigArticleTab { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/artTab.png') repeat scroll 0 0 transparent !important; color:white !important; text-shadow:0 -1px 0 #666 !important; } #voteButton { margin-top:7px !important; } #subButton { margin-top:-1px !important; } .plate { border:1px solid #000 !important; } .smallHeader { margin-top:10px !important; } .AtackerBarEdge { background: url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/battleBarAttackerEdge.png') !important; } .AtackerBar { background: url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/battleBarAttacker.png') !important; } .DefenderBarEdge { background: url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/battleBardefenderEdge.png') !important; } .DefenderBar { background: url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/battleBardefender.png') repeat scroll 0% 0% transparent !important; } #defenderPercent { color:white !important; } .lShaded { background:none; } .rShaded { background:none; } .mShaded { background:none; } .tShaded { background:none; } .bShaded { background:none; } .lbShaded { background:none; } .rbShaded { background:none; } .ltShaded { background:none; } .rtShaded { background:none; } .productList { margin-bottom:10px; } .productList input { display:block; float:left; margin:6px 4px 0px 4px; } .productList label { display:block; float:left; clear:right; margin-top: 5px; } .DailyOrder { background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/DO.png') no-repeat scroll 0px 0px !important; padding:19px 0px 0px 15px; color:#DDD; margin-left:9px; } .DailyOrder a { color:#FFF !important; text-shadow:0 -1px 0 #000 !important; text-decoration:inherit !important; } .DailyOrder a:hover { color:#fff !important; text-shadow:0px 0px 5px #000 !important; } .DailyOrder center b { margin-left: -46px; } h1 { text-shadow:none !important; } h2 { text-shadow:none !important; } .ProfileLink { display:block; clear:right; text-align:center; vertical-align:text-bottom; background-color:red;} .voteIcon { background: none !important;} .storageMini{background:url('http://i1169.photobucket.com/albums/r510/proxyboy/Used/storageMini.png') no-repeat scroll 0px 0px !important;}  .storageMini>div:first-child{background:none !important; color:#fff;} .storageMini>div:nth-child(2){background:none !important;} .InflContainer{ position:relative; float:left; height:30px; margin:-7px 10px 0px 0px; line-height:30px;} .InfluenceCalculator{margin-top:14px;}");

var rank = new Array;
rank['Rookie'] = 1.00;
rank['Private'] = 1.10;
rank['Private First Class'] = 1.20;
rank['Corporal'] = 1.30;
rank['Sergeant'] = 1.40;
rank['Staff Sergeant'] = 1.50;
rank['Sergeant First Class'] = 1.60;
rank['Master Sergeant'] = 1.65;
rank['First Sergeant'] = 1.70;
rank['Sergeant Major'] = 1.75;
rank['Command Sergeant Major'] = 1.80;
rank['Sergeant Major of the Army'] = 1.85;
rank['Second Lieutenant'] = 1.90;
rank['First Lieutenant'] = 1.93;
rank['Captain'] = 1.96;
rank['Major'] = 2.00;
rank['Lieutenant Colonel'] = 2.03;
rank['Colonel'] = 2.06;
rank['Brigadier General'] = 2.10;
rank['Major General'] = 2.12;
rank['Lieutenant General'] = 2.14;
rank['General'] = 2.16;
rank['General of the Army'] = 2.18;
rank['Marshall'] = 2.20;
rank['Field Marshall'] = 2.22;
rank['Supreme Marshall'] = 2.24;
rank['Generalissimus'] = 2.26;

function dmgCalc(militaryRank, strength, weaponPower, fights) {
  return Math.floor(militaryRank*strength*weaponPower*fights);
}

var hits = 1;

function Hits(){
	hits = $("#HITS").val();
	$('.InfluenceCalculator').remove();
	Main(hits);
	$("#HITS").attr("value",hits);
}

function Main(a){
var str = $('.attributesTable tr:eq(5) td:eq(1)').text().trim();
var mRank = $('.attributesTable tr:eq(3) td:eq(1)').text().trim();
	
$('.medal').parent().parent().after('<div class="testDivblue InfluenceCalculator" style="width:500px;"><div class="InflContainer">Hits: <input type="text" id="HITS" value="1" style="width:20px;"></div><div class="InflContainer"><b>Unarmed:</b> '+dmgCalc(rank[mRank], str, 0.5, hits)+'</div><div class="InflContainer"><b>Q1:</b> '+dmgCalc(rank[mRank], str, 1.2, hits)+'</div><div class="InflContainer"><b>Q2:</b> '+dmgCalc(rank[mRank], str, 1.4, hits)+'</div><div class="InflContainer"><b>Q3:</b> '+dmgCalc(rank[mRank], str, 1.6, hits)+'</div><div class="InflContainer"><b>Q4:</b> '+dmgCalc(rank[mRank], str, 1.8, hits)+'</div><div class="InflContainer"><b>Q5:</b> '+dmgCalc(rank[mRank], str, 2.0, hits)+'</div><div style="clear:both;"></div></div>');
$('#HITS').keyup(Hits);
}
Main(hits);

$('table.mainTable:eq(0)').before('<div class="header"><a id="logo" href="http://e-sim.org"><img src="http://i.imgur.com/aerb9.png"/></a><div class="SearchBar"></div></div>');
$('.shadedTable td:eq(4)').prependTo($('.SearchBar'));
$('table.mainTable:eq(0)').hide();

$('#voteButton').attr("src","http://i1169.photobucket.com/albums/r510/proxyboy/Used/voteButton.png");
$('#subButton').attr("src","http://i1169.photobucket.com/albums/r510/proxyboy/Used/subButton.png");
$('.unsubDiv img').attr("src","http://i1169.photobucket.com/albums/r510/proxyboy/Used/unsubButton.png");
$('.unsubDiv img').attr("style","margin-top:-1px;");

$('#battleBar div:eq(0)').attr("class","AtackerBarEdge");
$('#battleBar div:eq(1)').attr("class","AtackerBar");
$('#battleBar div:eq(2)').attr("class","DefenderBarEdge"); 
$('#battleBar div:eq(3)').attr("class","DefenderBar");
$('#battleBar img:eq(0)').attr("src","http://i1169.photobucket.com/albums/r510/proxyboy/Used/battleBarCenter2.png");
$('.testDivblue:contains("Your military unit orders:")').attr("class","DailyOrder");

// Total units produced
$('#productivityTable tbody').after('<tr class="Totals"><td>Total units produced:</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
var sum=0;
var tmp = $('#productivityTable tbody tr');
for(var j=2;j<13;j++)//cols
{
	for(var i=1;i<tmp.length;i++)//rols
	{
		sum += Number($('#productivityTable tbody tr:eq('+i+') td:eq('+j+') div:eq(1)').text().slice(1,-1));
	}
	$('#productivityTable .Totals td:eq('+j+')').text(sum.toFixed(2));
	sum=0;
}
