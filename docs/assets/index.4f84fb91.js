import{s as f,c as p,R as x,a as v}from"./creatCtx.111e42ae.js";import{_ as h}from"./index.ff1ec56a.js";import{z as w,C as g,o as y,c as k}from"./.pnpm.feeaac0c.js";const C={__name:"index",setup(R){const _=f(),i=w(null),r=v();return g(()=>{const a=p(i.value),l=e=>new Promise(o=>{setTimeout(()=>{a.clearRect(-250,-250,500,500);const n=[];for(let t=0;t<e.length;t++){const s=e[t],{cos:c,sin:u}=r[Math.floor(t/2)],d=s*c,m=s*u;n.push(new x(a,d,m,5,3))}n.forEach(t=>t.draw()),o("draw success")},10)});l(_),(async e=>{let o=e.length,n,t;for(let s=0;s<o-1;s++){n=s;for(let c=s+1;c<o;c++)e[c]<e[n]&&(n=c);t=e[s],e[s]=e[n],e[n]=t,await l(e)}return e})(_)}),(a,l)=>(y(),k("canvas",{id:"canvas",width:"500",height:"500",ref_key:"canvas",ref:i},null,512))}};var T=h(C,[["__scopeId","data-v-258db528"]]);export{T as default};