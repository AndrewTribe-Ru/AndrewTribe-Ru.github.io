import{Q as d}from"./QBtn.dab5c315.js";import{Q as L,a as b,b as h,c as T}from"./QDrawer.d9704a4f.js";import{Q as k}from"./QItem.e67408f3.js";import{Q as y}from"./QList.dfe8eab7.js";import{Q as B,a as C}from"./QLayout.5e6a12e0.js";import{D,_ as V}from"./Darkmode.ec559cb7.js";import{u as p,o as n,c as f,E as F,r as c,a3 as M,w as t,l as H,a as e,e as I,d as N,a4 as O,a5 as P,a6 as U,a7 as $,a8 as q}from"./index.17a483d5.js";import{u as E}from"./userStore.0c1dab23.js";import"./render.c21811ee.js";import"./QResizeObserver.f7851895.js";import"./format.7877170e.js";import"./use-dark.b138e361.js";import"./TouchPan.dea299a3.js";import"./touch.3df10340.js";import"./QScrollObserver.aad52378.js";const S={__name:"MoveToFnt",setup(_){const s=p(),l=()=>{s.push("/index")};return(o,i)=>(n(),f(d,{class:"q-mr-md",flat:"",round:"",dense:"",label:"FO",onClick:l}))}},re={__name:"BOMainLayout",setup(_){const{proxy:s}=H(),{setUserInfo:l,userInfo:o}=E(),i=p(),v=()=>{const m=o.role=="user"?"/index":"/";i.push(m)};F(()=>{(!o||(o==null?void 0:o.role)!=="admin")&&v()});const g=c(s.$welcomMsg),a=c(!1),Q=[{title:"Home",icon:"home",to:"/adm/home"},{title:"\uCEE8\uD150\uCE20",icon:"class",to:"/adm/contents"},{title:"\uAC1C\uAC15\uAD00\uB9AC",icon:"assignment",to:"/adm/course"},{title:"\uBB38\uC81C\uAD00\uB9AC",icon:"assignment",to:"/adm/qtn"},{title:"\uCD1D\uD68C\uC7A5\uB2D8 \uB9D0\uC500",icon:"assignment",to:"/adm/words"}],w=()=>a.value=!a.value;return(m,u)=>{const x=M("router-view");return n(),f(B,{view:"lHh Lpr lFf"},{default:t(()=>[e(h,{elevated:"",class:"flex"},{default:t(()=>[e(L,null,{default:t(()=>[e(d,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:w}),e(b,null,{default:t(()=>[I(" Admin Page ")]),_:1}),e(S),e(D)]),_:1})]),_:1}),e(T,{modelValue:a.value,"onUpdate:modelValue":u[0]||(u[0]=r=>a.value=r),"show-if-above":"",bordered:""},{default:t(()=>[e(y,null,{default:t(()=>[e(k,{header:""},{default:t(()=>[N("div",null,O(g.value),1)]),_:1}),(n(),P($,null,U(Q,r=>e(V,q({key:r.title},r),null,16)),64))]),_:1})]),_:1},8,["modelValue"]),e(C,null,{default:t(()=>[e(x)]),_:1})]),_:1})}}};export{re as default};
