/**
 * QUnit - A JavaScript Unit Testing Framework
 *
 * http://docs.jquery.com/QUnit
 *
 * Copyright (c) 2011 John Resig, Jörn Zaefferer
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * or GPL (GPL-LICENSE.txt) licenses.
 */
(function(a){function g(){f.autorun=!0,f.currentModule&&e.moduleDone({name:f.currentModule,failed:f.moduleStats.bad,passed:f.moduleStats.all-f.moduleStats.bad,total:f.moduleStats.all});var a=s("qunit-banner"),b=s("qunit-tests"),c=+(new Date)-f.started,d=f.stats.all-f.stats.bad,g=["Tests completed in ",c," milliseconds.<br/>",'<span class="passed">',d,'</span> tests of <span class="total">',f.stats.all,'</span> passed, <span class="failed">',f.stats.bad,"</span> failed."].join("");a&&(a.className=f.stats.bad?"qunit-fail":"qunit-pass"),b&&(s("qunit-testresult").innerHTML=g),typeof document!="undefined"&&document.title&&(document.title=(f.stats.bad?"✖":"✔")+" "+document.title),e.done({failed:f.stats.bad,passed:d,total:f.stats.all,runtime:c})}function h(a){var b=f.filter,c=!1;if(!b)return!0;var d=b.charAt(0)==="!";return d&&(b=b.slice(1)),a.indexOf(b)!==-1?!d:(d&&(c=!0),c)}function i(){try{throw new Error}catch(a){if(a.stacktrace)return a.stacktrace.split("\n")[6];if(a.stack)return a.stack.split("\n")[4]}}function j(a){return a?(a+="",a.replace(/[\&"<>\\]/g,function(a){switch(a){case"&":return"&amp;";case"\\":return"\\\\";case'"':return'"';case"<":return"&lt;";case">":return"&gt;";default:return a}})):""}function k(a){f.queue.push(a),f.autorun&&!f.blocking&&l()}function l(){var b=(new Date).getTime();while(f.queue.length&&!f.blocking)if(f.updateRate<=0||(new Date).getTime()-b<f.updateRate)f.queue.shift()();else{a.setTimeout(l,13);break}!f.blocking&&!f.queue.length&&g()}function m(){f.pollution=[];if(f.noglobals)for(var b in a)f.pollution.push(b)}function n(a){var b=f.pollution;m();var c=o(f.pollution,b);c.length>0&&ok(!1,"Introduced global variable(s): "+c.join(", "));var d=o(b,f.pollution);d.length>0&&ok(!1,"Deleted global variable(s): "+d.join(", "))}function o(a,b){var c=a.slice();for(var d=0;d<c.length;d++)for(var e=0;e<b.length;e++)if(c[d]===b[e]){c.splice(d,1),d--;break}return c}function p(b,c,d){typeof console!="undefined"&&console.error&&console.warn?(console.error(b),console.error(c),console.warn(d.toString())):a.opera&&opera.postError&&opera.postError(b,c,d.toString)}function q(a,b){for(var c in b)b[c]===undefined?delete a[c]:a[c]=b[c];return a}function r(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):c()}function s(a){return typeof document!="undefined"&&!!document&&!!document.getElementById&&document.getElementById(a)}function t(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=t(c.childNodes));return b}var b={setTimeout:typeof a.setTimeout!="undefined",sessionStorage:function(){try{return!!sessionStorage.getItem}catch(a){return!1}}()},c=0,d=function(a,b,c,d,e,f){this.name=a,this.testName=b,this.expected=c,this.testEnvironmentArg=d,this.async=e,this.callback=f,this.assertions=[]};d.prototype={init:function(){var a=s("qunit-tests");if(a){var b=document.createElement("strong");b.innerHTML="Running "+this.name;var d=document.createElement("li");d.appendChild(b),d.className="running",d.id=this.id="test-output"+c++,a.appendChild(d)}},setup:function(){this.module!=f.previousModule&&(f.previousModule&&e.moduleDone({name:f.previousModule,failed:f.moduleStats.bad,passed:f.moduleStats.all-f.moduleStats.bad,total:f.moduleStats.all}),f.previousModule=this.module,f.moduleStats={all:0,bad:0},e.moduleStart({name:this.module})),f.current=this,this.testEnvironment=q({setup:function(){},teardown:function(){}},this.moduleTestEnvironment),this.testEnvironmentArg&&q(this.testEnvironment,this.testEnvironmentArg),e.testStart({name:this.testName}),e.current_testEnvironment=this.testEnvironment;try{f.pollution||m(),this.testEnvironment.setup.call(this.testEnvironment)}catch(a){e.ok(!1,"Setup failed on "+this.testName+": "+a.message)}},run:function(){this.async&&e.stop();if(f.notrycatch){this.callback.call(this.testEnvironment);return}try{this.callback.call(this.testEnvironment)}catch(a){p("Test "+this.testName+" died, exception and test follows",a,this.callback),e.ok(!1,"Died on test #"+(this.assertions.length+1)+": "+a.message+" - "+e.jsDump.parse(a)),m(),f.blocking&&start()}},teardown:function(){try{this.testEnvironment.teardown.call(this.testEnvironment),n()}catch(a){e.ok(!1,"Teardown failed on "+this.testName+": "+a.message)}},finish:function(){this.expected&&this.expected!=this.assertions.length&&e.ok(!1,"Expected "+this.expected+" assertions, but "+this.assertions.length+" were run");var c=0,d=0,g=s("qunit-tests");f.stats.all+=this.assertions.length,f.moduleStats.all+=this.assertions.length;if(g){var h=document.createElement("ol");for(var i=0;i<this.assertions.length;i++){var j=this.assertions[i],k=document.createElement("li");k.className=j.result?"pass":"fail",k.innerHTML=j.message||(j.result?"okay":"failed"),h.appendChild(k),j.result?c++:(d++,f.stats.bad++,f.moduleStats.bad++)}e.config.reorder&&b.sessionStorage&&(d?sessionStorage.setItem("qunit-"+this.module+"-"+this.testName,d):sessionStorage.removeItem("qunit-"+this.module+"-"+this.testName)),d==0&&(h.style.display="none");var l=document.createElement("strong");l.innerHTML=this.name+" <b class='counts'>(<b class='failed'>"+d+"</b>, <b class='passed'>"+c+"</b>, "+this.assertions.length+")</b>";var m=document.createElement("a");m.innerHTML="Rerun",m.href=e.url({filter:t([l]).replace(/\([^)]+\)$/,"").replace(/(^\s*|\s*$)/g,"")}),r(l,"click",function(){var a=l.nextSibling.nextSibling,b=a.style.display;a.style.display=b==="none"?"block":"none"}),r(l,"dblclick",function(b){var c=b&&b.target?b.target:a.event.srcElement;if(c.nodeName.toLowerCase()=="span"||c.nodeName.toLowerCase()=="b")c=c.parentNode;a.location&&c.nodeName.toLowerCase()==="strong"&&(a.location=e.url({filter:t([c]).replace(/\([^)]+\)$/,"").replace(/(^\s*|\s*$)/g,"")}))});var k=s(this.id);k.className=d?"fail":"pass",k.removeChild(k.firstChild),k.appendChild(l),k.appendChild(m),k.appendChild(h)}else for(var i=0;i<this.assertions.length;i++)this.assertions[i].result||(d++,f.stats.bad++,f.moduleStats.bad++);try{e.reset()}catch(n){p("reset() failed, following Test "+this.testName+", exception and reset fn follows",n,e.reset)}e.testDone({name:this.testName,failed:d,passed:this.assertions.length-d,total:this.assertions.length})},queue:function(){function c(){k(function(){a.setup()}),k(function(){a.run()}),k(function(){a.teardown()}),k(function(){a.finish()})}var a=this;k(function(){a.init()});var d=e.config.reorder&&b.sessionStorage&&+sessionStorage.getItem("qunit-"+this.module+"-"+this.testName);d?c():k(c)}};var e={module:function(a,b){f.currentModule=a,f.currentModuleTestEnviroment=b},asyncTest:function(a,b,c){arguments.length===2&&(c=b,b=0),e.test(a,b,c,!0)},test:function(a,b,c,e){var g='<span class="test-name">'+a+"</span>",i;arguments.length===2&&(c=b,b=null),b&&typeof b=="object"&&(i=b,b=null),f.currentModule&&(g='<span class="module-name">'+f.currentModule+"</span>: "+g);if(!h(f.currentModule+": "+a))return;var j=new d(g,a,b,i,e,c);j.module=f.currentModule,j.moduleTestEnvironment=f.currentModuleTestEnviroment,j.queue()},expect:function(a){f.current.expected=a},ok:function(a,b){a=!!a;var c={result:a,message:b};b=j(b),e.log(c),f.current.assertions.push({result:a,message:b})},equal:function(a,b,c){e.push(b==a,a,b,c)},notEqual:function(a,b,c){e.push(b!=a,a,b,c)},deepEqual:function(a,b,c){e.push(e.equiv(a,b),a,b,c)},notDeepEqual:function(a,b,c){e.push(!e.equiv(a,b),a,b,c)},strictEqual:function(a,b,c){e.push(b===a,a,b,c)},notStrictEqual:function(a,b,c){e.push(b!==a,a,b,c)},raises:function(a,b,c){var d,f=!1;typeof b=="string"&&(c=b,b=null);try{a()}catch(g){d=g}d&&(b?e.objectType(b)==="regexp"?f=b.test(d):d instanceof b?f=!0:b.call({},d)===!0&&(f=!0):f=!0),e.ok(f,c)},start:function(){f.semaphore--;if(f.semaphore>0)return;f.semaphore<0&&(f.semaphore=0),b.setTimeout?a.setTimeout(function(){f.timeout&&clearTimeout(f.timeout),f.blocking=!1,l()},13):(f.blocking=!1,l())},stop:function(c){f.semaphore++,f.blocking=!0,c&&b.setTimeout&&(clearTimeout(f.timeout),f.timeout=a.setTimeout(function(){e.ok(!1,"Test timed out"),e.start()},c))}};e.equals=e.equal,e.same=e.deepEqual;var f={queue:[],blocking:!0,reorder:!0,noglobals:!1,notrycatch:!1};(function(){var b=a.location||{search:"",protocol:"file:"},c=b.search.slice(1).split("&"),d=c.length,g={},h;if(c[0])for(var i=0;i<d;i++)h=c[i].split("="),h[0]=decodeURIComponent(h[0]),h[1]=h[1]?decodeURIComponent(h[1]):!0,g[h[0]]=h[1],h[0]in f&&(f[h[0]]=h[1]);e.urlParams=g,f.filter=g.filter,e.isLocal=b.protocol==="file:"})(),typeof exports=="undefined"||typeof require=="undefined"?(q(a,e),a.QUnit=e):(q(exports,e),exports.QUnit=e),q(e,{config:f,init:function(){q(f,{stats:{all:0,bad:0},moduleStats:{all:0,bad:0},started:+(new Date),updateRate:1e3,blocking:!1,autostart:!0,autorun:!1,filter:"",queue:[],semaphore:0});var a=s("qunit-tests"),b=s("qunit-banner"),c=s("qunit-testresult");a&&(a.innerHTML=""),b&&(b.className=""),c&&c.parentNode.removeChild(c),a&&(c=document.createElement("p"),c.id="qunit-testresult",c.className="result",a.parentNode.insertBefore(c,a),c.innerHTML="Running...<br/>&nbsp;")},reset:function(){if(a.jQuery)jQuery("#qunit-fixture").html(f.fixture);else{var b=s("qunit-fixture");b&&(b.innerHTML=f.fixture)}},triggerEvent:function(a,b,c){document.createEvent?(c=document.createEvent("MouseEvents"),c.initMouseEvent(b,!0,!0,a.ownerDocument.defaultView,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(c)):a.fireEvent&&a.fireEvent("on"+b)},is:function(a,b){return e.objectType(b)==a},objectType:function(a){if(typeof a=="undefined")return"undefined";if(a===null)return"null";var b=Object.prototype.toString.call(a).match(/^\[object\s(.*)\]$/)[1]||"";switch(b){case"Number":return isNaN(a)?"nan":"number";case"String":case"Boolean":case"Array":case"Date":case"RegExp":case"Function":return b.toLowerCase()}return typeof a=="object"?"object":undefined},push:function(a,b,c,d){var g={result:a,message:d,actual:b,expected:c};d=j(d)||(a?"okay":"failed"),d='<span class="test-message">'+d+"</span>",c=j(e.jsDump.parse(c)),b=j(e.jsDump.parse(b));var h=d+'<table><tr class="test-expected"><th>Expected: </th><td><pre>'+c+"</pre></td></tr>";b!=c&&(h+='<tr class="test-actual"><th>Result: </th><td><pre>'+b+"</pre></td></tr>",h+='<tr class="test-diff"><th>Diff: </th><td><pre>'+e.diff(c,b)+"</pre></td></tr>");if(!a){var k=i();k&&(g.source=k,h+='<tr class="test-source"><th>Source: </th><td><pre>'+j(k)+"</pre></td></tr>")}h+="</table>",e.log(g),f.current.assertions.push({result:!!a,message:h})},url:function(b){b=q(q({},e.urlParams),b);var c="?",d;for(d in b)c+=encodeURIComponent(d)+"="+encodeURIComponent(b[d])+"&";return a.location.pathname+c.slice(0,-1)},begin:function(){},done:function(){},log:function(){},testStart:function(){},testDone:function(){},moduleStart:function(){},moduleDone:function(){}});if(typeof document=="undefined"||document.readyState==="complete")f.autorun=!0;r(a,"load",function(){e.begin({});var c=q({},f);e.init(),q(f,c),f.blocking=!1;var d=s("qunit-userAgent");d&&(d.innerHTML=navigator.userAgent);var g=s("qunit-header");g&&(g.innerHTML='<a href="'+e.url({filter:undefined})+'"> '+g.innerHTML+"</a> "+'<label><input name="noglobals" type="checkbox"'+(f.noglobals?' checked="checked"':"")+">noglobals</label>"+'<label><input name="notrycatch" type="checkbox"'+(f.notrycatch?' checked="checked"':"")+">notrycatch</label>",r(g,"change",function(b){var c={};c[b.target.name]=b.target.checked?!0:undefined,a.location=e.url(c)}));var h=s("qunit-testrunner-toolbar");if(h){var i=document.createElement("input");i.type="checkbox",i.id="qunit-filter-pass",r(i,"click",function(){var a=document.getElementById("qunit-tests");if(i.checked)a.className=a.className+" hidepass";else{var c=" "+a.className.replace(/[\n\t\r]/g," ")+" ";a.className=c.replace(/ hidepass /," ")}b.sessionStorage&&(i.checked?sessionStorage.setItem("qunit-filter-passed-tests","true"):sessionStorage.removeItem("qunit-filter-passed-tests"))});if(b.sessionStorage&&sessionStorage.getItem("qunit-filter-passed-tests")){i.checked=!0;var j=document.getElementById("qunit-tests");j.className=j.className+" hidepass"}h.appendChild(i);var k=document.createElement("label");k.setAttribute("for","qunit-filter-pass"),k.innerHTML="Hide passed tests",h.appendChild(k)}var l=s("qunit-fixture");l&&(f.fixture=l.innerHTML),f.autostart&&e.start()}),e.equiv=function(){function d(a,b,c){var d=e.objectType(a);if(d)return e.objectType(b[d])==="function"?b[d].apply(b,c):b[d]}var a,b=[],c=[],f=function(){function d(a,b){return a instanceof b.constructor||b instanceof a.constructor?b==a:b===a}return{string:d,"boolean":d,number:d,"null":d,"undefined":d,nan:function(a){return isNaN(a)},date:function(a,b){return e.objectType(a)==="date"&&b.valueOf()===a.valueOf()},regexp:function(a,b){return e.objectType(a)==="regexp"&&b.source===a.source&&b.global===a.global&&b.ignoreCase===a.ignoreCase&&b.multiline===a.multiline},"function":function(){var a=b[b.length-1];return a!==Object&&typeof a!="undefined"},array:function(b,d){var f,g,h,i;if(e.objectType(b)!=="array")return!1;i=d.length;if(i!==b.length)return!1;c.push(d);for(f=0;f<i;f++){h=!1;for(g=0;g<c.length;g++)c[g]===d[f]&&(h=!0);if(!h&&!a(d[f],b[f]))return c.pop(),!1}return c.pop(),!0},object:function(d,e){var f,g,h,i=!0,j=[],k=[];if(e.constructor!==d.constructor)return!1;b.push(e.constructor),c.push(e);for(f in e){h=!1;for(g=0;g<c.length;g++)c[g]===e[f]&&(h=!0);j.push(f);if(!h&&!a(e[f],d[f])){i=!1;break}}b.pop(),c.pop();for(f in d)k.push(f);return i&&a(j.sort(),k.sort())}}}();return a=function(){var a=Array.prototype.slice.apply(arguments);return a.length<2?!0:function(a,b){return a===b?!0:a===null||b===null||typeof a=="undefined"||typeof b=="undefined"||e.objectType(a)!==e.objectType(b)?!1:d(a,f,[b,a])}(a[0],a[1])&&arguments.callee.apply(this,a.splice(1,a.length-1))},a}(),e.jsDump=function(){function a(a){return'"'+a.toString().replace(/"/g,'\\"')+'"'}function b(a){return a+""}function c(a,b,c){var d=g.separator(),e=g.indent(),f=g.indent(1);return b.join&&(b=b.join(","+d+f)),b?[a,f+b,e+c].join(d):a+c}function d(a){var b=a.length,d=Array(b);this.up();while(b--)d[b]=this.parse(a[b]);return this.down(),c("[",d,"]")}var f=/^function (\w+)/,g={parse:function(a,b){var c=this.parsers[b||this.typeOf(a)];return b=typeof c,b=="function"?c.call(this,a):b=="string"?c:this.parsers.error},typeOf:function(a){var b;return a===null?b="null":typeof a=="undefined"?b="undefined":e.is("RegExp",a)?b="regexp":e.is("Date",a)?b="date":e.is("Function",a)?b="function":typeof a.setInterval!==undefined&&typeof a.document!="undefined"&&typeof a.nodeType=="undefined"?b="window":a.nodeType===9?b="document":a.nodeType?b="node":typeof a=="object"&&typeof a.length=="number"&&a.length>=0?b="array":b=typeof a,b},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&nbsp;":" "},indent:function(a){if(!this.multiline)return"";var b=this.indentChar;return this.HTML&&(b=b.replace(/\t/g,"   ").replace(/ /g,"&nbsp;")),Array(this._depth_+(a||0)).join(b)},up:function(a){this._depth_+=a||1},down:function(a){this._depth_-=a||1},setParser:function(a,b){this.parsers[a]=b},quote:a,literal:b,join:c,_depth_:1,parsers:{window:"[Window]",document:"[Document]",error:"[ERROR]",unknown:"[Unknown]","null":"null","undefined":"undefined","function":function(a){var b="function",d="name"in a?a.name:(f.exec(a)||[])[1];return d&&(b+=" "+d),b+="(",b=[b,e.jsDump.parse(a,"functionArgs"),"){"].join(""),c(b,e.jsDump.parse(a,"functionCode"),"}")},array:d,nodelist:d,arguments:d,object:function(a){var b=[];e.jsDump.up();for(var d in a)b.push(e.jsDump.parse(d,"key")+": "+e.jsDump.parse(a[d]));return e.jsDump.down(),c("{",b,"}")},node:function(a){var b=e.jsDump.HTML?"&lt;":"<",c=e.jsDump.HTML?"&gt;":">",d=a.nodeName.toLowerCase(),f=b+d;for(var g in e.jsDump.DOMAttrs){var h=a[e.jsDump.DOMAttrs[g]];h&&(f+=" "+g+"="+e.jsDump.parse(h,"attribute"))}return f+c+b+"/"+d+c},functionArgs:function(a){var b=a.length;if(!b)return"";var c=Array(b);while(b--)c[b]=String.fromCharCode(97+b);return" "+c.join(", ")+" "},key:a,functionCode:"[code]",attribute:a,string:a,date:a,regexp:b,number:b,"boolean":b},DOMAttrs:{id:"id",name:"name","class":"className"},HTML:!1,indentChar:"  ",multiline:!0};return g}(),e.diff=function(){function a(a,b){var c=new Object,d=new Object;for(var e=0;e<b.length;e++)c[b[e]]==null&&(c[b[e]]={rows:new Array,o:null}),c[b[e]].rows.push(e);for(var e=0;e<a.length;e++)d[a[e]]==null&&(d[a[e]]={rows:new Array,n:null}),d[a[e]].rows.push(e);for(var e in c)c[e].rows.length==1&&typeof d[e]!="undefined"&&d[e].rows.length==1&&(b[c[e].rows[0]]={text:b[c[e].rows[0]],row:d[e].rows[0]},a[d[e].rows[0]]={text:a[d[e].rows[0]],row:c[e].rows[0]});for(var e=0;e<b.length-1;e++)b[e].text!=null&&b[e+1].text==null&&b[e].row+1<a.length&&a[b[e].row+1].text==null&&b[e+1]==a[b[e].row+1]&&(b[e+1]={text:b[e+1],row:b[e].row+1},a[b[e].row+1]={text:a[b[e].row+1],row:e+1});for(var e=b.length-1;e>0;e--)b[e].text!=null&&b[e-1].text==null&&b[e].row>0&&a[b[e].row-1].text==null&&b[e-1]==a[b[e].row-1]&&(b[e-1]={text:b[e-1],row:b[e].row-1},a[b[e].row-1]={text:a[b[e].row-1],row:e-1});return{o:a,n:b}}return function(b,c){b=b.replace(/\s+$/,""),c=c.replace(/\s+$/,"");var d=a(b==""?[]:b.split(/\s+/),c==""?[]:c.split(/\s+/)),e="",f=b.match(/\s+/g);f==null?f=[" "]:f.push(" ");var g=c.match(/\s+/g);g==null?g=[" "]:g.push(" ");if(d.n.length==0)for(var h=0;h<d.o.length;h++)e+="<del>"+d.o[h]+f[h]+"</del>";else{if(d.n[0].text==null)for(c=0;c<d.o.length&&d.o[c].text==null;c++)e+="<del>"+d.o[c]+f[c]+"</del>";for(var h=0;h<d.n.length;h++)if(d.n[h].text==null)e+="<ins>"+d.n[h]+g[h]+"</ins>";else{var i="";for(c=d.n[h].row+1;c<d.o.length&&d.o[c].text==null;c++)i+="<del>"+d.o[c]+f[c]+"</del>";e+=" "+d.n[h].text+g[h]+i}}return e}}()})(this)