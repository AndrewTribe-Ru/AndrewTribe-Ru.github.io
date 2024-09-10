import{g as ee,r as O,j as f,D as k,x as C,q as E,p as x,$ as te,k as H,T as oe,l as ae,z as ne}from"./index.17a483d5.js";import{u as ie,v as q,a as le,b as se,c as re,r as A,s as ue,p as D,d as ce}from"./position-engine.ae3b237b.js";import{u as de,a as fe,b as ve,c as he,g as j}from"./format.7877170e.js";import{u as me,a as ge,b as Te,c as pe}from"./use-tick.5666653d.js";import{h as ye}from"./render.c21811ee.js";var ke=ee({name:"QTooltip",inheritAttrs:!1,props:{...ie,...de,...me,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{default:"jump-down"},transitionHide:{default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:q},self:{type:String,default:"top middle",validator:q},offset:{type:Array,default:()=>[14,14],validator:le},scrollTarget:{default:void 0},delay:{type:Number,default:0},hideDelay:{type:Number,default:0}},emits:[...fe],setup(e,{slots:M,emit:T,attrs:v}){let i,l;const h=ae(),{proxy:{$q:o}}=h,s=O(null),c=O(!1),L=f(()=>D(e.anchor,o.lang.rtl)),Q=f(()=>D(e.self,o.lang.rtl)),W=f(()=>e.persistent!==!0),{registerTick:N,removeTick:R}=ge(),{registerTimeout:d}=ve(),{transitionProps:_,transitionStyle:$}=Te(e),{localScrollTarget:p,changeScrollEvent:z,unconfigureScrollTarget:B}=se(e,P),{anchorEl:a,canShow:I,anchorEvents:r}=re({showing:c,configureAnchorEl:X}),{show:U,hide:m}=he({showing:c,canShow:I,handleShow:F,handleHide:G,hideOnRouteChange:W,processOnMount:!0});Object.assign(r,{delayShow:J,delayHide:K});const{showPortal:y,hidePortal:b,renderPortal:V}=pe(h,s,Z,"tooltip");if(o.platform.is.mobile===!0){const t={anchorEl:a,innerRef:s,onClickOutside(n){return m(n),n.target.classList.contains("q-dialog__backdrop")&&ne(n),!0}},g=f(()=>e.modelValue===null&&e.persistent!==!0&&c.value===!0);k(g,n=>{(n===!0?ce:A)(t)}),C(()=>{A(t)})}function F(t){y(),N(()=>{l=new MutationObserver(()=>u()),l.observe(s.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),u(),P()}),i===void 0&&(i=k(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,u)),d(()=>{y(!0),T("show",t)},e.transitionDuration)}function G(t){R(),b(),S(),d(()=>{b(!0),T("hide",t)},e.transitionDuration)}function S(){l!==void 0&&(l.disconnect(),l=void 0),i!==void 0&&(i(),i=void 0),B(),E(r,"tooltipTemp")}function u(){ue({targetEl:s.value,offset:e.offset,anchorEl:a.value,anchorOrigin:L.value,selfOrigin:Q.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function J(t){if(o.platform.is.mobile===!0){j(),document.body.classList.add("non-selectable");const g=a.value,n=["touchmove","touchcancel","touchend","click"].map(w=>[g,w,"delayHide","passiveCapture"]);x(r,"tooltipTemp",n)}d(()=>{U(t)},e.delay)}function K(t){o.platform.is.mobile===!0&&(E(r,"tooltipTemp"),j(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),d(()=>{m(t)},e.hideDelay)}function X(){if(e.noParentEvent===!0||a.value===null)return;const t=o.platform.is.mobile===!0?[[a.value,"touchstart","delayShow","passive"]]:[[a.value,"mouseenter","delayShow","passive"],[a.value,"mouseleave","delayHide","passive"]];x(r,"anchor",t)}function P(){if(a.value!==null||e.scrollTarget!==void 0){p.value=te(a.value,e.scrollTarget);const t=e.noParentEvent===!0?u:m;z(p.value,t)}}function Y(){return c.value===!0?H("div",{...v,ref:s,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",v.class],style:[v.style,$.value],role:"tooltip"},ye(M.default)):null}function Z(){return H(oe,_.value,Y)}return C(S),Object.assign(h.proxy,{updatePosition:u}),V}});export{ke as Q};
