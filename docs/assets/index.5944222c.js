import{s as v,c as w,R as g,a as x}from"./creatCtx.111e42ae.js";import{_ as y}from"./index.ff1ec56a.js";import{z as r,C as k,o as C,c as R}from"./.pnpm.feeaac0c.js";const A={__name:"index",setup(B){const i=v(),_=r(null),u=x();k(()=>{const n=w(_.value),c=e=>new Promise(o=>{setTimeout(()=>{n.clearRect(-250,-250,500,500);const s=[];for(let t=0;t<e.length;t++){const f=e[t],{cos:m,sin:p}=u[Math.floor(t/2)],d=f*m,h=f*p;s.push(new g(n,d,h,5,3))}s.forEach(t=>t.draw()),o("draw success")},10)});c(i),(async e=>{let o=e.length,s;for(let t=Math.floor(o/2)-1;t>=0;t--)a(e,t,o),await c(e);for(let t=o-1;t>=1;t--)[s]=e,e[0]=e[t],e[t]=s,a(e,0,--o),await c(e);return e})(i)});const a=(n,c,l)=>{let e=2*c+1,o=2*c+2,s=c,t;e<l&&n[e]>n[s]&&(s=e),o<l&&n[o]>n[s]&&(s=o),s!=c&&(t=n[c],n[c]=n[s],n[s]=t,a(n,s,l))};return(n,c)=>(C(),R("canvas",{id:"canvas",width:"500",height:"500",ref_key:"canvas",ref:_},null,512))}};var j=y(A,[["__scopeId","data-v-37e4448c"]]);export{j as default};