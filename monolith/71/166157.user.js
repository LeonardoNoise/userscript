// ==UserScript==
// @name           Rotten's ZombiesLive auto invite alliance
// @namespace      rotten4pple
// @description    Invites a whole bunch of people
// @include        http://zl.storm8.com/group.php*
// ==/UserScript==
var numClick = GM_getValue('autoclicknum', 0);
var codes = ['7WUGMT' ,
'Y9KNA7' ,
'VFC6FW' ,
'7QPBN3' ,
'XE47VW' ,
'WV2YEJ' ,
'693GEX' ,
'W87SNU' ,
'RT6656' ,
'M9A7XX' ,
'SSFNR4' ,
'URM5AU' ,
'8DGNX8' ,
'T2CTF2' ,
'PJ89MJ' ,
'HJ9G65' ,
'HKG838' ,
'HFYSVU' ,
'E9M79H' ,
'VCRDEY' ,
'4EAJ6H' ,
'EBGDJA' ,
'8XUV5P' ,
'DPEPP7' ,
'5MVK8Q' ,
'E9HJKF' ,
'35CQHN' ,
'WU8Q4Y' ,
'UWNDUB' ,
'SCMV69' ,
'9GXBWX' ,
'VWT96K' ,
'H22337' ,
'C2SE6B' ,
'C49GYS' ,
'GW79ND' ,
'GU3RWT' ,
'WYKNTC' ,
'TEUXMY' ,
'QWP4V6' ,
'4VTV6E' ,
'7VTJSG' ,
'WSPMXQ' ,
'PPCM2D' ,
'WA9MNN' ,
'GF939H' ,
'NUW78J' ,
'JSNQ6A' ,
'CWBWMT' ,
'K37URJ' ,
'79JTE2' ,
'E4MUR8' ,
'MEHA99' ,
'7NMFE9' ,
'6V5M6U' ,
'4XV69S' ,
'RCFQRC' ,
'RE4A88' ,
'MY8VHM' ,
'QMTVW5' ,
'5876WN' ,
'A4D3JU' ,
'MFBKKY' ,
'H5ANHB' ,
'QSKHJM' ,
'N6C4TS' ,
'DPEQD8' ,
'TT7UNT' ,
'R2RG6H' ,
'F4CKSG' ,
'26MH7S' ,
'83C9KG' ,
'QMAMPP' ,
'U349WT' ,
'FR9TQ9' ,
'29AKHR' ,
'59H4MQ' ,
'5PHTEE' ,
'N5AGKA' ,
'4VTADN' ,
'9V395B' ,
'YNG656' ,
'KDQS3C' ,
'3XVT24' ,
'5HAXF6' ,
'AP6FK5' ,
'6GMVJG' ,
'Y6VUM9' ,
'X9PCJP' ,
'6SHUTY' ,
'VC4Q4M' ,
'RWEFGK' ,
'ABMGN6' ,
'BYFFW7' ,
'C5M25Y' ,
'FEPPAK' ,
'45X2R7' ,
'28RY63' ,
'S9UWMC' ,
'VPS3YQ' ,
'9JEC6T' ,
'MGNWXQ' ,
'6MXVNN' ,
'HQGTT4' ,
'PRF8Q4' ,
'43GRE8' ,
'CM32KK' ,
'F7MVPE' ,
'USJTTM' ,
'Y775R8' ,
'2SGBVW' ,
'KUNAC6' ,
'SCU2XG' ,
'5MVK8W' ,
'47696S' ,
'AVAXAH' ,
'ETEV47' ,
'2JU2DG' ,
'EERXHY' ,
'2GFNE8' ,
'84DUQ6' ,
'DHFRVA' ,
'WT4DQV' ,
'4K6YXU' ,
'849PKK' ,
'8DDQVY' ,
'3FEAD7' ,
'VK2FAE' ,
'7UVEHK' ,
'CSM6FR' ,
'U69GRE' ,
'3E9F38' ,
'S52VVG' ,
'33C3H8' ,
'VE7TBX' ,
'6YASRN' ,
'E5H5K3' ,
'2QNKVA' ,
'6UJKBR' ,
'CWMAP8' ,
'GWECRJ' ,
'VM6CHB' ,
'KBWNC5' ,
'NC3C2X' ,
'KG5WFY' ,
'UTD52W' ,
'7WNGCV' ,
'A25TWE' ,
'UMSHEJ' ,
'NP2Q5U' ,
'UAAJS3' ,
'RRRCNM' ,
'4KF3N2' ,
'P4GQ8B' ,
'62TKU7' ,
'937BAY' ,
'6JXVKX' ,
'855HYJ' ,
'SN9F74' ,
'94B4C3' ,
'6PEWC7' ,
'AABCDA' ,
'ETR86B' ,
'H46RPT' ,
'EFPUE3' ,
'SVVW6S' ,
'KGY5RK' ,
'AEPDCU' ,
'YFDBF5' ,
'PCJMGQ' ,
'42K5KP' ,
'2SD8QT' ,
'5U2DRQ' ,
'MMA6JP' ,
'7467F2' ,
'XDFWE4' ,
'G9R87C7' ,
'5C7NE2' ,
'MNVKH7' ,
'VSTYVN' ,
'WCD3RE' ,
'SKMJJS' ,
'6DFCQA' ,
'8SCRRF' ,
'54H7XK' ,
'HWVS6R' ,
'SJK6NU' ,
'E6EUYY' ,
'RCGNC2' ,
'6WR3JN' ,
'P48SSK' ,
'6W975C' ,
'G329TK' ,
'M2NSGX' ,
'UAK5XK' ,
'S99HGU' ,
'VMHAP8' ,
'VSKEH3' ,
'8WJVYC' ,
'QNND43' ,
'WR36KA' ,
'R6BWGY' ,
'7HJQEG' ,
'XKDU6M' ,
'JDBTNQ' ,
'TRKAPS' ,
'HUTUWQ' ,
'P22F6P' ,
'4XQ6T9' ,
'JWGRMB' ,
'EWEB37' ,
'SVWG6V' ,
'DY8C6U' ,
'EH2VXT' ,
'S2TKN7' ,
'GRJMXJ' ,
'UA44BW' ,
'JBNJDF' ,
'482U85' ,
'4RF95J' ,
'6WFT5Q' ,
'SWMCF7' ,
'PXAN53' ,
'K6ENJS' ,
'K977XR' ,
'4B2AGS' ,
'29YBWU' ,
'YHJ69C' ,
'FK9EDD' ,
'HK5VST' ,
'6BDS2T' ,
'YTBXU3' ,
'82RQXD' ,
'ACN36U' ,
'MU5R6Q' ,
'AJAF8M' ,
'EAP46C' ,
'WMCYSJ' ,
'KQ9RKW' ,
'5SVK7A' ,
' ' ,
'M8MJN4' ,
'VM6G64' ,
'EFSW98' ,
'KYW856' ,
'RY8SS9' ,
'D8GRQR' ,
'9SJS5P' ,
'RVVKM3' ,
'DH5VPS' ,
'T5NNUB' ,
'ASUMTH' ,
'GFSPHB' ,
'UY9EYH' ,
'UB8QTY' ,
'G4HQTQ' ,
'S4Q6DV' ,
'9VV4PD' ,
'2AXEAJ' ,
'YC8HER' ,
'5HW2QT' ,
'472T2G' ,
'KQKW8B' ,
'QPQ6RN' ,
'85TQPE' ,
'V8JWHY' ,
'YUEN7Q' ,
'KSS332' ,
'VUEU94' ,
'VPVRP2' ,
'Q5V4HJ' ,
'S4JJ42' ,
'T222D3' ,
'NTTMVH' ,
'SKSMD6' ,
'9VX2MA' ,
'HHEEAD' ,
'X285EU' ,
'CX3KAC' ,
'JMA7NF' ,
'FPWXYP' ,
'W28J5M' ,
'5BF5A7' ,
'HTC8AJ' ,
'FUTBT7' ,
'U3UPE2' ,
'59TE47' ,
'9TE47' ,
'U8EGVD' ,
'E2BBEM' ,
'RHNKEF' ,
'8HTW7B' ,
'SCNN3A' ,
'QV7MDP' ,
'PPD3GB' ,
'8JPNQG' ,
'CYNDEM' ,
'894HDE' ,
'JYJH2U' ,
'G6YBSC' ,
'7SW6G6' ,
'GFXUU9' ,
'JBRYAD' ,
'9U4T2S' ,
'HFND4N' ,
'HHJSJ9' ,
'FMJX6H' ,
'AUPQ5D' ,
'5ECXYA' ,
'3YF9J2' ,
'SVP6TB' ,
'6HKPFG' ,
'DUPDU2' ,
'GS9R6W' ,
'J2JC7Y' ,
'M9KXSF' ,
'7CUDVN' ,
'M9QR9W' ,
'P9P7QM' ,
'EJXRBE' ,
'SF9R6E' ,
'WVSEP4' ,
'45SNEV' ,
'V86Q97' ,
'FQX3PJ' ,
'NKWP7T' ,
'4CR4QH' ,
'TC6AND' ,
'QU8RQW' ,
'W8VXU6' ,
'46X2KW' ,
'5UUK6S' ,
'PJ8PBN' ,
'KKP947' ,
'46S7E4' ,
'QPFYMM' ,
'92PXPG' ,
'GYUPGY' ,
'7YHVJT' ,
'6959FB' ,
'XCJ8YV' ,
'TFNEGM' ,
'VF544T' ,
'D6Q7BY' ,
'4TCUP2' ,
'SVMXHT' ,
'K39QA3' ,
'GSRXEV' ,
'JXSBV5' ,
'RDSKKE' ,
'SEB7KK' ,
'FWNE5D' ,
'FG893F' ,
'WDBKTN' ,
'FYTWS8' ,
'36YEGG' ,
'MWJ58D' ,
'DQKU7R' ,
'83PVVT' ,
'3DFP8M' ,
'NW4S4P' ,
'SGJE3G' ,
'557GD9' ,
'RNQCTF' ,
'M5RYKV' ,
'PS5TVF' ,
'BBB2UQ' ,
'FMHKHQ' ,
'B4R9UY' ,
'WMPCUR' ,
'VC74PN' ,
'YVUFHF' ,
'DKWUMM' ,
'EPT9T2' ,
'3BNFGE' ,
'CERQ4S' ,
'BCX75B' ,
'A52CAE' ,
'R462NJ' ,
'76RP89' ,
'Y6MUHS' ,
'PCG4GV' ,
'UYW9MN' ,
'RVYG8X' ,
'987BRE' ,
'F93KPF' ,
'Q94256' ,
'YB9PPB' ,
'W5BSCA' ,
'XUQ3P5' ,
'EGJS5U' ,
'JAUF5N' ,
'KPDD6X' ,
'UKUDHQ' ,
'DX6MRY' ,
'2F7M53' ,
'D2AHQF' ,
'9633T8' ,
'7JPDCM' ,
'8G8ANQ' ,
'A6FD7P' ,
'A52CEA' ,
'AAKSEC' ,
'V9HXB5' ,
'QXBKE3' ,
'TAPXTB' ,
'T73B9S' ,
'9HGCEJ' ,
'WCNASC' ,
'TJGJF2' ,
'RT7DKM' ,
'EQE67Q' ,
'XCSMQ8' ,
'NAQDB8' ,
'AVCHV4' ,
'97N99C' ,
'VW39W9' ,
'M2NX76' ,
'2PMV9Q' ,
'57X6S7' ,
'59TN6J' ,
'FFU3K8' ,
'Q9EV7A' ,
'2QKDUX' ,
'RSC2T6' ,
'6HT7JU' ,
'BYRN78' ,
'MKBM8F' ,
'BV4ANB' ,
'TYMSTG' ,
'FKCFVA' ,
'9U6EHT' ,
'9SDNVQ' ,
'NBCG8J' ,
'YMF6RX' ,
'XEDMU6' ,
'22BEBQ' ,
'Y8WYDP' ,
'RJ8E9D' ,
'NX85HM' ,
'AREY7G' ,
'CJ4AUK' ,
'44UVT4' ,
'7B2XV6' ,
'VDM98F' ,
'5ASE5T' ,
'C9F6CW' ,
'TSSH45' ,
'MQ8P94' ,
'E65P2Q' ,
'A7WQTQ' ,
'EH7MWW' ,
'FY9ERU' ,
'KBW8FN' ,
'X36RYK' ,
'WRK8ED' ,
'8PBKAE' ,
'VW39V9' ,
'NQGF67' ,
'YG9HNJ' ,
'UN9NGS' ,
'XR2ESM' ,
'8D9PNT' ,
'8KF3T3' ,
'UT6PSW' ,
'SWGNYV' ,
'HCCSRW' ,
'6PBNF3' ,
'CWRSU3' ,
'5KPAM4' ,
'YT23C6' ,
'N4MDAU' ,
'KVUSS3' ,
'K3SSWD' ,
'8S5FSH' ,
'R65THM' ,
'3GJN99' ,
'2SQK97' ,
'R4NW5A' ,
'KC97UJ' ,
'3KY7V3' ,
'QDEMSE' ,
'GBESXA' ,
'CPM9J5' ,
'R3V4H8' ,
'FFVGWY' ,
'MDQDUM' ,
'FUK9AT' ,
'MP46B4' ,
'6R72KS' ,
'KPH9WS' ,
'VQFM95' ,
'276YVM' ,
'6FS8P2' ,
'PV8CNU' ,
'YXYXTM' ,
'XY3VD7' ,
'KDUPAT' ,
'AG7T23' ,
'AHCM4R' ,
'EKTGB7' ,
'AEK4P2' ,
'B9QEF5' ,
'C57CP5' ,
'YW6HBW' ,
'CF3JMY' ,
'NTCR9U' ,
'PTEEC5' ,
'6PAWCD' ,
'8B66DC' ,
'7S93GU' ,
'UW5J6G' ,
'SH4K5V' ,
'Y2QWQR' ,
'YX5DD5' ,
'8VK9M2' ,
'QAQ5XK' ,
'4X547R' ,
'PCKMGQ' ,
'KJRS97' ,
'987UMA' ,
'62UGQH' ,
'98MMQ7' ,
'4T8BKJ' ,
'SKHYPK' ,
'5SWDUB' ,
'P8P36A' ,
'C7TCP2' ,
'7JJNY4' ,
'P2Y489' ,
'ESECSY' ,
'9H7MCE' ,
'YBEJYM' ,
'XHDS4N' ,
'YMK4KM' ,
'8X7HRS' ,
'7WT98X' ,
'BYCRMY' ,
'NHN3MR' ,
'UWNDUR' ,
'TXXAMW' ,
'2ST83A' ,
'UH3YW6' ,
'KA2C72' ,
'TR5BMM' ,
'C7QRMM' ,
'NGWWRA' ,
'AGS95D' ,
'FD6CEV' ,
'HYAJCR' ,
'2MHX9V' ,
'Q7GHB8' ,
'ASP9SG' ,
'B6SQAD' ,
'F6NBE6' ,
'P6AY6W' ,
'JN778B' ,
'JGVW38' ,
'N4CRYR' ,
'QA9GSH' ,
'64YXJM' ,
'XVASGF' ,
'GP3WUX' ,
'D3PUKG' ,
'UHDRMF' ,
'S2S93G' ,
'5QQJCY' ,
'FJH2C4' ,
'MW2VN3' ,
'EWKSBD' ,
'FK2JBY' ,
'YX95TA' ,
'GMMATH' ,
'PQYSKE' ,
'VMA9DK' ,
'XKUVJS' ,
'DG9AVA' ,
'MSKDAT' ,
'KD45WC' ,
'WJFFAA' ,
'X6DFDX' ,
'DK6YE4' ,
'GDPM97' ,
'SWC29B' ,
'EAAM8D' ,
'DDY7WD' ,
'Y4DW4J' ,
'N63V6F' ,
'VNB4J4' ,
'DCW3JS' ,
'6H43JX' ,
'G64HDA' ,
'7S5FRW' ,
'BQJ8QW' ,
'RCECHE' ,
'6CM4SN' ,
'CT72W8' ,
'5XPNS5' ,
'52NBMA' ,
'2GMDG7' ,
'CU36FN' ,
'6MUXW4' ,
'NKC6CN' ,
'TKAYB9' ,
'MHR2UP' ,
'VQDDVE' ,
'NA9A9H' ,
'8BGNM2' ,
'DW3F8U' ,
'6SHWBM' ,
'HV5T24' ,
'SYQ9ET' ,
'RTCYF8' ,
'3DP3SX' ,
'HKMB8T' ,
'GD9G77' ,
'WPW2DY' ,
'M32T6N' ,
'SW6PVA' ,
'Q5MT88' ,
'7XC6EF' ,
'CTH2SA' ,
'SKGV3F' ,
'7J7QWM' ,
'R6NAVN' ,
'5SGF3G' ,
'4KDBPG' ,
'WP8RY7' ,
'CRUH4Y' ,
'8N9PJ6' ,
'TE2UFA' ,
'A2JFSE' ,
'YS9S2X' ,
'RRVTBK' ,
'SY3V9C' ,
'BNCNTJ' ,
'KEQM2K' ,
'G7CX3' ,
'CHWWQD' ,
'KYHQ9B' ,
'CC53QP' ,
'7VHJ3Q' ,
'8A6C98' ,
'C5CDG2' ,
'9KGXUR' ,
'6TTQP9' ,
'D72YW7' ,
'4HSCJH' ,
'YSF2RE' ,
'3BE9K8' ,
'EESKQE' ,
'UHH5J2' ,
'8NSRYK' ,
'YJC5E4' ,
'B322HU' ,
'8J7H78' ,
'GVP2EJ' ,
'3TR6Y4' ,
'NRMSSV' ,
'9CABGW' ,
'HMTMP9' ,
'Y6SSJY' ,
'N444VE' ,
'2EN4FC' ,
'WKKEXA' ,
'ABJDKF' ,
'TKVE7R' ,
'2PYX2E' ,
'QMS5PV' ,
'DSBQ23' ,
'B2VU2E' ,
'4GJESN' ,
'E3VGTS' ,
'QXD75T' ,
'CEJCKK' ,
'G6TRVX' ,
'72KWTM' ,
'HFXQE8' ,
'356CU6' ,
'878JB2' ,
'EFNVTS' ,
'7UGYC9' ,
'JR7C7A' ,
'CYYKC7' ,
'8FUGMM' ,
'R8UA76' ,
'MAJAGU' ,
'BD9KFV' ,
'E34K93' ,
'EE76N3' ,
'T2S25W' ,
'CT9YDN' ,
'4SF3DT' ,
'3FYBF2' ,
'572BQ7' ,
'QD2JCF' ,
'JBGB6R' ,
'HFFBHE' ,
'J2JC7J' ,
'W9JK5H' ,
'EX74NP' ,
'RKJBD' ,
'424HR5' ,
'EYJC6C' ,
'D9HBYY' ,
'V5BCFW' ,
'UTGHX6' ,
'8TSEH9' ,
'XXPGXN' ,
'7TUNWR' ,
'25FMCR' ,
'XMY3V5' ,
'QXWWN7' ,
'A75E8A' ,
'DUGYBC' ,
'569A74' ,
'HDWRBK' ,
'XWHU5J' ,
'VFSMSS' ,
'FH9TM5' ,
'8GNEMU' ,
'CCESNG' ,
'X838VN' ,
'THDA87' ,
'NCQ747' ,
'GGT6BK' ,
'8PVYGN' ,
'WFE7X4' ,
'XCCNMB' ,
'4SWP7H' ,
'STP2PS' ,
'5K7RB7' ,
'XRPEU8' ,
'EUSF22' ,
'82FHEK' ,
'8M5TYF' ,
'NV7VVD' ,
'XCN9KC' ,
'EA9CSA' ,
'UAAQQ8' ,
'R6UJ3R' ,
'2YX2E' ,
'KYW2E8' ,
'GCA827' ,
'Y7GFQU' ,
'S79YYS' ,
'52SWN6' ,
'5HPW28' ,
'448GRM' ,
'6DT3RT' ,
'8F2324' ,
'YFN8SV' ,
'Q3QH4S' ,
'F6XT7X' ,
'C7GNUJ' ,
'QKXXHG' ,
'XJD88A' ,
'KPBU25' ,
'FJDRNB' ,
'E46GNS' ,
'8SWGCY' ,
'862MU7' ,
'3BVEC8' ,
'ND9N84' ,
'TUFK8P' ,
'KQABPB' ,
'TMGH6M' ,
'F7XRBX' ,
'9T2U56' ,
'MT78DF' ,
'K3572D' ,
'8YCKB6' ,
'A839GG' ,
'VABDUE' ,
'AV88MQ' ,
'7GXP52' ,
'YED7BX' ,
'DJWHKQ' ,
'GKUH9V' ,
'M5MYWC' ,
'GGC2NW' ,
'UMKWBA' ,
'6D3PX4' ,
'973X8A' ,
'NCK5B6' ,
'46AWEC' ,
'KDKX9F' ,
'V2V2B5' ,
'52S5MM' ,
'4X7U5G' ,
'6CMJFH' ,
'7GM8Y9' ,
'BA46NB' ,
'7GBFBB' ,
'XAKV7F' ,
'J8H243' ,
'8PRUXS' ,
'GXURBH' ,
'E3M345' ,
'XTJK3B' ,
'CW8MEW' ,
'46XC3A' ,
'QARQRV' ,
'BXQDQY' ,
'3HUV97' ,
'3JXTKD' ,
'Z1' ,
'GGDSN9' ,
'9E9KXY' ,
'GFJMH9' ,
'DDTUX2' ,
'RKYHTH' ,
'5A93HC' ,
'5EB7KK' ,
'RA9F4U' ,
'N58PMQ' ,
'CDCDG2' ,
'UA4CU6' ,
'CAKMTS' ,
'JRNS88' ,
'9UQNVS' ,
'QGRMY4' ,
'B8AQPQ' ,
'9MPUGT' ,
'79RB2N' ,
'H7GAXB' ,
'6CXBAQ' ,
'3WF9GU' ,
'J9QKGP' ,
'2H6CQ6' ,
'MRAHBJ' ,
'84BRYX' ,
'P3GWEG' ,
'GX97H3' ,
'SYGXMW' ,
'CWTAWY' ,
'3PAJK7' ,
'MVARAU' ,
'MV9SA3' ,
'W4H5J2' ,
'CYP9A8' ,
' ' ,
'895HQY' ,
'QCGC4M' ,
'4UAWX6' ,
'JR5WR9' ,
'55GYS8' ,
'KEU4QX' ,
'GD88T7' ,
'YW85PJ' ,
'3MB9QJ' ,
'3RB9VE' ,
'A887BT' ,
'2GWJG8' ,
'5RCGSM' ,
'WAFYSH' ,
'4SXAF4' ,
'K6BKWM' ,
'CUMMWQ' ,
'UR54AJ' ,
'3J529G' ,
'TTFS96' ,
'CN2H92' ,
'57696S' ,
'JKDXXW' ,
'PU39XB' ,
'XGT3TA' ,
'B5KJ4D' ,
'TE5RUU' ,
'R59TVH' ,
'UF5KAA' ,
'9F7GCY' ,
'USK344' ,
'8AGAXY' ,
'74GDBF' ,
'H89829' ,
'W2XAVQ' ,
'J8Y4GQ' ,
'E26KRX' ,
'CW4Y7E' ,
'BS8TPX' ,
'2V6R4N' ,
'YBBR69' ,
'BXK282' ,
'76XD3Q' ,
'DC83EG' ,
'QRJXQW' ,
'GXAE64' ,
'3XDSP8' ,
'4KEPK5' ,
'HCH3SA' ,
'8NV6UY' ,
'725DRF' ,
'T4TE4P' ,
'A8UQE3' ,
'DE26PP' ,
'6B6FT5' ,
'9746TV' ,
'J36T5M' ,
'XXK2M9' ,
'BVWS52' ,
'9PRK8X' ,
'P8Q7RN' ,
'WRTE56' ,
'5S5MRH' ,
'XJ433D' ,
'9VWRMY' ,
'XUVJSK' ,
'D5D835' ,
'FHXYQE' ,
'4TPM2Q' ,
'VN45JA' ,
'PDDMBP' ,
'DXCJEP' ,
'5E3U5P' ,
'64RDEQ' ,
'4AS3F9' ,
'EBT9PD' ,
'BM6B3N' ,
'9K8CK2' ,
'3PKKFD' ,
'JTH8XP' ,
'6RS24R' ,
'N32DN6' ,
'QVTKVU' ,
'3HAWHS' ,
'9W9PQ7' ,
'JK36P7' ,
'DFQG8J' ,
'NNDNE3' ,
'ERGE3S' ,
'DSG9MQ' ,
'4GC9JJ' ,
'RKAJ9D' ,
'CVYJYP' ,
'U7SN7K' ,
'APYNCT' ,
'2AQ53V' ,
'CMPS7K' ,
'9QP3VW' ,
'35T5MG' ,
'5A4U6G' ,
'N9N3B6' ,
'TQTAHG' ,
'UFXKWH' ,
'4A5D6F' ,
'C62ND9' ,
'2VH2YP' ,
'UJ8F6Y' ,
'TRYGR7' ,
'5SPRFX' ,
'2TB5T4' ,
'YRRT97' ,
'5EPJVD' ,
'2C99AH' ,
'D8DV8U' ,
'EU7Y4S' ,
'N2B933' ,
'FEBYG5' ,
'5T938J' ,
'PA4TFJ' ,
'NYAEQ9' ,
' ' ,
'RMV67N' ,
'2SRDJJ' ,
'GATV3N' ,
'98JG73' ,
'J3UGKQ' ,
'P552DK' ,
'FGSN5N' ,
'EH3KVU' ,
'3EHUM4' ,
'2UCUFR' ,
'VBY2G4' ,
'C7W28P' ,
'9RWTXB' ,
'9RWTXAB' ,
'3AAD7Y' ,
'V9RTGP' ,
'HGV9JW' ,
'A54H9V' ,
'XTHHW6' ,
'WH7KDG' ,
'VT45ED' ,
'9PRH3U' ,
'7JT8WK' ,
'HMXGP4' ,
'SHHWYX' ,
'A4ETYA' ,
'S82C6R' ,
'C85U9U' ,
'XYJMAC' ,
'GC57MJ' ,
'SQXQCW' ,
'4WEAB2' ,
'H9PW2P' ,
'TGDET3' ,
'XU9EQ3' ,
'B5GK5D' ,
'QPSYKA' ,
'ER5GT9' ,
'WHQCCU' ,
'ER4DS3' ,
'V93NHD' ,
'4BGM3E' ,
'Q9CJXS' ,
'W74MPV' ,
'HEVHK5' ,
'QPF7UV' ,
'A47F842' ,
'Q3TU47' ,
'2TGRS9' ,
'DPXUXA' ,
'Y48NU3' ,
'NUTV7C' ,
'6HT63Y' ,
'M8FUE3' ,
'5U96Q2' ,
'T784AR' ,
'NFR97S' ,
'JQSV24' ,
'VPXPQD' ,
'ACQ2J7' ,
'SYJ39U' ,
'8GAYNM' ,
'TJKVWS' ,
'BAY89N' ,
'HRW3N2' ,
'HR9QAH' ,
'XDCSMP' ,
'RWDMRF' ,
'P4FKQV' ,
'QS7V4U' ,
'7XX96Y' ,
'KR5AT2' ,
'Y4GCTG' ,
'65AVHX' ,
'HVV24R' ,
'3MA58D' ,
'DWGSJP' ,
'APXKC7' ,
'PH6YKN' ,
'WUAMM6' ,
'6WP7X4' ,
'CJYF9V' ,
'5B2AAF' ,
'FEJRQM' ,
'2Y6PMN' ,
'F9G9MP' ,
'KHQDSQ' ,
'STYSKW' ,
'M7USQ5' ,
'QTYC5G' ,
'QCRP9Y' ,
'YQDHC9' ,
'J54YRC' ,
'FDBSJ5' ,
'8USB75' ,
'M7FKAE' ,
'NAYRNF' ,
'TJM6TY' ,
'BU4BMD' ,
'AN3R39' ,
'56Q589' ,
'FW8B3J' ,
'76AWH6' ,
'QV7NJG' ,
'QSBX84' ,
'X7VUC8' ,
'D93RTN' ,
'S8V5PJ' ,
'HNPVEH' ,
'RMC67N' ,
'WRDPD4' ,
'EJGCSR' ,
'FJUT8M' ,
'3V3WXG' ,
'8F2PKW' ,
'B386MP' ,
'WG5V9K' ,
'FMKKTD' ,
'KX2N2J' ,
'YQDE2X' ,
'CDHQB3' ,
'JGXKW3' ,
'A5KJ37' ,
'77JDMB' ,
'AYEFBF' ,
'NN37MX' ,
'W56AGN' ,
'X5TU8V' ,
'469MX5' ,
'6835505' ,
'DP3YUH' ,
'2ENS3U' ,
'BNQAFE' ,
'R2A6PQ' ,
'67CPGY' ,
'X5FJBB' ,
'NEEEGF' ,
'6QPU5K' ,
'4MDBPG' ,
'7B3N9N' ,
'CE7YSA' ,
'VVQW7D' ,
'TWNY4B' ,
'WTQTTH' ,
'KDTGTX' ,
'JWQW73' ,
'XP2YU5' ,
'77TS5T' ,
'9NX427' ,
'UFXMDU' ,
'YYG37N' ,
'SCH92M' ,
'9VMP6V' ,
'MMPD9P' ,
'UXX44K' ,
'UEVEKK' ,
'54QFDW' ,
'WUMV2J' ,
'4AHPFQ' ,
'GJM3A3' ,
'B8FDMB' ,
'HQTT4' ,
'MTMXN4' ,
'U8F3H6' ,
'MYBG96' ,
'T7X4M5' ,
'GUY3QR' ,
'2XYSHN' ,
'VNGKKX' ,
'3TT826' ,
'M79SHQ' ,
'D83XSW' ,
'57YTA5' ,
'JESWUY' ,
'GGPTXF' ,
'9QJTW8' ,
'23BT5R' ,
'3GKMAE' ,
'GEU223' ,
'QWNWQD' ,
'NURBRT' ,
'SS9DTE' ,
'CRBYGK' ,
'PRBUYW' ,
'VQEQH3' ,
'9BKSBN' ,
'2VBHSF' ,
'Q8PAPD' ,
'D9AMPG' ,
'2BXY9B' ,
'TYK6WK' ,
'FDX6RR' ,
'UEBY8E' ,
'QXJ4UM' ,
'SRUCWT' ,
'SJMQUA' ,
'UKK6KX' ,
'DNF6HF' ,
'6E4PMK' ,
'F7BJQX' ,
'E6FHB3' ,
'DHBMQ8' ,
'HR7H4B' ,
'RPY2YG' ,
'4XSEEX' ,
'G6P8EP' ,
'H6QWTY' ,
'4P7FRH' ,
'QMNB4Q' ,
'KV7GCH' ,
'RGQ2EK' ,
'WDRF5V' ,
'7NYF26' ,
'QMSNEQ' ,
'DUYDWH' ,
'5FPK2F' ,
'R7XAJR' ,
'8QAA4Y' ,
'GPWQ6R' ,
'9583JP' ,
'FJH2EC' ,
'URH6AJ' ,
'X3HFM4' ,
'WJG36N' ,
'46TKQK' ,
'KD5NWJ' ,
'HCY65M' ,
'W6QMN9' ,
'5MWF34' ,
'BCU7YR' ,
'8K9W5S' ,
'2DP569' ,
'RSP69W' ,
'WT5TY4' ,
'R72PEM' ,
'HFXM4K' ,
'PA5NAU' ,
'GPP6FY' ,
'M7US5' ,
'AFBESH' ]

var index = parseInt(GM_getValue("index", 0));

console.log(index+'/'+codes.length);
if (index < codes.length - 1)
{
	var f = document.forms[0];
	f.getElementsByTagName('input')[0].value = codes[index];
	f.addEventListener('submit',submitHandler,false);
}
else
{
	GM_setValue('index',codes.length-1);
	index = codes.length-1;
	if (numClick > 0)
	{
		numClick = 0;
		GM_setValue('autoclicknum', 0);
		alert("no more codes!\nBug the author with a donation and tell him you need more ;)");
	}
}

function submitHandler()
{
	var nc = parseInt(document.getElementById("acdn").value);
	if (nc > 0)
		GM_setValue('autoclicknum', nc-1);
	if (index < codes.length - 1)
		if (f.getElementsByTagName('input')[0].value == codes[index])
			GM_setValue('index',index+1);
}
function include(arr,obj) {
	return (arr.indexOf(obj) != -1);
}

// auto-click mechanism
var wwash = document.getElementsByClassName('inviteSectionHeader')[0];
wwash.innerHTML += '<br><p style="font-size: 10px; color: #0f0; padding: 5px 0">AutoClick <input id="acdn" type="text" value="'+numClick+'" style="background: #000; color: #0f0; border: #0f0 1px solid; width: 30px"> times</p>';
wwash.style.height = 'auto';
if (numClick > 0)
	click(document.getElementsByClassName('btnInvite')[0]);

// Click by JoeSimmons
// Syntax: click(element); // String argument will grab it by id, or you can supply an element
function click(e, type) {
if(!e) {return;}
if(typeof e=='string') e=document.getElementById(e);
var evObj = document.createEvent('MouseEvents');
evObj.initMouseEvent((type||'click'),true,true,window,0,0,0,0,0,false,false,false,false,0,null);
e.dispatchEvent(evObj);
}
