(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{3642:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/technologies",function(){return s(7734)}])},2616:function(e,n,s){"use strict";s.d(n,{Z:function(){return d}});var t=s(5893),l=s(7294),c=s(1269),i=s.n(c),a=s(5675),r=s.n(a);function o(e){var n;let{tech:s}=e,l="shadow-".concat(null!==(n=s.color)&&void 0!==n?n:"black-500");return(0,t.jsxs)("div",{className:"shadow-md hover:scale-105 duration-500 py-2 rounded-lg ".concat(l),children:[(0,t.jsx)(r(),{className:"mx-auto",src:"/icons/".concat(s.image),alt:s.name,width:80,height:80}),(0,t.jsx)("p",{className:"mt-4 capitalize",children:s.name}),(0,t.jsx)("p",{children:i().relativeTime(s.since).replaceAll(" ago","")})]})}function d(e){let{items:n,filters:s=!0}=e,[c,i]=(0,l.useState)(n),[a,r]=(0,l.useState)("all");function d(e){let{label:s,isShowAll:l=!1}=e;return(0,t.jsx)("button",{className:"".concat(a===s?"bg-cyan-600":"bg-cyan-400"," ").concat("hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"),onClick:()=>{l?i(n):i(n.filter(e=>e.tags.includes(s))),r(s)},children:s})}return(0,t.jsxs)(t.Fragment,{children:[s&&(0,t.jsxs)("div",{className:"flex justify-between",children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{className:"grid grid-cols-7 gap-1",children:[(0,t.jsx)(d,{label:"all",isShowAll:!0},"all"),["loved","language","database","tool","broker","frontend"].map(e=>(0,t.jsx)(d,{label:e,isShowAll:!1},e))]})]}),(0,t.jsx)("div",{className:"w-auto grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0",children:null==c?void 0:c.map(e=>(0,t.jsx)(o,{tech:e},e.id))})]})}},7734:function(e,n,s){"use strict";s.r(n),s.d(n,{__N_SSG:function(){return c},default:function(){return i}});var t=s(5893),l=s(2616),c=!0;function i(e){let{items:n}=e;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"w-full h-auto",children:(0,t.jsxs)("div",{className:"mx-auto p-4 flex flex-col justify-center w-auto h-auto",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-4xl font-bold inline",children:"Experience"}),(0,t.jsxs)("div",{className:"py-5",children:[(0,t.jsx)("p",{children:"These are the technologies I have worked with. "}),(0,t.jsx)("p",{children:"Frameworks (e.g. express, ktor, spring), tecniques (e.g. TDD, BDD, Microservices, Event Sourcing), methodologies (e.g. kanban, scrum) aren't listed here"})]})]}),(0,t.jsx)(l.Z,{items:n,filters:!0})]})})})}}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=3642)}),_N_E=e.O()}]);