import{g as b,D as m,E as h,x as S,_ as T,$ as x,l as C,A as E,a0 as P,a1 as M}from"./index.17a483d5.js";const{passive:v}=E,O=["both","horizontal","vertical"];var z=b({name:"QScrollObserver",props:{axis:{type:String,validator:e=>O.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:p}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,l,u;m(()=>e.scrollTarget,()=>{f(),d()});function i(){n!==null&&n();const a=Math.max(0,P(l)),c=M(l),o={top:a-t.position.top,left:c-t.position.left};if(e.axis==="vertical"&&o.top===0||e.axis==="horizontal"&&o.left===0)return;const g=Math.abs(o.top)>=Math.abs(o.left)?o.top<0?"up":"down":o.left<0?"left":"right";t.position={top:a,left:c},t.directionChanged=t.direction!==g,t.delta=o,t.directionChanged===!0&&(t.direction=g,t.inflectionPoint=t.position),p("scroll",{...t})}function d(){l=x(u,e.scrollTarget),l.addEventListener("scroll",r,v),r(!0)}function f(){l!==void 0&&(l.removeEventListener("scroll",r,v),l=void 0)}function r(a){if(a===!0||e.debounce===0||e.debounce==="0")i();else if(n===null){const[c,o]=e.debounce?[setTimeout(i,e.debounce),clearTimeout]:[requestAnimationFrame(i),cancelAnimationFrame];n=()=>{o(c),n=null}}}const{proxy:s}=C();return m(()=>s.$q.lang.rtl,i),h(()=>{u=s.$el.parentNode,d()}),S(()=>{n!==null&&n(),f()}),Object.assign(s,{trigger:r,getPosition:()=>t}),T}});export{z as Q};