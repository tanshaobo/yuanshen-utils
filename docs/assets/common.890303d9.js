import{_ as M,r as S,j as A,k as T,o as B,l as C,t as _,a as m,b as s,c as o,u as d,F as p,e as y,m as c,p as E,h as b,w as u,q as N,s as f}from"./index.818db838.js";const $=(a,l)=>{let e=new Array(Math.ceil(a.length/l));e.fill(null,0,e.length);for(let t=0;t<a.length;t++)Array.isArray(e[Math.floor(t/l)])?e[Math.floor(t/l)].push(a[t]):e[Math.floor(t/l)]=[a[t]];return e},z=(a,l,e)=>{let t=l-a.length%l;return t==l&&(t=0),a.length+=t,a.fill(e,a.length-t,a.length),$(a,l)};const D={key:0,class:"card-box"},F={key:1,class:"card-box"},G={__name:"index",props:{showType:{type:String,default:"card"},dataList:{type:Array,default:()=>[]},hasHeader:{type:Boolean,default:!1}},setup(a){const l=a,e=S({column:0,dataList:[],showList:[]}),t=A(),r=()=>{e.column=Math.floor(t.value.clientWidth/260),e.showList=z(e.dataList,e.column,{remain:!0})};T(()=>l.dataList,n=>{e.dataList=JSON.parse(JSON.stringify(n)),n&&E(()=>{r()})},{deep:!0,immediate:!0}),window.addEventListener("resize",r),B(()=>{r()}),C(()=>{window.removeEventListener("resize",r)});const{showType:h}=_(l),{column:H,dataList:J,showList:v}=_(e);return(n,O)=>{const w=m("el-card"),k=m("el-row");return s(),o("section",{class:"container",ref_key:"box",ref:t},[d(h)=="card"?(s(),o("div",D,[(s(!0),o(p,null,y(d(v),(g,L)=>(s(),b(k,{key:L},{default:u(()=>[(s(!0),o(p,null,y(g,(i,x)=>(s(),o("div",{class:"column-item",key:x},[i.remain?c("",!0):(s(),b(w,{key:0},N({default:u(()=>[f(n.$slots,"default",{item:i},void 0,!0)]),_:2},[a.hasHeader?{name:"header",fn:u(()=>[f(n.$slots,"headers",{item:i},void 0,!0)]),key:"0"}:void 0]),1024)),f(n.$slots,"main",{item:i},void 0,!0)]))),128))]),_:2},1024))),128))])):c("",!0),d(h)=="table"?(s(),o("div",F)):c("",!0)],512)}}};var q=M(G,[["__scopeId","data-v-0f851cd4"]]);const I=[{label:"\u5168\u90E8",value:0},{label:"\u7A33\u5B9A",value:1},{label:"\u4E0D\u7A33\u5B9A",value:2}],R=[{label:"\u5168\u90E8",value:0},{label:"\u7EBF\u6027",value:1},{label:"\u975E\u7EBF\u6027",value:2}],U=[{id:0,label:"\u5468\u65E5"},{id:1,label:"\u5468\u4E00"},{id:2,label:"\u5468\u4E8C"},{id:3,label:"\u5468\u4E09"},{id:4,label:"\u5468\u56DB"},{id:5,label:"\u5468\u4E94"},{id:6,label:"\u5468\u516D"}];export{q as G,R as l,I as s,U as w};
