import{s as p,c as h,R as m,a as v}from"./creatCtx.111e42ae.js";import{_ as x,j as w,p as g,b as k,c as y}from"./index.818db838.js";const b={__name:"index",setup(j){const i=p(),f=w(null),d=v();return g(()=>{const a=h(f.value),r=t=>new Promise(u=>{setTimeout(()=>{a.clearRect(-250,-250,500,500);const o=[];for(let s=0;s<t.length;s++){const n=t[s],{cos:l,sin:_}=d[Math.floor(s/2)],e=n*l,c=n*_;o.push(new m(a,e,c,5,3))}o.forEach(s=>s.draw()),u("draw success")},100)});r(i),(async(t,u)=>{let o=10,s=1,n=[];for(let l=0;l<u;l++,s*=10,o*=10){for(let e=0;e<t.length;e++){let c=parseInt(t[e]%o/s,10);n[c]==null&&(n[c]=[]),n[c].push(t[e])}let _=0;for(let e=0;e<n.length;e++){let c=null;if(n[e]!=null){for(;(c=n[e].shift())!=null;)t[_++]=c;await r(t)}}}return t})(i,3)}),(a,r)=>(k(),y("canvas",{id:"canvas",width:"500",height:"500",ref_key:"canvas",ref:f},null,512))}};var C=x(b,[["__scopeId","data-v-4395bbcc"]]);export{C as default};
