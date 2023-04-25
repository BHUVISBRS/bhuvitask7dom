module.exports=function(n,r){"use strict";var t={};function __webpack_require__(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};n[r].call(i.exports,i,i.exports,__webpack_require__);i.l=true;return i.exports}__webpack_require__.ab=__dirname+"/";function startup(){return __webpack_require__(214)}r(__webpack_require__);return startup()}({25:function(n){n.exports=require("v8-compile-cache")},50:function(n,r,t){const i=t(747);const e=t(622);t(25);let o={};const f=(n,r,t,f)=>{if(o.window){return o}let l={};const s=e.join(n,"package.json");const h=i.existsSync(s);if(h){try{const r=require(s);if(r.jsRepl){l=r.jsRepl}if(l.html.path){const r=e.resolve(n,l.html.path);try{const n=i.readFileSync(r);l.html.content=n.toString()}catch(n){}}}catch(n){}}try{l.keepalive=true;o=require(`${r}${e.sep}node_modules${e.sep}${t}`)(l,!f);return o}catch(n){}};const l=()=>{o={}};n.exports={getDom:f,resetDom:l}},214:function(n,r,t){n=t.nmd(n);const{types:i}=t(669);const{isDate:e,isRegExp:o,isNativeError:f}=i;const{getDom:l}=t(50);const s=t(652);const h=t(400);const u=n=>{if(Array.isArray(n)){return"array"}else if(e(n)){return"date"}else if(o(n)){return"regex"}else if(typeof n==="bigint"){return"number"}else{return typeof n}};const d=n=>{if(typeof n==="string"){return{message:n}}if(n instanceof Error){const r={message:n.message,stack:n.stack,name:n.name};Object.keys(n).forEach(function(t){r[t]=n[t]});return r}};const $=(n,r,t,i)=>{const e=JSON.parse(process.env.jsRepl);const{outRootDir:o,cvVar:f,dom:s,test:h}=e;const{jsdom:u,mode:d,rootDir:$,doc:p,detectInfiniteLoops:c}=n;if(i){global[f]=m({sendLog:r,sendError:t,mode:d,doc:p,detectInfiniteLoops:c,testPlugin:h},i);if(u){l($,o,s,i)}return global[f]}else{let n={};if(u){n=l($,o,s)}n[f]=m({sendLog:r,sendError:t,mode:d,doc:p,detectInfiniteLoops:c,testPlugin:h});return{globals:n,logger:n[f]}}};const p=(n,r,t,i)=>{let e=[];let o=[];if(e.length){o.forEach((r,f)=>{r.forEach(r=>{let l,s;s=o.findIndex((n,t)=>{l=n.indexOf(r);if(l!==-1&&t<f){return true}return false});if(s>-1&&typeof l==="number"){e[f].values.push(e[s][l])}else{e[f].values.push({type:u(r),text:n(r,{customInspect:false,override:t==="evaluate"&&i!=="log",showHidden:t==="evaluate"&&i!=="log",showProxy:t==="evaluate"&&i!=="log",depth:i==="log"?4:2,sorted:true})})}})});r({type:t,rels:e});e=[];o=[]}};const c=n=>{return n&&Object.keys(n).length>0};class Data{constructor(){this.data={}}ensureRelExists(n){if(!this.data[n]){this.data[n]={logs:{}}}}getLine(n){if(Array.isArray(n)){if(typeof n[0][0]==="number"){return n[0][1]}else{return n[0][0][1]}}else{return n}}add({type:n,line:r,values:t,rel:i}){this.ensureRelExists(i);const e=this.getLine(r);const o=this.data[i].logs[e];if(!o){this.data[i].logs[e]={type:n,line:r,values:t,rel:i}}else{o.values=[...o.values,...t]}}markLogs(n,r){if(this.data[r]){const t=this.data[r].logs;Object.keys(t).forEach(r=>{const i=n.some(n=>{if(r>=n.start.line&&r<=n.end.line){return true}return false});if(i){t[r].allowed=true}})}}get(){return this.data}}const m=(n,r)=>{const{sendLog:t,sendError:i,mode:e,testPlugin:o,doc:l,detectInfiniteLoops:$}=n;let[p,c]=e.split(".");const m=c==="all";const P=l&&l.line||0;const A=l&&l.rel||null;let w=[];let y=false;let g=false;let M;if(o){M=require(o).init()}const _=new Data;const j=new s;const L=[];const N=()=>{return{line:P,rel:A}};const S=n=>{y=true;const r=_.get();if(p==="evaluate"&&!g){if(Object.keys(r).length===0){g=true;return}}t({type:"end",subtype:"console",sync:true,mode:p,logs:r,cov:p==="run"?n:null,errors:L,doc:N()});if(o){M.check(50).then(function(){t({type:"end",sync:false})})}};return{data:{},asyncTimers:[],init(){Error.stackTraceLimit=50},clear(){this.data={}},log(n,r,i,e,o,s,d={}){if(s&&o!==l.idx){return}if(p==="evaluate"&&!m&&!s){return}const $={inspect:d.noInspect?undefined:{customInspect:false,override:p==="evaluate"&&c!=="log",showHidden:p==="evaluate"&&c!=="log",showProxy:p==="evaluate"&&c!=="log",depth:c==="log"?4:2,sorted:true},valueType:d.type||undefined};const P={type:"console",line:r,values:[],rel:i};n.forEach((n,r)=>{if(f(n)){this.error(n)}else{P.values.push({type:$.valueType||u(n),text:$.inspect?h(n,$.inspect):n,name:e[r]})}});if(!P.values.length){return}if(!y){_.add(P)}else{if(p==="run"){t(P)}else{if(g){_.add(P);S()}else{t({type:p,sync:false,subtype:"console",rels:[P]})}}}},logVal(n,r,t,i,e){if(p==="evaluate"&&c==="log"){this.log(n,r,t,i,e,true)}return false},val(n,r,t,i,e){if(p==="evaluate"&&c==="eval"){this.log(n,r,t,i,e,true)}return false},error(n){if(r){n=d(n)}if(p==="run"){if(y){i({type:"error",error:n})}else{L.push({type:"error",error:n})}}else{if(y){t({type:p,sync:false,subtype:"error"})}}},end(n){let r;if(p!=="evaluate"&&(r=this.data)){if(!w.length){w=Object.keys(r);S(r)}else if(w.length){if(n){t({type:"cov",covAsync:n})}else{const n={};Object.keys(r).forEach(function(t){if(!w.includes(t)){n[t]=r[t];w.push(t)}});t({type:"cov",cov:n})}}}else{S(this.data)}},cov(n,r,t,i){if(p==="evaluate"||!w.length||!w.includes(i))return;this.end({type:n,id:r,index:t,rel:i})},loops:{},detectLoop(n,r,t){const i=`${n[0]}-${n[1]}-${r}-${t}`;if(!this.loops[i]){this.loops[i]=0}if(this.loops[i]>=$){this.loops[i]=undefined;throw new Error(`Too many loops detected (×${$})`)}this.loops[i]+=1},resetObserver(){j.reset()},perfMark(n){if(p==="evaluate"&&!m){return}j.init(this.log);j.addMark(n)},perfMeasure(){if(p==="evaluate"&&!m){return}j.measure(...arguments)}}};if(process.execArgv.length&&process.execArgv[0].includes("--require")){const r=t(282).Module;const i=r._nodeModulePaths;const e=process.cwd();const o=i(e).filter(function(r){return n.paths.indexOf(r)===-1});if(require.main&&require.main.paths){require.main.paths=o.concat(require.main.paths)}r._nodeModulePaths=function(n){let r=i.call(this,n);const t=o.filter(function(n){return r.indexOf(n)===-1});r=r.concat(t);return r};const f=JSON.parse(process.argv[2]);f.rootDir=e;if(f.doc==="undefined"){f.doc=null}let l=process.send;l=l.bind(process);const s=$(f,l,l,true);process.on("disconnect",function(){process.exit()});process.on("uncaughtException",n=>{s.error(n)});process.on("unhandledRejection",(n,r)=>{s.error(n)})}n.exports=$},282:function(n){n.exports=require("module")},400:function(n,r,t){"use strict";const{types:i,deprecate:e,isError:o}=t(669);const{errorToJson:f}=t(466).errorUtils;const l=t(851);let s;let h;function isStackOverflowError(n){if(h===undefined){try{function overflowStack(){overflowStack()}overflowStack()}catch(n){h=n.message;s=n.name}}return n&&n.name===s&&n.message===h}const u=Symbol.for("nodejs.util.inspect.custom");const d=/\u001b\[\d\d?m/g;const $=/(.*?)(?: ){(.*?)}$/;function removeColors(n){return n.replace(d,"")}function join(n,r){let t="";if(n.length!==0){const i=n.length-1;for(let e=0;e<i;e++){t+=n[e];t+=r}t+=n[i]}return t}const p=l.internalBinding?l.internalBinding:process.binding;const c=p("util");const{getOwnNonIndexProperties:m,getPromiseDetails:P,getProxyDetails:A,kPending:w,kRejected:y,previewEntries:g,propertyFilter:M,constants:_}=p("util");const j=M||_;const{ALL_PROPERTIES:L,ONLY_ENUMERABLE:N}=j;const{isAnyArrayBuffer:S,isArrayBuffer:I,isArgumentsObject:O,isBoxedPrimitive:D,isDataView:W,isExternal:E,isMap:C,isMapIterator:H,isPromise:R,isSet:U,isSetIterator:Y,isWeakMap:T,isWeakSet:q,isRegExp:z,isDate:Q,isTypedArray:G,isStringObject:J,isNumberObject:K,isBooleanObject:Z,isBigIntObject:X,isUint8Array:F,isUint8ClampedArray:v,isUint16Array:B,isUint32Array:V,isInt8Array:k,isInt16Array:b,isInt32Array:a,isFloat32Array:x,isFloat64Array:nn,isBigInt64Array:rn,isBigUint64Array:tn}=i;const en=Reflect.apply;function uncurryThis(n){return(r,...t)=>en(n,r,t)}const on=uncurryThis(Object.prototype.propertyIsEnumerable);const fn=uncurryThis(RegExp.prototype.toString);const ln=uncurryThis(Date.prototype.toISOString);const sn=uncurryThis(Error.prototype.toString);const hn=uncurryThis(BigInt.prototype.valueOf);const un=uncurryThis(Boolean.prototype.valueOf);const dn=uncurryThis(Number.prototype.valueOf);const $n=uncurryThis(Symbol.prototype.valueOf);const pn=uncurryThis(String.prototype.valueOf);const cn=uncurryThis(Set.prototype.values);const mn=uncurryThis(Map.prototype.entries);const Pn=uncurryThis(Date.prototype.getTime);const An=uncurryThis(Object.prototype.hasOwnProperty);const wn=Object.seal({showHidden:false,depth:2,colors:false,customInspect:true,showProxy:false,maxArrayLength:100,breakLength:60,compact:true,sorted:false});const yn=0;const gn=1;const Mn=2;const _n=/[\x00-\x1f\x27\x5c]/;const jn=/[\x00-\x1f\x27\x5c]/g;const Ln=/^[a-zA-Z_][a-zA-Z_0-9]*$/;const Nn=/^(0|[1-9][0-9]*)$/;const Sn={};const In=16;const On=0;const Dn=1;const Wn=2;const En=["\\u0000","\\u0001","\\u0002","\\u0003","\\u0004","\\u0005","\\u0006","\\u0007","\\b","\\t","\\n","\\u000b","\\f","\\r","\\u000e","\\u000f","\\u0010","\\u0011","\\u0012","\\u0013","\\u0014","\\u0015","\\u0016","\\u0017","\\u0018","\\u0019","\\u001a","\\u001b","\\u001c","\\u001d","\\u001e","\\u001f","","","","","","","","\\'","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","\\\\"];let Cn;function inspect(n,r){const t={budget:{},indentationLvl:0,seen:[],keys:[],stylize:stylizeNoColor,showHidden:wn.showHidden,override:false,depth:wn.depth,colors:wn.colors,customInspect:wn.customInspect,showProxy:wn.showProxy,maxArrayLength:wn.maxArrayLength,breakLength:wn.breakLength,compact:wn.compact,sorted:wn.sorted};if(arguments.length>2){if(arguments[2]!==undefined){t.depth=arguments[2]}if(arguments.length>3&&arguments[3]!==undefined){t.colors=arguments[3]}}if(typeof r==="boolean"){t.showHidden=r}else if(r){const n=Object.keys(r);for(var i=0;i<n.length;i++){t[n[i]]=r[n[i]]}}if(t.maxArrayLength===null)t.maxArrayLength=Infinity;if(t.override){t.stylize=t.stylize.bind(t);Un=stylizeBaseFn.bind(t);Rn=strEscapeFn.bind(t);Cn=formatPrimitive.bind(null,stylizeNoColor.bind(t))}else{t.stylize=t.stylize.bind(null);Un=stylizeBaseFn.bind(null);Rn=strEscapeFn.bind(null);Cn=formatPrimitive.bind(null,stylizeNoColor)}return formatValue(t,n,t.depth,"root")}inspect.custom=u;Object.defineProperty(inspect,"defaultOptions",{get(){return wn},set(n){if(n===null||typeof n!=="object"){throw new ERR_INVALID_ARG_TYPE("options","Object",n)}return Object.assign(wn,n)}});const Hn=n=>En[n.charCodeAt(0)];function escapeDoubleQuotes(n){return n.replace(/\\([\s\S])|(")/g,"\\$1$2")}let Rn;function strEscapeFn(n){if(this&&this.override){if(n.length<5e3&&!_n.test(n))return`"${escapeDoubleQuotes(n)}"`;if(n.length>100){const r=`${n.replace(jn,Hn)}`;return`"${escapeDoubleQuotes(r)}"`}}else{if(n.length<5e3&&!_n.test(n))return`'${n}'`;if(n.length>100){return`${n.replace(jn,Hn)}`}}let r="";let t=0;for(var i=0;i<n.length;i++){const e=n.charCodeAt(i);if(e===39||e===92||e<32){if(t===i){r+=En[e]}else{r+=`${n.slice(t,i)}${En[e]}`}t=i+1}}if(t===0){r=n}else if(t!==i){r+=n.slice(t)}if(this&&this.override){return`"${escapeDoubleQuotes(r)}"`}else{return`'${r}'`}}function stylizeNoColor(n,r){if(this&&this.override){switch(r){case"date":case"symbol":case"regexp":case"undefined":case"null":return`"${n}"`;case"recurseEnd":return`"_$$END${n}"`;case"promiseValue":return`"value": ${n}`;case"number":switch(n){case"NaN":case"Infinity":case"-Infinity":return`"${n}"`;default:break}break;case"special":switch(n){case"[Getter/Setter]":case"[Getter]":case"[Setter]":case"[items unknown]":case"[External]":case"<uninitialized>":return`"${n}"`;case"<rejected>":case"<pending>":return`"status": "${n}"`;case"Proxy [Array]":return'"[Array]"';default:break}break;default:return n}}return n}let Un;function stylizeBaseFn(n,r,t){if(this&&this.override){switch(r){case"TYPE":return`"_$$TYPE": "${t}",`;case"date":return`"${n}"`;case"regexp":return`"re": "${n}",`;default:return n}}return n}function getEmptyFormatArray(){return[]}function getConstructorName(n){let r;while(n){const t=Object.getOwnPropertyDescriptor(n,"constructor");if(t!==undefined&&typeof t.value==="function"&&t.value.name!==""){return t.value.name}n=Object.getPrototypeOf(n);if(r===undefined){r=n}}if(r===null){return null}return""}function getPrefix(n,r,t,i){if(n===null){if(r!==""){if(i){return``}else{return`[${t}: null prototype] [${r}] `}}if(i){return``}else{return`[${t}: null prototype] `}}if(n!==""){if(r!==""&&n!==r){if(i){return``}else{return`${n} [${r}] `}}if(i){return``}else{return`${n} `}}return""}function getKeys(n,r){let t;const e=Object.getOwnPropertySymbols(n);if(r){t=Object.getOwnPropertyNames(n);if(e.length!==0)t.push(...e)}else{try{t=Object.keys(n)}catch(r){if(i.isNativeError(r)&&r.name==="ReferenceError"&&i.isModuleNamespaceObject(n)){t=Object.getOwnPropertyNames(n)}else{throw r}}if(e.length!==0){t.push(...e.filter(r=>on(n,r)))}}return t}function formatProxy(n,r,t){if(t!=null){if(t<0)return n.stylize("Proxy [Array]","special");t-=1}n.indentationLvl+=2;const i=[formatValue(n,r[0],t),formatValue(n,r[1],t)];n.indentationLvl-=2;const e=reduceToSingleString(n,i,"",["[","]"]);if(n.override){return e}else{return`Proxy ${e}`}}function findTypedConstructor(n){for(const[r,t]of[[F,Uint8Array],[v,Uint8ClampedArray],[B,Uint16Array],[V,Uint32Array],[k,Int8Array],[b,Int16Array],[a,Int32Array],[x,Float32Array],[nn,Float64Array],[rn,BigInt64Array],[tn,BigUint64Array]]){if(r(n)){return t}}}let Yn;function clazzWithNullPrototype(n,r){if(Yn===undefined){Yn=new Map}else{const r=Yn.get(n);if(r!==undefined){return r}}class NullPrototype extends n{get[Symbol.toStringTag](){return""}}Object.defineProperty(NullPrototype.prototype.constructor,"name",{value:`[${r}: null prototype]`});Yn.set(n,NullPrototype);return NullPrototype}function noPrototypeIterator(n,r,t){let i;if(U(r)){const n=Object.getPrototypeOf(r)||clazzWithNullPrototype(Set,"Set");i=new n(cn(r))}else if(C(r)){const n=Object.getPrototypeOf(r)||clazzWithNullPrototype(Map,"Map");i=new n(mn(r))}else if(Array.isArray(r)){const n=Object.getPrototypeOf(r)||clazzWithNullPrototype(Array,"Array");i=new n(r.length||0)}else if(G(r)){let n=Object.getPrototypeOf(r);if(!n){const t=findTypedConstructor(r);n=clazzWithNullPrototype(t,t.name)}i=new n(r)}if(i){Object.defineProperties(i,Object.getOwnPropertyDescriptors(r));return formatValue(n,i,t)}}function formatValue(n,r,t,i){if(typeof r!=="object"&&typeof r!=="function"){return formatPrimitive(n.stylize,r,n)}if(r===null){return n.stylize("null","null")}if(n.showProxy){const i=A(r);if(i!==undefined){return formatProxy(n,i,t)}}if(n.customInspect){let i=r[u];if(!i&&r.inspect!==inspect&&typeof r.inspect==="function"){i=e(r.inspect,"Custom inspection function on Objects via .inspect() is deprecated","DEP0079")}if(typeof i==="function"&&i!==inspect&&!(r.constructor&&r.constructor.prototype===r)){const e=i.call(r,t,n);if(e!==r){if(typeof e!=="string"){return formatValue(n,e,t)}return e}}}if(n.override){let t=n.seen.find(n=>n.value===r);if(t){return`"[_ref$=${t.keys}]"`}}else{if(n.seen.indexOf(r)!==-1)return n.stylize("'[Circular]'","special")}const o=formatRaw(n,r,t,i);if(n.override&&o.indexOf("{ Error:")!==-1){return f(o)}return o}function formatRaw(n,r,t,e){let f;const l=getConstructorName(r);let s=r[Symbol.toStringTag];if(typeof s!=="string")s="";let h="";let u=getEmptyFormatArray;let d;let $=true;let p=0;let c=false;const P=n.showHidden?L:N;let A=yn;if(r[Symbol.iterator]){$=false;if(Array.isArray(r)){f=m(r,P);const t=getPrefix(l,s,"Array",n.override);d=[`${t==="Array "?"":t}[`,"]"];if(r.length===0&&f.length===0)return`${d[0]}]`;A=Mn;u=formatArray}else if(U(r)){f=getKeys(r,n.showHidden);const t=getPrefix(l,s,"Set",n.override);if(r.size===0&&f.length===0)return`${t}{}`;d=[`${t}{`,"}"];u=formatSet}else if(C(r)){f=getKeys(r,n.showHidden);const t=getPrefix(l,s,"Map",n.override);if(r.size===0&&f.length===0)return`${t}{}`;d=[`${t}{`,"}"];u=formatMap}else if(G(r)){f=m(r,P);const t=l!==null?getPrefix(l,s,undefined,n.override):getPrefix(l,s,findTypedConstructor(r).name,n.override);if(n.override){d=[`${t}{`,"}"]}else{d=[`${t}[`,"]"]}if(r.length===0&&f.length===0&&!n.showHidden)return`${d[0]}]`;u=formatTypedArray;A=Mn}else if(H(r)){f=getKeys(r,n.showHidden);d=[`[${s}] {`,"}"];u=formatMapIterator}else if(Y(r)){f=getKeys(r,n.showHidden);d=[`[${s}] {`,"}"];u=formatSetIterator}else{$=true}}if($){f=getKeys(r,n.showHidden);d=["{","}"];if(l==="Object"){if(O(r)){if(f.length===0)return n.override?"{}":"[Arguments] {}";d[0]=n.override?"{":"[Arguments] {"}else if(s!==""){d[0]=`${getPrefix(l,s,"Object",n.override)}{`;if(f.length===0){return`${d[0]}}`}}else if(f.length===0){return"{}"}}else if(typeof r==="function"){const t=l||s||"Function";const i=`${t}${r.name?`: ${r.name}`:""}`;if(f.length===0)return n.stylize(`[${i}]`,"special");h=`[${i}]`;h=Un(h,"TYPE","function")}else if(z(r)){if(f.length===0||t<0)return Un(fn(r),"regexp");h=`${fn(r)}`;h=Un(h,"regexp")}else if(Q(r)){if(f.length===0){if(Number.isNaN(Pn(r)))return n.stylize(String(r),"date");return n.stylize(ln(r),"date")}h=ln(r)}else if(o(r)){h=formatError(r);const t=h.indexOf("\n    at");if(t===-1){h=`[${h}]`}if(n.indentationLvl!==0){const t=" ".repeat(n.indentationLvl);h=formatError(r).replace(/\n/g,`\n${t}`)}if(f.length===0)return h;if(n.compact===false&&t!==-1){d[0]+=`${h.slice(t)}`;h=`[${h.slice(0,t)}]`}if(n.override){h=""}}else if(S(r)){const t=I(r)?"ArrayBuffer":"SharedArrayBuffer";const i=getPrefix(l,s,t,n.override);if(f.length===0)return i+`{ "byteLength": ${formatNumber(n.stylize,r.byteLength)} }`;d[0]=`${i}{`;f.unshift("byteLength")}else if(W(r)){d[0]=`${getPrefix(l,s,"DataView",n.override)}{`;f.unshift("byteLength","byteOffset","buffer")}else if(R(r)){d[0]=`${getPrefix(l,s,"Promise",n.override)}{`;u=formatPromise}else if(q(r)){d[0]=`${getPrefix(l,s,"WeakSet",n.override)}{`;u=n.showHidden?formatWeakSet:formatWeakCollection}else if(T(r)){d[0]=`${getPrefix(l,s,"WeakMap",n.override)}{`;u=n.showHidden?formatWeakMap:formatWeakCollection}else if(i.isModuleNamespaceObject(r)){d[0]=`[${s}] {`;u=formatNamespaceObject;c=true}else if(D(r)){let t;if(K(r)){h=`[Number: ${Cn(dn(r))}]`;h=Un(h,"TYPE","number");t="number"}else if(J(r)){h=`[String: ${Cn(pn(r),n)}]`;h=Un(h,"TYPE","string");t="string";f=f.slice(r.length)}else if(Z(r)){h=`[Boolean: ${Cn(un(r))}]`;h=Un(h,"TYPE","boolean");t="boolean"}else if(X(r)){h=`[BigInt: ${Cn(hn(r))}]`;h=Un(h,"TYPE","bigint");t="bigint"}else{h=`[Symbol: ${Cn($n(r))}]`;h=Un(h,"TYPE","symbol");t="symbol"}if(f.length===0){return n.stylize(h,t)}}else{const i=noPrototypeIterator(n,r,t);if(i){return i}if(H(r)){d=[`[${s||"Map Iterator"}] {`,"}"];u=formatMapIterator}else if(Y(r)){d=[`[${s||"Set Iterator"}] {`,"}"];u=formatSetIterator}else if(f.length===0){if(E(r))return n.stylize("[External]","special");return`${getPrefix(l,s,"Object",n.override)}{}`}else{d[0]=`${getPrefix(l,s,"Object",n.override)}{`}}}if(t!=null){if(t<0){return n.stylize(`[${l||s||"Object"}]`,"recurseEnd")}t-=1}if(n.override){if(typeof e!=="symbol"){n.keys.push(e)}n.seen.push({keys:n.keys.join("."),value:r})}else{n.seen.push(r)}let w;const y=n.indentationLvl;try{w=u(n,r,t,f);if(c===false){for(p=0;p<f.length;p++){w.push(formatProperty(n,r,t,f[p],A))}}}catch(r){return handleMaxCallStackSize(n,r,l,s,y)}n.seen.pop();if(n.override){n.keys.pop()}if(n.sorted){const r=n.sorted===true?undefined:n.sorted;if(A===yn){w=w.sort(r)}else if(f.length>1){const n=w.slice(w.length-f.length).sort(r);w.splice(w.length-f.length,f.length,...n)}}return reduceToSingleString(n,w,h,d)}function handleMaxCallStackSize(n,r,t,i,e){if(isStackOverflowError(r)){n.seen.pop();n.indentationLvl=e;return n.stylize(`[${t||i||"Object"}: Inspection interrupted `+"prematurely. Maximum call stack size exceeded.]","special")}throw r}function formatNumber(n,r){if(Object.is(r,-0))return n("-0","number");return n(`${r}`,"number")}function formatPrimitive(n,r,t){if(typeof r==="string"){if(t.compact===false&&t.indentationLvl+r.length>t.breakLength&&r.length>In){const e=Math.max(t.breakLength-t.indentationLvl,In);const o=Math.ceil(r.length/Math.ceil(r.length/e));const f=Math.max(o,In);let l="";if(Sn[f]===undefined){Sn[f]=new RegExp(`(.|\\n){1,${f}}(\\s|$)|(\\n|.)+?(\\s|$)`,"gm")}const s=r.match(Sn[f]);if(s.length>1){const r=" ".repeat(t.indentationLvl);l+=`${n(Rn(s[0]),"string")} +\n`;for(var i=1;i<s.length-1;i++){l+=`${r}  ${n(Rn(s[i]),"string")} +\n`}l+=`${r}  ${n(Rn(s[i]),"string")}`;return l}}return n(Rn(r),"string")}if(typeof r==="number")return formatNumber(n,r);if(typeof r==="bigint")return n(`${r}n`,"bigint");if(typeof r==="boolean")return n(`${r}`,"boolean");if(typeof r==="undefined")return n("undefined","undefined");return n(r.toString(),"symbol")}function formatError(n){if(n.stack){return n.stack}else{try{return sn(n)}catch(n){return'"Custom Error"'}}}function formatNamespaceObject(n,r,t,e){const o=e.length;const f=new Array(o);for(var l=0;l<o;l++){try{f[l]=formatProperty(n,r,t,e[l],yn)}catch(r){if(!(i.isNativeError(r)&&r.name==="ReferenceError")){throw r}const o={[e[l]]:""};f[l]=formatProperty(n,o,t,e[l],yn);const s=f[l].lastIndexOf(" ");f[l]=f[l].slice(0,s+1)+n.stylize("<uninitialized>","special")}}return f}function formatSpecialArray(n,r,t,i,e,o){const f=Object.keys(r);let l=o;for(;o<f.length&&e.length<i;o++){const s=f[o];const h=+s;if(h>2**32-2){break}if(`${l}`!==s){if(!Nn.test(s)){break}const r=h-l;const t=r>1?"s":"";let o;if(n.override){o=`"<${r} empty item${t}>"`}else{o=`<${r} empty item${t}>`}e.push(n.stylize(o,"undefined"));l=h;if(e.length===i){break}}e.push(formatProperty(n,r,t,s,gn));l++}const s=r.length-l;if(e.length!==i){if(s>0){const r=s>1?"s":"";const t=`<${s} empty item${r}>`;e.push(n.stylize(t,"undefined"))}}else if(s>0){if(n.override){e.push(`"... ${s} more item${s>1?"s":""}"`)}else{e.push(`... ${s} more item${s>1?"s":""}`)}}return e}function formatArray(n,r,t){const i=r.length;const e=Math.min(Math.max(0,n.maxArrayLength),i);const o=i-e;const f=[];for(var l=0;l<e;l++){if(!An(r,l)){return formatSpecialArray(n,r,t,e,f,l)}f.push(formatProperty(n,r,t,l,gn))}if(o>0)if(n.override){f.push(`"... ${o} more item${o>1?"s":""}"`)}else{f.push(`... ${o} more item${o>1?"s":""}`)}return f}function formatTypedArray(n,r,t){const i=Math.min(Math.max(0,n.maxArrayLength),r.length);const e=r.length-i;const o=new Array(i);if(!n.override){for(var f=0;f<i;++f)o[f]=formatNumber(n.stylize,r[f]);if(e>0)o[f]=`... ${e} more item${e>1?"s":""}`}else{for(var f=0;f<i;++f){o[f]=`"${f}": ${formatNumber(n.stylize,r[f])}`}if(e>0)o[f]=`"... ${e} more item${e>1?"s":""}"`}if(n.showHidden){n.indentationLvl+=2;for(const i of["BYTES_PER_ELEMENT","length","byteLength","byteOffset","buffer"]){const e=formatValue(n,r[i],t);if(n.override){o.push(`"${i}": ${e}`)}else{o.push(`[${i}]: ${e}`)}}n.indentationLvl-=2}return o}function formatSet(n,r,t){const i=[];n.indentationLvl+=2;if(n.override){const e=[];for(const i of r){const r=formatValue(n,i,t);e.push(`{"value": ${r}}`)}i.push(`"entries": [${e.join(",")}]`)}else{for(const e of r){i.push(formatValue(n,e,t))}}n.indentationLvl-=2;if(n.override){i.push(`"size": ${n.stylize(`${r.size}`,"number")}`)}else{i.push(`[size]: ${n.stylize(`${r.size}`,"number")}`)}return i}function formatMap(n,r,t){const i=[];n.indentationLvl+=2;if(n.override){const e=[];for(const[i,o]of r){const r=formatValue(n,i,t);const f=formatValue(n,o,t);e.push(`{"key": ${r}, "value": ${f}}`)}i.push(`"entries": [${e.join(",")}]`)}else{for(const[e,o]of r){i.push(`${formatValue(n,e,t)} => `+formatValue(n,o,t))}}n.indentationLvl-=2;if(n.override){i.push(`"size": ${n.stylize(`${r.size}`,"number")}`)}else{i.push(`[size]: ${n.stylize(`${r.size}`,"number")}`)}return i}function formatSetIterInner(n,r,t,i){const e=Math.max(n.maxArrayLength,0);const o=Math.min(e,t.length);let f=new Array(o);n.indentationLvl+=2;if(n.override){for(var l=0;l<o;l++){f[l]=`{"value": ${formatValue(n,t[l],r)}}`}f[0]='"entries": ['+f[0];f[o-1]=f[o-1]+"]"}else{for(var l=0;l<o;l++){f[l]=formatValue(n,t[l],r)}}n.indentationLvl-=2;if(i===On){f=f.sort()}const s=t.length-o;if(s>0){if(n.override){f.push(`"... ${s} more item${s>1?"s":""}"`)}else{f.push(`... ${s} more item${s>1?"s":""}`)}}return f}function formatMapIterInner(n,r,t,i){const e=Math.max(n.maxArrayLength,0);const o=t.length/2;const f=o-e;const l=Math.min(e,o);let s=new Array(l);let h="";let u="";let d=" => ";let $=0;if(i===Wn){h="[ ";u=" ]";d=", "}n.indentationLvl+=2;if(n.override){h='{ "key":';d=', "value": ';u="}"}for(;$<l;$++){const i=$*2;s[$]=`${h}${formatValue(n,t[i],r)}`+`${d}${formatValue(n,t[i+1],r)}${u}`}if(n.override){s[0]='"entries": ['+s[0];s[l-1]=s[l-1]+"]"}n.indentationLvl-=2;if(i===On){s=s.sort()}if(f>0){if(n.override){s.push(`"... ${f} more item${f>1?"s":""}"`)}else{s.push(`... ${f} more item${f>1?"s":""}`)}}return s}function formatWeakCollection(n){return[n.stylize("[items unknown]","special")]}function formatWeakSet(n,r,t){const i=g(r);return formatSetIterInner(n,t,i,On)}function formatWeakMap(n,r,t){const i=g(r);return formatMapIterInner(n,t,i,On)}function formatSetIterator(n,r,t){const i=g(r);return formatSetIterInner(n,t,i,Dn)}function formatMapIterator(n,r,t){const[i,e]=g(r,true);if(e){return formatMapIterInner(n,t,i,Wn)}return formatSetIterInner(n,t,i,Dn)}function formatPromise(n,r,t){let i;const[e,o]=P(r);if(e===w){i=[n.stylize("<pending>","special")]}else{n.indentationLvl+=2;const r=formatValue(n,o,t);n.indentationLvl-=2;i=[e===y?`${n.stylize("<rejected>","special")}, ${n.stylize(r,"promiseValue")}`:`${n.stylize(r,"promiseValue")}`]}return i}function formatProperty(n,r,t,i,e){let o,f;let l=" ";const s=Object.getOwnPropertyDescriptor(r,i)||{value:r[i],enumerable:true};if(s.value!==undefined){const r=e!==yn||n.compact===false?2:3;n.indentationLvl+=r;f=formatValue(n,s.value,t,i);if(r===3&&!n.override){const r=n.colors?removeColors(f).length:f.length;if(n.breakLength<r){l=`\n${" ".repeat(n.indentationLvl)}`}}n.indentationLvl-=r}else if(s.get!==undefined){if(s.set!==undefined){f=n.stylize("[Getter/Setter]","special")}else{f=n.stylize("[Getter]","special")}}else if(s.set!==undefined){f=n.stylize("[Setter]","special")}else{f=n.stylize("undefined","undefined")}if(e===gn){return f}if(typeof i==="symbol"){const r=i.toString().replace(jn,Hn);o=`[${n.stylize(r,"symbol")}]`}else if(s.enumerable===false){if(i!=="$'"){o=`[${i.replace(jn,Hn)}]`}else{o=i}}else if(Ln.test(i)){o=n.stylize(i,"name")}else{o=n.stylize(Rn(i),"string")}return overrideStyle(o,i,r,f,l,n.override)}function overrideStyle(n,r,t,i,e,o){if(o){if(n.startsWith("[")&&n.endsWith("]")){n=n.slice(1).slice(0,-1);if(typeof r==="symbol"){if(Array.isArray(t)){return`{"_$$key": "${r.toString()}",`+`"_$$props": ${i.split(/\r\n|\n|\\n/).join("")}}`}else{return`"${r.toString()}":${e}${i.split(/\r\n|\n|\\n/).join("")}`}}if(Array.isArray(t)){return`{"_$$key": "${n}","_$$props": ${i}}`}}if(n.startsWith('"')){return`${n}:${e}${i}`}else{return`"${n}":${e}${i}`}}else{return`${n}:${e}${i}`}}function reduceToSingleString(n,r,t,i){const e=n.breakLength;let o=0;if(n.compact===false){const e=" ".repeat(n.indentationLvl);let f=`${t?`${t} `:""}${i[0]}\n${e}  `;for(;o<r.length-1;o++){f+=`${r[o]},\n${e}  `}f+=`${r[o]}\n${e}${i[1]}`;return f}if(r.length*2<=e){let f=0;for(;o<r.length&&f<=e;o++){if(n.colors){f+=removeColors(r[o]).length+1}else{f+=r[o].length+1}}if(f<=e)return`${i[0]}${t?` ${t}`:""} ${join(r,", ")} `+i[1]}const f=" ".repeat(n.indentationLvl);const l=t===""&&i[0].length===1?" ":`${t?` ${t}`:""}\n${f}  `;const s=join(r,`,\n${f}  `);return`${i[0]}${l}${s} ${i[1]}`}n.exports=inspect},466:function(n){n.exports=require("@parcel/utils")},622:function(n){n.exports=require("path")},630:function(n){n.exports=require("perf_hooks")},652:function(n,r,t){const{PerformanceObserver:i,performance:e}=t(630);class Observer{constructor(){this.perfResults={};this.marks={}}init(n){if(!this.observer){this.emit=n;this.observer=new i(this.handlePerfResult.bind(this));this.observer.observe({entryTypes:["measure"],buffered:true})}}reset(){if(this.observer){e.clearMarks();this.observer.disconnect()}this.perfResults={};this.marks={}}handlePerfResult(n){n.getEntries().forEach(n=>{const r=this.perfResults[n.name];this.emit([`${n.duration}ms`],r.line,r.rel,[n.name],r.idx,false,{noInspect:true,type:"number"})})}addMark(n){e.mark(n);this.marks[n]=1}measure(n,r,t,i){const[o,f,l]=n;if(this.marks[f]&&this.marks[l]){this.perfResults[o]={line:r,rel:t,idx:i};e.measure(o,f,l)}}}n.exports=Observer},669:function(n){n.exports=require("util")},747:function(n){n.exports=require("fs")},851:function(n){n.exports=require("internal/test/binding")}},function(n){"use strict";!function(){n.nmd=function(n){n.paths=[];if(!n.children)n.children=[];Object.defineProperty(n,"loaded",{enumerable:true,get:function(){return n.l}});Object.defineProperty(n,"id",{enumerable:true,get:function(){return n.i}});return n}}()});
//# sourceMappingURL=index.js.map