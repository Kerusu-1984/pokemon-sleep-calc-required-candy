import{s as Me,n as me,r as Ce}from"../chunks/scheduler.e108d1fd.js";import{S as Ee,i as ge,g as s,s as _,m as k,h as a,y as E,c as f,j as m,n as D,f as i,k as h,a as I,x as e,z as X,o as Y}from"../chunks/index.7e6319f2.js";const ye=!0,Se=Object.freeze(Object.defineProperty({__proto__:null,prerender:ye},Symbol.toStringTag,{value:"Module"})),He=[0,54,71,108,128,164,202,244,274,315,345,376,407,419,429,440,454,469,483,497,515,537,558,579,600],be=(l,o)=>{let c=0;for(let d=l;d<o;d++)c+=He[d];return c},ke=l=>Math.ceil(l/25);function De(l){let o,c="Pokémon Sleep アメ・経験値シミュレータ(25レベルまで対応)",d,p,r,v,N="現在のレベル",j,u,q,ce='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-t100pq"><path d="M0,0.5 L1,0.5" class="svelte-t100pq"></path></svg>',Z,V,U,$,T,de='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-t100pq"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-t100pq"></path></svg>',ee,g,y,pe="目標レベル",te,L,M,ue='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-t100pq"><path d="M0,0.5 L1,0.5" class="svelte-t100pq"></path></svg>',le,B,z,se,C,he='<svg aria-hidden="true" viewBox="0 0 1 1" class="svelte-t100pq"><path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" class="svelte-t100pq"></path></svg>',R,x,S,ae,w=l[2].toLocaleString()+"",A,ne,H,ie,F,re,G,b,_e="<h2>注意:</h2> <ul><li>このシミュレータは非公式のものです。</li> <li>性格による獲得経験値補正には対応していません。</li> <li>一部の経験値テーブルが異なるポケモンには対応していません。</li></ul>",ve,fe;return{c(){o=s("h1"),o.textContent=c,d=_(),p=s("div"),r=s("div"),v=s("h2"),v.textContent=N,j=_(),u=s("div"),q=s("button"),q.innerHTML=ce,Z=_(),V=s("p"),U=k(l[0]),$=_(),T=s("button"),T.innerHTML=de,ee=_(),g=s("div"),y=s("h2"),y.textContent=pe,te=_(),L=s("div"),M=s("button"),M.innerHTML=ue,le=_(),B=s("p"),z=k(l[1]),se=_(),C=s("button"),C.innerHTML=he,R=_(),x=s("div"),S=s("div"),ae=k("必要経験値: "),A=k(w),ne=_(),H=s("div"),ie=k("アメの数: "),F=k(l[3]),re=k(" 個"),G=_(),b=s("div"),b.innerHTML=_e,this.h()},l(t){o=a(t,"H1",{"data-svelte-h":!0}),E(o)!=="svelte-7neoco"&&(o.textContent=c),d=f(t),p=a(t,"DIV",{class:!0});var n=m(p);r=a(n,"DIV",{});var J=m(r);v=a(J,"H2",{class:!0,"data-svelte-h":!0}),E(v)!=="svelte-xszvfi"&&(v.textContent=N),j=f(J),u=a(J,"DIV",{class:!0});var O=m(u);q=a(O,"BUTTON",{class:!0,"data-svelte-h":!0}),E(q)!=="svelte-110vqke"&&(q.innerHTML=ce),Z=f(O),V=a(O,"P",{class:!0});var qe=m(V);U=D(qe,l[0]),qe.forEach(i),$=f(O),T=a(O,"BUTTON",{class:!0,"data-svelte-h":!0}),E(T)!=="svelte-3l4o2y"&&(T.innerHTML=de),O.forEach(i),J.forEach(i),ee=f(n),g=a(n,"DIV",{});var K=m(g);y=a(K,"H2",{class:!0,"data-svelte-h":!0}),E(y)!=="svelte-18ffipv"&&(y.textContent=pe),te=f(K),L=a(K,"DIV",{class:!0});var P=m(L);M=a(P,"BUTTON",{class:!0,"data-svelte-h":!0}),E(M)!=="svelte-18f4iy"&&(M.innerHTML=ue),le=f(P),B=a(P,"P",{class:!0});var Le=m(B);z=D(Le,l[1]),Le.forEach(i),se=f(P),C=a(P,"BUTTON",{class:!0,"data-svelte-h":!0}),E(C)!=="svelte-1jihipi"&&(C.innerHTML=he),P.forEach(i),K.forEach(i),n.forEach(i),R=f(t),x=a(t,"DIV",{class:!0});var Q=m(x);S=a(Q,"DIV",{});var oe=m(S);ae=D(oe,"必要経験値: "),A=D(oe,w),oe.forEach(i),ne=f(Q),H=a(Q,"DIV",{});var W=m(H);ie=D(W,"アメの数: "),F=D(W,l[3]),re=D(W," 個"),W.forEach(i),Q.forEach(i),G=f(t),b=a(t,"DIV",{"data-svelte-h":!0}),E(b)!=="svelte-1mp92y6"&&(b.innerHTML=_e),this.h()},h(){h(v,"class","svelte-t100pq"),h(q,"class","svelte-t100pq"),h(V,"class","svelte-t100pq"),h(T,"class","svelte-t100pq"),h(u,"class","counter svelte-t100pq"),h(y,"class","svelte-t100pq"),h(M,"class","svelte-t100pq"),h(B,"class","svelte-t100pq"),h(C,"class","svelte-t100pq"),h(L,"class","counter svelte-t100pq"),h(p,"class","input-level svelte-t100pq"),h(x,"class","calc-result svelte-t100pq")},m(t,n){I(t,o,n),I(t,d,n),I(t,p,n),e(p,r),e(r,v),e(r,j),e(r,u),e(u,q),e(u,Z),e(u,V),e(V,U),e(u,$),e(u,T),e(p,ee),e(p,g),e(g,y),e(g,te),e(g,L),e(L,M),e(L,le),e(L,B),e(B,z),e(L,se),e(L,C),I(t,R,n),I(t,x,n),e(x,S),e(S,ae),e(S,A),e(x,ne),e(x,H),e(H,ie),e(H,F),e(H,re),I(t,G,n),I(t,b,n),ve||(fe=[X(q,"click",l[4]),X(T,"click",l[5]),X(M,"click",l[6]),X(C,"click",l[7])],ve=!0)},p(t,[n]){n&1&&Y(U,t[0]),n&2&&Y(z,t[1]),n&4&&w!==(w=t[2].toLocaleString()+"")&&Y(A,w),n&8&&Y(F,t[3])},i:me,o:me,d(t){t&&(i(o),i(d),i(p),i(R),i(x),i(G),i(b)),ve=!1,Ce(fe)}}}const xe=1,Te=25;function Ie(l,o,c){let d,p,r=1,v=25;const N=()=>{r>xe&&c(0,r-=1)},j=()=>{r<Te&&c(0,r+=1)},u=()=>{v>xe&&c(1,v-=1)},q=()=>{v<Te&&c(1,v+=1)};return l.$$.update=()=>{l.$$.dirty&3&&c(2,d=be(r,v)),l.$$.dirty&4&&c(3,p=ke(d))},[r,v,d,p,N,j,u,q]}class Oe extends Ee{constructor(o){super(),ge(this,o,Ie,De,Me,{})}}export{Oe as component,Se as universal};
