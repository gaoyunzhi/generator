(function(e){function t(t){for(var a,n,o=t[0],l=t[1],c=t[2],h=0,p=[];h<o.length;h++)n=o[h],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&p.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(i.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},i=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/HexPass/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},"034f":function(e,t,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"039f":function(e,t,s){},"85ec":function(e,t,s){},a6c2:function(e,t,s){"use strict";var a=s("039f"),r=s.n(a);r.a},a96e:function(e,t,s){},cd49:function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=s("289d"),i=s("4eb5"),n=s.n(i),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app"},[s("div",{staticClass:"columns is-mobile is-gapless"},[s("div",{staticClass:"column is-one-third"},[s("b-dropdown",{attrs:{"aria-role":"list"},model:{value:e.languageSelect,callback:function(t){e.languageSelect=t},expression:"languageSelect"}},[s("button",{staticClass:"language-btn button is-light",attrs:{slot:"trigger"},slot:"trigger"},[s("icon",{attrs:{path:e.mdiTranslate}})],1),s("b-dropdown-item",{attrs:{value:"en","aria-role":"listitem"}},[e._v("English")]),s("b-dropdown-item",{attrs:{value:"zh-Hans","aria-role":"listitem"}},[e._v("简体中文")]),s("b-dropdown-item",{attrs:{value:"zh-Hant","aria-role":"listitem"}},[e._v("繁體中文")])],1)],1),e._m(0),s("div",{staticClass:"column is-one-third"},[s("github-corner",{attrs:{url:"https://github.com/Petrichor/HexPass"}})],1)]),s("div",{staticClass:"columns is-centered is-gapless app-body"},[s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v(e._s(e.text.get("label")))]),s("p",{staticClass:"control has-icons-left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.tag,expression:"tag"}],staticClass:"input",domProps:{value:e.tag},on:{input:[function(t){t.target.composing||(e.tag=t.target.value)},e.verify]}}),s("icon",{staticClass:"is-left",attrs:{path:e.mdiTag}})],1)]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[e._v(e._s(e.text.get("password")))]),s("p",{staticClass:"control has-icons-left has-icons-right"},["checkbox"===e.passwordInputType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],ref:"inputPassword",staticClass:"input",attrs:{"password-reveal":"",type:"checkbox"},domProps:{checked:Array.isArray(e.pwd)?e._i(e.pwd,null)>-1:e.pwd},on:{input:e.verify,change:function(t){var s=e.pwd,a=t.target,r=!!a.checked;if(Array.isArray(s)){var i=null,n=e._i(s,i);a.checked?n<0&&(e.pwd=s.concat([i])):n>-1&&(e.pwd=s.slice(0,n).concat(s.slice(n+1)))}else e.pwd=r}}}):"radio"===e.passwordInputType?s("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],ref:"inputPassword",staticClass:"input",attrs:{"password-reveal":"",type:"radio"},domProps:{checked:e._q(e.pwd,null)},on:{input:e.verify,change:function(t){e.pwd=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],ref:"inputPassword",staticClass:"input",attrs:{"password-reveal":"",type:e.passwordInputType},domProps:{value:e.pwd},on:{input:[function(t){t.target.composing||(e.pwd=t.target.value)},e.verify]}}),s("icon",{staticClass:"is-left",attrs:{path:e.mdiTextboxPassword}}),s("icon",{staticClass:"is-right is-clickable",attrs:{id:"password-eye",path:e.iconEye},nativeOn:{click:function(t){return e.togglePasswordVisibility(t)}}})],1)]),s("b-collapse",{staticClass:"card",attrs:{open:!1,"aria-id":"advanced"},scopedSlots:e._u([{key:"trigger",fn:function(t){return[s("div",{staticClass:"card-header",attrs:{role:"button","aria-controls":"advanced"}},[s("p",{staticClass:"card-header-title"},[e._v(e._s(e.text.get("advanced")))]),s("a",{staticClass:"card-header-icon"},[s("icon",{staticClass:"has-text-primary",attrs:{path:t.open?e.mdiMenuDown:e.mdiMenuLeft}})],1)])]}}])},[s("div",{staticClass:"card-content"},[s("label",{staticClass:"label is-small"},[e._v(e._s(e.text.get("length")))]),s("div",{staticClass:"field"},[s("b-slider",{attrs:{min:4,max:32,rounded:""},model:{value:e.length,callback:function(t){e.length=t},expression:"length"}})],1),s("label",{staticClass:"label is-small"},[e._v(e._s(e.text.get("structure")))]),s("div",{staticClass:"field"},[s("b-checkbox",{on:{input:e.verify},model:{value:e.hasLowerCase,callback:function(t){e.hasLowerCase=t},expression:"hasLowerCase"}},[e._v(e._s(e.text.get("lowercase")))])],1),s("div",{staticClass:"field"},[s("b-checkbox",{on:{input:e.verify},model:{value:e.hasUpperCase,callback:function(t){e.hasUpperCase=t},expression:"hasUpperCase"}},[e._v(e._s(e.text.get("uppercase")))])],1),s("div",{staticClass:"field"},[s("b-checkbox",{on:{input:e.verify},model:{value:e.hasNumber,callback:function(t){e.hasNumber=t},expression:"hasNumber"}},[e._v(e._s(e.text.get("number")))])],1),s("div",{staticClass:"field"},[s("b-checkbox",{on:{input:e.verify},model:{value:e.hasSymbol,callback:function(t){e.hasSymbol=t},expression:"hasSymbol"}},[e._v(e._s(e.text.get("symbol")))])],1),s("div",{staticClass:"field"},[s("b-checkbox",{model:{value:e.avoidAmbChar,callback:function(t){e.avoidAmbChar=t},expression:"avoidAmbChar"}},[e._v(e._s(e.text.get("avoidAmbChar")))])],1)])]),s("div",{staticClass:"generate-btn"},[s("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.password,expression:"password",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopySuccess,expression:"onCopySuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onCopyError,expression:"onCopyError",arg:"error"}],staticClass:"button is-centered is-primary",attrs:{disabled:e.btnDisabled},on:{click:e.generate}},[e._v(e._s(e.text.get("generate")))])]),s("article",{directives:[{name:"show",rawName:"v-show",value:e.passwordSuccess,expression:"passwordSuccess"}],staticClass:"message"},[s("div",{staticClass:"message-body"},[s("nav",{staticClass:"level column"},[s("p",{ref:"passwordText",staticClass:"level-item title wrap-p"},[s("strong",[e._v(e._s(e.password))])])])])])],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"column is-one-third has-text-centered"},[a("figure",{staticClass:"image is-128x128 is-inline-block"},[a("img",{attrs:{alt:"HexPass logo",src:s("cf05")}})])])}],c=(s("a4d3"),s("e01a"),s("d28b"),s("4160"),s("a15b"),s("13d5"),s("a434"),s("0d03"),s("4ec9"),s("d3b7"),s("e25e"),s("ac1f"),s("25f0"),s("3ca3"),s("1276"),s("159b"),s("ddb0"),s("d4ec")),u=s("bee2"),h=s("99de"),p=s("7e84"),d=s("262e"),b=s("9ab4"),m=s("60a3"),g=s("72fe"),f=s.n(g),v=s("ab28"),y=s.n(v),C=s("94ed"),w=function(){function e(t){Object(c["a"])(this,e),this.locale="zh-Hans",this.text=new Map,this.en=new Map([["label","Label"],["password","Password"],["advanced","Advanced"],["length","Length"],["structure","Structure"],["lowercase","Lowercase"],["uppercase","Uppercase"],["number","Number"],["symbol","Symbol"],["avoidAmbChar","Avoid ambiguous characters"],["generate","Generate"],["copySuccess","Copied to clipboard"],["copyError","Automatic copy failed, please copy manually"]]),this.hans=new Map([["label","标签"],["password","密码"],["advanced","高级"],["length","长度"],["structure","结构"],["lowercase","小写字母"],["uppercase","大写字母"],["number","数字"],["symbol","符号"],["avoidAmbChar","排除易混淆"],["generate","生成"],["copySuccess","已复制到剪切板"],["copyError","自动复制失败，请手动复制"]]),this.hant=new Map([["label","標籤"],["password","密碼"],["advanced","高級"],["length","長度"],["lowercase","小寫字母"],["uppercase","大寫字母"],["number","數字"],["symbol","符號"],["avoidAmbChar","排除易混淆"],["generate","生成"],["copySuccess","已複製到剪切板"],["copyError","自動複製失敗，請手動複製"]]),this.locale=t,this.changeString()}return Object(u["a"])(e,[{key:"setLocale",value:function(e){this.locale=e,this.changeString()}},{key:"changeString",value:function(){var e,t=!0,s=!1,a=void 0;try{for(var r,i=this.hans.keys()[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var n=r.value;switch(this.locale){case"en":e=this.en.get(n);break;case"zh-Hans":e=this.hans.get(n);break;case"zh-Hant":e=this.hant.get(n);break;default:break}"string"==typeof e&&this.text.set(n,e)}}catch(o){s=!0,a=o}finally{try{t||null==i.return||i.return()}finally{if(s)throw a}}}}]),e}(),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("a",{staticClass:"github-corner",attrs:{href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"View source on GitHub"}},[s("svg",{staticStyle:{fill:"#63bbd0",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},N=[],k=function(e){function t(){return Object(c["a"])(this,t),Object(h["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(m["c"]);Object(b["a"])([Object(m["b"])()],k.prototype,"url",void 0),k=Object(b["a"])([m["a"]],k);var S=k,_=S,j=(s("a6c2"),s("2877")),O=Object(j["a"])(_,x,N,!1,null,"6ae12004",null),A=O.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"icon"},[s("svg",{attrs:{viewBox:"0 0 24 24",fill:e.color}},[s("path",{attrs:{d:e.path}})])])},T=[],L=function(e){function t(){return Object(c["a"])(this,t),Object(h["a"])(this,Object(p["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(m["c"]);Object(b["a"])([Object(m["b"])()],L.prototype,"path",void 0),Object(b["a"])([Object(m["b"])()],L.prototype,"color",void 0),L=Object(b["a"])([m["a"]],L);var E,M=L,H=M,$=Object(j["a"])(H,P,T,!1,null,"20234cf2",null),U=$.exports,V=E=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(h["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.mdiTranslate=C["g"],e.mdiTag=C["e"],e.mdiTextboxPassword=C["f"],e.iconEye=C["a"],e.mdiMenuDown=C["c"],e.mdiMenuLeft=C["d"],e.isPasswordVisible=!1,e.passwordInputType="text",e.lang=new w("zh-Hans"),e.tag="",e.pwd="",e.length=10,e.hasSymbol=!1,e.hasNumber=!0,e.hasUpperCase=!0,e.hasLowerCase=!0,e.characterTypeNum=3,e.password="",e.btnDisabled=!0,e.passwordSuccess=!1,e.avoidAmbChar=!1,e.symbolNum=0,e.numberNum=0,e.upperCaseNum=0,e.lowerCaseNum=0,e.symbolCharsArray=[],e.numberCharsArray=[],e.upperCaseCharsArray=[],e.lowerCaseCharsArray=[],e.isModalActive=!1,e.languageSelect="zh-Hans",e.text=new Map,e}return Object(d["a"])(t,e),Object(u["a"])(t,[{key:"created",value:function(){this.changeString()}},{key:"languageChanged",value:function(){this.lang.setLocale(this.languageSelect),this.changeString(),this.$forceUpdate()}},{key:"changeString",value:function(){var e=!0,t=!1,s=void 0;try{for(var a,r=this.lang.hans.keys()[Symbol.iterator]();!(e=(a=r.next()).done);e=!0){var i=a.value,n=this.lang.text.get(i);"string"==typeof n&&this.text.set(i,n)}}catch(o){t=!0,s=o}finally{try{e||null==r.return||r.return()}finally{if(t)throw s}}}},{key:"verify",value:function(){this.characterTypeNum=this.getCharacterTypeNum(),0!=this.tag.length&&0!=this.pwd.length&&0!=this.characterTypeNum?this.btnDisabled=!1:(this.btnDisabled=!0,this.passwordSuccess=!1)}},{key:"generate",value:function(){var e=this,t=f()(this.tag).toString(),s=f()(this.pwd).toString(),a=y()(t,s).toString().split(""),r=a.splice(0,this.length),i=new Array(this.length);this.getEachTypeCharsNum(),this.initChars(),r.forEach((function(t,s){for(var a=parseInt(t,16),r="",n=0,o=0;o<=a;o++)void 0!=i[n]&&o--,o!=a&&(n=n==e.length-1?0:n+1);r=s<e.symbolNum?E.getChar(e.symbolCharsArray,a):s<e.symbolNum+e.numberNum?E.getChar(e.numberCharsArray,a):s<e.length-e.lowerCaseNum?E.getChar(e.upperCaseCharsArray,a):E.getChar(e.lowerCaseCharsArray,a),i[n]=r})),this.password=i.join(""),this.passwordSuccess=!0}},{key:"initChars",value:function(){this.avoidAmbChar?(this.symbolCharsArray="@#$%^&*+-".split(""),this.numberCharsArray="23456789".split(""),this.upperCaseCharsArray="ABDEFGHJLMNQRTY".split(""),this.lowerCaseCharsArray="abdefghjmnqrty".split("")):(this.symbolCharsArray="!@#$%^&*+-".split(""),this.numberCharsArray="0123456789".split(""),this.upperCaseCharsArray="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),this.lowerCaseCharsArray="abcdefghijklmnopqrstuvwxyz".split(""))}},{key:"getCharacterTypeNum",value:function(){var e=[this.hasSymbol,this.hasNumber,this.hasUpperCase,this.hasLowerCase];return e.reduce((function(e,t){return t?e+1:e}),0)}},{key:"getEachTypeCharsNum",value:function(){this.symbolNum=0,this.numberNum=0,this.upperCaseNum=0,this.lowerCaseNum=0,this.hasSymbol&&(this.symbolNum=Math.floor(this.length/this.characterTypeNum)),this.hasNumber&&(this.hasUpperCase||this.hasLowerCase?this.numberNum=Math.floor(this.length/this.characterTypeNum):this.numberNum=this.length-this.symbolNum),this.hasUpperCase&&(this.hasLowerCase?this.upperCaseNum=Math.floor((this.length-this.symbolNum-this.numberNum)/2):this.upperCaseNum=this.length-this.symbolNum-this.numberNum),this.hasLowerCase&&(this.lowerCaseNum=this.length-this.symbolNum-this.numberNum-this.upperCaseNum)}},{key:"onCopySuccess",value:function(){var e=this.text.get("copySuccess");this.$buefy.toast.open({duration:800,message:e,position:"is-bottom",type:"is-success"})}},{key:"onCopyError",value:function(){E.selectText(this.$refs.passwordText);this.text.get("copyError");this.$buefy.toast.open({duration:3e3,message:"copyErrorText",position:"is-bottom",type:"is-danger"})}},{key:"togglePasswordVisibility",value:function(){var e=this;this.isPasswordVisible=!this.isPasswordVisible,this.passwordInputType=this.isPasswordVisible?"text":"password",this.iconEye=this.isPasswordVisible?C["b"]:C["a"],this.$nextTick((function(){e.$refs.inputPassword.focus()}))}}],[{key:"getChar",value:function(e,t){return t<e.length?e[t]:e[t%e.length]}},{key:"selectText",value:function(e){var t=document.createRange();t.selectNode(e);var s=window.getSelection();null!=s&&(s.removeAllRanges(),s.addRange(t))}}]),t}(m["c"]);Object(b["a"])([Object(m["d"])("languageSelect")],V.prototype,"languageChanged",null),V=E=Object(b["a"])([Object(m["a"])({components:{GithubCorner:A,Icon:U}})],V);var z=V,D=z,I=(s("034f"),Object(j["a"])(D,o,l,!1,null,null,null)),B=I.exports,G=s("9483");Object(G["a"])("".concat("/HexPass/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});s("a96e");a["a"].config.productionTip=!1,a["a"].use(r["a"]),a["a"].use(n.a),new a["a"]({render:function(e){return e(B)}}).$mount("#app")},cf05:function(e,t,s){e.exports=s.p+"img/logo.a0ccb8d4.png"}});