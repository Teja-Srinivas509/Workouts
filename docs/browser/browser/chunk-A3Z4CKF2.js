import{F as gt,a as ft,j as $,ja as mt,k as ht,ma as yt,n as tt}from"./chunk-H7GECWOW.js";function St(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}function rt(t,e={}){if(St(t)){let i=(n,s)=>{var o,r;let c=(o=t?.$attrs)!=null&&o[n]?[(r=t?.$attrs)==null?void 0:r[n]]:[];return[s].flat().reduce((l,a)=>{if(a!=null){let p=typeof a;if(p==="string"||p==="number")l.push(a);else if(p==="object"){let f=Array.isArray(a)?i(n,a):Object.entries(a).map(([d,u])=>n==="style"&&(u||u===0)?`${d.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${u}`:u?d:void 0);l=f.length?l.concat(f.filter(d=>!!d)):l}}return l},c)};Object.entries(e).forEach(([n,s])=>{if(s!=null){let o=n.match(/^on(.+)/);o?t.addEventListener(o[1].toLowerCase(),s):n==="p-bind"||n==="pBind"?rt(t,s):(s=n==="class"?[...new Set(i("class",s))].join(" ").trim():n==="style"?i("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=s),t.setAttribute(n,s))}})}}function _t(t,e="",i){St(t)&&i!==null&&i!==void 0&&t.setAttribute(e,i)}function Et(){let t=new Map;return{on(e,i){let n=t.get(e);return n?n.push(i):n=[i],t.set(e,n),this},off(e,i){let n=t.get(e);return n&&n.splice(n.indexOf(i)>>>0,1),this},emit(e,i){let n=t.get(e);n&&n.slice().map(s=>{s(i)})},clear(){t.clear()}}}function H(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function qt(t){return!!(t&&t.constructor&&t.call&&t.apply)}function h(t){return!H(t)}function v(t,e=!0){return t instanceof Object&&t.constructor===Object&&(e||Object.keys(t).length!==0)}function O(t,...e){return qt(t)?t(...e):t}function w(t,e=!0){return typeof t=="string"&&(e||t!=="")}function et(t,e=!0){return Array.isArray(t)&&(e||t.length!==0)}function bt(t){return h(t)&&!isNaN(t)}function S(t,e){if(e){let i=e.test(t);return e.lastIndex=0,i}return!1}function I(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function it(t){return w(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(e,i)=>i===0?e:"-"+e.toLowerCase()).toLowerCase():t}function st(t){return w(t)?t.replace(/[A-Z]/g,(e,i)=>i===0?e:"."+e.toLowerCase()).toLowerCase():t}function zt(){let t=[],e=(r,c,l=999)=>{let a=s(r,c,l),p=a.value+(a.key===r?0:l)+1;return t.push({key:r,value:p}),p},i=r=>{t=t.filter(c=>c.value!==r)},n=(r,c)=>s(r,c).value,s=(r,c,l=0)=>[...t].reverse().find(a=>c?!0:a.key===r)||{key:r,value:l},o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,c,l)=>{c&&(c.style.zIndex=String(e(r,!0,l)))},clear:r=>{r&&(i(o(r)),r.style.zIndex="")},getCurrent:r=>n(r,!0)}}var ge=zt();var $e=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})();var He=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=gt({type:t});static \u0275inj=ht({imports:[yt]})}return t})();var Zt=Object.defineProperty,Xt=Object.defineProperties,Qt=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertySymbols,Rt=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,Tt=(t,e,i)=>e in t?Zt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,b=(t,e)=>{for(var i in e||(e={}))Rt.call(e,i)&&Tt(t,i,e[i]);if(nt)for(var i of nt(e))At.call(e,i)&&Tt(t,i,e[i]);return t},ot=(t,e)=>Xt(t,Qt(e)),T=(t,e)=>{var i={};for(var n in t)Rt.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(t!=null&&nt)for(var n of nt(t))e.indexOf(n)<0&&At.call(t,n)&&(i[n]=t[n]);return i};var Jt=Et(),N=Jt;function Ct(t,e){et(t)?t.push(...e||[]):v(t)&&Object.assign(t,e)}function te(t){return v(t)&&t.hasOwnProperty("value")&&t.hasOwnProperty("type")?t.value:t}function ee(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function at(t="",e=""){return ee(`${w(t,!1)&&w(e,!1)?`${t}-`:t}${e}`)}function vt(t="",e=""){return`--${at(t,e)}`}function ie(t=""){let e=(t.match(/{/g)||[]).length,i=(t.match(/}/g)||[]).length;return(e+i)%2!==0}function Lt(t,e="",i="",n=[],s){if(w(t)){let o=/{([^}]*)}/g,r=t.trim();if(ie(r))return;if(S(r,o)){let c=r.replaceAll(o,p=>{let d=p.replace(/{|}/g,"").split(".").filter(u=>!n.some(g=>S(u,g)));return`var(${vt(i,it(d.join("-")))}${h(s)?`, ${s}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,a=/var\([^)]+\)/g;return S(c.replace(a,"0"),l)?`calc(${c})`:c}return r}else if(bt(t))return t}function ne(t,e,i){w(e,!1)&&t.push(`${e}:${i};`)}function x(t,e){return t?`${t}{${e}}`:""}var D=(...t)=>re(y.getTheme(),...t),re=(t={},e,i,n)=>{if(e){let{variable:s,options:o}=y.defaults||{},{prefix:r,transform:c}=t?.options||o||{},a=S(e,/{([^}]*)}/g)?e:`{${e}}`;return n==="value"||H(n)&&c==="strict"?y.getTokenValue(e):Lt(a,void 0,r,[s.excludedKeyRegex],i)}return""};function se(t,e={}){let i=y.defaults.variable,{prefix:n=i.prefix,selector:s=i.selector,excludedKeyRegex:o=i.excludedKeyRegex}=e,r=(a,p="")=>Object.entries(a).reduce((f,[d,u])=>{let g=S(d,o)?at(p):at(p,it(d)),m=te(u);if(v(m)){let{variables:C,tokens:R}=r(m,g);Ct(f.tokens,R),Ct(f.variables,C)}else f.tokens.push((n?g.replace(`${n}-`,""):g).replaceAll("-",".")),ne(f.variables,vt(g),Lt(m,g,n,[o]));return f},{variables:[],tokens:[]}),{variables:c,tokens:l}=r(t,n);return{value:c,tokens:l,declarations:c.join(""),css:x(s,c.join(""))}}var E={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:`${t}{:root{[CSS]}}`,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let e=Object.keys(this.rules).filter(i=>i!=="custom").map(i=>this.rules[i]);return[t].flat().map(i=>{var n;return(n=e.map(s=>s.resolve(i)).find(s=>s.matched))!=null?n:this.rules.custom.resolve(i)})}},_toVariables(t,e){return se(t,{prefix:e?.prefix})},getCommon({name:t="",theme:e={},params:i,set:n,defaults:s}){var o,r,c,l,a,p,f;let{preset:d,options:u}=e,g,m,C,R,A,L,_;if(h(d)&&u.transform!=="strict"){let{primitive:M,semantic:W,extend:U}=d,P=W||{},{colorScheme:B}=P,V=T(P,["colorScheme"]),K=U||{},{colorScheme:G}=K,k=T(K,["colorScheme"]),F=B||{},{dark:j}=F,Y=T(F,["dark"]),q=G||{},{dark:z}=q,Z=T(q,["dark"]),X=h(M)?this._toVariables({primitive:M},u):{},Q=h(V)?this._toVariables({semantic:V},u):{},J=h(Y)?this._toVariables({light:Y},u):{},lt=h(j)?this._toVariables({dark:j},u):{},pt=h(k)?this._toVariables({semantic:k},u):{},ut=h(Z)?this._toVariables({light:Z},u):{},dt=h(z)?this._toVariables({dark:z},u):{},[It,Nt]=[(o=X.declarations)!=null?o:"",X.tokens],[xt,Dt]=[(r=Q.declarations)!=null?r:"",Q.tokens||[]],[Pt,kt]=[(c=J.declarations)!=null?c:"",J.tokens||[]],[Ft,$t]=[(l=lt.declarations)!=null?l:"",lt.tokens||[]],[Ht,Mt]=[(a=pt.declarations)!=null?a:"",pt.tokens||[]],[Wt,Ut]=[(p=ut.declarations)!=null?p:"",ut.tokens||[]],[Bt,Vt]=[(f=dt.declarations)!=null?f:"",dt.tokens||[]];g=this.transformCSS(t,It,"light","variable",u,n,s),m=Nt;let Kt=this.transformCSS(t,`${xt}${Pt}`,"light","variable",u,n,s),Gt=this.transformCSS(t,`${Ft}`,"dark","variable",u,n,s);C=`${Kt}${Gt}`,R=[...new Set([...Dt,...kt,...$t])];let jt=this.transformCSS(t,`${Ht}${Wt}color-scheme:light`,"light","variable",u,n,s),Yt=this.transformCSS(t,`${Bt}color-scheme:dark`,"dark","variable",u,n,s);A=`${jt}${Yt}`,L=[...new Set([...Mt,...Ut,...Vt])],_=O(d.css,{dt:D})}return{primitive:{css:g,tokens:m},semantic:{css:C,tokens:R},global:{css:A,tokens:L},style:_}},getPreset({name:t="",preset:e={},options:i,params:n,set:s,defaults:o,selector:r}){var c,l,a;let p,f,d;if(h(e)&&i.transform!=="strict"){let u=t.replace("-directive",""),g=e,{colorScheme:m,extend:C,css:R}=g,A=T(g,["colorScheme","extend","css"]),L=C||{},{colorScheme:_}=L,M=T(L,["colorScheme"]),W=m||{},{dark:U}=W,P=T(W,["dark"]),B=_||{},{dark:V}=B,K=T(B,["dark"]),G=h(A)?this._toVariables({[u]:b(b({},A),M)},i):{},k=h(P)?this._toVariables({[u]:b(b({},P),K)},i):{},F=h(U)?this._toVariables({[u]:b(b({},U),V)},i):{},[j,Y]=[(c=G.declarations)!=null?c:"",G.tokens||[]],[q,z]=[(l=k.declarations)!=null?l:"",k.tokens||[]],[Z,X]=[(a=F.declarations)!=null?a:"",F.tokens||[]],Q=this.transformCSS(u,`${j}${q}`,"light","variable",i,s,o,r),J=this.transformCSS(u,Z,"dark","variable",i,s,o,r);p=`${Q}${J}`,f=[...new Set([...Y,...z,...X])],d=O(R,{dt:D})}return{css:p,tokens:f,style:d}},getPresetC({name:t="",theme:e={},params:i,set:n,defaults:s}){var o;let{preset:r,options:c}=e,l=(o=r?.components)==null?void 0:o[t];return this.getPreset({name:t,preset:l,options:c,params:i,set:n,defaults:s})},getPresetD({name:t="",theme:e={},params:i,set:n,defaults:s}){var o;let r=t.replace("-directive",""),{preset:c,options:l}=e,a=(o=c?.directives)==null?void 0:o[r];return this.getPreset({name:r,preset:a,options:l,params:i,set:n,defaults:s})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,e){var i;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?e.options.darkModeSelector:(i=t.darkModeSelector)!=null?i:e.options.darkModeSelector):[]},getLayerOrder(t,e={},i,n){let{cssLayer:s}=e;return s?`@layer ${O(s.order||"primeui",i)}`:""},getCommonStyleSheet({name:t="",theme:e={},params:i,props:n={},set:s,defaults:o}){let r=this.getCommon({name:t,theme:e,params:i,set:s,defaults:o}),c=Object.entries(n).reduce((l,[a,p])=>l.push(`${a}="${p}"`)&&l,[]).join(" ");return Object.entries(r||{}).reduce((l,[a,p])=>{if(p?.css){let f=I(p?.css),d=`${a}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${d}" ${c}>${f}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:e={},params:i,props:n={},set:s,defaults:o}){var r;let c={name:t,theme:e,params:i,set:s,defaults:o},l=(r=t.includes("-directive")?this.getPresetD(c):this.getPresetC(c))==null?void 0:r.css,a=Object.entries(n).reduce((p,[f,d])=>p.push(`${f}="${d}"`)&&p,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${a}>${I(l)}</style>`:""},createTokens(t={},e,i="",n="",s={}){return Object.entries(t).forEach(([o,r])=>{let c=S(o,e.variable.excludedKeyRegex)?i:i?`${i}.${st(o)}`:st(o),l=n?`${n}.${o}`:o;v(r)?this.createTokens(r,e,c,l,s):(s[c]||(s[c]={paths:[],computed(a,p={}){var f,d;return this.paths.length===1?(f=this.paths[0])==null?void 0:f.computed(this.paths[0].scheme,p.binding):a&&a!=="none"?(d=this.paths.find(u=>u.scheme===a))==null?void 0:d.computed(a,p.binding):this.paths.map(u=>u.computed(u.scheme,p[u.scheme]))}}),s[c].paths.push({path:l,value:r,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(a,p={}){let f=/{([^}]*)}/g,d=r;if(p.name=this.path,p.binding||(p.binding={}),S(r,f)){let g=r.trim().replaceAll(f,R=>{var A;let L=R.replace(/{|}/g,""),_=(A=s[L])==null?void 0:A.computed(a,p);return et(_)&&_.length===2?`light-dark(${_[0].value},${_[1].value})`:_?.value}),m=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,C=/var\([^)]+\)/g;d=S(g.replace(C,"0"),m)?`calc(${g})`:g}return H(p.binding)&&delete p.binding,{colorScheme:a,path:this.path,paths:p,value:d.includes("undefined")?void 0:d}}}))}),s},getTokenValue(t,e,i){var n;let o=(l=>l.split(".").filter(p=>!S(p.toLowerCase(),i.variable.excludedKeyRegex)).join("."))(e),r=e.includes("colorScheme.light")?"light":e.includes("colorScheme.dark")?"dark":void 0,c=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(l=>l);return c.length===1?c[0].value:c.reduce((l={},a)=>{let p=a,{colorScheme:f}=p,d=T(p,["colorScheme"]);return l[f]=d,l},void 0)},getSelectorRule(t,e,i,n){return i==="class"||i==="attr"?x(h(e)?`${t}${e},${t} ${e}`:t,n):x(t,h(e)?x(e,n):n)},transformCSS(t,e,i,n,s={},o,r,c){if(h(e)){let{cssLayer:l}=s;if(n!=="style"){let a=this.getColorSchemeOption(s,r);e=i==="dark"?a.reduce((p,{type:f,selector:d})=>(h(d)&&(p+=d.includes("[CSS]")?d.replace("[CSS]",e):this.getSelectorRule(d,c,f,e)),p),""):x(c??":root",e)}if(l){let a={name:"primeui",order:"primeui"};v(l)&&(a.name=O(l.name,{name:t,type:n})),h(a.name)&&(e=x(`@layer ${a.name}`,e),o?.layerNames(a.name))}return e}return""}},y={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:e}=t;e&&(this._theme=ot(b({},e),{options:b(b({},this.defaults.options),e.options)}),this._tokens=E.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),N.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=ot(b({},this.theme),{preset:t}),this._tokens=E.createTokens(t,this.defaults),this.clearLoadedStyleNames(),N.emit("preset:change",t),N.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=ot(b({},this.theme),{options:t}),this.clearLoadedStyleNames(),N.emit("options:change",t),N.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return E.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",e){return E.getCommon({name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",e){let i={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return E.getPresetC(i)},getDirective(t="",e){let i={name:t,theme:this.theme,params:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return E.getPresetD(i)},getCustomPreset(t="",e,i,n){let s={name:t,preset:e,options:this.options,selector:i,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return E.getPreset(s)},getLayerOrderCSS(t=""){return E.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",e,i="style",n){return E.transformCSS(t,e,n,i,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",e,i={}){return E.getCommonStyleSheet({name:t,theme:this.theme,params:e,props:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,e,i={}){return E.getStyleSheet({name:t,theme:this.theme,params:e,props:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:e}){this._loadingStyles.size&&(this._loadingStyles.delete(e),N.emit(`theme:${e}:load`,t),!this._loadingStyles.size&&N.emit("theme:load"))}};var oe=0,wt=(()=>{class t{document=tt(mt);use(i,n={}){let s=!1,o=i,r=null,{immediate:c=!0,manual:l=!1,name:a=`style_${++oe}`,id:p=void 0,media:f=void 0,nonce:d=void 0,first:u=!1,props:g={}}=n;if(this.document){if(r=this.document.querySelector(`style[data-primeng-style-id="${a}"]`)||p&&this.document.getElementById(p)||this.document.createElement("style"),!r.isConnected){o=i,rt(r,{type:"text/css",media:f,nonce:d});let m=this.document.head;u&&m.firstChild?m.insertBefore(r,m.firstChild):m.appendChild(r),_t(r,"data-primeng-style-id",a)}return r.textContent!==o&&(r.textContent=o),{id:p,name:a,el:r,css:o}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ae=({dt:t})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${t("disabled.opacity")};
}

.pi {
    font-size: ${t("icon.size")};
}

.p-icon {
    width: ${t("icon.size")};
    height: ${t("icon.size")};
}

.p-overlay-mask {
    background: ${t("mask.background")};
    color: ${t("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${t("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${t("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${t("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${t("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,ce=({dt:t})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${t("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,ci=(()=>{class t{name="base";useStyle=tt(wt);theme=ae;css=ce;classes={};inlineStyles={};load=(i,n={},s=o=>o)=>{let o=s(O(i,{dt:D}));return o?this.useStyle.use(I(o),ft({name:this.name},n)):{}};loadCSS=(i={})=>this.load(this.css,i);loadTheme=(i={},n="")=>this.load(this.theme,i,(s="")=>y.transformCSS(i.name||this.name,`${s}${n}`));getCommonTheme=i=>y.getCommon(this.name,i);getComponentTheme=i=>y.getComponent(this.name,i);getDirectiveTheme=i=>y.getDirective(this.name,i);getPresetTheme=(i,n,s)=>y.getCustomPreset(this.name,i,n,s);getLayerOrderThemeCSS=()=>y.getLayerOrderCSS(this.name);getStyleSheet=(i="",n={})=>{if(this.css){let s=O(this.css,{dt:D}),o=I(`${s}${i}`),r=Object.entries(n).reduce((c,[l,a])=>c.push(`${l}="${a}"`)&&c,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${r}>${o}</style>`}return""};getCommonThemeStyleSheet=(i,n={})=>y.getCommonStyleSheet(this.name,i,n);getThemeStyleSheet=(i,n={})=>{let s=[y.getStyleSheet(this.name,i,n)];if(this.theme){let o=this.name==="base"?"global-style":`${this.name}-style`,r=O(this.theme,{dt:D}),c=I(y.transformCSS(o,r)),l=Object.entries(n).reduce((a,[p,f])=>a.push(`${p}="${f}"`)&&a,[]).join(" ");s.push(`<style type="text/css" data-primeng-style-id="${o}" ${l}>${c}</style>`)}return s.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=$({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();export{$e as a,He as b,N as c,y as d,ci as e};
