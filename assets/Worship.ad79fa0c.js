import{Q as y}from"./QCardSection.2bf1f146.js";import{Q as x}from"./QImg.2695985a.js";import{Q as k}from"./QBtn.dab5c315.js";import{Q}from"./QCardActions.f63953ca.js";import{Q as C}from"./QCard.80b35fcd.js";import{Q as W}from"./QPage.70219a20.js";import{a2 as $,r as c,E as A,u as D,ay as _,o as a,c as m,w as t,al as j,a5 as r,a7 as b,a6 as P,a as s,d as n,a4 as q,e as E,a9 as I,aj as F,ak as M}from"./index.17a483d5.js";import{u as z}from"./use-quasar.764fdd7e.js";import{u as O}from"./useAxios.ef0e9d3f.js";import"./render.c21811ee.js";import"./use-dark.b138e361.js";import"./axios.6e1fcf85.js";const B=l=>(F("data-v-04b7550f"),l=l(),M(),l),R={key:0},T=B(()=>n("div",{class:"text-h6"},"\uC608\uBC30\uB9D0\uC500",-1)),G={class:"text-subtitle2"},H={key:1,class:"q-ma-md"},J=B(()=>n("div",null,null,-1)),K={key:0,class:"flex flex-center q-mt-md"},U={__name:"Worship",setup(l){const h=c(!1),i=c(!0),u=c({rows:10,currentPage:1});A(async()=>{g()});const f=z();console.log("$q : ",f);const S=D(),d=c([]),g=async()=>{_.show(),console.log("getlist..."),await O("/api/zion/rus/contents/worship/list",{method:"post",params:{rows:u.value.rows,currentPage:u.value.currentPage}}).then(e=>{if(console.log("res : ",e),e.data.header.code==="I001"){const w=e.data.body.list,o=e.data.body;L(o),d.value=w}else alert(e.data.header.message)}).catch(e=>{console.error(e),_.hide()}).finally(()=>{h.value=!0,_.hide()})},L=e=>{e.totalPageCnt===e.currentPage?i.value=!1:i.value=!0},v=e=>{console.log("ondetail : ",e),S.push({name:"worshipDetail",state:{dataObj:{label:e.title,url:e.url}}})},N=()=>{u.value.currentPage+=1,g()};return(e,w)=>h.value?(a(),m(W,{key:0},{default:t(()=>[j(f).screen.xs?(a(),r("section",R,[(a(!0),r(b,null,P(d.value,(o,p)=>(a(),m(C,{class:"q-ma-lg",key:p},{default:t(()=>[s(y,{class:"bg-secondary text-white"},{default:t(()=>[T,n("div",G,q(o.title),1)]),_:2},1024),s(Q,{vertical:"",align:"center"},{default:t(()=>[s(k,{class:"dtl_btn","no-caps":"",flat:"",onClick:V=>v(o)},{default:t(()=>[s(x,{src:"https://picsum.photos/500/300"})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024))),128))])):(a(),r("section",H,[(a(!0),r(b,null,P(d.value,(o,p)=>(a(),m(C,{class:"worship_wrapper flex q-mx-auto q-mt-md",key:p},{default:t(()=>[s(y,{class:"text-white q-pa-xs",style:{width:"30%"}},{default:t(()=>[s(x,{onClick:V=>v(o),src:"https://picsum.photos/500/300"},null,8,["onClick"])]),_:2},1024),s(Q,{vertical:"",align:"center",style:{width:"70%"}},{default:t(()=>[n("div",null,q(o.title),1),J]),_:2},1024)]),_:2},1024))),128)),i.value?(a(),r("div",K,[s(k,{onClick:N,rounded:""},{default:t(()=>[E("\uB354\uBCF4\uAE30")]),_:1})])):I("",!0)]))]),_:1})):I("",!0)}};var ie=$(U,[["__scopeId","data-v-04b7550f"]]);export{ie as default};
