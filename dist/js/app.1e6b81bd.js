(function(e){function t(t){for(var n,a,c=t[0],u=t[1],s=t[2],p=0,l=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({"marketplace-branded":"marketplace-branded"}[e]||e)+"."+{"marketplace-branded":"f8b96f71"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"marketplace-branded":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"marketplace-branded":"marketplace-branded"}[e]||e)+"."+{"marketplace-branded":"a4eef99a"}[e]+".css",o=u.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===n||p===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],p=s.getAttribute("data-href");if(p===n||p===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[e],f.parentNode.removeChild(f),r(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=i);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=c(e);var l=new Error;s=function(t){p.onerror=p.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/wann/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],p=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=p;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("bc3a"),a=r.n(n),o=r("2b0e"),i=r("2f62"),c=(r("b0c0"),r("d3b7"),r("ac1f"),r("5319"),r("8c4f")),u=c["a"].prototype.replace;c["a"].prototype.replace=function(e){return u.call(this,e).catch((function(e){return e}))},o["a"].use(c["a"]);var s=new c["a"]({mode:"history",scrollBehavior:function(e,t,r){var n;if(!t||e.name!==t.name||!_.isEqual(e.params,t.params))return n=r||{x:0,y:0},n},routes:[{path:"/",name:"landingpage",component:function(){return r.e("marketplace-branded").then(r.bind(null,"d504"))},meta:{requiresAuth:!1,title:"Index"}}]}),p=s,l={favorites:[1302,4621]},f={},d={},m={},h={namespaced:!0,state:l,getters:f,mutations:d,actions:m},v=(r("a15b"),r("d81d"),r("96cf"),r("1da1")),b={stops:[]},g={},y={SET_STOPS:function(e,t){e.stops=t}},w={fetchFavorites:function(e){var t=this,r=e.commit,n=e.rootState;return Object(v["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.favorites.favorites.map((function(e){return"rbl=".concat(e)})).join("&"),e.next=3,t.$axios.get("/monitor?".concat(a));case 3:o=e.sent,r("SET_STOPS",o.data.data.monitors);case 5:case"end":return e.stop()}}),e)})))()}},S={namespaced:!0,state:b,getters:g,mutations:y,actions:w};o["a"].use(i["a"]);var k=new i["a"].Store({modules:{favorites:h,stops:S}}),O=k,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-content",[r("router-view")],1)],1)},j=[],E={name:"App"},P=E,T=r("2877"),F=r("6544"),A=r.n(F),C=r("7496"),L=r("a75b"),B=Object(T["a"])(P,x,j,!1,null,null,null),N=B.exports;A()(B,{VApp:C["a"],VContent:L["a"]});var $=r("f309");o["a"].use($["a"]);var q=new $["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#004170",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}}});o["a"].config.productionTip=!1;var M=a.a.create({baseURL:"https://www.wienerlinien.at/ogd_realtime"});o["a"].prototype.$axios=M,i["a"].Store.prototype.$axios=M,new o["a"]({router:p,store:O,vuetify:q,render:function(e){return e(N)}}).$mount("#app"),O.dispatch("stops/fetchFavorites")}});
//# sourceMappingURL=app.1e6b81bd.js.map