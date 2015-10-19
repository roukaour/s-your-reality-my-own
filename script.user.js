// ==UserScript==
// @name        s/your reality/my own/
// @namespace   https://github.com/roukaour/
// @description I reject your reality and substitute my own!
// @include     *
// @version     1.1
// @grant       none
// @run-at      document-end
// ==/UserScript==

function handleText(textNode) {
	var v = textNode.nodeValue;

	/**********************************************************************
	* Cloud to Butt
	* <https://addons.mozilla.org/en-US/firefox/addon/cloud-to-butt-plus/>
	**********************************************************************/

	// Deal with the easy case
	v = v.replace(/\b(T|t)he (C|c)loud/g, function(match, p1, p2, offset, string) {
		// t - 7 = m
		// c - 1 = b
		m = String.fromCharCode(p1.charCodeAt(0) - 7);
		b = String.fromCharCode(p2.charCodeAt(0) - 1);
		return m + 'y ' + b + 'utt';
	});

	// Deal with private clouds
	v = v.replace(/\b(P|p)rivate (C|c)loud/g, function(match, p1, p2, offset, string) {
		// c - 1 = b
		b = String.fromCharCode(p2.charCodeAt(0) - 1);
		return b + 'utt';
	});

	// Get the corner cases
	if (v.match(/cloud/i)) {
		// If we're not talking about weather
		if (v.match(/PaaS|SaaS|IaaS|computing|data|storage|cluster|distributed|server|hosting|provider|grid|enterprise|provision|apps|hardware|software|/i)) {
			v = v.replace(/(C|c)loud/gi, function(match, p1, offset, string) {
				// c - 1 = b
				b = String.fromCharCode(p1.charCodeAt(0) - 1);
				return b + 'utt';
			});
		}
	}

	/**********************************************************************
	* Millennials to Snake People
	* <https://addons.mozilla.org/en-US/firefox/addon/millennials-to-snake-people/>
	**********************************************************************/

	// Fix some misspellings
	v = v.replace(/\b(M|m)illienial(s)?\b/g, "$1illennial$2");
	v = v.replace(/\b(M|m)illenial(s)?\b/g, "$1illennial$2");
	v = v.replace(/\b(M|m)ilennial(s)?\b/g, "$1illennial$2");
	v = v.replace(/\b(M|m)ilenial(s)?\b/g, "$1illennial$2");

	// Millennial Generation
	v = v.replace(
		/\b(?:Millennial Generation)|(?:Generation Millennial)\b/g,
		"Plissken Faction"
	);
	v = v.replace(
		/\b(?:millennial generation)|(?:generation millennial)\b/g,
		"Plissken faction"
	);

	// Millennialism
	v = v.replace(/\bMillennialism\b/g, "Reptilianism");
	v = v.replace(/\bmillennialism\b/g, "reptilianism");

	//  Gendered Millennials
	v = v.replace(/\bMillennial (M|m)(e|a)n('s)?\b/g, "Snake $1$2n$3");
	v = v.replace(/\bmillennial m(e|a)n('s)?\b/g, "snake m$1n$2");
	v = v.replace(/\bMillennial (B|b)oy('s|s(?:')?)?\b/g, "Snake $1oy$2");
	v = v.replace(/\bmillennial boy('s|s(?:')?)?\b/g, "snake boy$1");
	v = v.replace(/\bMillennial (G|g)uy('s|s(?:')?)?\b/g, "Snake $1uy$2");
	v = v.replace(/\bmillennial guy('s|s(?:')?)?\b/g, "snake guy$1");
	v = v.replace(/\bMillennial (W|w)om(e|a)n('s)?\b/g, "Snake $1om$2n$3");
	v = v.replace(/\bmillennial wom(e|a)n('s)?\b/g, "snake wom$1n$2");
	v = v.replace(/\bMillennial (G|g)irl('s|s(?:')?)?\b/g, "Snake $1irl$2");
	v = v.replace(/\bmillennial girl('s|s(?:')?)?\b/g, "snake girl$1");
	v = v.replace(/\bMillennial (G|g)al('s|s(?:')?)?\b/g, "Snake $1al$2");
	v = v.replace(/\bmillennial gal('s|s(?:')?)?\b/g, "snake gal$1");

	//  Aged Millennials
	v = v.replace(/\bMillennial Child('s)?\b/g, "Snakelet$1");
	v = v.replace(/\b[Mm]illennial child('s)?\b/g, "snakelet$1");
	v = v.replace(/\bMillennial Children(?:(')s)?\b/g, "Snakelets$1");
	v = v.replace(/\b[Mm]illennial children(?:(')s)?\b/g, "snakelets$1");
	v = v.replace(
		/\bMillennial [Tt]een(?:ager)?('s)?\b/g,
		"proto-Snake Person$1"
	);
	v = v.replace(/\bmillennial teen(?:ager)?('s)?\b/g, "proto-snake person$1");
	v = v.replace(
		/\bMillennial [Tt]een(?:ager)?(?:(s)\b(')|s\b)/g,
		"proto-Snake People$2$1"
	);
	v = v.replace(
		/\bmillennial teen(?:ager)?(?:(s)\b(')|s\b)/g,
		"proto-snake people$2$1"
	);
	v = v.replace(/\bMillennial (A|a)dult('s)?\b/g, "$1dult Snake Person$2");
	v = v.replace(/\bmillennial adult('s)?\b/g, "adult snake person$1");
	v = v.replace(
		/\bMillennial (A|a)dult(?:(s)\b(')|s\b)/g,
		"$1dult Snake People$3$2"
	);
	v = v.replace(
		/\bmillennial adult(?:(s)\b(')|s\b)/g,
		"adult snake people$2$1"
	);

	// Millennial
	v = v.replace(/\bMillennial\b/g, "Snake Person");
	v = v.replace(/\bmillennial\b/g, "snake person");
	v = v.replace(/\bMillennial(?:(s)\b(')|s\b)/g, "Snake People$2$1");
	v = v.replace(/\bmillennial(?:(s)\b(')|s\b)/g, "snake people$2$1");

	// The Great Recession
	v = v.replace(/\bGreat Recession\b/g, "Time of Shedding and Cold Rocks");
	v = v.replace(/\bgreat recession\b/g, "time of shedding and cold rocks");

	// The Great Depression
	v = v.replace(/\bGreat Depression\b/g, "Clutch Plague");
	v = v.replace(/\bgreat depression\b/g, "clutch plague");

	// Occupy Wall Street
	v = v.replace(
		/\b(?:(?:Occupy|OWS) (?:M|m)ovement)|(?:Occupy Wall Street)\b/g,
		"Great Ape-Snake War"
	);
	v = v.replace(
		/\b(?:(?:occupy|OWS|ows) movement)|(?:occupy wall street)\b/g,
		"great ape-snake war"
	);
	v = v.replace(/\bOWS\b/g, "GA-SW");
	v = v.replace(/\bows\b/g, "ga-sw");

	// Helicopter Parents
	v = v.replace(/\bHelicopter Parent(?:(s)\b(')|s\b)/g, "Thulsa Doom$2$1");
	v = v.replace(/\b[Hh]elicopter parent(?:(s)\b(')|s\b)/g, "Thoth-Amon$2$1");

	// Trophy Kids
	v = v.replace(/\bTrophy Kid(?:(s)\b(')|s\b)/g, "Quetzalcoatl's Chosen$2$1");
	v = v.replace(/\btrophy kid(?:(s)\b(')|s\b)/g, "Quetzalcoatl's chosen$2$1");

	// Digital Natives
	v = v.replace(/\bDigital Native(s)?\b/g, "Parseltongue$1");
	v = v.replace(/\bdigital native(s)?\b/g, "parseltongue$1");

	// Generation Y
	v = v.replace(/\b(?:Generation Y)|(?:Generation Why)\b/g, "Serpent Society");
	v = v.replace(/\bgen(?:eration)? ?(?:wh)?y\b/g, "serpent society");
	v = v.replace(/\bGen Y\b/g, "Society of the Serpent");

	// Generation We
	v = v.replace(/\bGeneration We\b/g, "Caduceus Cult");
	v = v.replace(/\bgeneration we\b/g, "caduceus cult");
	v = v.replace(/\bWe Generation\b/g, "Cult of the Caduceus");
	v = v.replace(/\bwe generation\b/g, "cult of the caduceus");

	// Generation Me
	v = v.replace(/\bGeneration Me\b/g, "The Cult of the Serpent");
	v = v.replace(/\bgeneration me\b/g, "the cult of the serpent");

	// Global Generation
	v = v.replace(/\bGlobal Generation\b/g, "Tannin's Horde");
	v = v.replace(/\bglobal generation\b/g, "Tannin's horde");
	v = v.replace(/\bGeneration Global\b/g, "Horde of Tannin");
	v = v.replace(/\bgeneration global\b/g, "horde of Tannin");

	// Generation Next
	v = v.replace(/\bGeneration Next\b/g, "Time of Nidhogg");
	v = v.replace(/\bgeneration next\b/g, "time of Nidhogg");

	// Net Generation
	v = v.replace(/\bNet Generation\b/g, "Damballa's Coils");
	v = v.replace(/\bnet generation\b/g, "Damballa's coils");
	v = v.replace(/\bGeneration Net\b/g, "Coils of Damballa");
	v = v.replace(/\bgeneration net\b/g, "Coils of Damballa");

	// Echo Boomers
	v = v.replace(/\bEcho Boomers\b/g, "Crotalids");
	v = v.replace(/\becho Boomers\b/g, "crotalids");

	// New Boomers
	v = v.replace(/\bNew Boomer(?:(s)\b(')|s\b)/g, "Jörmungandr's Circle$2$1");
	v = v.replace(/\bnew Boomer(?:(s)\b(')|s\b)/g, "Jörmungandr's circle$2$1");

	// Generation Flux
	v = v.replace(/\b(?:Generation Flux)|(?:Flux Generation)\b/g, "Hiss Club");
	v = v.replace(/\b(?:generation flux)|(?:flux generation)\b/g, "hiss club");

	// Generation Sell
	v = v.replace(/\bGeneration Sell\b/g, "Kaa Tribe");
	v = v.replace(/\bgeneration sell\b/g, "Kaa tribe");
	v = v.replace(/\bSell Generation\b/g, "Tribe of Kaa");
	v = v.replace(/\bsell generation\b/g, "tribe of Kaa");

	// Boomerang Generation
	v = v.replace(
		/\b(?:Boomerang Generation)|(?:Generation Boomerang)\b/g,
		"Ouroboros Society"
	);
	v = v.replace(
		/\b(?:boomerang generation)|(?:generation boomerang)\b/g,
		"ouroboros society"
	);

	// Peter Pan Generation
	v = v.replace(/\bPeter Pan Generation\b/g, "Neheb-Kau Cult");
	v = v.replace(/\b(?:P|p)eter (?:P|p)an generation\b/g, "Neheb-Kau cult");
	v = v.replace(/\bGeneration Peter Pan\b/g, "Cult of Neheb-Kau");
	v = v.replace(/\bgeneration (?:P|p)eter (?:P|p)an\b/g, "cult of Neheb-Kau");

	// Generation 911
	v = v.replace(/\bGen(?:eration)? 9\/?11\b/g, "Kaa Tribe");
	v = v.replace(/\bgen(?:eration)? 9\/?11\b/g, "Kaa tribe");
	v = v.replace(/\b9\/?11 Generation\b/g, "Tribe of the Kaa");
	v = v.replace(/\b9\/?11 generation\b/g, "tribe of the Kaa");

	// The Generation of €700
	v = v.replace(
		/\b(?:The Generation of €700)|(?:€700 Generation)\b/g,
		"Ophion"
	);
	v = v.replace(
		/\b(?:the generation of €700)|(?:€700 generation)\b/g,
		"ophion"
	);

	// Mileurista
	v = v.replace(/\b(?:M|m)ill?eurista\b/g, "Nagual");

	// Precarious Generation
	v = v.replace(
		/\b(?:Precarious Generation)|(?:Generation Precarious)\b/g,
		"Gargouille"
	);
	v = v.replace(
		/\b(?:precarious generation)|(?:generation precarious)\b/g,
		"gargouille"
	);

	/**********************************************************************
	* xkcd #1288: Substitutions
	* <https://addons.mozilla.org/en-US/firefox/addon/xkcd-1288-substitutions-clo/>
	**********************************************************************/

	// witnesses -> these dudes I know
	v = v.replace(/\bthe\switnesses\b/g, "these dudes I know");
	v = v.replace(/\bThe\sWitnesses\b/g, "These dudes I know");
	v = v.replace(/\bthe\sWitnesses\b/g, "these dudes I know");
	v = v.replace(/\bThe\switnesses\b/g, "These dudes I know");
	v = v.replace(/\bwitnesses\b/g, "these dudes I know");
	v = v.replace(/\bWitnesses\b/g, "These dudes I know");
	v = v.replace(/\bwitness\b/g, "this dude I know");
	v = v.replace(/\bWitness\b/g, "This dude I know");

	// allegedly -> kinda probably
	v = v.replace(/\ballegedly\b/g, "kinda probably");
	v = v.replace(/\bAllegedly\b/g, "Kinda probably");

	// new study -> Tumblr post
	v = v.replace(/\bnew\sstudies\b/g, "Tumblr posts");
	v = v.replace(/\bNew\sstudies\b/g, "Tumblr posts");
	v = v.replace(/\bnew\sStudies\b/g, "Tumblr Posts");
	v = v.replace(/\bNew\sStudies\b/g, "Tumblr Posts");
	v = v.replace(/\bnew\sstudy\b/g, "Tumblr post");
	v = v.replace(/\bNew\sstudy\b/g, "Tumblr post");
	v = v.replace(/\bnew\sStudy\b/g, "Tumblr Post");
	v = v.replace(/\bNew\sStudy\b/g, "Tumblr Post");

	// rebuild -> avenge
	v = v.replace(/\brebuild\b/g, "avenge");
	v = v.replace(/\bRebuild\b/g, "Avenge");

	// space -> spaaace
	v = v.replace(/\bspace\b/g, "spaaace");
	v = v.replace(/\bSpace\b/g, "Spaaace");

	// Google Glass-> Virtual Boy
	v = v.replace(/\b[Gg]oogle\s[Gg]lasses\b/g, "Virtual Boys");
	v = v.replace(/\b[Gg]oogle\s[Gg]lass\b/g, "Virtual Boy");

	// smartphone -> Pokédex
	v = v.replace(/\bsmartphones\b/g, "pokédexes");
	v = v.replace(/\bSmartphones\b/g, "Pokédexes");
	v = v.replace(/\bsmartphone\b/g, "pokédex");
	v = v.replace(/\bSmartphone\b/g, "Pokédex");

	// electric -> atomic
	v = v.replace(/\belectric\b/g, "atomic");
	v = v.replace(/\bElectric\b/g, "Atomic");

	// senator -> elf-lord
	v = v.replace(/\bsenator(s)?\b/g, "elf-lord$1");
	v = v.replace(/\bSenator(s)?\b/g, "Elf-lord$1");

	// car -> cat
	v = v.replace(/\bcar(s)?\b/g, "cat$1");
	v = v.replace(/\bCar(s)?\b/g, "Cat$1");

	// slection -> eating contest
	v = v.replace(/\belection(s)?\b/g, "eating contest$1");
	v = v.replace(/\bElection(s)?\b/g, "Eating Contest$1");

	// Congressional leaders -> river spirits
	v = v.replace(/\bcongressional\sleader(s)?\b/g, "river spirit$1");
	v = v.replace(/\bCongressional\sleader(s)?\b/g, "River spirit$1");
	v = v.replace(/\bcongressional\sLeader(s)?\b/g, "river spirit$1");
	v = v.replace(/\bCongressional\sLeader(s)?\b/g, "River Spirit$1");

	// Homeland Security -> Homestar Runner
	v = v.replace(/\b[Hh]omeland\s[Ss]ecurity\b/g, "Homestar Runner");

	// could not be reached for comment -> is guilty and everyone knows it
	v = v.replace(/\bcould\snot\sbe\sreached\sfor\scomment\b/gi, "is guilty and everyone knows it");

	/**********************************************************************
	* xkcd #1031: s/keyboard/leopard/
	**********************************************************************/

	v = v.replace(/\bkeyboard(s)?\b/g, "leopard$1");
	v = v.replace(/\bKeyboard(s)?\b/g, "Leopard$1");

	textNode.nodeValue = v;
}

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	switch (node.nodeType) {
	case 1:  // Element
	case 9:  // Document
	case 11: // Document fragment
		var child = node.firstChild;
		while (child) {
			var next = child.nextSibling;
			walk(child);
			child = next;
		}
		break;
	case 3: // Text node
		if (node.parentElement.tagName.toLowerCase() != 'script') {
			handleText(node);
		}
		break;
	}
}

window.addEventListener('load', function(event) {
	walk(event.originalTarget.body);
});
