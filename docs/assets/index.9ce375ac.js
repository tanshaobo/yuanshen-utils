import{s as p,c as x,R as v,a as h}from"./creatCtx.111e42ae.js";import{_ as w}from"./index.0af1239b.js";import{z as g,C as y,o as j,c as k}from"./vendor.732bec9d.js";const C={setup(b){const l=p(),r=g(null),_=h();return y(()=>{const c=x(r.value),o=e=>new Promise(s=>{setTimeout(()=>{c.clearRect(-250,-250,500,500);const n=[];for(let t=0;t<e.length;t++){const i=e[t],{cos:u,sin:d}=_[Math.floor(t/2)],f=i*u,m=i*d;n.push(new v(c,f,m,5,3))}n.forEach(t=>t.draw()),s("draw success")},10)});o(l),(async e=>{for(let s=1;s<e.length;s++){let n=e[s],t=s-1;for(;t>=0&&e[t]>n;)e[t+1]=e[t],t--;e[t+1]=n,await o(e)}return e})(l)}),(c,o)=>(j(),k("canvas",{id:"canvas",width:"500",height:"500",ref:(a,e)=>{e.canvas=a,r.value=a}},null,512))}};var E=w(C,[["__scopeId","data-v-6ab824ad"]]);export{E as default};
