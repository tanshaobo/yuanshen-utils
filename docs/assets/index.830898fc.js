import{s as p,c as m,R as h,a as v}from"./creatCtx.111e42ae.js";import{_ as x}from"./index.ff1ec56a.js";import{z as w,C as g,o as k,c as y}from"./.pnpm.feeaac0c.js";const b={__name:"index",setup(C){const _=p(),f=w(null),d=v();return g(()=>{const a=m(f.value),r=t=>new Promise(u=>{setTimeout(()=>{a.clearRect(-250,-250,500,500);const o=[];for(let s=0;s<t.length;s++){const n=t[s],{cos:l,sin:i}=d[Math.floor(s/2)],e=n*l,c=n*i;o.push(new h(a,e,c,5,3))}o.forEach(s=>s.draw()),u("draw success")},100)});r(_),(async(t,u)=>{let o=10,s=1,n=[];for(let l=0;l<u;l++,s*=10,o*=10){for(let e=0;e<t.length;e++){let c=parseInt(t[e]%o/s,10);n[c]==null&&(n[c]=[]),n[c].push(t[e])}let i=0;for(let e=0;e<n.length;e++){let c=null;if(n[e]!=null){for(;(c=n[e].shift())!=null;)t[i++]=c;await r(t)}}}return t})(_,3)}),(a,r)=>(k(),y("canvas",{id:"canvas",width:"500",height:"500",ref_key:"canvas",ref:f},null,512))}};var E=x(b,[["__scopeId","data-v-4395bbcc"]]);export{E as default};