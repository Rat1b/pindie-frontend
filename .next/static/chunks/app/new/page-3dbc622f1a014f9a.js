(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{7812:function(e,t,a){Promise.resolve().then(a.bind(a,4026))},5914:function(e,t,a){"use strict";a.d(t,{S:function(){return n}});var r=a(2265),i=a(6493);let n=(e,t)=>{let[a,n]=(0,r.useState)(null);return(0,r.useEffect)(()=>{(async function(){n(await (0,i.BJ)(e,t))})()},[]),a}},6493:function(e,t,a){"use strict";a.d(t,{BJ:function(){return l},BZ:function(){return h},Fw:function(){return _},Iq:function(){return o},Ns:function(){return f},ZB:function(){return d},d8:function(){return i},jo:function(){return p},li:function(){return s},v_:function(){return u}});let r=async e=>{try{let t=await fetch(e);if(200!==t.status)throw Error("Ошибка получения данных");return await t.json()}catch(e){return e}},i=e=>!(e instanceof Error),n=e=>{let t=JSON.stringify(e),a=JSON.parse(t=t.replaceAll("_id","id"));return{...a,category:a.categories}},c=e=>e.map(e=>n(e)),s=async(e,t)=>{let a=await r("".concat(e,"/").concat(t));return i(a)?n(a):a},l=async(e,t)=>{try{let a=await r("".concat(e,"?categories.name=").concat(t));if(!a.length)throw Error("Нет игр в категории");return i(a)?c(a):a}catch(e){return e}},o=async(e,t)=>{try{let a=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(200!==a.status)throw Error("Ошибка авторизации");return await a.json()}catch(e){return e}},d=e=>{document.cookie="jwt=".concat(e),localStorage.setItem("jwt",e)},u=()=>{if(""===document.cookie)return localStorage.getItem("jwt");let e=document.cookie.split(";").find(e=>e.includes("jwt"));return e?e.split("=")[1]:null},_=()=>{document.cookie="jwt=;",localStorage.removeItem("jwt")},p=async(e,t)=>{try{let a=await fetch(e,{method:"GET",headers:{Authorization:"Bearer ".concat(t)}});if(200!==a.status)throw Error("Ошибка получения данных");return await a.json()}catch(e){return e}},h=(e,t)=>e.users.find(e=>e.id===t),f=async(e,t,a)=>{try{let r=await fetch(e,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify({users:a})});if(200!==r.status)throw Error("Ошибка голосования");return await r.json()}catch(e){return e}}},1370:function(e,t,a){"use strict";a.d(t,{H:function(){return i}});let r="http://localhost:3001/api",i={games:"".concat(r,"/games"),auth:"".concat(r,"/auth/login"),me:"".concat(r,"/users/me")}},9500:function(e,t,a){"use strict";a.d(t,{r:function(){return j}});var r=a(7437),i=a(5237),n=a.n(i),c=a(1396),s=a.n(c),l=a(3297),o=a.n(l);let d=e=>(0,r.jsxs)("article",{className:o().card,children:[(0,r.jsx)("img",{src:e.image,alt:"",className:o().card__image}),(0,r.jsxs)("div",{className:o()["card__content-block"],children:[(0,r.jsx)("h3",{className:o().card__title,children:e.title}),(0,r.jsx)("p",{className:o().card__description,children:e.description}),(0,r.jsxs)("div",{className:o()["card__info-container"],children:[(0,r.jsxs)("p",{className:o().card__author,children:["Автор:"," ",(0,r.jsx)("span",{className:o().card__accent,children:e.developer})]}),(0,r.jsxs)("p",{className:o().card__votes,children:["Голосов на сайте:",(0,r.jsx)("span",{className:o().card__accent,children:e.users.length})]})]})]})]}),u=e=>(0,r.jsx)("ul",{className:n()["cards-list"],children:e.data.map(e=>(0,r.jsx)("li",{className:n()["cards-list__item"],children:(0,r.jsx)(s(),{href:"/games/".concat(e.id),className:n()["card-list__link"],children:(0,r.jsx)(d,{...e})})},e.id))});var _=a(1182),p=a(7062);a(6978),a(501);var h=a(2265),f=a(1834),m=a.n(f);let x=e=>((0,h.useEffect)(()=>{let e={loop:!1,spaceBetween:10,allowTouchMove:!0,slidesPerView:1,autoplay:{enabled:!1},pagination:{el:".swiper-pagination",type:"fraction",enabled:!0,clickable:!0},breakpoints:{450:{loop:!0,spaceBetween:20,allowTouchMove:!1,slidesPerView:"auto",speed:6500,autoplay:{enabled:!0,delay:0},pagination:{enabled:!1}}},modules:[p.pt,p.tl]};new _.Z(".swiper",e)},[]),(0,r.jsxs)("div",{className:"swiper ".concat(m().slider),children:[(0,r.jsx)("ul",{className:"swiper-wrapper ".concat(m()["slider-wrapper"]),children:e.data.map((e,t)=>(0,r.jsx)("li",{className:"swiper-slide ".concat(m().slide),children:(0,r.jsx)(s(),{href:"/games/".concat(e.id),children:(0,r.jsx)(d,{...e})})},t))}),(0,r.jsx)("div",{className:"swiper-pagination ".concat(m().pagination)})]})),j=e=>(0,r.jsxs)("section",{className:n()["list-section"],children:[(0,r.jsx)("h2",{className:n()["list-section__title"],id:e.id,children:e.title}),"slider"===e.type?(0,r.jsx)(x,{data:e.data}):(0,r.jsx)(u,{data:e.data})]})},2038:function(e,t,a){"use strict";a.d(t,{p:function(){return i}});var r=a(7437);let i=()=>(0,r.jsx)("div",{style:{aspectRatio:"16/9",display:"grid",placeItems:"center"},className:"preloader",children:(0,r.jsxs)("svg",{style:{width:"10vw"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200",children:[(0,r.jsx)("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",r:"15",cx:"35",cy:"100",children:(0,r.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0"})}),(0,r.jsx)("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".8",r:"15",cx:"35",cy:"100",children:(0,r.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:"0.05"})}),(0,r.jsx)("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".6",r:"15",cx:"35",cy:"100",children:(0,r.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".1"})}),(0,r.jsx)("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".4",r:"15",cx:"35",cy:"100",children:(0,r.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".15"})}),(0,r.jsx)("circle",{fill:"#FFF500",stroke:"#FFF500",strokeWidth:"15",opacity:".2",r:"15",cx:"35",cy:"100",children:(0,r.jsx)("animate",{attributeName:"cx",calcMode:"spline",dur:"2",values:"35;165;165;35;35",keySplines:"0 .1 .5 1;0 .1 .5 1;0 .1 .5 1;0 .1 .5 1",repeatCount:"indefinite",begin:".2"})})]})})},4026:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var r=a(7437),i=a(1370),n=a(5914),c=a(9500),s=a(2038);function l(){let e=(0,n.S)(i.H.games,"new");return(0,r.jsx)("main",{className:"main-inner",children:e?(0,r.jsx)(c.r,{id:"new",title:"Новые",data:e}):(0,r.jsx)(s.p,{})})}},3297:function(e){e.exports={card:"Card_card__CWDle",card__image:"Card_card__image__4mueK","card__content-block":"Card_card__content-block__wBJdj",card__title:"Card_card__title__GTs84",card__description:"Card_card__description__D5I82","card__info-container":"Card_card__info-container__4sDHi",card__author:"Card_card__author__u6zAO",card__accent:"Card_card__accent__yghaH",card__votes:"Card_card__votes__P29Ky"}},5237:function(e){e.exports={"list-section":"CardsListSection_list-section__MeWSR","list-section__title":"CardsListSection_list-section__title__IGZpD","cards-list":"CardsListSection_cards-list__2oXa_","card-list__link":"CardsListSection_card-list__link__yht_d"}},1834:function(e){e.exports={slider:"CardsSlider_slider__DGH8R",slide:"CardsSlider_slide__sq162","slider-wrapper":"CardsSlider_slider-wrapper__gP7pQ",pagination:"CardsSlider_pagination__wnCz1"}}},function(e){e.O(0,[176,143,971,938,744],function(){return e(e.s=7812)}),_N_E=e.O()}]);