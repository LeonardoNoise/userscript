// ==UserScript==
// @name           General Election Filter
// @namespace      com.gravenimage.greasemonkey
// @description    Makes the election slightly less dull
// @include        *
// ==/UserScript==


/*

  Author: MCE / gravenimage
  
  Significantly rewritten other replacement scripts to noticably improve performance and add pseudo-threading to gradually replace words on larger pages.
  
  Version: 1.0
    1.0 - First Release

  Competing scripts and extensions:
   * http://www.arantius.com/article/arantius/clean+language/
   
   Improvements Needed:
   * Filter HTML attributes (ALT, TITLE, TOOLTIP, etc)
   * Add an interface to manage the words by turning this into an extension.

*/

// Licensed for unlimited modification and redistribution as long as
// this notice is kept intact.

(function() {

	//some performance settings 
	var MillisecondsPauseBetweenBatches=3;
	var NodesPerBatch = 20;
	var PartiesReplacementText = "***";
	
	//edit the words here
	//sorted alpha backwords to catch bad word groupings
	//var badwords=['wtf','wop','whore','whoar','wetback','wank','vagina','twaty','twat','titty','titties','tits','testicles','teets','spunk','spic','snatch','smut','sluts','slut','sleaze','slag','shiz','shitty','shittings','shitting','shitters','shitter','shitted','shits','shitings','shiting','shitfull','shited','shit','shemale','sheister','sh!t','scrotum','screw','schlong','retard','qweef','queer','queef','pussys','pussy','pussies','pusse','punk','prostitute','pricks','prick','pr0n','pornos','pornography','porno','porn','pissoff','pissing','pissin','pisses','pissers','pisser','pissed','piss','pimp','phuq','phuks','phukking','phukked','phuking','phuked','phuk','phuck','phonesex','penis','pecker','orgasms','orgasm','orgasims','orgasim','niggers','nigger','nigga','nerd','muff','mound','motherfucks','motherfuckings','motherfucking','motherfuckin','motherfuckers','motherfucker','motherfucked','motherfuck','mothafucks','mothafuckings','mothafucking','mothafuckin','mothafuckers','mothafucker','mothafucked','mothafuckaz','mothafuckas','mothafucka','mothafuck','mick','merde','masturbate','lusting','lust','loser','lesbo','lesbian','kunilingus','kums','kumming','kummer','kum','kuksuger','kuk','kraut','kondums','kondum','kock','knob','kike','kawk','jizz','jizm','jiz','jism','jesus h christ', 'jesus fucking christ','jerk-off','jerk','jap','jackoff','jacking off','jackass','jack-off','jack off','hussy','hotsex','horny','horniest','hore','hooker','honkey','homo','hoer','hell','hardcoresex','hard on','h4x0r','h0r','guinne','gook','gonads','goddamn','gazongers','gaysex','gay','gangbangs','gangbanged','gangbang','fux0r','furburger','fuks','fuk','fucks','fuckme','fuckings','fucking','fuckin','fuckers','fucker','fucked','fuck','fu','foreskin','fistfucks','fistfuckings','fistfucking','fistfuckers','fistfucker','fistfucked','fistfuck','fingerfucks','fingerfucking','fingerfuckers','fingerfucker','fingerfucked','fingerfuck','fellatio','felatio','feg','feces','fcuk','fatso','fatass','farty','farts','fartings','farting','farted','fart','fags','fagots','fagot','faggs','faggot','faggit','fagging','fagget','fag','ejaculation','ejaculatings','ejaculating','ejaculates','ejaculated','ejaculate','dyke','dumbass','douche bag','dong','dipshit','dinks','dink','dildos','dildo','dike','dick','damn','damn','cyberfucking','cyberfuckers','cyberfucker','cyberfucked','cyberfuck','cyberfuc','cunts','cuntlicking','cuntlicker','cuntlick','cunt','cunnilingus','cunillingus','cunilingus','cumshot','cums','cumming','cummer','cum','crap','cooter','cocksucks','cocksucking','cocksucker','cocksucked','cocksuck','cocks','cock','cobia','clits','clit','clam','circle jerk','chink','cawk','buttpicker','butthole','butthead','buttfucker','buttfuck','buttface','butt hair','butt fucker','butt breath','butt','butch','bung hole','bum','bullshit','bull shit','bucket cunt','browntown','browneye','brown eye','boner','bonehead','blowjobs','blowjob','blow job','bitching','bitchin','bitches','bitchers','bitcher','bitch','bestiality','bestial','belly whacker','beaver','beastility','beastiality','beastial','bastard','balls','asswipe','asskisser','assholes','asshole','asses','ass lick','ass'];
	//var badwords=['this', 'when'];
	var parties=[ 'labour'
		, 'conservative'
		, 'conservatives'
		, 'tory'
		, 'tories'
		, 'libdem'
		, 'libdems'
		, 'liberal democrats'];
	var people = ['david cameron'
		, 'mr cameron'
		, 'mr brown'
		, 'george osborne'
		, 'gordon brown'
		, 'alistair darling'
		, 'mr brown'
		, 'nick clegg'];

	var replacementParties=['wankers'
		, 'knobs'
		, 'pricks'
		, 'arseholes'
		, 'craplickers'
		, 'feltchmungers'
		, 'dirty monkeys'
		, 'pipe polishers'
		, 'cunts'
		, 'boring people'
		];
	var replacementPeople=[ 'dickhead'
		, 'knob'
		, 'cock'
		, 'jizztrap'
		, 'eediot'
		, 'spacker'
		, 'monkeyshine'
		, 'kitty-killer'
		, 'arsehole',
		, 'turd'
		, 'Mr Ben'
		, 'Bagpuss'
		, 'prick'
		, 'yawn-inducing turdburglar'
		];
		


	var i = 0;
	var st = new Date().valueOf();  //for performance testing	
	var els = document.evaluate('//text()', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
	var bw="\\b("+parties.join("|")+")\\b";
	bw=new RegExp(bw, "gi");
	
	var ppl="\\b("+people.join("|")+")\\b";
	ppl=new RegExp(ppl, "gi");

	//do the title first
	document.title=document.title.replace(bw, replacementParties[Math.floor(Math.random() * replacementParties.length)]);
	document.title=document.title.replace(ppl, replacementPeople[Math.floor(Math.random() * replacementPeople.length)]);

	function CleanSome() 
	{		
		var el;
		var newval="";
		var data = "";
		var loopCount = 0;
		while ((el=els.snapshotItem(i++)) && (loopCount <= NodesPerBatch)) 
		{
			data = el.data;
			//newval = data.replace(bw, PartiesReplacementText);
			newval = data.replace(bw, replacementParties[Math.floor(Math.random() * replacementParties.length)]);
			newval = newval.replace(ppl, replacementPeople[Math.floor(Math.random() * replacementPeople.length)]);
			if (newval.length != data.length ||  newval != data)
			{
				//check the length first since its quicker than a a string comparison.
				//only change the value if we need to. its quicker.
				el.data = newval;
			}
			loopCount++;
		}
		
		if (el != null)
		{
			//more work left to do
			i--;
			GoNow(MillisecondsPauseBetweenBatches);
		}
		else
		{
			//we're done
			DoneNow();
		}
	}
	
	function DoneNow()
	{
		var et = new Date().valueOf();
		//alert("Milliseconds to complete: " + (et - st).toString()); //timer code
	}

	function GoNow(WaitUntil)
	{
		window.setTimeout(CleanSome, WaitUntil); 
	}
	
	//spin the initial "thread"
	GoNow(0);

})
();