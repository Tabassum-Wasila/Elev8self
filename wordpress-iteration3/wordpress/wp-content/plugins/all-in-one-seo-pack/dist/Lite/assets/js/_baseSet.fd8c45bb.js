import{i as l,k as _,l as p}from"./isArrayLikeObject.22a096cb.js";import{c as d,t as m}from"./get.ebf1fee6.js";function v(r,s,c,a){if(!l(r))return r;s=d(s,r);for(var o=-1,e=s.length,f=e-1,t=r;t!=null&&++o<e;){var n=m(s[o]),i=c;if(n==="__proto__"||n==="constructor"||n==="prototype")return r;if(o!=f){var u=t[n];i=a?a(u,n,t):void 0,i===void 0&&(i=l(u)?u:_(s[o+1])?[]:{})}p(t,n,i),t=t[n]}return r}export{v as b};