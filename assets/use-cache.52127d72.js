import{u as We,a as ht,b as yt,c as bt,f as st,d as Lt}from"./QInput.3b53e200.js";import{g as Pe,h as Dt,i as Kt,j as d,k as V,l as Re,z as oe,r as E,D as ae,t as $t,$ as Nt,T as jt,x as Ue,af as Qt,_ as Wt,J as ne,G as Ut,as as Xt,K as Yt,L as Gt,I as Jt,at as Zt,B as je,au as Fe,n as el,s as Ve,N as tl}from"./index.17a483d5.js";import{R as ll,a as _e}from"./QBtn.dab5c315.js";import{u as wt,a as Ct}from"./use-dark.b138e361.js";import{c as ul,d as nl,h as ol,a as al}from"./render.c21811ee.js";import{a as il,Q as rl,b as sl}from"./QItem.e67408f3.js";import{u as cl,v as ct,a as dl,b as fl,c as vl,r as dt,s as ml,p as ft,d as Sl}from"./position-engine.ae3b237b.js";import{u as gl,a as hl,b as yl,c as bl,n as vt}from"./format.7877170e.js";import{u as wl,a as Cl,b as Vl,c as xl,d as kl}from"./use-tick.5666653d.js";import{a as ql,r as Al,b as mt,c as Ol,Q as Fl}from"./QDialog.86dd37ae.js";import{a as zl}from"./focus-manager.05708ea9.js";import{u as Ml,a as Il}from"./use-form.e660d19e.js";var Tl=Pe({name:"QField",inheritAttrs:!1,props:{...We,tag:{type:String,default:"label"}},emits:ht,setup(){return yt(bt({requiredForAttr:!1,tagProp:!0}))}});const pl={xs:8,sm:10,md:14,lg:20,xl:24};var Bl=Pe({name:"QChip",props:{...wt,...Dt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:s,emit:r}){const{proxy:{$q:b}}=Re(),k=Ct(e,b),i=Kt(e,pl),F=d(()=>e.selected===!0||e.icon!==void 0),h=d(()=>e.selected===!0?e.iconSelected||b.iconSet.chip.selected:e.icon),y=d(()=>e.iconRemove||b.iconSet.chip.remove),z=d(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=d(()=>{const f=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(f?` text-${f} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(z.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(k.value===!0?" q-chip--dark q-dark":"")}),S=d(()=>{const f=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},L={...f,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||b.lang.label.remove};return{chip:f,remove:L}});function w(f){f.keyCode===13&&x(f)}function x(f){e.disable||(r("update:selected",!e.selected),r("click",f))}function M(f){(f.keyCode===void 0||f.keyCode===13)&&(oe(f),e.disable===!1&&(r("update:modelValue",!1),r("remove")))}function D(){const f=[];z.value===!0&&f.push(V("div",{class:"q-focus-helper"})),F.value===!0&&f.push(V(_e,{class:"q-chip__icon q-chip__icon--left",name:h.value}));const L=e.label!==void 0?[V("div",{class:"ellipsis"},[e.label])]:void 0;return f.push(V("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},nl(s.default,L))),e.iconRight&&f.push(V(_e,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&f.push(V(_e,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:y.value,...S.value.remove,onClick:M,onKeyup:M})),f}return()=>{if(e.modelValue===!1)return;const f={class:c.value,style:i.value};return z.value===!0&&Object.assign(f,S.value.chip,{onClick:x,onKeyup:w}),ul("div",f,D(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ll,e.ripple]])}}}),_l=Pe({name:"QMenu",inheritAttrs:!1,props:{...cl,...gl,...wt,...wl,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:ct},self:{type:String,validator:ct},offset:{type:Array,validator:dl},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...hl,"click","escapeKey"],setup(e,{slots:s,emit:r,attrs:b}){let k=null,i,F,h;const y=Re(),{proxy:z}=y,{$q:c}=z,S=E(null),w=E(!1),x=d(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),M=Ct(e,c),{registerTick:D,removeTick:f}=Cl(),{registerTimeout:L}=yl(),{transitionProps:W,transitionStyle:P}=Vl(e),{localScrollTarget:I,changeScrollEvent:me,unconfigureScrollTarget:T}=fl(e,g),{anchorEl:$,canShow:Z}=vl({showing:w}),{hide:te}=bl({showing:w,canShow:Z,handleShow:se,handleHide:l,hideOnRouteChange:x,processOnMount:!0}),{showPortal:U,hidePortal:ie,renderPortal:K}=xl(y,S,B,"menu"),ee={anchorEl:$,innerRef:S,onClickOutside(u){if(e.persistent!==!0&&w.value===!0)return te(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&oe(u),!0}},re=d(()=>ft(e.anchor||(e.cover===!0?"center middle":"bottom start"),c.lang.rtl)),le=d(()=>e.cover===!0?re.value:ft(e.self||"top start",c.lang.rtl)),j=d(()=>(e.square===!0?" q-menu--square":"")+(M.value===!0?" q-menu--dark q-dark":"")),ke=d(()=>e.autoClose===!0?{onClick:q}:{}),ue=d(()=>w.value===!0&&e.persistent!==!0);ae(ue,u=>{u===!0?(Ol(C),Sl(ee)):(mt(C),dt(ee))});function X(){zl(()=>{let u=S.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function se(u){if(k=e.noRefocus===!1?document.activeElement:null,ql(p),U(),g(),i=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const R=$t(u);if(R.left!==void 0){const{top:Y,left:Se}=$.value.getBoundingClientRect();i={left:R.left-Se,top:R.top-Y}}}F===void 0&&(F=ae(()=>c.screen.width+"|"+c.screen.height+"|"+e.self+"|"+e.anchor+"|"+c.lang.rtl,m)),e.noFocus!==!0&&document.activeElement.blur(),D(()=>{m(),e.noFocus!==!0&&X()}),L(()=>{c.platform.is.ios===!0&&(h=e.autoClose,S.value.click()),m(),U(!0),r("show",u)},e.transitionDuration)}function l(u){f(),ie(),o(!0),k!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?k.closest('[tabindex]:not([tabindex^="-"])'):void 0)||k).focus(),k=null),L(()=>{ie(!0),r("hide",u)},e.transitionDuration)}function o(u){i=void 0,F!==void 0&&(F(),F=void 0),(u===!0||w.value===!0)&&(Al(p),T(),dt(ee),mt(C)),u!==!0&&(k=null)}function g(){($.value!==null||e.scrollTarget!==void 0)&&(I.value=Nt($.value,e.scrollTarget),me(I.value,m))}function q(u){h!==!0?(kl(z,u),r("click",u)):h=!1}function p(u){ue.value===!0&&e.noFocus!==!0&&Qt(S.value,u.target)!==!0&&X()}function C(u){r("escapeKey"),te(u)}function m(){ml({targetEl:S.value,offset:e.offset,anchorEl:$.value,anchorOrigin:re.value,selfOrigin:le.value,absoluteOffset:i,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function B(){return V(jt,W.value,()=>w.value===!0?V("div",{role:"menu",...b,ref:S,tabindex:-1,class:["q-menu q-position-engine scroll"+j.value,b.class],style:[b.style,P.value],...ke.value},ol(s.default)):null)}return Ue(o),Object.assign(z,{focus:X,updatePosition:m}),K}});let Ee=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const s=document.createElement("div");Object.assign(s.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(s),e.scrollLeft=-1e3,Ee=e.scrollLeft>=0,e.remove()}const Q=1e3,El=["start","center","end","start-force","center-force","end-force"],Vt=Array.prototype.filter,Pl=window.getComputedStyle(document.body).overflowAnchor===void 0?Wt:function(e,s){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const r=e.children||[];Vt.call(r,k=>k.dataset&&k.dataset.qVsAnchor!==void 0).forEach(k=>{delete k.dataset.qVsAnchor});const b=r[s];b&&b.dataset&&(b.dataset.qVsAnchor="")}))};function xe(e,s){return e+s}function Qe(e,s,r,b,k,i,F,h){const y=e===window?document.scrollingElement||document.documentElement:e,z=k===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-F-h,scrollMaxSize:0,offsetStart:-F,offsetEnd:-h};if(k===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=y.scrollLeft,c.scrollViewSize+=y.clientWidth),c.scrollMaxSize=y.scrollWidth,i===!0&&(c.scrollStart=(Ee===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=y.scrollTop,c.scrollViewSize+=y.clientHeight),c.scrollMaxSize=y.scrollHeight),r!==null)for(let S=r.previousElementSibling;S!==null;S=S.previousElementSibling)S.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=S[z]);if(b!==null)for(let S=b.nextElementSibling;S!==null;S=S.nextElementSibling)S.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=S[z]);if(s!==e){const S=y.getBoundingClientRect(),w=s.getBoundingClientRect();k===!0?(c.offsetStart+=w.left-S.left,c.offsetEnd-=w.width):(c.offsetStart+=w.top-S.top,c.offsetEnd-=w.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function St(e,s,r,b){s==="end"&&(s=(e===window?document.body:e)[r===!0?"scrollWidth":"scrollHeight"]),e===window?r===!0?(b===!0&&(s=(Ee===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-s),window.scrollTo(s,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s):r===!0?(b===!0&&(s=(Ee===!0?e.scrollWidth-e.offsetWidth:0)-s),e.scrollLeft=s):e.scrollTop=s}function ze(e,s,r,b){if(r>=b)return 0;const k=s.length,i=Math.floor(r/Q),F=Math.floor((b-1)/Q)+1;let h=e.slice(i,F).reduce(xe,0);return r%Q!==0&&(h-=s.slice(i*Q,r).reduce(xe,0)),b%Q!==0&&b!==k&&(h-=s.slice(b,F*Q).reduce(xe,0)),h}const xt={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},eu=Object.keys(xt),Rl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...xt};function Hl({virtualScrollLength:e,getVirtualScrollTarget:s,getVirtualScrollEl:r,virtualScrollItemSizeComputed:b}){const k=Re(),{props:i,emit:F,proxy:h}=k,{$q:y}=h;let z,c,S,w=[],x;const M=E(0),D=E(0),f=E({}),L=E(null),W=E(null),P=E(null),I=E({from:0,to:0}),me=d(()=>i.tableColspan!==void 0?i.tableColspan:100);b===void 0&&(b=d(()=>i.virtualScrollItemSize));const T=d(()=>b.value+";"+i.virtualScrollHorizontal),$=d(()=>T.value+";"+i.virtualScrollSliceRatioBefore+";"+i.virtualScrollSliceRatioAfter);ae($,()=>{j()}),ae(T,Z);function Z(){le(c,!0)}function te(l){le(l===void 0?c:l)}function U(l,o){const g=s();if(g==null||g.nodeType===8)return;const q=Qe(g,r(),L.value,W.value,i.virtualScrollHorizontal,y.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd);S!==q.scrollViewSize&&j(q.scrollViewSize),K(g,q,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,El.indexOf(o)>-1?o:c>-1&&l>c?"end":"start")}function ie(){const l=s();if(l==null||l.nodeType===8)return;const o=Qe(l,r(),L.value,W.value,i.virtualScrollHorizontal,y.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd),g=e.value-1,q=o.scrollMaxSize-o.offsetStart-o.offsetEnd-D.value;if(z===o.scrollStart)return;if(o.scrollMaxSize<=0){K(l,o,0,0);return}S!==o.scrollViewSize&&j(o.scrollViewSize),ee(I.value.from);const p=Math.floor(o.scrollMaxSize-Math.max(o.scrollViewSize,o.offsetEnd)-Math.min(x[g],o.scrollViewSize/2));if(p>0&&Math.ceil(o.scrollStart)>=p){K(l,o,g,o.scrollMaxSize-o.offsetEnd-w.reduce(xe,0));return}let C=0,m=o.scrollStart-o.offsetStart,B=m;if(m<=q&&m+o.scrollViewSize>=M.value)m-=M.value,C=I.value.from,B=m;else for(let u=0;m>=w[u]&&C<g;u++)m-=w[u],C+=Q;for(;m>0&&C<g;)m-=x[C],m>-o.scrollViewSize?(C++,B=m):B=x[C]+m;K(l,o,C,B)}function K(l,o,g,q,p){const C=typeof p=="string"&&p.indexOf("-force")>-1,m=C===!0?p.replace("-force",""):p,B=m!==void 0?m:"start";let u=Math.max(0,g-f.value[B]),R=u+f.value.total;R>e.value&&(R=e.value,u=Math.max(0,R-f.value.total)),z=o.scrollStart;const Y=u!==I.value.from||R!==I.value.to;if(Y===!1&&m===void 0){ue(g);return}const{activeElement:Se}=document,G=P.value;Y===!0&&G!==null&&G!==Se&&G.contains(Se)===!0&&(G.addEventListener("focusout",re),setTimeout(()=>{G!==null&&G.removeEventListener("focusout",re)})),Pl(G,g-u);const Me=m!==void 0?x.slice(u,g).reduce(xe,0):0;if(Y===!0){const ce=R>=I.value.from&&u<=I.value.to?I.value.to:R;I.value={from:u,to:ce},M.value=ze(w,x,0,u),D.value=ze(w,x,R,e.value),requestAnimationFrame(()=>{I.value.to!==R&&z===o.scrollStart&&(I.value={from:I.value.from,to:R},D.value=ze(w,x,R,e.value))})}requestAnimationFrame(()=>{if(z!==o.scrollStart)return;Y===!0&&ee(u);const ce=x.slice(u,g).reduce(xe,0),de=ce+o.offsetStart+M.value,Ie=de+x[g];let qe=de+q;if(m!==void 0){const He=ce-Me,Ae=o.scrollStart+He;qe=C!==!0&&Ae<de&&Ie<Ae+o.scrollViewSize?Ae:m==="end"?Ie-o.scrollViewSize:de-(m==="start"?0:Math.round((o.scrollViewSize-x[g])/2))}z=qe,St(l,qe,i.virtualScrollHorizontal,y.lang.rtl),ue(g)})}function ee(l){const o=P.value;if(o){const g=Vt.call(o.children,u=>u.classList&&u.classList.contains("q-virtual-scroll--skip")===!1),q=g.length,p=i.virtualScrollHorizontal===!0?u=>u.getBoundingClientRect().width:u=>u.offsetHeight;let C=l,m,B;for(let u=0;u<q;){for(m=p(g[u]),u++;u<q&&g[u].classList.contains("q-virtual-scroll--with-prev")===!0;)m+=p(g[u]),u++;B=m-x[C],B!==0&&(x[C]+=B,w[Math.floor(C/Q)]+=B),C++}}}function re(){P.value!==null&&P.value!==void 0&&P.value.focus()}function le(l,o){const g=1*b.value;(o===!0||Array.isArray(x)===!1)&&(x=[]);const q=x.length;x.length=e.value;for(let C=e.value-1;C>=q;C--)x[C]=g;const p=Math.floor((e.value-1)/Q);w=[];for(let C=0;C<=p;C++){let m=0;const B=Math.min((C+1)*Q,e.value);for(let u=C*Q;u<B;u++)m+=x[u];w.push(m)}c=-1,z=void 0,M.value=ze(w,x,0,I.value.from),D.value=ze(w,x,I.value.to,e.value),l>=0?(ee(I.value.from),ne(()=>{U(l)})):X()}function j(l){if(l===void 0&&typeof window!="undefined"){const m=s();m!=null&&m.nodeType!==8&&(l=Qe(m,r(),L.value,W.value,i.virtualScrollHorizontal,y.lang.rtl,i.virtualScrollStickySizeStart,i.virtualScrollStickySizeEnd).scrollViewSize)}S=l;const o=parseFloat(i.virtualScrollSliceRatioBefore)||0,g=parseFloat(i.virtualScrollSliceRatioAfter)||0,q=1+o+g,p=l===void 0||l<=0?1:Math.ceil(l/b.value),C=Math.max(1,p,Math.ceil((i.virtualScrollSliceSize>0?i.virtualScrollSliceSize:10)/q));f.value={total:Math.ceil(C*q),start:Math.ceil(C*o),center:Math.ceil(C*(.5+o)),end:Math.ceil(C*(1+o)),view:p}}function ke(l,o){const g=i.virtualScrollHorizontal===!0?"width":"height",q={["--q-virtual-scroll-item-"+g]:b.value+"px"};return[l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"before",ref:L},[V("tr",[V("td",{style:{[g]:`${M.value}px`,...q},colspan:me.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"before",ref:L,style:{[g]:`${M.value}px`,...q}}),V(l,{class:"q-virtual-scroll__content",key:"content",ref:P,tabindex:-1},o.flat()),l==="tbody"?V(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[V("tr",[V("td",{style:{[g]:`${D.value}px`,...q},colspan:me.value})])]):V(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[g]:`${D.value}px`,...q}})]}function ue(l){c!==l&&(i.onVirtualScroll!==void 0&&F("virtualScroll",{index:l,from:I.value.from,to:I.value.to-1,direction:l<c?"decrease":"increase",ref:h}),c=l)}j();const X=Ut(ie,y.platform.is.ios===!0?120:35);Xt(()=>{j()});let se=!1;return Yt(()=>{se=!0}),Gt(()=>{if(se!==!0)return;const l=s();z!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?St(l,z,i.virtualScrollHorizontal,y.lang.rtl):U(c)}),Ue(()=>{X.cancel()}),Object.assign(h,{scrollTo:U,reset:Z,refresh:te}),{virtualScrollSliceRange:I,virtualScrollSliceSizeComputed:f,setVirtualScrollSize:j,onVirtualScrollEvt:X,localResetVirtualScroll:le,padVirtualScroll:ke,scrollTo:U,reset:Z,refresh:te}}const gt=e=>["add","add-unique","toggle"].includes(e),Ll=".*+?^${}()|[]\\",Dl=Object.keys(We);var tu=Pe({name:"QSelect",inheritAttrs:!1,props:{...Rl,...Ml,...We,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:gt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...ht,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:s,emit:r}){const{proxy:b}=Re(),{$q:k}=b,i=E(!1),F=E(!1),h=E(-1),y=E(""),z=E(!1),c=E(!1);let S=null,w=null,x,M,D,f=null,L,W,P,I;const me=E(null),T=E(null),$=E(null),Z=E(null),te=E(null),U=Il(e),ie=Lt(nt),K=d(()=>Array.isArray(e.options)?e.options.length:0),ee=d(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:re,virtualScrollSliceSizeComputed:le,localResetVirtualScroll:j,padVirtualScroll:ke,onVirtualScrollEvt:ue,scrollTo:X,setVirtualScrollSize:se}=Hl({virtualScrollLength:K,getVirtualScrollTarget:Ot,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:ee}),l=bt(),o=d(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const n=e.mapOptions===!0&&x!==void 0?x:[],v=a.map(O=>At(O,n));return e.modelValue===null&&t===!0?v.filter(O=>O!==null):v}return a}),g=d(()=>{const t={};return Dl.forEach(a=>{const n=e[a];n!==void 0&&(t[a]=n)}),t}),q=d(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),p=d(()=>st(o.value)),C=d(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||o.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),m=d(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),B=d(()=>K.value===0),u=d(()=>o.value.map(t=>N.value(t)).join(", ")),R=d(()=>e.displayValue!==void 0?e.displayValue:u.value),Y=d(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),Se=d(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||o.value.some(Y.value))),G=d(()=>l.focused.value===!0?e.tabindex:-1),Me=d(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":i.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),ce=d(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),de=d(()=>o.value.map((t,a)=>({index:a,opt:t,html:Y.value(t),selected:!0,removeAtIndex:qt,toggleOption:fe,tabindex:G.value}))),Ie=d(()=>{if(K.value===0)return[];const{from:t,to:a}=re.value;return e.options.slice(t,a).map((n,v)=>{const O=ge.value(n)===!0,A=Ke(n)===!0,H=t+v,_={clickable:!0,active:A,activeClass:Ae.value,manualFocus:!0,focused:!1,disable:O,tabindex:-1,dense:e.optionsDense,dark:q.value,role:"option","aria-selected":A===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{fe(n)}};return O!==!0&&(h.value===H&&(_.focused=!0),k.platform.is.desktop===!0&&(_.onMousemove=()=>{i.value===!0&&he(H)})),{index:H,opt:n,html:Y.value(n),label:N.value(n),selected:_.active,focused:_.focused,toggleOption:fe,setOptionIndex:he,itemProps:_}})}),qe=d(()=>e.dropdownIcon!==void 0?e.dropdownIcon:k.iconSet.arrow.dropdown),He=d(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ae=d(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),J=d(()=>De(e.optionValue,"value")),N=d(()=>De(e.optionLabel,"label")),ge=d(()=>De(e.optionDisable,"disable")),Te=d(()=>o.value.map(t=>J.value(t))),kt=d(()=>{const t={onInput:nt,onChange:ie,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Ge,onClick(a){M===!0&&Ve(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ie,t});ae(o,t=>{x=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(F.value!==!0&&i.value!==!0||p.value!==!0)&&(D!==!0&&Ce(),(F.value===!0||i.value===!0)&&ye(""))},{immediate:!0}),ae(()=>e.fillInput,Ce),ae(i,$e),ae(K,Ht);function Xe(t){return e.emitValue===!0?J.value(t):t}function Le(t){if(t>-1&&t<o.value.length)if(e.multiple===!0){const a=e.modelValue.slice();r("remove",{index:t,value:a.splice(t,1)[0]}),r("update:modelValue",a)}else r("update:modelValue",null)}function qt(t){Le(t),l.focus()}function Ye(t,a){const n=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&Oe(N.value(t),!0,!0),r("update:modelValue",n);return}if(o.value.length===0){r("add",{index:0,value:n}),r("update:modelValue",e.multiple===!0?[n]:n);return}if(a===!0&&Ke(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const v=e.modelValue.slice();r("add",{index:v.length,value:n}),v.push(n),r("update:modelValue",v)}function fe(t,a){if(l.editable.value!==!0||t===void 0||ge.value(t)===!0)return;const n=J.value(t);if(e.multiple!==!0){a!==!0&&(Oe(e.fillInput===!0?N.value(t):"",!0,!0),ve()),T.value!==null&&T.value.focus(),(o.value.length===0||Fe(J.value(o.value[0]),n)!==!0)&&r("update:modelValue",e.emitValue===!0?n:t);return}if((M!==!0||z.value===!0)&&l.focus(),Ge(),o.value.length===0){const A=e.emitValue===!0?n:t;r("add",{index:0,value:A}),r("update:modelValue",e.multiple===!0?[A]:A);return}const v=e.modelValue.slice(),O=Te.value.findIndex(A=>Fe(A,n));if(O>-1)r("remove",{index:O,value:v.splice(O,1)[0]});else{if(e.maxValues!==void 0&&v.length>=e.maxValues)return;const A=e.emitValue===!0?n:t;r("add",{index:v.length,value:A}),v.push(A)}r("update:modelValue",v)}function he(t){if(k.platform.is.desktop!==!0)return;const a=t>-1&&t<K.value?t:-1;h.value!==a&&(h.value=a)}function pe(t=1,a){if(i.value===!0){let n=h.value;do n=vt(n+t,-1,K.value-1);while(n!==-1&&n!==h.value&&ge.value(e.options[n])===!0);h.value!==n&&(he(n),X(n),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Be(n>=0?N.value(e.options[n]):L,!0))}}function At(t,a){const n=v=>Fe(J.value(v),t);return e.options.find(n)||a.find(n)||t}function De(t,a){const n=t!==void 0?t:a;return typeof n=="function"?n:v=>v!==null&&typeof v=="object"&&n in v?v[n]:v}function Ke(t){const a=J.value(t);return Te.value.find(n=>Fe(n,a))!==void 0}function Ge(t){e.useInput===!0&&T.value!==null&&(t===void 0||T.value===t.target&&t.target.value===u.value)&&T.value.select()}function Je(t){el(t,27)===!0&&i.value===!0&&(Ve(t),ve(),Ce()),r("keyup",t)}function Ze(t){const{value:a}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",S!==null&&(clearTimeout(S),S=null),w!==null&&(clearTimeout(w),w=null),Ce(),typeof a=="string"&&a.length!==0){const n=a.toLocaleLowerCase(),v=A=>{const H=e.options.find(_=>A.value(_).toLocaleLowerCase()===n);return H===void 0?!1:(o.value.indexOf(H)===-1?fe(H):ve(),!0)},O=A=>{v(J)!==!0&&(v(N)===!0||A===!0||ye(a,!0,()=>O(!0)))};O()}else l.clearValue(t)}function et(t){r("keypress",t)}function tt(t){if(r("keydown",t),tl(t)===!0)return;const a=y.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),n=t.shiftKey!==!0&&e.multiple!==!0&&(h.value>-1||a===!0);if(t.keyCode===27){je(t);return}if(t.keyCode===9&&n===!1){be();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&i.value===!1){oe(t),we();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&y.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&r("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof y.value!="string"||y.value.length===0)&&(oe(t),h.value=-1,pe(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&le.value!==void 0&&(oe(t),h.value=Math.max(-1,Math.min(K.value,h.value+(t.keyCode===33?-1:1)*le.value.view)),pe(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(oe(t),pe(t.keyCode===38?-1:1,e.multiple));const v=K.value;if((P===void 0||I<Date.now())&&(P=""),v>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){i.value!==!0&&we(t);const O=t.key.toLocaleLowerCase(),A=P.length===1&&P[0]===O;I=Date.now()+1500,A===!1&&(oe(t),P+=O);const H=new RegExp("^"+P.split("").map(Ne=>Ll.indexOf(Ne)>-1?"\\"+Ne:Ne).join(".*"),"i");let _=h.value;if(A===!0||_<0||H.test(N.value(e.options[_]))!==!0)do _=vt(_+1,-1,v-1);while(_!==h.value&&(ge.value(e.options[_])===!0||H.test(N.value(e.options[_]))!==!0));h.value!==_&&ne(()=>{he(_),X(_),_>=0&&e.useInput===!0&&e.fillInput===!0&&Be(N.value(e.options[_]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||n===!1))){if(t.keyCode!==9&&oe(t),h.value>-1&&h.value<v){fe(e.options[h.value]);return}if(a===!0){const O=(A,H)=>{if(H){if(gt(H)!==!0)return}else H=e.newValueMode;if(Oe("",e.multiple!==!0,!0),A==null)return;(H==="toggle"?fe:Ye)(A,H==="add-unique"),e.multiple!==!0&&(T.value!==null&&T.value.focus(),ve())};if(e.onNewValue!==void 0?r("newValue",y.value,O):O(y.value),e.multiple!==!0)return}i.value===!0?be():l.innerLoading.value!==!0&&we()}}function lt(){return M===!0?te.value:$.value!==null&&$.value.contentEl!==null?$.value.contentEl:void 0}function Ot(){return lt()}function Ft(){return e.hideSelected===!0?[]:s["selected-item"]!==void 0?de.value.map(t=>s["selected-item"](t)).slice():s.selected!==void 0?[].concat(s.selected()):e.useChips===!0?de.value.map((t,a)=>V(Bl,{key:"option-"+a,removable:l.editable.value===!0&&ge.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:G.value,onRemove(){t.removeAtIndex(a)}},()=>V("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:N.value(t.opt)}))):[V("span",{[Se.value===!0?"innerHTML":"textContent"]:R.value})]}function ut(){if(B.value===!0)return s["no-option"]!==void 0?s["no-option"]({inputValue:y.value}):void 0;const t=s.option!==void 0?s.option:n=>V(sl,{key:n.index,...n.itemProps},()=>V(il,()=>V(rl,()=>V("span",{[n.html===!0?"innerHTML":"textContent"]:n.label}))));let a=ke("div",Ie.value.map(t));return s["before-options"]!==void 0&&(a=s["before-options"]().concat(a)),al(s["after-options"],a)}function zt(t,a){const n=a===!0?{...Me.value,...l.splitAttrs.attributes.value}:void 0,v={ref:a===!0?T:void 0,key:"i_t",class:C.value,style:e.inputStyle,value:y.value!==void 0?y.value:"",type:"search",...n,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...kt.value};return t!==!0&&M===!0&&(Array.isArray(v.class)===!0?v.class=[...v.class,"no-pointer-events"]:v.class+=" no-pointer-events"),V("input",v)}function nt(t){S!==null&&(clearTimeout(S),S=null),w!==null&&(clearTimeout(w),w=null),!(t&&t.target&&t.target.qComposing===!0)&&(Be(t.target.value||""),D=!0,L=y.value,l.focused.value!==!0&&(M!==!0||z.value===!0)&&l.focus(),e.onFilter!==void 0&&(S=setTimeout(()=>{S=null,ye(y.value)},e.inputDebounce)))}function Be(t,a){y.value!==t&&(y.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?r("inputValue",t):w=setTimeout(()=>{w=null,r("inputValue",t)},e.inputDebounce))}function Oe(t,a,n){D=n!==!0,e.useInput===!0&&(Be(t,!0),(a===!0||n!==!0)&&(L=t),a!==!0&&ye(t))}function ye(t,a,n){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?r("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&o.value.length!==0&&D!==!0&&t===N.value(o.value[0])&&(t="");const v=setTimeout(()=>{i.value===!0&&(i.value=!1)},10);f!==null&&clearTimeout(f),f=v,r("filter",t,(O,A)=>{(a===!0||l.focused.value===!0)&&f===v&&(clearTimeout(f),typeof O=="function"&&O(),c.value=!1,ne(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?i.value===!0&&ve():i.value===!0?$e(!0):i.value=!0),typeof A=="function"&&ne(()=>{A(b)}),typeof n=="function"&&ne(()=>{n(b)})}))},()=>{l.focused.value===!0&&f===v&&(clearTimeout(f),l.innerLoading.value=!1,c.value=!1),i.value===!0&&(i.value=!1)})}function Mt(){return V(_l,{ref:$,class:m.value,style:e.popupContentStyle,modelValue:i.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&B.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:q.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:He.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ce.value,onScrollPassive:ue,onBeforeShow:at,onBeforeHide:It,onShow:Tt},ut)}function It(t){it(t),be()}function Tt(){se()}function pt(t){Ve(t),T.value!==null&&T.value.focus(),z.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Bt(t){Ve(t),ne(()=>{z.value=!1})}function _t(){const t=[V(Tl,{class:`col-auto ${l.fieldClass.value}`,...g.value,for:l.targetUid.value,dark:q.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:y.value.length!==0,...l.splitAttrs.listeners.value,onFocus:pt,onBlur:Bt},{...s,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return i.value===!0&&t.push(V("div",{ref:te,class:m.value+" scroll",style:e.popupContentStyle,...ce.value,onClick:je,onScrollPassive:ue},ut())),V(Fl,{ref:Z,modelValue:F.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:at,onBeforeHide:Et,onHide:Pt,onShow:Rt},()=>V("div",{class:"q-select__dialog"+(q.value===!0?" q-select__dialog--dark q-dark":"")+(z.value===!0?" q-select__dialog--focused":"")},t))}function Et(t){it(t),Z.value!==null&&Z.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Pt(t){ve(),l.focused.value===!1&&r("blur",t),Ce()}function Rt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&T.value!==null&&T.value!==t&&T.value.focus(),se()}function be(){F.value!==!0&&(h.value=-1,i.value===!0&&(i.value=!1),l.focused.value===!1&&(f!==null&&(clearTimeout(f),f=null),l.innerLoading.value===!0&&(r("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function we(t){l.editable.value===!0&&(M===!0?(l.onControlFocusin(t),F.value=!0,ne(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?ye(y.value):(B.value!==!0||s["no-option"]!==void 0)&&(i.value=!0))}function ve(){F.value=!1,be()}function Ce(){e.useInput===!0&&Oe(e.multiple!==!0&&e.fillInput===!0&&o.value.length!==0&&N.value(o.value[0])||"",!0,!0)}function $e(t){let a=-1;if(t===!0){if(o.value.length!==0){const n=J.value(o.value[0]);a=e.options.findIndex(v=>Fe(J.value(v),n))}j(a)}he(a)}function Ht(t,a){i.value===!0&&l.innerLoading.value===!1&&(j(-1,!0),ne(()=>{i.value===!0&&l.innerLoading.value===!1&&(t>a?j():$e(!0))}))}function ot(){F.value===!1&&$.value!==null&&$.value.updatePosition()}function at(t){t!==void 0&&Ve(t),r("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&Ve(t),r("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function rt(){M=k.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?s["no-option"]!==void 0||e.onFilter!==void 0||B.value===!1:!0),W=k.platform.is.ios===!0&&M===!0&&e.useInput===!0?"fade":e.transitionShow}return Jt(rt),Zt(ot),rt(),Ue(()=>{S!==null&&clearTimeout(S),w!==null&&clearTimeout(w)}),Object.assign(b,{showPopup:we,hidePopup:ve,removeAtIndex:Le,add:Ye,toggleOption:fe,getOptionIndex:()=>h.value,setOptionIndex:he,moveOptionSelection:pe,filter:ye,updateMenuPosition:ot,updateInputValue:Oe,isOptionSelected:Ke,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>ge.value.apply(null,t)===!0,getOptionValue:(...t)=>J.value.apply(null,t),getOptionLabel:(...t)=>N.value.apply(null,t)}),Object.assign(l,{innerValue:o,fieldClass:d(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:me,targetRef:T,hasValue:p,showPopup:we,floatingLabel:d(()=>e.hideSelected!==!0&&p.value===!0||typeof y.value=="number"||y.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(F.value===!0||B.value!==!0||s["no-option"]!==void 0))return M===!0?_t():Mt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{Ce(),be()})},onClick(t){if(je(t),M!==!0&&i.value===!0){be(),T.value!==null&&T.value.focus();return}we(t)}},getControl:t=>{const a=Ft(),n=t===!0||F.value!==!0||M!==!0;if(e.useInput===!0)a.push(zt(t,n));else if(l.editable.value===!0){const O=n===!0?Me.value:void 0;a.push(V("input",{ref:n===!0?T:void 0,key:"d_t",class:"q-select__focus-target",id:n===!0?l.targetUid.value:void 0,value:R.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...O,onKeydown:tt,onKeyup:Je,onKeypress:et})),n===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(V("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(U.value!==void 0&&e.disable!==!0&&Te.value.length!==0){const O=Te.value.map(A=>V("option",{value:A,selected:!0}));a.push(V("select",{class:"hidden",name:U.value,multiple:e.multiple},O))}const v=e.useInput===!0||n!==!0?void 0:l.splitAttrs.attributes.value;return V("div",{class:"q-field__native row items-center",...v,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[V(_e,{class:"q-select__dropdown-icon"+(i.value===!0?" rotate-180":""),name:qe.value})]:null}),yt(l)}});function lu(){const e=new Map;return{getCache:function(s,r){return e[s]===void 0?e[s]=r:e[s]},getCacheWithFn:function(s,r){return e[s]===void 0?e[s]=r():e[s]}}}export{tu as Q,_l as a,Bl as b,Rl as c,Hl as d,eu as e,Ee as r,lu as u};
