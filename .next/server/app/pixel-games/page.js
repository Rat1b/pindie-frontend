(()=>{var e={};e.id=290,e.ids=[290],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},9341:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>_,originalPathname:()=>p,pages:()=>o,routeModule:()=>u,tree:()=>d});var i=a(482),s=a(9108),r=a(2563),n=a.n(r),l=a(8300),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);a.d(t,c);let d=["",{children:["pixel-games",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9267)),"F:\\Рабочий стол\\pindie-theme-8-main\\app\\pixel-games\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,3910)),"F:\\Рабочий стол\\pindie-theme-8-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["F:\\Рабочий стол\\pindie-theme-8-main\\app\\pixel-games\\page.js"],p="/pixel-games/page",_={require:a,loadChunk:()=>Promise.resolve()},u=new i.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/pixel-games/page",pathname:"/pixel-games",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4463:(e,t,a)=>{Promise.resolve().then(a.bind(a,4870))},5858:(e,t,a)=>{"use strict";a.d(t,{S:()=>r});var i=a(3729),s=a(6439);let r=(e,t)=>{let[a,r]=(0,i.useState)(null);return(0,i.useEffect)(()=>{(async function(){r(await (0,s.BJ)(e,t))})()},[]),a}},290:(e,t,a)=>{"use strict";a.d(t,{r:()=>j});var i=a(5344),s=a(1217),r=a.n(s),n=a(783),l=a.n(n),c=a(7246),d=a.n(c);let o=e=>(0,i.jsxs)("article",{className:d().card,children:[i.jsx("img",{src:e.image,alt:"",className:d().card__image}),(0,i.jsxs)("div",{className:d()["card__content-block"],children:[i.jsx("h3",{className:d().card__title,children:e.title}),i.jsx("p",{className:d().card__description,children:e.description}),(0,i.jsxs)("div",{className:d()["card__info-container"],children:[(0,i.jsxs)("p",{className:d().card__author,children:["Автор:"," ",i.jsx("span",{className:d().card__accent,children:e.developer})]}),(0,i.jsxs)("p",{className:d().card__votes,children:["Голосов на сайте:",i.jsx("span",{className:d().card__accent,children:e.users.length})]})]})]})]}),p=e=>i.jsx("ul",{className:r()["cards-list"],children:e.data.map(e=>i.jsx("li",{className:r()["cards-list__item"],children:i.jsx(l(),{href:`/games/${e.id}`,className:r()["card-list__link"],children:i.jsx(o,{...e})})},e.id))});var _=a(3732),u=a(3583);a(3754),a(3141);var x=a(3729),m=a(5563),h=a.n(m);let g=e=>((0,x.useEffect)(()=>{let e={loop:!1,spaceBetween:10,allowTouchMove:!0,slidesPerView:1,autoplay:{enabled:!1},pagination:{el:".swiper-pagination",type:"fraction",enabled:!0,clickable:!0},breakpoints:{450:{loop:!0,spaceBetween:20,allowTouchMove:!1,slidesPerView:"auto",speed:6500,autoplay:{enabled:!0,delay:0},pagination:{enabled:!1}}},modules:[u.pt,u.tl]};new _.Z(".swiper",e)},[]),(0,i.jsxs)("div",{className:`swiper ${h().slider}`,children:[i.jsx("ul",{className:`swiper-wrapper ${h()["slider-wrapper"]}`,children:e.data.map((e,t)=>i.jsx("li",{className:`swiper-slide ${h().slide}`,children:i.jsx(l(),{href:`/games/${e.id}`,children:i.jsx(o,{...e})})},t))}),i.jsx("div",{className:`swiper-pagination ${h().pagination}`})]})),j=e=>(0,i.jsxs)("section",{className:r()["list-section"],children:[i.jsx("h2",{className:r()["list-section__title"],id:e.id,children:e.title}),"slider"===e.type?i.jsx(g,{data:e.data}):i.jsx(p,{data:e.data})]})},239:(e,t,a)=>{"use strict";a.d(t,{p:()=>s});var i=a(5344);let s=()=>i.jsx("div",{style:{aspectRatio:"16/9",display:"grid",placeItems:"center"},className:"preloader",children:(0,i.jsxs)("svg",{style:{width:"10vw"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",children:[i.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",r:"15",cx:"35",cy:"100",children:i.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0"})}),i.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".8",r:"15",cx:"35",cy:"100",children:i.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0.05"})}),i.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".6",r:"15",cx:"35",cy:"100",children:i.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".1"})}),i.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".4",r:"15",cx:"35",cy:"100",children:i.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".15"})}),i.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".2",r:"15",cx:"35",cy:"100",children:i.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".2"})})]})})},4870:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var i=a(5344),s=a(3196),r=a(5858),n=a(290),l=a(239);function c(){let e=(0,r.S)(s.H.games,"pixel");return i.jsx("main",{className:"main-inner",children:e?i.jsx(n.r,{id:"pixel",title:"Пиксельные",data:e}):i.jsx(l.p,{})})}},7246:e=>{e.exports={card:"Card_card__CWDle",card__image:"Card_card__image__4mueK","card__content-block":"Card_card__content-block__wBJdj",card__title:"Card_card__title__GTs84",card__description:"Card_card__description__D5I82","card__info-container":"Card_card__info-container__4sDHi",card__author:"Card_card__author__u6zAO",card__accent:"Card_card__accent__yghaH",card__votes:"Card_card__votes__P29Ky"}},1217:e=>{e.exports={"list-section":"CardsListSection_list-section__MeWSR","list-section__title":"CardsListSection_list-section__title__IGZpD","cards-list":"CardsListSection_cards-list__2oXa_","card-list__link":"CardsListSection_card-list__link__yht_d"}},5563:e=>{e.exports={slider:"CardsSlider_slider__DGH8R",slide:"CardsSlider_slide__sq162","slider-wrapper":"CardsSlider_slider-wrapper__gP7pQ",pagination:"CardsSlider_pagination__wnCz1"}},9267:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>r,__esModule:()=>s,default:()=>n});let i=(0,a(6843).createProxy)(String.raw`F:\Рабочий стол\pindie-theme-8-main\app\pixel-games\page.js`),{__esModule:s,$$typeof:r}=i,n=i.default},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var i=a(337);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,i.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),i=t.X(0,[638,359,337,221,179],()=>a(9341));module.exports=i})();