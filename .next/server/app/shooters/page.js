(()=>{var e={};e.id=590,e.ids=[590],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4117:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>_,originalPathname:()=>p,pages:()=>o,routeModule:()=>u,tree:()=>d});var a=s(482),i=s(9108),r=s(2563),n=s.n(r),l=s(8300),c={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>l[e]);s.d(t,c);let d=["",{children:["shooters",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,7121)),"F:\\Рабочий стол\\pindie-theme-8-main\\app\\shooters\\page.js"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3910)),"F:\\Рабочий стол\\pindie-theme-8-main\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],o=["F:\\Рабочий стол\\pindie-theme-8-main\\app\\shooters\\page.js"],p="/shooters/page",_={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:i.x.APP_PAGE,page:"/shooters/page",pathname:"/shooters",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7482:(e,t,s)=>{Promise.resolve().then(s.bind(s,1162))},5858:(e,t,s)=>{"use strict";s.d(t,{S:()=>r});var a=s(3729),i=s(6439);let r=(e,t)=>{let[s,r]=(0,a.useState)(null);return(0,a.useEffect)(()=>{(async function(){r(await (0,i.BJ)(e,t))})()},[]),s}},290:(e,t,s)=>{"use strict";s.d(t,{r:()=>j});var a=s(5344),i=s(1217),r=s.n(i),n=s(783),l=s.n(n),c=s(7246),d=s.n(c);let o=e=>(0,a.jsxs)("article",{className:d().card,children:[a.jsx("img",{src:e.image,alt:"",className:d().card__image}),(0,a.jsxs)("div",{className:d()["card__content-block"],children:[a.jsx("h3",{className:d().card__title,children:e.title}),a.jsx("p",{className:d().card__description,children:e.description}),(0,a.jsxs)("div",{className:d()["card__info-container"],children:[(0,a.jsxs)("p",{className:d().card__author,children:["Автор:"," ",a.jsx("span",{className:d().card__accent,children:e.developer})]}),(0,a.jsxs)("p",{className:d().card__votes,children:["Голосов на сайте:",a.jsx("span",{className:d().card__accent,children:e.users.length})]})]})]})]}),p=e=>a.jsx("ul",{className:r()["cards-list"],children:e.data.map(e=>a.jsx("li",{className:r()["cards-list__item"],children:a.jsx(l(),{href:`/games/${e.id}`,className:r()["card-list__link"],children:a.jsx(o,{...e})})},e.id))});var _=s(3732),u=s(3583);s(3754),s(3141);var m=s(3729),x=s(5563),h=s.n(x);let g=e=>((0,m.useEffect)(()=>{let e={loop:!1,spaceBetween:10,allowTouchMove:!0,slidesPerView:1,autoplay:{enabled:!1},pagination:{el:".swiper-pagination",type:"fraction",enabled:!0,clickable:!0},breakpoints:{450:{loop:!0,spaceBetween:20,allowTouchMove:!1,slidesPerView:"auto",speed:6500,autoplay:{enabled:!0,delay:0},pagination:{enabled:!1}}},modules:[u.pt,u.tl]};new _.Z(".swiper",e)},[]),(0,a.jsxs)("div",{className:`swiper ${h().slider}`,children:[a.jsx("ul",{className:`swiper-wrapper ${h()["slider-wrapper"]}`,children:e.data.map((e,t)=>a.jsx("li",{className:`swiper-slide ${h().slide}`,children:a.jsx(l(),{href:`/games/${e.id}`,children:a.jsx(o,{...e})})},t))}),a.jsx("div",{className:`swiper-pagination ${h().pagination}`})]})),j=e=>(0,a.jsxs)("section",{className:r()["list-section"],children:[a.jsx("h2",{className:r()["list-section__title"],id:e.id,children:e.title}),"slider"===e.type?a.jsx(g,{data:e.data}):a.jsx(p,{data:e.data})]})},239:(e,t,s)=>{"use strict";s.d(t,{p:()=>i});var a=s(5344);let i=()=>a.jsx("div",{style:{aspectRatio:"16/9",display:"grid",placeItems:"center"},className:"preloader",children:(0,a.jsxs)("svg",{style:{width:"10vw"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",children:[a.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",r:"15",cx:"35",cy:"100",children:a.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0"})}),a.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".8",r:"15",cx:"35",cy:"100",children:a.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0.05"})}),a.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".6",r:"15",cx:"35",cy:"100",children:a.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".1"})}),a.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".4",r:"15",cx:"35",cy:"100",children:a.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".15"})}),a.jsx("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".2",r:"15",cx:"35",cy:"100",children:a.jsx("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".2"})})]})})},1162:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(5344),i=s(3196),r=s(5858),n=s(290),l=s(239);function c(){let e=(0,r.S)(i.H.games,"shooter");return a.jsx("main",{className:"main-inner",children:e?a.jsx(n.r,{id:"shooter",title:"Шутеры",data:e}):a.jsx(l.p,{})})}},7246:e=>{e.exports={card:"Card_card__CWDle",card__image:"Card_card__image__4mueK","card__content-block":"Card_card__content-block__wBJdj",card__title:"Card_card__title__GTs84",card__description:"Card_card__description__D5I82","card__info-container":"Card_card__info-container__4sDHi",card__author:"Card_card__author__u6zAO",card__accent:"Card_card__accent__yghaH",card__votes:"Card_card__votes__P29Ky"}},1217:e=>{e.exports={"list-section":"CardsListSection_list-section__MeWSR","list-section__title":"CardsListSection_list-section__title__IGZpD","cards-list":"CardsListSection_cards-list__2oXa_","card-list__link":"CardsListSection_card-list__link__yht_d"}},5563:e=>{e.exports={slider:"CardsSlider_slider__DGH8R",slide:"CardsSlider_slide__sq162","slider-wrapper":"CardsSlider_slider-wrapper__gP7pQ",pagination:"CardsSlider_pagination__wnCz1"}},7121:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>r,__esModule:()=>i,default:()=>n});let a=(0,s(6843).createProxy)(String.raw`F:\Рабочий стол\pindie-theme-8-main\app\shooters\page.js`),{__esModule:i,$$typeof:r}=a,n=a.default},7481:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var a=s(337);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,359,337,221,179],()=>s(4117));module.exports=a})();