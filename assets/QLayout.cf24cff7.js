import{v as be,r as T,x as J,y as L,d as b,z as Ie,g as Z,i as Ee,A as G,B as De,C as je,D as _e,E as He,F as Y,G as Ne,H as Ke,h as k,I as te,Q as Qe,T as Ue,J as Ze,K as We,c as oe,L as pe,e as de,M as Te,l as $e,p as Ye,N as Je,O as ze,P as Xe,R as ge,S as Ge,U as et,V as ce,W as ae,X as tt}from"./index.5e01da1f.js";import{a as ye,h as ne,b as nt}from"./QBtn.18c48244.js";let fe,re=0;const D=new Array(256);for(let e=0;e<256;e++)D[e]=(e+256).toString(16).substring(1);const lt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const l=new Uint8Array(t);return e.getRandomValues(l),l}}return t=>{const l=[];for(let n=t;n>0;n--)l.push(Math.floor(Math.random()*256));return l}})(),xe=4096;function me(){(fe===void 0||re+16>xe)&&(re=0,fe=lt(xe));const e=Array.prototype.slice.call(fe,re,re+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,D[e[0]]+D[e[1]]+D[e[2]]+D[e[3]]+"-"+D[e[4]]+D[e[5]]+"-"+D[e[6]]+D[e[7]]+"-"+D[e[8]]+D[e[9]]+"-"+D[e[10]]+D[e[11]]+D[e[12]]+D[e[13]]+D[e[14]]+D[e[15]]}function ot(e){return e==null?null:e}function ke(e,t){return e==null?t===!0?`f_${me()}`:null:e}function at({getValue:e,required:t=!0}={}){if(be.value===!0){const l=e!==void 0?T(ot(e())):T(null);return t===!0&&l.value===null&&J(()=>{l.value=`f_${me()}`}),e!==void 0&&L(e,n=>{l.value=ke(n,t)}),l}return e!==void 0?b(()=>ke(e(),t)):T(`f_${me()}`)}const we=/^on[A-Z]/;function rt(){const{attrs:e,vnode:t}=Z(),l={listeners:T({}),attributes:T({})};function n(){const d={},u={};for(const v in e)v!=="class"&&v!=="style"&&we.test(v)===!1&&(d[v]=e[v]);for(const v in t.props)we.test(v)===!0&&(u[v]=t.props[v]);l.attributes.value=d,l.listeners.value=u}return Ie(n),n(),l}const it={dark:{type:Boolean,default:null}};function ut(e,t){return b(()=>e.dark===null?t.dark.isActive:e.dark)}function st({validate:e,resetValidation:t,requiresQForm:l}){const n=Ee(De,!1);if(n!==!1){const{props:d,proxy:u}=Z();Object.assign(u,{validate:e,resetValidation:t}),L(()=>d.disable,v=>{v===!0?(typeof t=="function"&&t(),n.unbindComponent(u)):n.bindComponent(u)}),J(()=>{d.disable!==!0&&n.bindComponent(u)}),G(()=>{d.disable!==!0&&n.unbindComponent(u)})}else l===!0&&console.error("Parent QForm not found on useFormChild()!")}const Ce=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Se=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,Me=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,ie=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ue=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ve={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Ce.test(e),hexaColor:e=>Se.test(e),hexOrHexaColor:e=>Me.test(e),rgbColor:e=>ie.test(e),rgbaColor:e=>ue.test(e),rgbOrRgbaColor:e=>ie.test(e)||ue.test(e),hexOrRgbColor:e=>Ce.test(e)||ie.test(e),hexaOrRgbaColor:e=>Se.test(e)||ue.test(e),anyColor:e=>Me.test(e)||ie.test(e)||ue.test(e)},dt=[!0,!1,"ondemand"],ct={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>dt.includes(e)}};function ft(e,t){const{props:l,proxy:n}=Z(),d=T(!1),u=T(null),v=T(!1);st({validate:j,resetValidation:O});let y=0,h;const c=b(()=>l.rules!==void 0&&l.rules!==null&&l.rules.length!==0),p=b(()=>l.disable!==!0&&c.value===!0&&t.value===!1),g=b(()=>l.error===!0||d.value===!0),K=b(()=>typeof l.errorMessage=="string"&&l.errorMessage.length!==0?l.errorMessage:u.value);L(()=>l.modelValue,()=>{v.value=!0,p.value===!0&&l.lazyRules===!1&&I()});function F(){l.lazyRules!=="ondemand"&&p.value===!0&&v.value===!0&&I()}L(()=>l.reactiveRules,H=>{H===!0?h===void 0&&(h=L(()=>l.rules,F,{immediate:!0,deep:!0})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),L(()=>l.lazyRules,F),L(e,H=>{H===!0?v.value=!0:p.value===!0&&l.lazyRules!=="ondemand"&&I()});function O(){y++,t.value=!1,v.value=!1,d.value=!1,u.value=null,I.cancel()}function j(H=l.modelValue){if(l.disable===!0||c.value===!1)return!0;const E=++y,U=t.value!==!0?()=>{v.value=!0}:()=>{},m=(M,R)=>{M===!0&&U(),d.value=M,u.value=R||null,t.value=!1},V=[];for(let M=0;M<l.rules.length;M++){const R=l.rules[M];let $;if(typeof R=="function"?$=R(H,ve):typeof R=="string"&&ve[R]!==void 0&&($=ve[R](H)),$===!1||typeof $=="string")return m(!0,$),!1;$!==!0&&$!==void 0&&V.push($)}return V.length===0?(m(!1),!0):(t.value=!0,Promise.all(V).then(M=>{if(M===void 0||Array.isArray(M)===!1||M.length===0)return E===y&&m(!1),!0;const R=M.find($=>$===!1||typeof $=="string");return E===y&&m(R!==void 0,R),R===void 0},M=>(E===y&&(console.error(M),m(!0)),!1)))}const I=je(j,0);return G(()=>{h!==void 0&&h(),I.cancel()}),Object.assign(n,{resetValidation:O,validate:j}),_e(n,"hasError",()=>g.value),{isDirtyModel:v,hasRules:c,hasError:g,errorMessage:K,validate:j,resetValidation:O}}let X=[],le=[];function Be(e){le=le.filter(t=>t!==e)}function zt(e){Be(e),le.push(e)}function Bt(e){Be(e),le.length===0&&X.length!==0&&(X[X.length-1](),X=[])}function Pe(e){le.length===0?e():X.push(e)}function vt(e){X=X.filter(t=>t!==e)}function he(e){return e!=null&&(""+e).length!==0}const gt={...it,...ct,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},mt={...gt,maxlength:[Number,String]},ht=["update:modelValue","clear","focus","blur"];function bt({requiredForAttr:e=!0,tagProp:t,changeEvent:l=!1}={}){const{props:n,proxy:d}=Z(),u=ut(n,d.$q),v=at({required:e,getValue:()=>n.for});return{requiredForAttr:e,changeEvent:l,tag:t===!0?b(()=>n.tag):{value:"label"},isDark:u,editable:b(()=>n.disable!==!0&&n.readonly!==!0),innerLoading:T(!1),focused:T(!1),hasPopupOpen:!1,splitAttrs:rt(),targetUid:v,rootRef:T(null),targetRef:T(null),controlRef:T(null)}}function pt(e){const{props:t,emit:l,slots:n,attrs:d,proxy:u}=Z(),{$q:v}=u;let y=null;e.hasValue===void 0&&(e.hasValue=b(()=>he(t.modelValue))),e.emitValue===void 0&&(e.emitValue=s=>{l("update:modelValue",s)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:r}),Object.assign(e,{clearValue:f,onControlFocusin:a,onControlFocusout:r,focus:R}),e.computedCounter===void 0&&(e.computedCounter=b(()=>{if(t.counter!==!1){const s=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,x=t.maxlength!==void 0?t.maxlength:t.maxValues;return s+(x!==void 0?" / "+x:"")}}));const{isDirtyModel:h,hasRules:c,hasError:p,errorMessage:g,resetValidation:K}=ft(e.focused,e.innerLoading),F=e.floatingLabel!==void 0?b(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):b(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),O=b(()=>t.bottomSlots===!0||t.hint!==void 0||c.value===!0||t.counter===!0||t.error!==null),j=b(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),I=b(()=>`q-field row no-wrap items-start q-field--${j.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(F.value===!0?" q-field--float":"")+(E.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(p.value===!0?" q-field--error":"")+(p.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&O.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),H=b(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(p.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),E=b(()=>t.labelSlot===!0||t.label!==void 0),U=b(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&p.value!==!0?` text-${t.labelColor}`:"")),m=b(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:F.value,modelValue:t.modelValue,emitValue:e.emitValue})),V=b(()=>{const s={};return e.targetUid.value&&(s.for=e.targetUid.value),t.disable===!0&&(s["aria-disabled"]="true"),s});function M(){const s=document.activeElement;let x=e.targetRef!==void 0&&e.targetRef.value;x&&(s===null||s.id!==e.targetUid.value)&&(x.hasAttribute("tabindex")===!0||(x=x.querySelector("[tabindex]")),x&&x!==s&&x.focus({preventScroll:!0}))}function R(){Pe(M)}function $(){vt(M);const s=document.activeElement;s!==null&&e.rootRef.value.contains(s)&&s.blur()}function a(s){y!==null&&(clearTimeout(y),y=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,l("focus",s))}function r(s,x){y!==null&&clearTimeout(y),y=setTimeout(()=>{y=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,l("blur",s)),x!==void 0&&x())})}function f(s){He(s),v.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),l("update:modelValue",null),e.changeEvent===!0&&l("change",null),l("clear",t.modelValue),Y(()=>{const x=h.value;K(),h.value=x})}function i(s){[13,32].includes(s.keyCode)&&f(s)}function S(){const s=[];return n.prepend!==void 0&&s.push(k("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:te},n.prepend())),s.push(k("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},w())),p.value===!0&&t.noErrorIcon===!1&&s.push(C("error",[k(ye,{name:v.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?s.push(C("inner-loading-append",n.loading!==void 0?n.loading():[k(Qe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&s.push(C("inner-clearable-append",[k(ye,{class:"q-field__focusable-action",name:t.clearIcon||v.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":v.lang.label.clear,onKeyup:i,onClick:f})])),n.append!==void 0&&s.push(k("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:te},n.append())),e.getInnerAppend!==void 0&&s.push(C("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&s.push(e.getControlChild()),s}function w(){const s=[];return t.prefix!==void 0&&t.prefix!==null&&s.push(k("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&s.push(e.getShadowControl()),e.getControl!==void 0?s.push(e.getControl()):n.rawControl!==void 0?s.push(n.rawControl()):n.control!==void 0&&s.push(k("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(m.value))),E.value===!0&&s.push(k("div",{class:U.value},ne(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&s.push(k("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),s.concat(ne(n.default))}function _(){let s,x;p.value===!0?g.value!==null?(s=[k("div",{role:"alert"},g.value)],x=`q--slot-error-${g.value}`):(s=ne(n.error),x="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(s=[k("div",t.hint)],x=`q--slot-hint-${t.hint}`):(s=ne(n.hint),x="q--slot-hint"));const A=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&A===!1&&s===void 0)return;const z=k("div",{key:x,class:"q-field__messages col"},s);return k("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:te},[t.hideBottomSpace===!0?z:k(Ue,{name:"q-transition--field-message"},()=>z),A===!0?k("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function C(s,x){return x===null?null:k("div",{key:s,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},x)}let q=!1;return Ne(()=>{q=!0}),Ke(()=>{q===!0&&t.autofocus===!0&&u.focus()}),t.autofocus===!0&&J(()=>{u.focus()}),G(()=>{y!==null&&clearTimeout(y)}),Object.assign(u,{focus:R,blur:$}),function(){const x=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...V.value}:V.value;return k(e.tag.value,{ref:e.rootRef,class:[I.value,d.class],style:d.style,...x},[n.before!==void 0?k("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:te},n.before()):null,k("div",{class:"q-field__inner relative-position col self-stretch"},[k("div",{ref:e.controlRef,class:H.value,tabindex:-1,...e.controlEvents},S()),O.value===!0?_():null]),n.after!==void 0?k("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:te},n.after()):null])}}const Re={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},se={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},Oe=Object.keys(se);Oe.forEach(e=>{se[e].regex=new RegExp(se[e].pattern)});const yt=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+Oe.join("")+"])|(.)","g"),qe=/[.*+?^${}()|[\]\\]/g,P=String.fromCharCode(1),xt={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function kt(e,t,l,n){let d,u,v,y,h,c;const p=T(null),g=T(F());function K(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}L(()=>e.type+e.autogrow,j),L(()=>e.mask,a=>{if(a!==void 0)I(g.value,!0);else{const r=R(g.value);j(),e.modelValue!==r&&t("update:modelValue",r)}}),L(()=>e.fillMask+e.reverseFillMask,()=>{p.value===!0&&I(g.value,!0)}),L(()=>e.unmaskedValue,()=>{p.value===!0&&I(g.value)});function F(){if(j(),p.value===!0){const a=V(R(e.modelValue));return e.fillMask!==!1?$(a):a}return e.modelValue}function O(a){if(a<d.length)return d.slice(-a);let r="",f=d;const i=f.indexOf(P);if(i!==-1){for(let S=a-f.length;S>0;S--)r+=P;f=f.slice(0,i)+r+f.slice(i)}return f}function j(){if(p.value=e.mask!==void 0&&e.mask.length!==0&&K(),p.value===!1){y=void 0,d="",u="";return}const a=Re[e.mask]===void 0?e.mask:Re[e.mask],r=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",f=r.replace(qe,"\\$&"),i=[],S=[],w=[];let _=e.reverseFillMask===!0,C="",q="";a.replace(yt,(z,o,B,W,Q)=>{if(W!==void 0){const N=se[W];w.push(N),q=N.negate,_===!0&&(S.push("(?:"+q+"+)?("+N.pattern+"+)?(?:"+q+"+)?("+N.pattern+"+)?"),_=!1),S.push("(?:"+q+"+)?("+N.pattern+")?")}else if(B!==void 0)C="\\"+(B==="\\"?"":B),w.push(B),i.push("([^"+C+"]+)?"+C+"?");else{const N=o!==void 0?o:Q;C=N==="\\"?"\\\\\\\\":N.replace(qe,"\\\\$&"),w.push(N),i.push("([^"+C+"]+)?"+C+"?")}});const s=new RegExp("^"+i.join("")+"("+(C===""?".":"[^"+C+"]")+"+)?"+(C===""?"":"["+C+"]*")+"$"),x=S.length-1,A=S.map((z,o)=>o===0&&e.reverseFillMask===!0?new RegExp("^"+f+"*"+z):o===x?new RegExp("^"+z+"("+(q===""?".":q)+"+)?"+(e.reverseFillMask===!0?"$":f+"*")):new RegExp("^"+z));v=w,y=z=>{const o=s.exec(e.reverseFillMask===!0?z:z.slice(0,w.length+1));o!==null&&(z=o.slice(1).join(""));const B=[],W=A.length;for(let Q=0,N=z;Q<W;Q++){const ee=A[Q].exec(N);if(ee===null)break;N=N.slice(ee.shift().length),B.push(...ee)}return B.length!==0?B.join(""):z},d=w.map(z=>typeof z=="string"?z:P).join(""),u=d.split(P).join(r)}function I(a,r,f){const i=n.value,S=i.selectionEnd,w=i.value.length-S,_=R(a);r===!0&&j();const C=V(_),q=e.fillMask!==!1?$(C):C,s=g.value!==q;i.value!==q&&(i.value=q),s===!0&&(g.value=q),document.activeElement===i&&Y(()=>{if(q===u){const A=e.reverseFillMask===!0?u.length:0;i.setSelectionRange(A,A,"forward");return}if(f==="insertFromPaste"&&e.reverseFillMask!==!0){const A=i.selectionEnd;let z=S-1;for(let o=h;o<=z&&o<A;o++)d[o]!==P&&z++;E.right(i,z);return}if(["deleteContentBackward","deleteContentForward"].indexOf(f)!==-1){const A=e.reverseFillMask===!0?S===0?q.length>C.length?1:0:Math.max(0,q.length-(q===u?0:Math.min(C.length,w)+1))+1:S;i.setSelectionRange(A,A,"forward");return}if(e.reverseFillMask===!0)if(s===!0){const A=Math.max(0,q.length-(q===u?0:Math.min(C.length,w+1)));A===1&&S===1?i.setSelectionRange(A,A,"forward"):E.rightReverse(i,A)}else{const A=q.length-w;i.setSelectionRange(A,A,"backward")}else if(s===!0){const A=Math.max(0,d.indexOf(P),Math.min(C.length,S)-1);E.right(i,A)}else{const A=S-1;E.right(i,A)}});const x=e.unmaskedValue===!0?R(q):q;String(e.modelValue)!==x&&(e.modelValue!==null||x!=="")&&l(x,!0)}function H(a,r,f){const i=V(R(a.value));r=Math.max(0,d.indexOf(P),Math.min(i.length,r)),h=r,a.setSelectionRange(r,f,"forward")}const E={left(a,r){const f=d.slice(r-1).indexOf(P)===-1;let i=Math.max(0,r-1);for(;i>=0;i--)if(d[i]===P){r=i,f===!0&&r++;break}if(i<0&&d[r]!==void 0&&d[r]!==P)return E.right(a,0);r>=0&&a.setSelectionRange(r,r,"backward")},right(a,r){const f=a.value.length;let i=Math.min(f,r+1);for(;i<=f;i++)if(d[i]===P){r=i;break}else d[i-1]===P&&(r=i);if(i>f&&d[r-1]!==void 0&&d[r-1]!==P)return E.left(a,f);a.setSelectionRange(r,r,"forward")},leftReverse(a,r){const f=O(a.value.length);let i=Math.max(0,r-1);for(;i>=0;i--)if(f[i-1]===P){r=i;break}else if(f[i]===P&&(r=i,i===0))break;if(i<0&&f[r]!==void 0&&f[r]!==P)return E.rightReverse(a,0);r>=0&&a.setSelectionRange(r,r,"backward")},rightReverse(a,r){const f=a.value.length,i=O(f),S=i.slice(0,r+1).indexOf(P)===-1;let w=Math.min(f,r+1);for(;w<=f;w++)if(i[w-1]===P){r=w,r>0&&S===!0&&r--;break}if(w>f&&i[r-1]!==void 0&&i[r-1]!==P)return E.leftReverse(a,f);a.setSelectionRange(r,r,"forward")}};function U(a){t("click",a),c=void 0}function m(a){if(t("keydown",a),Ze(a)===!0||a.altKey===!0)return;const r=n.value,f=r.selectionStart,i=r.selectionEnd;if(a.shiftKey||(c=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&c===void 0&&(c=r.selectionDirection==="forward"?f:i);const S=E[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),S(r,c===f?i:f),a.shiftKey){const w=r.selectionStart;r.setSelectionRange(Math.min(c,w),Math.max(c,w),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&f===i?(E.left(r,f),r.setSelectionRange(r.selectionStart,i,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&f===i&&(E.rightReverse(r,i),r.setSelectionRange(f,r.selectionEnd,"forward"))}function V(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return M(a);const r=v;let f=0,i="";for(let S=0;S<r.length;S++){const w=a[f],_=r[S];if(typeof _=="string")i+=_,w===_&&f++;else if(w!==void 0&&_.regex.test(w))i+=_.transform!==void 0?_.transform(w):w,f++;else return i}return i}function M(a){const r=v,f=d.indexOf(P);let i=a.length-1,S="";for(let w=r.length-1;w>=0&&i!==-1;w--){const _=r[w];let C=a[i];if(typeof _=="string")S=_+S,C===_&&i--;else if(C!==void 0&&_.regex.test(C))do S=(_.transform!==void 0?_.transform(C):C)+S,i--,C=a[i];while(f===w&&C!==void 0&&_.regex.test(C));else return S}return S}function R(a){return typeof a!="string"||y===void 0?typeof a=="number"?y(""+a):a:y(a)}function $(a){return u.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?u.slice(0,-a.length)+a:a+u.slice(a.length)}return{innerValue:g,hasMask:p,moveCursorForPaste:H,updateMaskValue:I,onMaskedKeydown:m,onMaskedClick:U}}const wt={name:String};function Pt(e={}){return(t,l,n)=>{t[l](k("input",{class:"hidden"+(n||""),...e.value}))}}function Ct(e){return b(()=>e.name||e.for)}function St(e,t){function l(){const n=e.modelValue;try{const d="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(u=>{d.items.add(u)}),{files:d.files}}catch{return{files:void 0}}}return t===!0?b(()=>{if(e.type==="file")return l()}):b(l)}const Mt=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Rt=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,qt=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ft=/[a-z0-9_ -]$/i;function Vt(e){return function(l){if(l.type==="compositionend"||l.type==="change"){if(l.target.qComposing!==!0)return;l.target.qComposing=!1,e(l)}else l.type==="compositionupdate"&&l.target.qComposing!==!0&&typeof l.data=="string"&&(We.is.firefox===!0?Ft.test(l.data)===!1:Mt.test(l.data)===!0||Rt.test(l.data)===!0||qt.test(l.data)===!0)===!0&&(l.target.qComposing=!0)}}var Ot=oe({name:"QInput",inheritAttrs:!1,props:{...mt,...xt,...wt,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ht,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:l}){const{proxy:n}=Z(),{$q:d}=n,u={};let v=NaN,y,h,c=null,p;const g=T(null),K=Ct(e),{innerValue:F,hasMask:O,moveCursorForPaste:j,updateMaskValue:I,onMaskedKeydown:H,onMaskedClick:E}=kt(e,t,C,g),U=St(e,!0),m=b(()=>he(F.value)),V=Vt(w),M=bt({changeEvent:!0}),R=b(()=>e.type==="textarea"||e.autogrow===!0),$=b(()=>R.value===!0||["text","search","url","tel","password"].includes(e.type)),a=b(()=>{const o={...M.splitAttrs.listeners.value,onInput:w,onPaste:S,onChange:s,onBlur:x,onFocus:pe};return o.onCompositionstart=o.onCompositionupdate=o.onCompositionend=V,O.value===!0&&(o.onKeydown=H,o.onClick=E),e.autogrow===!0&&(o.onAnimationend=_),o}),r=b(()=>{const o={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:K.value,...M.splitAttrs.attributes.value,id:M.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return R.value===!1&&(o.type=e.type),e.autogrow===!0&&(o.rows=1),o});L(()=>e.type,()=>{g.value&&(g.value.value=e.modelValue)}),L(()=>e.modelValue,o=>{if(O.value===!0){if(h===!0&&(h=!1,String(o)===v))return;I(o)}else F.value!==o&&(F.value=o,e.type==="number"&&u.hasOwnProperty("value")===!0&&(y===!0?y=!1:delete u.value));e.autogrow===!0&&Y(q)}),L(()=>e.autogrow,o=>{o===!0?Y(q):g.value!==null&&l.rows>0&&(g.value.style.height="auto")}),L(()=>e.dense,()=>{e.autogrow===!0&&Y(q)});function f(){Pe(()=>{const o=document.activeElement;g.value!==null&&g.value!==o&&(o===null||o.id!==M.targetUid.value)&&g.value.focus({preventScroll:!0})})}function i(){g.value!==null&&g.value.select()}function S(o){if(O.value===!0&&e.reverseFillMask!==!0){const B=o.target;j(B,B.selectionStart,B.selectionEnd)}t("paste",o)}function w(o){if(!o||!o.target)return;if(e.type==="file"){t("update:modelValue",o.target.files);return}const B=o.target.value;if(o.target.qComposing===!0){u.value=B;return}if(O.value===!0)I(B,!1,o.inputType);else if(C(B),$.value===!0&&o.target===document.activeElement){const{selectionStart:W,selectionEnd:Q}=o.target;W!==void 0&&Q!==void 0&&Y(()=>{o.target===document.activeElement&&B.indexOf(o.target.value)===0&&o.target.setSelectionRange(W,Q)})}e.autogrow===!0&&q()}function _(o){t("animationend",o),q()}function C(o,B){p=()=>{c=null,e.type!=="number"&&u.hasOwnProperty("value")===!0&&delete u.value,e.modelValue!==o&&v!==o&&(v=o,B===!0&&(h=!0),t("update:modelValue",o),Y(()=>{v===o&&(v=NaN)})),p=void 0},e.type==="number"&&(y=!0,u.value=o),e.debounce!==void 0?(c!==null&&clearTimeout(c),u.value=o,c=setTimeout(p,e.debounce)):p()}function q(){requestAnimationFrame(()=>{const o=g.value;if(o!==null){const B=o.parentNode.style,{scrollTop:W}=o,{overflowY:Q,maxHeight:N}=d.platform.is.firefox===!0?{}:window.getComputedStyle(o),ee=Q!==void 0&&Q!=="scroll";ee===!0&&(o.style.overflowY="hidden"),B.marginBottom=o.scrollHeight-1+"px",o.style.height="1px",o.style.height=o.scrollHeight+"px",ee===!0&&(o.style.overflowY=parseInt(N,10)<o.scrollHeight?"auto":"hidden"),B.marginBottom="",o.scrollTop=W}})}function s(o){V(o),c!==null&&(clearTimeout(c),c=null),p!==void 0&&p(),t("change",o.target.value)}function x(o){o!==void 0&&pe(o),c!==null&&(clearTimeout(c),c=null),p!==void 0&&p(),y=!1,h=!1,delete u.value,e.type!=="file"&&setTimeout(()=>{g.value!==null&&(g.value.value=F.value!==void 0?F.value:"")})}function A(){return u.hasOwnProperty("value")===!0?u.value:F.value!==void 0?F.value:""}G(()=>{x()}),J(()=>{e.autogrow===!0&&q()}),Object.assign(M,{innerValue:F,fieldClass:b(()=>`q-${R.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:b(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:g,emitValue:C,hasValue:m,floatingLabel:b(()=>m.value===!0&&(e.type!=="number"||isNaN(F.value)===!1)||he(e.displayValue)),getControl:()=>k(R.value===!0?"textarea":"input",{ref:g,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...r.value,...a.value,...e.type!=="file"?{value:A()}:U.value}),getShadowControl:()=>k("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(R.value===!0?"":" text-no-wrap")},[k("span",{class:"invisible"},A()),k("span",e.shadowText)])});const z=pt(M);return Object.assign(n,{focus:f,select:i,getNativeElement:()=>g.value}),_e(n,"nativeEl",()=>g.value),z}}),Lt=oe({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:l}}=Z(),n=Ee($e,de);if(n===de)return console.error("QPageContainer needs to be child of QLayout"),de;Te(Ye,!0);const d=b(()=>{const u={};return n.header.space===!0&&(u.paddingTop=`${n.header.size}px`),n.right.space===!0&&(u[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(u.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(u[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),u});return()=>k("div",{class:"q-page-container",style:d.value},ne(t.default))}});const{passive:Fe}=ge,At=["both","horizontal","vertical"];var Et=oe({name:"QScrollObserver",props:{axis:{type:String,validator:e=>At.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Je},emits:["scroll"],setup(e,{emit:t}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,d,u;L(()=>e.scrollTarget,()=>{h(),y()});function v(){n!==null&&n();const g=Math.max(0,Ge(d)),K=et(d),F={top:g-l.position.top,left:K-l.position.left};if(e.axis==="vertical"&&F.top===0||e.axis==="horizontal"&&F.left===0)return;const O=Math.abs(F.top)>=Math.abs(F.left)?F.top<0?"up":"down":F.left<0?"left":"right";l.position={top:g,left:K},l.directionChanged=l.direction!==O,l.delta=F,l.directionChanged===!0&&(l.direction=O,l.inflectionPoint=l.position),t("scroll",{...l})}function y(){d=Xe(u,e.scrollTarget),d.addEventListener("scroll",c,Fe),c(!0)}function h(){d!==void 0&&(d.removeEventListener("scroll",c,Fe),d=void 0)}function c(g){if(g===!0||e.debounce===0||e.debounce==="0")v();else if(n===null){const[K,F]=e.debounce?[setTimeout(v,e.debounce),clearTimeout]:[requestAnimationFrame(v),cancelAnimationFrame];n=()=>{F(K),n=null}}}const{proxy:p}=Z();return L(()=>p.$q.lang.rtl,v),J(()=>{u=p.$el.parentNode,y()}),G(()=>{n!==null&&n(),h()}),Object.assign(p,{trigger:c,getPosition:()=>l}),ze}});function _t(){const e=T(!be.value);return e.value===!1&&J(()=>{e.value=!0}),{isHydrated:e}}const Le=typeof ResizeObserver!="undefined",Ve=Le===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var Ae=oe({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let l=null,n,d={width:-1,height:-1};function u(h){h===!0||e.debounce===0||e.debounce==="0"?v():l===null&&(l=setTimeout(v,e.debounce))}function v(){if(l!==null&&(clearTimeout(l),l=null),n){const{offsetWidth:h,offsetHeight:c}=n;(h!==d.width||c!==d.height)&&(d={width:h,height:c},t("resize",d))}}const{proxy:y}=Z();if(y.trigger=u,Le===!0){let h;const c=p=>{n=y.$el.parentNode,n?(h=new ResizeObserver(u),h.observe(n),v()):p!==!0&&Y(()=>{c(!0)})};return J(()=>{c()}),G(()=>{l!==null&&clearTimeout(l),h!==void 0&&(h.disconnect!==void 0?h.disconnect():n&&h.unobserve(n))}),ze}else{let p=function(){l!==null&&(clearTimeout(l),l=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",u,ge.passive),c=void 0)},g=function(){p(),n&&n.contentDocument&&(c=n.contentDocument.defaultView,c.addEventListener("resize",u,ge.passive),v())};const{isHydrated:h}=_t();let c;return J(()=>{Y(()=>{n=y.$el,n&&g()})}),G(p),()=>{if(h.value===!0)return k("object",{class:"q--avoid-card-border",style:Ve.style,tabindex:-1,type:"text/html",data:Ve.url,"aria-hidden":"true",onLoad:g})}}}}),It=oe({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=Z(),d=T(null),u=T(n.screen.height),v=T(e.container===!0?0:n.screen.width),y=T({position:0,direction:"down",inflectionPoint:0}),h=T(0),c=T(be.value===!0?0:ce()),p=b(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),g=b(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),K=b(()=>c.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),F=b(()=>c.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function O(m){if(e.container===!0||document.qScrollPrevented!==!0){const V={position:m.position.top,direction:m.direction,directionChanged:m.directionChanged,inflectionPoint:m.inflectionPoint.top,delta:m.delta.top};y.value=V,e.onScroll!==void 0&&l("scroll",V)}}function j(m){const{height:V,width:M}=m;let R=!1;u.value!==V&&(R=!0,u.value=V,e.onScrollHeight!==void 0&&l("scrollHeight",V),H()),v.value!==M&&(R=!0,v.value=M),R===!0&&e.onResize!==void 0&&l("resize",m)}function I({height:m}){h.value!==m&&(h.value=m,H())}function H(){if(e.container===!0){const m=u.value>h.value?ce():0;c.value!==m&&(c.value=m)}}let E=null;const U={instances:{},view:b(()=>e.view),isContainer:b(()=>e.container),rootRef:d,height:u,containerHeight:h,scrollbarWidth:c,totalWidth:b(()=>v.value+c.value),rows:b(()=>{const m=e.view.toLowerCase().split(" ");return{top:m[0].split(""),middle:m[1].split(""),bottom:m[2].split("")}}),header:ae({size:0,offset:0,space:!1}),right:ae({size:300,offset:0,space:!1}),footer:ae({size:0,offset:0,space:!1}),left:ae({size:300,offset:0,space:!1}),scroll:y,animate(){E!==null?clearTimeout(E):document.body.classList.add("q-body--layout-animate"),E=setTimeout(()=>{E=null,document.body.classList.remove("q-body--layout-animate")},155)},update(m,V,M){U[m][V]=M}};if(Te($e,U),ce()>0){let M=function(){m=null,V.classList.remove("hide-scrollbar")},R=function(){if(m===null){if(V.scrollHeight>n.screen.height)return;V.classList.add("hide-scrollbar")}else clearTimeout(m);m=setTimeout(M,300)},$=function(a){m!==null&&a==="remove"&&(clearTimeout(m),M()),window[`${a}EventListener`]("resize",R)},m=null;const V=document.body;L(()=>e.container!==!0?"add":"remove",$),e.container!==!0&&$("add"),tt(()=>{$("remove")})}return()=>{const m=nt(t.default,[k(Et,{onScroll:O}),k(Ae,{onResize:j})]),V=k("div",{class:p.value,style:g.value,ref:e.container===!0?void 0:d,tabindex:-1},m);return e.container===!0?k("div",{class:"q-layout-container overflow-hidden",ref:d},[k(Ae,{onResize:I}),k("div",{class:"absolute-full",style:K.value},[k("div",{class:"scroll",style:F.value},[V])])]):V}}});export{It as Q,Ot as a,Lt as b,Ae as c,ut as d,Pe as e,zt as f,me as g,mt as h,ht as i,pt as j,bt as k,wt as l,Ct as m,he as n,Vt as o,Pt as p,Et as q,Bt as r,at as s,rt as t,it as u};