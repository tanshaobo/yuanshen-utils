import{s as p,c as x,R as v,a as h}from"./creatCtx.111e42ae.js";import{_ as w}from"./index.0af1239b.js";import{z as g,C as j,o as y,c as C}from"./vendor.732bec9d.js";const b={setup(k){const r=p(),_=g(null),d=h();return j(()=>{const a=x(_.value),l=e=>new Promise(o=>{setTimeout(()=>{a.clearRect(-250,-250,500,500);const n=[];for(let t=0;t<e.length;t++){const s=e[t],{cos:c,sin:u}=d[Math.floor(t/2)],f=s*c,m=s*u;n.push(new v(a,f,m,5,3))}n.forEach(t=>t.draw()),o("draw success")},10)});l(r),(async e=>{let o=e.length,n,t;for(let s=0;s<o-1;s++){n=s;for(let c=s+1;c<o;c++)e[c]<e[n]&&(n=c);t=e[s],e[s]=e[n],e[n]=t,await l(e)}return e})(r)}),(a,l)=>(y(),C("canvas",{id:"canvas",width:"500",height:"500",ref:(i,e)=>{e.canvas=i,_.value=i}},null,512))}};var E=w(b,[["__scopeId","data-v-70d4b9c3"]]);export{E as default};
