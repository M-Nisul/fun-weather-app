(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>U});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),c=t(417),d=t.n(c),s=new URL(t(40),t.b),l=new URL(t(162),t.b),p=new URL(t(292),t.b),m=new URL(t(453),t.b),u=new URL(t(535),t.b),h=new URL(t(640),t.b),g=new URL(t(932),t.b),f=new URL(t(789),t.b),b=new URL(t(771),t.b),v=new URL(t(173),t.b),y=new URL(t(3),t.b),w=new URL(t(901),t.b),x=new URL(t(301),t.b),k=a()(o());k.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic);"]),k.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,regular,500,600,700,800,300italic,italic,500italic,600italic,700italic,800italic);"]);var E=d()(s),L=d()(l),C=d()(p),z=d()(m),I=d()(u),T=d()(h),M=d()(g),H=d()(f),S=d()(b),A=d()(v),$=d()(y),j=d()(w),B=d()(x);k.push([n.id,`@keyframes slideInFromUp {\n    0% { transform: translateY(-100%); }\n    100% { transform: translateY(0%); }\n}\n\n@keyframes slideIn {\n    from {\n      transform: translateX(-100%); /* Start off-screen to the left */\n    }\n    to {\n      transform: translateX(0%); /* Slide in to original position */\n    }\n}\n\nhr{\n    width: 100vw;\n    margin: 0;\n}\n\n:root{\n    --text-color: #161d0a;\n    --bg-color: #f5faf0;\n    --primary-color: #97c24f;\n    --secondary-color: #99dbc9;\n    --accent-color: #6cbbcc;\n    --menu: url(${E});\n    --blur: 2rem;\n    --glass:hsl(0 0 0% / 0.1);\n    --close: url(${L});\n}\n\n[data-theme="dark"] {\n    --text-color:#edf5e1;\n    --bg-color:#0a0f05;\n    --primary-color:#85af3c;\n    --secondary-color:#246654;\n    --accent-color:#348293;\n    --menu: url(${C});\n    --blur: 4rem; \n    --glass: hsl(0 0 100% / 0.1);\n    --close: url(${z});\n}\n\nbody{\n    padding: 0rem;\n    margin: 0rem;\n    width: 100vw;\n    height: 100vh;\n    font-family: 'Poppins', sans-serif;\n    color: var(--text-color);\n    background-color: var(--bg-color);\n}\n\nheader{\n    width: 100vw;\n    height: 7rem;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    padding: 0rem 1rem;\n}\n\nheader svg{\n    width: 5rem;\n    height: 5rem;\n}\n\nheader div{\n    display: flex;\n    align-items: center;\n}\n\nheader div i{\n    background:linear-gradient(120deg,var(--primary-color),var(--accent-color));\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    font-size: 2rem;\n    font-weight: 700;\n    cursor:default;\n}\n\nheader nav{\n    display: flex;\n    max-width: 50%;\n    min-width: 30%;\n}\n\nheader nav button{\n    font-family: 'Poppins',sans-serif;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    transition: all 0.3s;\n    position: relative;\n    color: var(--text-color);\n}\n\nheader nav button:not(.unselected){\n    text-decoration: underline;\n    text-underline-offset: .5rem;\n    text-decoration-color: var(--text-color);\n    transition: all 0.3s;\n}\n\nheader nav .unselected:before{\n   content: '';\n   display: block;\n   position: absolute;\n   background-color: var(--text-color);\n   top: 100%;\n   left: 0;\n   width: 0%;\n   height: 2px;\n   border-radius: .5rem;\n   z-index: -1;\n   transition: .3s;\n}\n\nheader nav .unselected:hover{\n    cursor: pointer;\n}\n\nheader nav button:hover:before{\n    width: 100%;\n}\n\nheader nav .unselected{\n    opacity: 0.5;\n}\n\nheader a img{\n    width: 2rem;\n    height: 2rem;\n}\n\n#container{\n    height: 51rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n#container #home{\n    position: relative;\n    width: 100vw;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#container #home #info{\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 10rem;\n}\n\n#container #home #sun{\n    background-image: url(${I});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 10rem;\n    height: 10rem;\n    position: absolute;\n    left: 40%;\n    top: 10%;\n    z-index: -1;\n}\n\n#container #home #rain{\n    background-image: url(${T});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 10rem;\n    height: 10rem;\n    position: absolute;\n    left: 60%;\n    top: 70%;\n    z-index: -1;\n}\n\n#container #home #thunder{\n    background-image: url(${M});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 10rem;\n    height: 10rem;\n    position: absolute;\n    left: 20%;\n    top: 70%;\n    z-index: -1;\n}\n\n#container #home #wind-cloud{\n    background-image: url(${H});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 10rem;\n    height: 10rem;\n    position: absolute;\n    left: 8%;\n    top: 10%;\n    z-index: -1;\n}\n\n#container #home #wind-night{\n    background-image: url(${S});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 10rem;\n    height: 10rem;\n    position: absolute;\n    left: 76%;\n    top: 15%;\n    z-index: -1;\n}\n\n#container #home #windy{\n    background-image: url(${A});\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 10rem;\n    height: 10rem;\n    position: absolute;\n    left: 80%;\n    top: 65%;\n    z-index: -1;\n}\n\n#container #home #info h1{\n    font-size: 7rem;\n    font-weight: 700;\n    z-index: -2;\n    text-shadow: 2px 2px 4px var(--text-color);\n}\n\n#container #home #info p{\n    font-size: 1.5rem;\n    margin-top: -5rem;\n}\n\n#container #home #info button{\n    width: 8rem;\n    height: 3rem;\n    border-radius: 0.5rem;\n    outline: none;\n    border: none;\n    font-size: 0.9rem;\n    font-family: 'Poppins',sans-serif;\n    background-color: var(--primary-color);\n    transition: all .3s;\n    cursor: pointer;\n}\n\n#container #home #info button:hover{\n    transform: translate(0, -3px);\n    box-shadow: 0 20px 80px -10px var(--primary-color);\n}\n\n#theme{\n    width: 4rem;\n    height: 4rem;\n    border-radius: 100%;\n    position: absolute;\n    top: 92%;\n    left: 94%;\n    outline: none;\n    border: none;\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-color: transparent;\n}\n\n.elements{\n    animation: 1s ease-out 0s 1 slideInFromUp;\n    padding: 30px;\n}\n\n#container #body{\n    height: 100%;\n    position: relative;\n    width: 100vw;\n    animation: slideIn 0.5s forwards;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n}\n\n#container #body h1{\n    font-weight: 700;\n    text-align: center;\n    margin-top: 2rem;\n    font-size: 5rem;\n    padding: 0;\n}\n\n#container #body #image{\n    width: 20rem;\n    height: 20rem;\n    background-image: url(${$});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    border-radius: 100%;\n    position: absolute;\n    top: 12%;\n    left: 40%;\n    z-index: -1;\n    padding: 0;\n}\n\n#container #body #description{\n    height: 30%;\n    margin-top: 20rem;\n    display: flex;\n    flex-direction: row;\n    width: 100%;\n    align-items: center;\n    position: relative;\n    justify-content: space-between;\n    margin-left: 4rem;\n}\n\n#container #body #description p{\n    width: 40%;\n    text-align: center;\n}\n\n#container #body #description hr{\n    height: 60%;\n    position: absolute;\n    left: 50%;\n}\n\n#container #body #description a{\n    text-decoration: none;\n    color: var(--text-color);\n    transition: all 0.3s;\n    text-align: center;\n}\n\n#container #body #description #insta{\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: auto;\n}\n\n#container #body #description #insta div{\n    width: 2rem;\n    height: 2rem;\n    background-image: url(${j});\n    background-position: center;\n    background-size:cover;\n    background-repeat: no-repeat;\n    margin-right: 0.5rem;\n}\n\n\n#container #body #description #insta a:hover{\n    color: var(--primary-color);\n}\n\n#container #weather{\n    width: 40%;\n    height: 60%;\n    background-color: var(--primary-color);\n    border-radius: 0.6rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    text-align: center;\n    position: relative;\n    padding: 1rem;\n}\n\n#container #weatherH1{\n    font-size: 3rem;\n}\n\n#container #weather input{\n    width: 15rem;\n    height: 2rem;\n    border-radius: 0.6rem;\n    border: none;\n    outline: none;\n    background-color: var(--secondary-color);\n    color: var(--text-color);\n    padding-left: 0.5rem;\n    margin-right: 0.5rem;\n    transition: all .3s;\n    font-family: 'Poppins',sans-serif;\n}\n\n#container #weather div{\n    display: flex;\n    align-items: center;\n}\n\n#container #weather button{\n    width: 1.8rem;\n    height: 1.8rem;\n    background-color: transparent;\n    outline: none;\n    border: none;\n    background-image: url(${B});\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n    cursor: pointer;\n    transition: all .3s;\n}\n\n#container #weather button:hover{\n    transform: scale(1.1);\n}\n\n#container #weather input::placeholder{\n    color: var(--text-color);\n    font-family: 'Poppins',sans-serif;\n}\n\n#container #weather input:focus::placeholder{\n    opacity: 0;\n}\n\n#container #weather #weatherInfo{\n    display: flex;\n    width: 60%;\n    justify-content: space-around;\n    align-items: center;\n}\n\ndialog{\n    width: 50%;\n    height: 20%;\n    position: absolute;\n    margin: auto;\n    inset: 0;\n    border-radius: .5rem;\n    text-align: center;\n    background-color: var(--bg-color);\n    color: var(--text-color);\n}\n\ndialog button{\n    margin-top: 1rem;\n    width: 8rem;\n    height: 3rem;\n    border-radius: 0.5rem;\n    outline: none;\n    border: none;\n    font-size: 0.9rem;\n    font-family: 'Poppins',sans-serif;\n    background-color: var(--primary-color);\n    transition: all .3s;\n    cursor: pointer;\n}\n\ndialog button:hover{\n    transform: translateY(0, -10px);\n    box-shadow: 0 20px 80px -10px var(--primary-color);\n}\n\n#container #weather label{\n    position: absolute;\n    padding-left: 1rem;\n    font-size: 0.8rem;\n}\n\n#container #weather #input:focus ~ label{\n    display: none;\n}\n\n@media (max-width: 600px){\n\n    body{\n        overflow-y: scroll;\n        overflow-x: hidden;\n    }\n\n    header{\n        display: flex;\n        justify-content: space-evenly;\n    }\n\n    header div{\n        margin-right: 2rem;\n        display: flex;\n        justify-content: flex-start;\n    }\n\n    header div svg{\n        width: 3rem;\n        height: 3rem;\n    }\n\n    nav{\n        flex-direction: column;\n        position: absolute;\n        inset: 0 0 0 0;\n        height: 100vh;\n        justify-content: flex-start;\n        background: hsl(0 0 0 / 0.9);\n        z-index: 100;\n        align-items: center;\n        padding-top: 3rem;\n        transform: translateX(-100%);\n        transition: all 0.3s;\n    }\n\n    nav[data-visible="true"]{\n        transform: translateX(0);\n    }\n\n    nav button{\n        margin: 2rem 0;\n        padding: 0;\n        font-size: 1.3rem;\n        width: 7rem;\n    }\n\n    .menu{\n        position: absolute;\n        width: 2rem;\n        aspect-ratio: 1;\n        background:var(--menu);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        top: 5%;\n        right: 89%;\n        z-index: 9999;\n        border: none;\n        outline: none;\n        \n    }\n\n    .open{\n        background-image: var(--close);\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n    }\n\n    @supports (backdrop-filter: blur(1rem)){\n        nav{\n            background: var(--glass);\n            backdrop-filter: blur(var(--blur));\n        }\n    }\n\n    .elements{\n        display: none;\n    }\n\n    #container #home #info h1{\n        font-size: 4rem;\n        margin-bottom: 2rem;\n        text-align: center;\n    }\n\n    #container #home #info p{\n        margin: 0;\n        font-size: 1.2rem;\n        text-align: center;\n        padding: 1rem;\n    }\n\n    #container #home button{\n        margin: 0;\n        margin-top: 2rem;\n    }\n\n    #container #weatherH1{\n        font-size: 1.7rem;\n        text-align: center;\n    }\n\n    #container #weather{\n        min-width:60%;\n        max-width: 70%;\n        min-height: 20%;\n        max-height: 50%;\n    }\n\n    #container #weather #weatherInfo{\n        width: 100%;\n    }\n\n    #container #weather #weatherInfo h2, h3{\n        font-size: 1rem;\n    }\n\n    #theme{\n        left: 83%;\n        top: 88%;\n    }\n\n    #container #body h1{\n        font-size: 3rem;\n    }\n\n    #container #body{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    #container #body #image{\n        position: initial;\n        display: block;\n        inset: 0;\n        height: 15rem;\n        width: 15rem;\n    }\n\n    #container #body #description{\n        margin: 0;\n        padding: 0;\n        flex-direction: column;\n        margin-top: 1rem;\n    }\n\n    #container #body #description p{\n        width: 100%;\n        font-size: 1rem;\n    }\n\n    #container #weather input{\n        width: 10rem;\n    }\n}\n\n\n@media (min-width: 600px){\n    header .menu{\n        display: none;\n    }\n\n    nav button{\n        margin: 0rem 2rem;\n        font-size: 1rem;\n    }\n\n    body{\n        overflow: hidden;\n    }\n}`,""]);const U=k},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var d=n[c],s=r.base?d[0]+r.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var h=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var d=r(n,o),s=0;s<i.length;s++){var l=t(i[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=d}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},453:(n,e,t)=>{n.exports=t.p+"a1425ad77b9dbda145d6.png"},162:(n,e,t)=>{n.exports=t.p+"32c76403ffdf64380082.svg"},901:(n,e,t)=>{n.exports=t.p+"75e0546a6b5abe4c0506.png"},3:(n,e,t)=>{n.exports=t.p+"bcaf4231239299f2ef09.jpg"},292:(n,e,t)=>{n.exports=t.p+"f948e53b92ad2941259c.png"},40:(n,e,t)=>{n.exports=t.p+"8c318b3847854de792c1.svg"},640:(n,e,t)=>{n.exports=t.p+"4ca05a8b20c09f65ef26.svg"},301:(n,e,t)=>{n.exports=t.p+"64db14bed4eabd780df3.png"},535:(n,e,t)=>{n.exports=t.p+"0a432c525a83ed39f9a9.svg"},932:(n,e,t)=>{n.exports=t.p+"5649cb664615485cde27.svg"},789:(n,e,t)=>{n.exports=t.p+"ea52861e9454d3041bc4.svg"},771:(n,e,t)=>{n.exports=t.p+"7b38893c76d4c53ac851.svg"},173:(n,e,t)=>{n.exports=t.p+"f6b99bfa6eff42634dd4.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),i=t(659),a=t.n(i),c=t(56),d=t.n(c),s=t(540),l=t.n(s),p=t(113),m=t.n(p),u=t(208),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),e()(u.A,h),u.A&&u.A.locals&&u.A.locals;const g=()=>{document.getElementById("container").innerHTML=""},f=()=>{const n=document.createElement("div");n.id="weather";const e=document.createElement("h1");e.id="weatherH1",e.innerHTML="Where do you want to find the weather in?";const t=document.createElement("div"),r=document.createElement("label");r.innerHTML="Enter The City",r.htmlFor="input";const o=document.createElement("input");o.id="input",o.maxLength="15",o.minLength="2";const i=document.createElement("button");i.addEventListener("click",(()=>{""!==o.value?async function(n){document.getElementById("input").value="";const e=await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q="+n+"&appid=213a40d68b72d08448b191cd0b5a7a14");if("404"==e.status){console.log("error");const n=document.querySelector("dialog");n.showModal(),document.getElementById("container").style.opacity=".3",n.querySelector("button").addEventListener("click",(()=>{n.close(),document.getElementById("container").style.opacity="1"}))}else{var t=await e.json();console.log(t);const r=document.getElementById("weather-type"),o=document.getElementById("location"),i=document.getElementById("temperature"),a=document.getElementById("humidity"),c=document.getElementById("windspeed");o.innerHTML=n,i.innerHTML=t.main.temp+" °C",a.innerHTML=t.main.humidity,c.innerHTML=t.wind.speed,"Clouds"===t.weather[0].main?(r.src="./assets/clouds.png",r.alt="Cloudy"):"Clear"===t.weather[0].main?(r.src="./assets/clear.png",r.alt="Clear Weather"):"Haze"===t.weather[0].main?(r.src="./assets/mist.png",r.alt="Hazey"):"Snow"===t.weather[0].main?(r.src="./assets/snow.png",r.alt="Snowy"):"Rain"===t.weather[0].main&&(r.src="./assets/drizzle.png",r.alt="Rainy")}}(o.value.toUpperCase()):window.alert("insert the city")}));const a=document.createElement("img");a.id="weather-type";const c=document.createElement("h2");c.id="location";const d=document.createElement("h3");d.id="temperature";const s=document.createElement("div");s.id="weatherInfo";const l=document.createElement("h3");l.innerHTML="N/A",l.id="humidity";const p=document.createElement("h2");p.innerHTML="Humidity:";const m=document.createElement("h3");m.id="windspeed",m.innerHTML="N/A";const u=document.createElement("h2");u.innerHTML="Wind Speed:",t.appendChild(o),t.appendChild(r),t.appendChild(i),n.appendChild(t),n.appendChild(a),n.appendChild(c),n.appendChild(d),s.appendChild(p),s.appendChild(l),s.appendChild(u),s.appendChild(m),n.appendChild(s);const h=document.getElementById("container");h.appendChild(e),h.appendChild(n)},b=t.p+"eb38c7d2a6bfb6aa659f.png",v=t.p+"8400ec078f386729f9e4.png",y=()=>{const n=document.createElement("div");n.id="home";const e=document.createElement("div");e.id="sun",n.appendChild(e),e.classList.add("elements");const t=document.createElement("div");t.id="rain",n.appendChild(t),t.classList.add("elements");const r=document.createElement("div");r.id="thunder",n.appendChild(r),r.classList.add("elements");const o=document.createElement("div");o.id="wind-cloud",n.appendChild(o),o.classList.add("elements");const i=document.createElement("div");i.id="wind-night",n.appendChild(i),i.classList.add("elements");const a=document.createElement("div");a.id="windy",n.appendChild(a),a.classList.add("elements");const c=document.createElement("div");c.id="info";const d=document.createElement("h1");d.innerHTML="Check The Weather",c.appendChild(d);const s=document.createElement("p");s.innerHTML="Search the location and get the weather details. With just one click!",c.appendChild(s);const l=document.createElement("button");l.id="cta",l.innerHTML="Check Weather",c.appendChild(l),n.appendChild(c);const p=document.getElementById("container");n.style.opacity="0",n.style.transition="opacity .3s",p.appendChild(n),setTimeout((()=>{n.style.opacity="1"}),300)},w=()=>{const n=document.createElement("div");n.id="body";const e=document.createElement("h1");e.innerHTML="Nisul Munidasa",n.appendChild(e);const t=document.createElement("div");t.ariaHidden="true",t.id="image",n.appendChild(t);const r=document.createElement("div");r.id="description";const o=document.createElement("p");o.innerHTML="I am a web developer still learning my trade. If you have some internships for me or want to disucuss a project with me or want to ask a question or want to propose me, DM me at my instagram 😊",r.appendChild(o);const i=document.createElement("div");i.id="insta";const a=document.createElement("div");i.appendChild(a);const c=document.createElement("a");c.target="_blank",c.href="https://www.instagram.com/ohh.itz.nisul/",c.innerHTML="Instagram/Nisul Munidasa",c.ariaLabel="Nisul Munidasa's Instagram Page",i.appendChild(c),r.appendChild(i),n.appendChild(r);const d=document.getElementById("container");n.style.opacity="0",n.style.transition="opacity .3s",d.appendChild(n),setTimeout((()=>{n.style.opacity="1"}),300)};g(),y(),(()=>{const n=document.querySelector("nav"),e=n.querySelectorAll("button"),t=document.querySelector(".menu");t.addEventListener("click",(()=>{"false"==n.getAttribute("data-visible")?(n.setAttribute("data-visible","true"),t.classList.add("open")):(n.setAttribute("data-visible","false"),t.classList.remove("open"))})),document.querySelector("#container").addEventListener("click",(()=>{"true"==n.getAttribute("data-visible")&&(n.setAttribute("data-visible","false"),t.classList.remove("open"))})),e.forEach((n=>{n.addEventListener("click",(()=>{!0===n.classList.contains("unselected")&&(n.classList.remove("unselected"),e.forEach((e=>{e!==n&&e.classList.add("unselected")})))}))}));const r=document.getElementById("cta");r?r.addEventListener("click",(()=>{g(),f();const n=document.getElementById("weather-button");n.classList.remove("unselected"),e.forEach((e=>{e!==n&&e.classList.add("unselected")}))})):console.log("cta doesn't exist")})(),(()=>{const n=document.getElementById("theme"),e=document.documentElement;window.matchMedia("(prefers-color-scheme: dark)").matches?(e.setAttribute("data-theme","dark"),n.style.backgroundImage=`url(${b})`):(e.setAttribute("data-theme","light"),n.style.backgroundImage=`url(${v})`),n.addEventListener("click",(()=>{const t="light"===e.getAttribute("data-theme")?"dark":"light";n.style.backgroundImage="light"===t?`url(${v})`:`url(${b})`,e.setAttribute("data-theme",t)}))})();const x=document.getElementById("home-button"),k=document.getElementById("weather-button"),E=document.getElementById("about-button"),L=document.getElementById("hire-button");x.addEventListener("click",(()=>{g(),y()})),E.addEventListener("click",(()=>{g(),w()})),L.addEventListener("click",(()=>{g(),w()})),k.addEventListener("click",(()=>{g(),f()}))})()})();