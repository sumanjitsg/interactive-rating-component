(()=>{"use strict";var e,r={243:()=>{const e=document.querySelector("form");document.querySelector(".selected"),e.addEventListener("submit",(function(r){r.preventDefault();const t=new FormData(e).get("rating");window.sessionStorage.setItem("rating",t),window.location.replace("thankyou.html")}))}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var a=t[e]={exports:{}};return r[e](a,a.exports,o),a.exports}o.m=r,e=[],o.O=(r,t,n,a)=>{if(!t){var i=1/0;for(u=0;u<e.length;u++){for(var[t,n,a]=e[u],s=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](t[l])))?t.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=n();void 0!==c&&(r=c)}}return r}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,n,a]},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={826:0,532:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var n,a,[i,s,l]=t,c=0;if(i.some((r=>0!==e[r]))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(l)var u=l(o)}for(r&&r(t);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(u)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var n=o.O(void 0,[532],(()=>o(243)));n=o.O(n)})();