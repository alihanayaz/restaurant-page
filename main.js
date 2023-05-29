(()=>{"use strict";var e={424:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(537),o=t.n(r),A=t(645),i=t.n(A),a=t(667),c=t.n(a),s=new URL(t(553),t.b),l=i()(o()),d=c()(s);l.push([e.id,'html,body{margin:0;height:100%;font-family:"Inter",sans-serif}*{box-sizing:border-box}#content{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:#e9e9e7}.header{background-color:#fe67b6;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100px;width:100%}.header .logo{font-size:2rem}.header .nav{display:flex;justify-content:center;align-items:center;padding-bottom:2rem}.header .nav ul{display:flex;justify-content:center;align-items:center;list-style:none;margin:0;padding:0}.header .nav ul li{margin:0 1rem;color:#e9e9e7;text-transform:uppercase;font-weight:700;cursor:pointer}.header .nav ul li:hover{color:#feba57;transition:.1s ease-in-out}.main{width:100%;flex-grow:1;display:flex;flex-direction:column;justify-content:center;background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('+d+');background-size:cover;background-position:center;height:auto}.main .home{display:flex;justify-content:center;align-items:center}.main .home::after{content:"Mexican Street Food";color:#feba57;font-size:3rem;font-weight:700;letter-spacing:.5rem;margin:0 auto;padding:1rem;text-align:center;text-transform:uppercase;background-color:rgba(0,0,0,.5)}.main .menu{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:1rem}.main .menu h2{color:#feba57;font-size:2rem;font-weight:700;padding:1rem;text-transform:uppercase;text-align:center;background-color:rgba(0,0,0,.5);border-radius:8px}.main .menu .menu-items{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:100%}.main .menu .menu-items .menu-item{display:flex;flex-direction:column;justify-content:center;align-items:center;flex-wrap:wrap;margin:1rem;width:300px;height:300px;background-color:#feba57;border-radius:8px}.main .menu .menu-items .menu-item img{width:200px;height:200px;border-radius:8px}.main .menu .menu-items .menu-item h3{font-size:1.2rem;font-weight:700}.footer{margin-top:auto;width:100%;height:50px;background-color:#feba57;display:flex;justify-content:center;align-items:center}.footer p{font-weight:700}',"",{version:3,sources:["webpack://./src/style.scss","webpack://./src/_variables.scss"],names:[],mappings:"AAEA,UAEE,QAAA,CACA,WAAA,CACA,8BCHY,CDMd,EACE,qBAAA,CAGF,SACE,gBAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,wBClBW,CDqBb,QACE,wBCvBa,CDwBb,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,UAAA,CAEA,cACE,cAAA,CAGF,aACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,mBAAA,CACA,gBACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,mBACE,aAAA,CACA,aChDK,CDiDL,wBAAA,CACA,eAAA,CACA,cAAA,CACA,yBACE,aCpDK,CDqDL,0BAAA,CAOV,MACE,UAAA,CACA,WAAA,CACA,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,gHAAA,CAEA,qBAAA,CACA,0BAAA,CACA,WAAA,CACA,YACE,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,mBACE,6BAAA,CACA,aC7ES,CD8ET,cAAA,CACA,eAAA,CACA,oBAAA,CACA,aAAA,CACA,YAAA,CACA,iBAAA,CACA,wBAAA,CACA,+BAAA,CAGJ,YACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,YAAA,CACA,eACE,aC/FS,CDgGT,cAAA,CACA,eAAA,CACA,YAAA,CACA,wBAAA,CACA,iBAAA,CACA,+BAAA,CACA,iBAAA,CAEF,wBACE,YAAA,CACA,cAAA,CACA,sBAAA,CACA,kBAAA,CACA,UAAA,CACA,mCACE,YAAA,CACA,qBAAA,CACA,sBAAA,CACA,kBAAA,CACA,cAAA,CACA,WAAA,CACA,WAAA,CACA,YAAA,CACA,wBCvHO,CDwHP,iBAAA,CACA,uCACE,WAAA,CACA,YAAA,CACA,iBAAA,CAEF,sCACE,gBAAA,CACA,eAAA,CAOV,QACE,eAAA,CACA,UAAA,CACA,WAAA,CACA,wBC3Ia,CD4Ib,YAAA,CACA,sBAAA,CACA,kBAAA,CACA,UACE,eAAA",sourcesContent:["@import './variables.scss';\r\n\r\nhtml,\r\nbody {\r\n  margin: 0;\r\n  height: 100%;\r\n  font-family: $font-family;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n#content {\r\n  min-height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: $body-color;\r\n}\r\n\r\n.header {\r\n  background-color: $header-color;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100px;\r\n  width: 100%;\r\n\r\n  .logo {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .nav {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-bottom: 2rem;\r\n    ul {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      list-style: none;\r\n      margin: 0;\r\n      padding: 0;\r\n      li {\r\n        margin: 0 1rem;\r\n        color: $body-color;\r\n        text-transform: uppercase;\r\n        font-weight: 700;\r\n        cursor: pointer;\r\n        &:hover {\r\n          color: $footer-color;\r\n          transition: 0.1s ease-in-out;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.main {\r\n  width: 100%;\r\n  flex-grow: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url('../assets/banner.jpeg');\r\n  background-size: cover;\r\n  background-position: center;\r\n  height: auto;\r\n  .home {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    &::after {\r\n      content: 'Mexican Street Food';\r\n      color: $footer-color;\r\n      font-size: 3rem;\r\n      font-weight: 700;\r\n      letter-spacing: 0.5rem;\r\n      margin: 0 auto;\r\n      padding: 1rem;\r\n      text-align: center;\r\n      text-transform: uppercase;\r\n      background-color: rgba(0, 0, 0, 0.5);\r\n    }\r\n  }\r\n  .menu {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    h2 {\r\n      color: $footer-color;\r\n      font-size: 2rem;\r\n      font-weight: 700;\r\n      padding: 1rem;\r\n      text-transform: uppercase;\r\n      text-align: center;\r\n      background-color: rgba(0, 0, 0, 0.5);\r\n      border-radius: 8px;\r\n    }\r\n    .menu-items {\r\n      display: flex;\r\n      flex-wrap: wrap;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 100%;\r\n      .menu-item {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-wrap: wrap;\r\n        margin: 1rem;\r\n        width: 300px;\r\n        height: 300px;\r\n        background-color: $footer-color;\r\n        border-radius: 8px;\r\n        img {\r\n          width: 200px;\r\n          height: 200px;\r\n          border-radius: 8px;\r\n        }\r\n        h3 {\r\n          font-size: 1.2rem;\r\n          font-weight: 700;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n.footer {\r\n  margin-top: auto;\r\n  width: 100%;\r\n  height: 50px;\r\n  background-color: $footer-color;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  p {\r\n    font-weight: 700;\r\n  }\r\n}\r\n","$header-color: #fe67b6;\r\n$body-color: #e9e9e7;\r\n$footer-color: #feba57;\r\n$font-family: 'Inter', sans-serif;\r\n"],sourceRoot:""}]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,A){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&i[l[0]]||(void 0!==A&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=A),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */");return[n].concat([A]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var A={},i=[],a=0;a<e.length;a++){var c=e[a],s=r.base?c[0]+r.base:c[0],l=A[s]||0,d="".concat(s," ").concat(l);A[s]=l+1;var u=t(d),C={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(C);else{var m=o(C,r);r.byIndex=a,n.splice(a,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var A=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<A.length;i++){var a=t(A[i]);n[a].references--}for(var c=r(e,o),s=0;s<A.length;s++){var l=t(A[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}A=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var A=t.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},553:(e,n,t)=>{e.exports=t.p+"a01e5602bab74371c216.jpeg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var A=n[r]={id:r,exports:{}};return e[r](A,A.exports,t),A.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),A=t(569),i=t.n(A),a=t(565),c=t.n(a),s=t(216),l=t.n(s),d=t(589),u=t.n(d),C=t(424),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(C.Z,m),C.Z&&C.Z.locals&&C.Z.locals;const p=()=>{const e=document.querySelector(".main"),n=document.createElement("div");n.classList.add("home"),n.textContent="Home",e.appendChild(n)},f=[{name:"Taco",img:"../assets/taco.jpeg"},{name:"Burrito",img:"../assets/burrito.jpeg"}],g=document.querySelector("#content");console.log(g);const h=document.createElement("div");h.classList.add("header"),g.appendChild(h);const b=document.createElement("h1");b.textContent="TexMex",b.classList.add("logo"),h.appendChild(b);const x=document.createElement("div");x.classList.add("nav"),h.appendChild(x);const y=document.createElement("ul");x.appendChild(y);const v=document.createElement("li");v.textContent="Home",v.addEventListener("click",(()=>{document.querySelector(".menu").remove(),p()}));const w=document.createElement("li");w.textContent="Menu",w.addEventListener("click",(()=>{document.querySelector(".home").remove(),(()=>{const e=document.querySelector(".main"),n=document.createElement("div");n.classList.add("menu");const t=document.createElement("h2");t.textContent="Menu",n.appendChild(t);const r=document.createElement("div");r.classList.add("menu-items"),n.appendChild(r),f.forEach((e=>{const n=document.createElement("div");n.classList.add("menu-item"),r.appendChild(n);const t=document.createElement("img");t.setAttribute("src",e.img),t.setAttribute("alt",e.name),n.appendChild(t);const o=document.createElement("h3");o.textContent=e.name,n.appendChild(o)})),e.appendChild(n)})()})),y.appendChild(v),y.appendChild(w);const B=document.createElement("div");B.classList.add("main"),g.appendChild(B),p();const E=document.createElement("div");E.classList.add("footer"),g.appendChild(E);const j=document.createElement("p");j.textContent="Created by alihanayaz",E.appendChild(j)})()})();
//# sourceMappingURL=main.js.map