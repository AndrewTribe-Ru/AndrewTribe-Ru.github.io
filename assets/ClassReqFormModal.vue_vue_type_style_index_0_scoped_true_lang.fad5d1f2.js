import{j as _,av as Ue,aw as Ct,g as Ge,r as p,D as ee,k as h,T as re,l as Ke,ax as qt,J as Be,H as kt}from"./index.17a483d5.js";import{Q as N}from"./QBtn.dab5c315.js";import{u as Ot,a as It}from"./use-dark.b138e361.js";import{u as jt,a as Tt}from"./use-cache.52127d72.js";import{u as Vt,c as $t,b as pt}from"./use-form.e660d19e.js";import{p as w}from"./format.7877170e.js";import{h as Ft}from"./render.c21811ee.js";import{Q as Et}from"./QDialog.86dd37ae.js";import{u as At,c as Nt}from"./position-engine.ae3b237b.js";const R=[-61,9,38,199,426,686,756,818,1111,1181,1210,1635,2060,2097,2192,2262,2324,2394,2456,3178];function Zt(e,r,c){return Object.prototype.toString.call(e)==="[object Date]"&&(c=e.getDate(),r=e.getMonth()+1,e=e.getFullYear()),Rt(qe(e,r,c))}function Pe(e,r,c){return tt(Pt(e,r,c))}function Qt(e){return Bt(e)===0}function fe(e,r){return r<=6?31:r<=11||Qt(e)?30:29}function Bt(e){const r=R.length;let c=R[0],i,d,o,M,l;if(e<c||e>=R[r-1])throw new Error("Invalid Jalaali year "+e);for(l=1;l<r&&(i=R[l],d=i-c,!(e<i));l+=1)c=i;return M=e-c,d-M<6&&(M=M-d+x(d+4,33)*33),o=V(V(M+1,33)-1,4),o===-1&&(o=4),o}function et(e,r){const c=R.length,i=e+621;let d=-14,o=R[0],M,l,m,C,v;if(e<o||e>=R[c-1])throw new Error("Invalid Jalaali year "+e);for(v=1;v<c&&(M=R[v],l=M-o,!(e<M));v+=1)d=d+x(l,33)*8+x(V(l,33),4),o=M;C=e-o,d=d+x(C,33)*8+x(V(C,33)+3,4),V(l,33)===4&&l-C===4&&(d+=1);const D=x(i,4)-x((x(i,100)+1)*3,4)-150,F=20+d-D;return r||(l-C<6&&(C=C-l+x(l+4,33)*33),m=V(V(C+1,33)-1,4),m===-1&&(m=4)),{leap:m,gy:i,march:F}}function Pt(e,r,c){const i=et(e,!0);return qe(i.gy,3,i.march)+(r-1)*31-x(r,7)*(r-7)+c-1}function Rt(e){const r=tt(e).gy;let c=r-621,i,d,o;const M=et(c,!1),l=qe(r,3,M.march);if(o=e-l,o>=0){if(o<=185)return d=1+x(o,31),i=V(o,31)+1,{jy:c,jm:d,jd:i};o-=186}else c-=1,o+=179,M.leap===1&&(o+=1);return d=7+x(o,30),i=V(o,30)+1,{jy:c,jm:d,jd:i}}function qe(e,r,c){let i=x((e+x(r-8,6)+100100)*1461,4)+x(153*V(r+9,12)+2,5)+c-34840408;return i=i-x(x(e+100100+x(r-8,6),100)*3,4)+752,i}function tt(e){let r=4*e+139361631;r=r+x(x(4*e+183187720,146097)*3,4)*4-3908;const c=x(V(r,1461),4)*5+308,i=x(V(c,153),5)+1,d=V(x(c,153),12)+1;return{gy:x(r,1461)-100100+x(8-d,6),gm:d,gd:i}}function x(e,r){return~~(e/r)}function V(e,r){return e-~~(e/r)*r}const zt=["gregorian","persian"],Lt={modelValue:{required:!0},mask:{type:String},locale:Object,calendar:{type:String,validator:e=>zt.includes(e),default:"gregorian"},landscape:Boolean,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,readonly:Boolean,disable:Boolean},Xt=["update:modelValue"];function B(e){return e.year+"/"+w(e.month)+"/"+w(e.day)}function Jt(e,r){const c=_(()=>e.disable!==!0&&e.readonly!==!0),i=_(()=>c.value===!0?0:-1),d=_(()=>{const l=[];return e.color!==void 0&&l.push(`bg-${e.color}`),e.textColor!==void 0&&l.push(`text-${e.textColor}`),l.join(" ")});function o(){return e.locale!==void 0?{...r.lang.date,...e.locale}:r.lang.date}function M(l){const m=new Date,C=l===!0?null:0;if(e.calendar==="persian"){const v=Zt(m);return{year:v.jy,month:v.jm,day:v.jd}}return{year:m.getFullYear(),month:m.getMonth()+1,day:m.getDate(),hour:C,minute:C,second:C,millisecond:C}}return{editable:c,tabindex:i,headerClass:d,getLocale:o,getCurrentDate:M}}const at=864e5,Wt=36e5,Ce=6e4,nt="YYYY-MM-DDTHH:mm:ss.SSSZ",Ut=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,Gt=/(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g,Se={};function Kt(e,r){const c="("+r.days.join("|")+")",i=e+c;if(Se[i]!==void 0)return Se[i];const d="("+r.daysShort.join("|")+")",o="("+r.months.join("|")+")",M="("+r.monthsShort.join("|")+")",l={};let m=0;const C=e.replace(Gt,D=>{switch(m++,D){case"YY":return l.YY=m,"(-?\\d{1,2})";case"YYYY":return l.YYYY=m,"(-?\\d{1,4})";case"M":return l.M=m,"(\\d{1,2})";case"MM":return l.M=m,"(\\d{2})";case"MMM":return l.MMM=m,M;case"MMMM":return l.MMMM=m,o;case"D":return l.D=m,"(\\d{1,2})";case"Do":return l.D=m++,"(\\d{1,2}(st|nd|rd|th))";case"DD":return l.D=m,"(\\d{2})";case"H":return l.H=m,"(\\d{1,2})";case"HH":return l.H=m,"(\\d{2})";case"h":return l.h=m,"(\\d{1,2})";case"hh":return l.h=m,"(\\d{2})";case"m":return l.m=m,"(\\d{1,2})";case"mm":return l.m=m,"(\\d{2})";case"s":return l.s=m,"(\\d{1,2})";case"ss":return l.s=m,"(\\d{2})";case"S":return l.S=m,"(\\d{1})";case"SS":return l.S=m,"(\\d{2})";case"SSS":return l.S=m,"(\\d{3})";case"A":return l.A=m,"(AM|PM)";case"a":return l.a=m,"(am|pm)";case"aa":return l.aa=m,"(a\\.m\\.|p\\.m\\.)";case"ddd":return d;case"dddd":return c;case"Q":case"d":case"E":return"(\\d{1})";case"Qo":return"(1st|2nd|3rd|4th)";case"DDD":case"DDDD":return"(\\d{1,3})";case"w":return"(\\d{1,2})";case"ww":return"(\\d{2})";case"Z":return l.Z=m,"(Z|[+-]\\d{2}:\\d{2})";case"ZZ":return l.ZZ=m,"(Z|[+-]\\d{2}\\d{2})";case"X":return l.X=m,"(-?\\d+)";case"x":return l.x=m,"(-?\\d{4,})";default:return m--,D[0]==="["&&(D=D.substring(1,D.length-1)),D.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}}),v={map:l,regex:new RegExp("^"+C)};return Se[i]=v,v}function rt(e,r){return e!==void 0?e:r!==void 0?r.date:Ct.date}function Re(e,r=""){const c=e>0?"-":"+",i=Math.abs(e),d=Math.floor(i/60),o=i%60;return c+w(d)+r+w(o)}function ea(e,r,c,i,d){const o={year:null,month:null,day:null,hour:null,minute:null,second:null,millisecond:null,timezoneOffset:null,dateHash:null,timeHash:null};if(d!==void 0&&Object.assign(o,d),e==null||e===""||typeof e!="string")return o;r===void 0&&(r=nt);const M=rt(c,Ue.props),l=M.months,m=M.monthsShort,{regex:C,map:v}=Kt(r,M),D=e.match(C);if(D===null)return o;let F="";if(v.X!==void 0||v.x!==void 0){const I=parseInt(D[v.X!==void 0?v.X:v.x],10);if(isNaN(I)===!0||I<0)return o;const j=new Date(I*(v.X!==void 0?1e3:1));o.year=j.getFullYear(),o.month=j.getMonth()+1,o.day=j.getDate(),o.hour=j.getHours(),o.minute=j.getMinutes(),o.second=j.getSeconds(),o.millisecond=j.getMilliseconds()}else{if(v.YYYY!==void 0)o.year=parseInt(D[v.YYYY],10);else if(v.YY!==void 0){const I=parseInt(D[v.YY],10);o.year=I<0?I:2e3+I}if(v.M!==void 0){if(o.month=parseInt(D[v.M],10),o.month<1||o.month>12)return o}else v.MMM!==void 0?o.month=m.indexOf(D[v.MMM])+1:v.MMMM!==void 0&&(o.month=l.indexOf(D[v.MMMM])+1);if(v.D!==void 0){if(o.day=parseInt(D[v.D],10),o.year===null||o.month===null||o.day<1)return o;const I=i!=="persian"?new Date(o.year,o.month,0).getDate():fe(o.year,o.month);if(o.day>I)return o}v.H!==void 0?o.hour=parseInt(D[v.H],10)%24:v.h!==void 0&&(o.hour=parseInt(D[v.h],10)%12,(v.A&&D[v.A]==="PM"||v.a&&D[v.a]==="pm"||v.aa&&D[v.aa]==="p.m.")&&(o.hour+=12),o.hour=o.hour%24),v.m!==void 0&&(o.minute=parseInt(D[v.m],10)%60),v.s!==void 0&&(o.second=parseInt(D[v.s],10)%60),v.S!==void 0&&(o.millisecond=parseInt(D[v.S],10)*10**(3-D[v.S].length)),(v.Z!==void 0||v.ZZ!==void 0)&&(F=v.Z!==void 0?D[v.Z].replace(":",""):D[v.ZZ],o.timezoneOffset=(F[0]==="+"?-1:1)*(60*F.slice(1,3)+1*F.slice(3,5)))}return o.dateHash=w(o.year,6)+"/"+w(o.month)+"/"+w(o.day),o.timeHash=w(o.hour)+":"+w(o.minute)+":"+w(o.second)+F,o}function ze(e){const r=new Date(e.getFullYear(),e.getMonth(),e.getDate());r.setDate(r.getDate()-(r.getDay()+6)%7+3);const c=new Date(r.getFullYear(),0,4);c.setDate(c.getDate()-(c.getDay()+6)%7+3);const i=r.getTimezoneOffset()-c.getTimezoneOffset();r.setHours(r.getHours()-i);const d=(r-c)/(at*7);return 1+Math.floor(d)}function Z(e,r,c){const i=new Date(e),d=`set${c===!0?"UTC":""}`;switch(r){case"year":case"years":i[`${d}Month`](0);case"month":case"months":i[`${d}Date`](1);case"day":case"days":case"date":i[`${d}Hours`](0);case"hour":case"hours":i[`${d}Minutes`](0);case"minute":case"minutes":i[`${d}Seconds`](0);case"second":case"seconds":i[`${d}Milliseconds`](0)}return i}function ve(e,r,c){return(e.getTime()-e.getTimezoneOffset()*Ce-(r.getTime()-r.getTimezoneOffset()*Ce))/c}function ot(e,r,c="days"){const i=new Date(e),d=new Date(r);switch(c){case"years":case"year":return i.getFullYear()-d.getFullYear();case"months":case"month":return(i.getFullYear()-d.getFullYear())*12+i.getMonth()-d.getMonth();case"days":case"day":case"date":return ve(Z(i,"day"),Z(d,"day"),at);case"hours":case"hour":return ve(Z(i,"hour"),Z(d,"hour"),Wt);case"minutes":case"minute":return ve(Z(i,"minute"),Z(d,"minute"),Ce);case"seconds":case"second":return ve(Z(i,"second"),Z(d,"second"),1e3)}}function Le(e){return ot(e,Z(e,"year"),"days")+1}function Xe(e){if(e>=11&&e<=13)return`${e}th`;switch(e%10){case 1:return`${e}st`;case 2:return`${e}nd`;case 3:return`${e}rd`}return`${e}th`}const Je={YY(e,r,c){const i=this.YYYY(e,r,c)%100;return i>=0?w(i):"-"+w(Math.abs(i))},YYYY(e,r,c){return c!=null?c:e.getFullYear()},M(e){return e.getMonth()+1},MM(e){return w(e.getMonth()+1)},MMM(e,r){return r.monthsShort[e.getMonth()]},MMMM(e,r){return r.months[e.getMonth()]},Q(e){return Math.ceil((e.getMonth()+1)/3)},Qo(e){return Xe(this.Q(e))},D(e){return e.getDate()},Do(e){return Xe(e.getDate())},DD(e){return w(e.getDate())},DDD(e){return Le(e)},DDDD(e){return w(Le(e),3)},d(e){return e.getDay()},dd(e,r){return this.dddd(e,r).slice(0,2)},ddd(e,r){return r.daysShort[e.getDay()]},dddd(e,r){return r.days[e.getDay()]},E(e){return e.getDay()||7},w(e){return ze(e)},ww(e){return w(ze(e))},H(e){return e.getHours()},HH(e){return w(e.getHours())},h(e){const r=e.getHours();return r===0?12:r>12?r%12:r},hh(e){return w(this.h(e))},m(e){return e.getMinutes()},mm(e){return w(e.getMinutes())},s(e){return e.getSeconds()},ss(e){return w(e.getSeconds())},S(e){return Math.floor(e.getMilliseconds()/100)},SS(e){return w(Math.floor(e.getMilliseconds()/10))},SSS(e){return w(e.getMilliseconds(),3)},A(e){return this.H(e)<12?"AM":"PM"},a(e){return this.H(e)<12?"am":"pm"},aa(e){return this.H(e)<12?"a.m.":"p.m."},Z(e,r,c,i){const d=i==null?e.getTimezoneOffset():i;return Re(d,":")},ZZ(e,r,c,i){const d=i==null?e.getTimezoneOffset():i;return Re(d)},X(e){return Math.floor(e.getTime()/1e3)},x(e){return e.getTime()}};function ta(e,r,c,i,d){if(e!==0&&!e||e===1/0||e===-1/0)return;const o=new Date(e);if(isNaN(o))return;r===void 0&&(r=nt);const M=rt(c,Ue.props);return r.replace(Ut,(l,m)=>l in Je?Je[l](o,M,i,d):m===void 0?l:m.split("\\]").join("]"))}const X=20,aa=["Calendar","Years","Months"],We=e=>aa.includes(e),He=e=>/^-?[\d]+\/[0-1]\d$/.test(e),K=" \u2014 ";function P(e){return e.year+"/"+w(e.month)}var va=Ge({name:"QDate",props:{...Lt,...Vt,...Ot,multiple:Boolean,range:Boolean,title:String,subtitle:String,mask:{default:"YYYY/MM/DD"},defaultYearMonth:{type:String,validator:He},yearsInMonthView:Boolean,events:[Array,Function],eventColor:[String,Function],emitImmediately:Boolean,options:[Array,Function],navigationMinYearMonth:{type:String,validator:He},navigationMaxYearMonth:{type:String,validator:He},noUnset:Boolean,firstDayOfWeek:[String,Number],todayBtn:Boolean,minimal:Boolean,defaultView:{type:String,default:"Calendar",validator:We}},emits:[...Xt,"rangeStart","rangeEnd","navigation"],setup(e,{slots:r,emit:c}){const{proxy:i}=Ke(),{$q:d}=i,o=It(e,d),{getCache:M}=jt(),{tabindex:l,headerClass:m,getLocale:C,getCurrentDate:v}=Jt(e,d);let D;const F=$t(e),I=pt(F),j=p(null),S=p(pe()),H=p(C()),lt=_(()=>pe()),ut=_(()=>C()),A=_(()=>v()),g=p(Fe(S.value,H.value)),T=p(e.defaultView),ke=d.lang.rtl===!0?"right":"left",oe=p(ke.value),me=p(ke.value),he=g.value.year,le=p(he-he%X-(he<0?X:0)),O=p(null),st=_(()=>{const t=e.landscape===!0?"landscape":"portrait";return`q-date q-date--${t} q-date--${t}-${e.minimal===!0?"minimal":"standard"}`+(o.value===!0?" q-date--dark q-dark":"")+(e.bordered===!0?" q-date--bordered":"")+(e.square===!0?" q-date--square no-border-radius":"")+(e.flat===!0?" q-date--flat no-shadow":"")+(e.disable===!0?" disabled":e.readonly===!0?" q-date--readonly":"")}),z=_(()=>e.color||"primary"),J=_(()=>e.textColor||"white"),ue=_(()=>e.emitImmediately===!0&&e.multiple!==!0&&e.range!==!0),ge=_(()=>Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue!==null&&e.modelValue!==void 0?[e.modelValue]:[]),E=_(()=>ge.value.filter(t=>typeof t=="string").map(t=>_e(t,S.value,H.value)).filter(t=>t.dateHash!==null&&t.day!==null&&t.month!==null&&t.year!==null)),W=_(()=>{const t=a=>_e(a,S.value,H.value);return ge.value.filter(a=>qt(a)===!0&&a.from!==void 0&&a.to!==void 0).map(a=>({from:t(a.from),to:t(a.to)})).filter(a=>a.from.dateHash!==null&&a.to.dateHash!==null&&a.from.dateHash<a.to.dateHash)}),se=_(()=>e.calendar!=="persian"?t=>new Date(t.year,t.month-1,t.day):t=>{const a=Pe(t.year,t.month,t.day);return new Date(a.gy,a.gm-1,a.gd)}),ye=_(()=>e.calendar==="persian"?B:(t,a,n)=>ta(new Date(t.year,t.month-1,t.day,t.hour,t.minute,t.second,t.millisecond),a===void 0?S.value:a,n===void 0?H.value:n,t.year,t.timezoneOffset)),te=_(()=>E.value.length+W.value.reduce((t,a)=>t+1+ot(se.value(a.to),se.value(a.from)),0)),Oe=_(()=>{if(e.title!==void 0&&e.title!==null&&e.title.length!==0)return e.title;if(O.value!==null){const n=O.value.init,u=se.value(n);return H.value.daysShort[u.getDay()]+", "+H.value.monthsShort[n.month-1]+" "+n.day+K+"?"}if(te.value===0)return K;if(te.value>1)return`${te.value} ${H.value.pluralDay}`;const t=E.value[0],a=se.value(t);return isNaN(a.valueOf())===!0?K:H.value.headerTitle!==void 0?H.value.headerTitle(a,t):H.value.daysShort[a.getDay()]+", "+H.value.monthsShort[t.month-1]+" "+t.day}),it=_(()=>E.value.concat(W.value.map(a=>a.from)).sort((a,n)=>a.year-n.year||a.month-n.month)[0]),ct=_(()=>E.value.concat(W.value.map(a=>a.to)).sort((a,n)=>n.year-a.year||n.month-a.month)[0]),Ie=_(()=>{if(e.subtitle!==void 0&&e.subtitle!==null&&e.subtitle.length!==0)return e.subtitle;if(te.value===0)return K;if(te.value>1){const t=it.value,a=ct.value,n=H.value.monthsShort;return n[t.month-1]+(t.year!==a.year?" "+t.year+K+n[a.month-1]+" ":t.month!==a.month?K+n[a.month-1]:"")+" "+a.year}return E.value[0].year}),ie=_(()=>{const t=[d.iconSet.datetime.arrowLeft,d.iconSet.datetime.arrowRight];return d.lang.rtl===!0?t.reverse():t}),je=_(()=>e.firstDayOfWeek!==void 0?Number(e.firstDayOfWeek):H.value.firstDayOfWeek),dt=_(()=>{const t=H.value.daysShort,a=je.value;return a>0?t.slice(a,7).concat(t.slice(0,a)):t}),Q=_(()=>{const t=g.value;return e.calendar!=="persian"?new Date(t.year,t.month,0).getDate():fe(t.year,t.month)}),vt=_(()=>typeof e.eventColor=="function"?e.eventColor:()=>e.eventColor),q=_(()=>{if(e.navigationMinYearMonth===void 0)return null;const t=e.navigationMinYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),k=_(()=>{if(e.navigationMaxYearMonth===void 0)return null;const t=e.navigationMaxYearMonth.split("/");return{year:parseInt(t[0],10),month:parseInt(t[1],10)}}),Me=_(()=>{const t={month:{prev:!0,next:!0},year:{prev:!0,next:!0}};return q.value!==null&&q.value.year>=g.value.year&&(t.year.prev=!1,q.value.year===g.value.year&&q.value.month>=g.value.month&&(t.month.prev=!1)),k.value!==null&&k.value.year<=g.value.year&&(t.year.next=!1,k.value.year===g.value.year&&k.value.month<=g.value.month&&(t.month.next=!1)),t}),ce=_(()=>{const t={};return E.value.forEach(a=>{const n=P(a);t[n]===void 0&&(t[n]=[]),t[n].push(a.day)}),t}),Te=_(()=>{const t={};return W.value.forEach(a=>{const n=P(a.from),u=P(a.to);if(t[n]===void 0&&(t[n]=[]),t[n].push({from:a.from.day,to:n===u?a.to.day:void 0,range:a}),n<u){let s;const{year:b,month:f}=a.from,y=f<12?{year:b,month:f+1}:{year:b+1,month:1};for(;(s=P(y))<=u;)t[s]===void 0&&(t[s]=[]),t[s].push({from:void 0,to:s===u?a.to.day:void 0,range:a}),y.month++,y.month>12&&(y.year++,y.month=1)}}),t}),ae=_(()=>{if(O.value===null)return;const{init:t,initHash:a,final:n,finalHash:u}=O.value,[s,b]=a<=u?[t,n]:[n,t],f=P(s),y=P(b);if(f!==$.value&&y!==$.value)return;const Y={};return f===$.value?(Y.from=s.day,Y.includeFrom=!0):Y.from=1,y===$.value?(Y.to=b.day,Y.includeTo=!0):Y.to=Q.value,Y}),$=_(()=>P(g.value)),ft=_(()=>{const t={};if(e.options===void 0){for(let n=1;n<=Q.value;n++)t[n]=!0;return t}const a=typeof e.options=="function"?e.options:n=>e.options.includes(n);for(let n=1;n<=Q.value;n++){const u=$.value+"/"+w(n);t[n]=a(u)}return t}),mt=_(()=>{const t={};if(e.events===void 0)for(let a=1;a<=Q.value;a++)t[a]=!1;else{const a=typeof e.events=="function"?e.events:n=>e.events.includes(n);for(let n=1;n<=Q.value;n++){const u=$.value+"/"+w(n);t[n]=a(u)===!0&&vt.value(u)}}return t}),ht=_(()=>{let t,a;const{year:n,month:u}=g.value;if(e.calendar!=="persian")t=new Date(n,u-1,1),a=new Date(n,u-1,0).getDate();else{const s=Pe(n,u,1);t=new Date(s.gy,s.gm-1,s.gd);let b=u-1,f=n;b===0&&(b=12,f--),a=fe(f,b)}return{days:t.getDay()-je.value-1,endDay:a}}),Ve=_(()=>{const t=[],{days:a,endDay:n}=ht.value,u=a<0?a+7:a;if(u<6)for(let f=n-u;f<=n;f++)t.push({i:f,fill:!0});const s=t.length;for(let f=1;f<=Q.value;f++){const y={i:f,event:mt.value[f],classes:[]};ft.value[f]===!0&&(y.in=!0,y.flat=!0),t.push(y)}if(ce.value[$.value]!==void 0&&ce.value[$.value].forEach(f=>{const y=s+f-1;Object.assign(t[y],{selected:!0,unelevated:!0,flat:!1,color:z.value,textColor:J.value})}),Te.value[$.value]!==void 0&&Te.value[$.value].forEach(f=>{if(f.from!==void 0){const y=s+f.from-1,Y=s+(f.to||Q.value)-1;for(let ne=y;ne<=Y;ne++)Object.assign(t[ne],{range:f.range,unelevated:!0,color:z.value,textColor:J.value});Object.assign(t[y],{rangeFrom:!0,flat:!1}),f.to!==void 0&&Object.assign(t[Y],{rangeTo:!0,flat:!1})}else if(f.to!==void 0){const y=s+f.to-1;for(let Y=s;Y<=y;Y++)Object.assign(t[Y],{range:f.range,unelevated:!0,color:z.value,textColor:J.value});Object.assign(t[y],{flat:!1,rangeTo:!0})}else{const y=s+Q.value-1;for(let Y=s;Y<=y;Y++)Object.assign(t[Y],{range:f.range,unelevated:!0,color:z.value,textColor:J.value})}}),ae.value!==void 0){const f=s+ae.value.from-1,y=s+ae.value.to-1;for(let Y=f;Y<=y;Y++)t[Y].color=z.value,t[Y].editRange=!0;ae.value.includeFrom===!0&&(t[f].editRangeFrom=!0),ae.value.includeTo===!0&&(t[y].editRangeTo=!0)}g.value.year===A.value.year&&g.value.month===A.value.month&&(t[s+A.value.day-1].today=!0);const b=t.length%7;if(b>0){const f=7-b;for(let y=1;y<=f;y++)t.push({i:y,fill:!0})}return t.forEach(f=>{let y="q-date__calendar-item ";f.fill===!0?y+="q-date__calendar-item--fill":(y+=`q-date__calendar-item--${f.in===!0?"in":"out"}`,f.range!==void 0&&(y+=` q-date__range${f.rangeTo===!0?"-to":f.rangeFrom===!0?"-from":""}`),f.editRange===!0&&(y+=` q-date__edit-range${f.editRangeFrom===!0?"-from":""}${f.editRangeTo===!0?"-to":""}`),(f.range!==void 0||f.editRange===!0)&&(y+=` text-${f.color}`)),f.classes=y}),t}),gt=_(()=>e.disable===!0?{"aria-disabled":"true"}:e.readonly===!0?{"aria-readonly":"true"}:{});ee(()=>e.modelValue,t=>{if(D===t)D=0;else{const a=Fe(S.value,H.value);U(a.year,a.month,a)}}),ee(T,()=>{j.value!==null&&i.$el.contains(document.activeElement)===!0&&j.value.focus()}),ee(()=>g.value.year+"|"+g.value.month,()=>{c("navigation",{year:g.value.year,month:g.value.month})}),ee(lt,t=>{Qe(t,H.value,"mask"),S.value=t}),ee(ut,t=>{Qe(S.value,t,"locale"),H.value=t});function $e(){const{year:t,month:a,day:n}=A.value,u={...g.value,year:t,month:a,day:n},s=ce.value[P(u)];(s===void 0||s.includes(u.day)===!1)&&we(u),De(u.year,u.month)}function yt(t){We(t)===!0&&(T.value=t)}function Mt(t,a){["month","year"].includes(t)&&(t==="month"?Ae:be)(a===!0?-1:1)}function De(t,a){T.value="Calendar",U(t,a)}function Dt(t,a){if(e.range===!1||!t){O.value=null;return}const n=Object.assign({...g.value},t),u=a!==void 0?Object.assign({...g.value},a):n;O.value={init:n,initHash:B(n),final:u,finalHash:B(u)},De(n.year,n.month)}function pe(){return e.calendar==="persian"?"YYYY/MM/DD":e.mask}function _e(t,a,n){return ea(t,a,n,e.calendar,{hour:0,minute:0,second:0,millisecond:0})}function Fe(t,a){const n=Array.isArray(e.modelValue)===!0?e.modelValue:e.modelValue?[e.modelValue]:[];if(n.length===0)return Ee();const u=n[n.length-1],s=_e(u.from!==void 0?u.from:u,t,a);return s.dateHash===null?Ee():s}function Ee(){let t,a;if(e.defaultYearMonth!==void 0){const n=e.defaultYearMonth.split("/");t=parseInt(n[0],10),a=parseInt(n[1],10)}else{const n=A.value!==void 0?A.value:v();t=n.year,a=n.month}return{year:t,month:a,day:1,hour:0,minute:0,second:0,millisecond:0,dateHash:t+"/"+w(a)+"/01"}}function Ae(t){let a=g.value.year,n=Number(g.value.month)+t;n===13?(n=1,a++):n===0&&(n=12,a--),U(a,n),ue.value===!0&&de("month")}function be(t){const a=Number(g.value.year)+t;U(a,g.value.month),ue.value===!0&&de("year")}function _t(t){U(t,g.value.month),T.value=e.defaultView==="Years"?"Months":"Calendar",ue.value===!0&&de("year")}function bt(t){U(g.value.year,t),T.value="Calendar",ue.value===!0&&de("month")}function wt(t,a){const n=ce.value[a];(n!==void 0&&n.includes(t.day)===!0?Ye:we)(t)}function L(t){return{year:t.year,month:t.month,day:t.day}}function U(t,a,n){if(q.value!==null&&t<=q.value.year&&((a<q.value.month||t<q.value.year)&&(a=q.value.month),t=q.value.year),k.value!==null&&t>=k.value.year&&((a>k.value.month||t>k.value.year)&&(a=k.value.month),t=k.value.year),n!==void 0){const{hour:s,minute:b,second:f,millisecond:y,timezoneOffset:Y,timeHash:ne}=n;Object.assign(g.value,{hour:s,minute:b,second:f,millisecond:y,timezoneOffset:Y,timeHash:ne})}const u=t+"/"+w(a)+"/01";u!==g.value.dateHash&&(oe.value=g.value.dateHash<u==(d.lang.rtl!==!0)?"left":"right",t!==g.value.year&&(me.value=oe.value),Be(()=>{le.value=t-t%X-(t<0?X:0),Object.assign(g.value,{year:t,month:a,day:1,dateHash:u})}))}function Ne(t,a,n){const u=t!==null&&t.length===1&&e.multiple===!1?t[0]:t;D=u;const{reason:s,details:b}=Ze(a,n);c("update:modelValue",u,s,b)}function de(t){const a=E.value[0]!==void 0&&E.value[0].dateHash!==null?{...E.value[0]}:{...g.value};Be(()=>{a.year=g.value.year,a.month=g.value.month;const n=e.calendar!=="persian"?new Date(a.year,a.month,0).getDate():fe(a.year,a.month);a.day=Math.min(Math.max(1,a.day),n);const u=G(a);D=u;const{details:s}=Ze("",a);c("update:modelValue",u,t,s)})}function Ze(t,a){return a.from!==void 0?{reason:`${t}-range`,details:{...L(a.target),from:L(a.from),to:L(a.to)}}:{reason:`${t}-day`,details:L(a)}}function G(t,a,n){return t.from!==void 0?{from:ye.value(t.from,a,n),to:ye.value(t.to,a,n)}:ye.value(t,a,n)}function we(t){let a;if(e.multiple===!0)if(t.from!==void 0){const n=B(t.from),u=B(t.to),s=E.value.filter(f=>f.dateHash<n||f.dateHash>u),b=W.value.filter(({from:f,to:y})=>y.dateHash<n||f.dateHash>u);a=s.concat(b).concat(t).map(f=>G(f))}else{const n=ge.value.slice();n.push(G(t)),a=n}else a=G(t);Ne(a,"add",t)}function Ye(t){if(e.noUnset===!0)return;let a=null;if(e.multiple===!0&&Array.isArray(e.modelValue)===!0){const n=G(t);t.from!==void 0?a=e.modelValue.filter(u=>u.from!==void 0?u.from!==n.from&&u.to!==n.to:!0):a=e.modelValue.filter(u=>u!==n),a.length===0&&(a=null)}Ne(a,"remove",t)}function Qe(t,a,n){const u=E.value.concat(W.value).map(s=>G(s,t,a)).filter(s=>s.from!==void 0?s.from.dateHash!==null&&s.to.dateHash!==null:s.dateHash!==null);c("update:modelValue",(e.multiple===!0?u:u[0])||null,n)}function Yt(){if(e.minimal!==!0)return h("div",{class:"q-date__header "+m.value},[h("div",{class:"relative-position"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-yr-"+Ie.value,class:"q-date__header-subtitle q-date__header-link "+(T.value==="Years"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...M("vY",{onClick(){T.value="Years"},onKeyup(t){t.keyCode===13&&(T.value="Years")}})},[Ie.value]))]),h("div",{class:"q-date__header-title relative-position flex no-wrap"},[h("div",{class:"relative-position col"},[h(re,{name:"q-transition--fade"},()=>h("div",{key:"h-sub"+Oe.value,class:"q-date__header-title-label q-date__header-link "+(T.value==="Calendar"?"q-date__header-link--active":"cursor-pointer"),tabindex:l.value,...M("vC",{onClick(){T.value="Calendar"},onKeyup(t){t.keyCode===13&&(T.value="Calendar")}})},[Oe.value]))]),e.todayBtn===!0?h(N,{class:"q-date__header-today self-start",icon:d.iconSet.datetime.today,flat:!0,size:"sm",round:!0,tabindex:l.value,onClick:$e}):null])])}function xe({label:t,type:a,key:n,dir:u,goTo:s,boundaries:b,cls:f}){return[h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[0],tabindex:l.value,disable:b.prev===!1,...M("go-#"+a,{onClick(){s(-1)}})})]),h("div",{class:"relative-position overflow-hidden flex flex-center"+f},[h(re,{name:"q-transition--jump-"+u},()=>h("div",{key:n},[h(N,{flat:!0,dense:!0,noCaps:!0,label:t,tabindex:l.value,...M("view#"+a,{onClick:()=>{T.value=a}})})]))]),h("div",{class:"row items-center q-date__arrow"},[h(N,{round:!0,dense:!0,size:"sm",flat:!0,icon:ie.value[1],tabindex:l.value,disable:b.next===!1,...M("go+#"+a,{onClick(){s(1)}})})])]}const xt={Calendar:()=>[h("div",{key:"calendar-view",class:"q-date__view q-date__calendar"},[h("div",{class:"q-date__navigation row items-center no-wrap"},xe({label:H.value.months[g.value.month-1],type:"Months",key:g.value.month,dir:oe.value,goTo:Ae,boundaries:Me.value.month,cls:" col"}).concat(xe({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:be,boundaries:Me.value.year,cls:""}))),h("div",{class:"q-date__calendar-weekdays row items-center no-wrap"},dt.value.map(t=>h("div",{class:"q-date__calendar-item"},[h("div",t)]))),h("div",{class:"q-date__calendar-days-container relative-position overflow-hidden"},[h(re,{name:"q-transition--slide-"+oe.value},()=>h("div",{key:$.value,class:"q-date__calendar-days fit"},Ve.value.map(t=>h("div",{class:t.classes},[t.in===!0?h(N,{class:t.today===!0?"q-date__today":"",dense:!0,flat:t.flat,unelevated:t.unelevated,color:t.color,textColor:t.textColor,label:t.i,tabindex:l.value,...M("day#"+t.i,{onClick:()=>{St(t.i)},onMouseover:()=>{Ht(t.i)}})},t.event!==!1?()=>h("div",{class:"q-date__event bg-"+t.event}):null):h("div",""+t.i)]))))])])],Months(){const t=g.value.year===A.value.year,a=u=>q.value!==null&&g.value.year===q.value.year&&q.value.month>u||k.value!==null&&g.value.year===k.value.year&&k.value.month<u,n=H.value.monthsShort.map((u,s)=>{const b=g.value.month===s+1;return h("div",{class:"q-date__months-item flex flex-center"},[h(N,{class:t===!0&&A.value.month===s+1?"q-date__today":null,flat:b!==!0,label:u,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?J.value:null,tabindex:l.value,disable:a(s+1),...M("month#"+s,{onClick:()=>{bt(s+1)}})})])});return e.yearsInMonthView===!0&&n.unshift(h("div",{class:"row no-wrap full-width"},[xe({label:g.value.year,type:"Years",key:g.value.year,dir:me.value,goTo:be,boundaries:Me.value.year,cls:" col"})])),h("div",{key:"months-view",class:"q-date__view q-date__months flex flex-center"},n)},Years(){const t=le.value,a=t+X,n=[],u=s=>q.value!==null&&q.value.year>s||k.value!==null&&k.value.year<s;for(let s=t;s<=a;s++){const b=g.value.year===s;n.push(h("div",{class:"q-date__years-item flex flex-center"},[h(N,{key:"yr"+s,class:A.value.year===s?"q-date__today":null,flat:!b,label:s,dense:!0,unelevated:b,color:b===!0?z.value:null,textColor:b===!0?J.value:null,tabindex:l.value,disable:u(s),...M("yr#"+s,{onClick:()=>{_t(s)}})})]))}return h("div",{class:"q-date__view q-date__years flex flex-center"},[h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:ie.value[0],tabindex:l.value,disable:u(t),...M("y-",{onClick:()=>{le.value-=X}})})]),h("div",{class:"q-date__years-content col self-stretch row items-center"},n),h("div",{class:"col-auto"},[h(N,{round:!0,dense:!0,flat:!0,icon:ie.value[1],tabindex:l.value,disable:u(a),...M("y+",{onClick:()=>{le.value+=X}})})])])}};function St(t){const a={...g.value,day:t};if(e.range===!1){wt(a,$.value);return}if(O.value===null){const n=Ve.value.find(s=>s.fill!==!0&&s.i===t);if(e.noUnset!==!0&&n.range!==void 0){Ye({target:a,from:n.range.from,to:n.range.to});return}if(n.selected===!0){Ye(a);return}const u=B(a);O.value={init:a,initHash:u,final:a,finalHash:u},c("rangeStart",L(a))}else{const n=O.value.initHash,u=B(a),s=n<=u?{from:O.value.init,to:a}:{from:a,to:O.value.init};O.value=null,we(n===u?a:{target:a,...s}),c("rangeEnd",{from:L(s.from),to:L(s.to)})}}function Ht(t){if(O.value!==null){const a={...g.value,day:t};Object.assign(O.value,{final:a,finalHash:B(a)})}}return Object.assign(i,{setToday:$e,setView:yt,offsetCalendar:Mt,setCalendarTo:De,setEditingRange:Dt}),()=>{const t=[h("div",{class:"q-date__content col relative-position"},[h(re,{name:"q-transition--fade"},xt[T.value])])],a=Ft(r.default);return a!==void 0&&t.push(h("div",{class:"q-date__actions"},a)),e.name!==void 0&&e.disable!==!0&&I(t,"push"),h("div",{class:st.value,...gt.value},[Yt(),h("div",{ref:j,class:"q-date__main col column",tabindex:-1},t)])}}}),fa=Ge({name:"QPopupProxy",props:{...At,breakpoint:{type:[String,Number],default:450}},emits:["show","hide"],setup(e,{slots:r,emit:c,attrs:i}){const{proxy:d}=Ke(),{$q:o}=d,M=p(!1),l=p(null),m=_(()=>parseInt(e.breakpoint,10)),{canShow:C}=Nt({showing:M});function v(){return o.screen.width<m.value||o.screen.height<m.value?"dialog":"menu"}const D=p(v()),F=_(()=>D.value==="menu"?{maxHeight:"99vh"}:{});ee(()=>v(),S=>{M.value!==!0&&(D.value=S)});function I(S){M.value=!0,c("show",S)}function j(S){M.value=!1,D.value=v(),c("hide",S)}return Object.assign(d,{show(S){C(S)===!0&&l.value.show(S)},hide(S){l.value.hide(S)},toggle(S){l.value.toggle(S)}}),kt(d,"currentComponent",()=>({type:D.value,ref:l.value})),()=>{const S={ref:l,...F.value,...i,onShow:I,onHide:j};let H;return D.value==="dialog"?H=Et:(H=Tt,Object.assign(S,{target:e.target,contextMenu:e.contextMenu,noParentEvent:!0,separateClosePopup:!0})),h(H,S,r.default)}}});export{fa as Q,va as a};
