import{Q as C,a as f,b}from"./QLayout.be1ecf81.js";import{h as I,Q as m}from"./QBtn.01e2001d.js";import{c as Q,i as g,e as l,d as y,h as w,l as V,p as k,g as q,f as P,u as S,j as F,r as h,o as $,k as B,w as d,m as r,n as p,q as x,s as v,t as K}from"./index.72a4b063.js";var N=Q({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:s}){const{proxy:{$q:u}}=q(),t=g(V,l);if(t===l)return console.error("QPage needs to be a deep child of QLayout"),l;if(g(k,l)===l)return console.error("QPage needs to be child of QPageContainer"),l;const i=y(()=>{const e=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof n.styleFn=="function"){const o=t.isContainer.value===!0?t.containerHeight.value:u.screen.height;return n.styleFn(e,o)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-e+"px":u.screen.height===0?e!==0?`calc(100vh - ${e}px)`:"100vh":u.screen.height-e+"px"}}),a=y(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>w("main",{class:a.value,style:i.value},I(s.default))}});const U=P("user",{state:()=>({userInfo:{id:"",pw:"",role:""}}),actions:{setUserInfo(n){this.userInfo={},this.userInfo=n}},persist:{enabled:!0,strategies:[{key:"user",storage:localStorage}]}}),_={class:"q-pa-md flex flex-center column",style:{"max-width":"300px","text-align":"center"}},A={class:"q-gutter-y-md column",style:{"max-width":"300px"}},L={__name:"Login",setup(n){const s=S();U();const u=F(),t=h(""),c=h(""),i=async()=>{K.post("/login",{mbrId:t.value,mbrPw:c.value}).then(a=>{console.log("login success : ",a);const{code:e}=a.data;if(e==200){const o=a.data.Authorization;o?(s.saveToken(o),s.saveUserInfo({mbrId:a.data.mbrId,courseCd:a.data.courseCd,mbrName:a.data.mbrName,msgrTypeCd:a.data.msgrTypeCd,roles:a.data.roles}),u.push("/index")):s.loginFailure()}else s.loginFailure()})};return(a,e)=>($(),B(C,null,{default:d(()=>[r(b,null,{default:d(()=>[r(N,{class:"q-pa-xl flex flex-center"},{default:d(()=>[e[5]||(e[5]=p("section",{class:"q-mb-xl"},null,-1)),p("div",_,[e[4]||(e[4]=p("h6",null,"\uC548\uB155\uD558\uC138\uC694!",-1)),p("div",A,[r(f,{label:"ID",filled:"",modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),onKeyup:x(i,["enter"])},null,8,["modelValue"]),r(f,{label:"PASSWORD",filled:"",modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=o=>c.value=o),type:"password",onKeyup:x(i,["enter"])},null,8,["modelValue"]),r(m,{color:"primary",onClick:i},{default:d(()=>e[2]||(e[2]=[v("\uB85C\uADF8\uC778")])),_:1}),r(m,{color:"info"},{default:d(()=>e[3]||(e[3]=[v("\uD68C\uC6D0\uAC00\uC785")])),_:1})])])]),_:1})]),_:1})]),_:1}))}};export{L as default};
