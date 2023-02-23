(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[647],{2567:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return s(2910)}])},2616:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var i=s(5893),n=s(7294),l=s(1269),a=s.n(l),r=s(5675),c=s.n(r);function o(e){var t;let{tech:s}=e,n="shadow-".concat(null!==(t=s.color)&&void 0!==t?t:"black-500");return(0,i.jsxs)("div",{className:"shadow-md hover:scale-105 duration-500 py-2 rounded-lg ".concat(n),children:[(0,i.jsx)(c(),{className:"mx-auto",src:"icons/".concat(s.image),alt:s.name,width:80,height:80}),(0,i.jsx)("p",{className:"mt-4 capitalize",children:s.name}),(0,i.jsx)("p",{children:a().relativeTime(s.since).replaceAll(" ago","")})]})}function d(e){let{items:t,filters:s=!0}=e,[l,a]=(0,n.useState)(t),[r,c]=(0,n.useState)("all");function d(e){let{label:s,isShowAll:n=!1}=e;return(0,i.jsx)("button",{className:"".concat(r===s?"bg-cyan-600":"bg-cyan-400"," ").concat("hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"),onClick:()=>{n?a(t):a(t.filter(e=>e.tags.includes(s))),c(s)},children:s})}return(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("div",{}),(0,i.jsxs)("div",{className:"grid grid-cols-7 gap-1",children:[(0,i.jsx)(d,{label:"all",isShowAll:!0},"all"),["loved","language","database","tool","broker","frontend"].map(e=>(0,i.jsx)(d,{label:e,isShowAll:!1},e))]})]}),(0,i.jsx)("div",{className:"w-auto grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0",children:null==l?void 0:l.map(e=>(0,i.jsx)(o,{tech:e},e.id))})]})}},2910:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return S},default:function(){return E}});var i=s(5893),n=s(5675),l=s.n(n),a=s(1664),r=s.n(a),c=s(4850),o=s(8420),d=s(6878),h=s(9474),x=s(1269),u=s.n(x),j=s(2616);function m(e){let{job:t}=e,s=[t.agency,t.company].filter(e=>null==e?void 0:e.logo);return s&&0!==s.length?(0,i.jsx)(i.Fragment,{children:s.map(e=>{var t;return(0,i.jsx)(r(),{href:e.url,target:"_blank",children:(0,i.jsx)(l(),{src:"logos/".concat(null!==(t=e.logo)&&void 0!==t?t:""),alt:e.name,width:48,height:48},e.id)},e.id)})}):(0,i.jsx)(l(),{src:"logos/empty.png",alt:"no logo",width:48,height:48})}function g(e){let{job:t}=e,s=e=>(0,c.Z)((0,o.Z)(e),"MMM yyyy"),n=(0,o.Z)(t.startDate),l=t.endDate?(0,o.Z)(t.endDate):new Date,a=(0,d.Z)(l,n);return(0,i.jsxs)(i.Fragment,{children:[s(t.startDate)," - ",t.endDate?s(t.endDate):"Current"," (",a,")"]})}function p(e){let{job:t}=e;return t.projects?(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-bold",children:"Projects:"}),(0,i.jsx)("div",{children:t.projects.map(e=>(0,i.jsxs)("div",{className:"grid grid-cols-[auto_200px] gap-2 py-1",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"underline",children:e.title}),(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:e.description}),e.results&&(0,i.jsxs)("div",{className:"flex gap-1",children:[(0,i.jsx)("div",{className:"font-semibold",children:"Results:"}),(0,i.jsx)("div",{children:e.results})]})]})]}),(0,i.jsx)("div",{className:"align-text-bottom text-sm text-gray-500",children:e.keywords.join(", ")})]},e.id))})]}):(0,i.jsx)(i.Fragment,{})}function f(e){var t,s,n;let{job:l}=e,a=l.agency?"".concat(l.agency.name," providing services to ").concat(null!==(n=null===(t=l.company)||void 0===t?void 0:t.name)&&void 0!==n?n:"secret"):null===(s=l.company)||void 0===s?void 0:s.name;return(0,i.jsxs)("div",{className:"w-auto grid grid-cols-[40px_auto] gap-2 py-2",children:[(0,i.jsx)("div",{className:"py-1",children:(0,i.jsx)(m,{job:l})}),(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-bold",children:l.title}),(0,i.jsxs)("p",{className:"text-gray-500 text-sm",children:[a," - ",(0,i.jsx)(g,{job:l})]}),(0,i.jsx)("p",{children:l.description}),(0,i.jsx)("div",{children:(0,i.jsx)(p,{job:l})})]})]})}function v(e){let{jobs:t}=e;return(0,i.jsxs)(T,{title:"Experience",children:[null==t?void 0:t.map(e=>(0,i.jsx)(f,{job:e},e.id)),(0,i.jsx)("div",{className:"font-bold",children:"Previous companies were omitted here"})]})}function b(e){let{techs:t}=e,s=t.filter(e=>e.tags.includes("loved"));return(0,i.jsxs)(T,{title:"Main Tech Skills",children:["There are a lot of technologies that I still haven't the opportunity to work with professionaly (e.g. clojure, elixir).",(0,i.jsx)("br",{}),"Those are the main ones that I am proficient and love to work with:",(0,i.jsx)(j.Z,{items:s,filters:!1})]})}function y(){return(0,i.jsxs)("div",{className:"flex text-3xl justify-between",children:[(0,i.jsx)("div",{children:(0,i.jsx)("h1",{className:"capitalize",children:"Marcelo Adamatti"})}),(0,i.jsx)("div",{children:(0,i.jsx)(Z,{href:"https://adamatti.github.io"})}),(0,i.jsx)("div",{children:(0,i.jsx)(r(),{href:"mailto:adamatti@gmail.com",children:"adamatti@gmail.com"})})]})}function w(){return(0,i.jsx)(T,{title:"Summary",children:(0,i.jsxs)("ul",{className:"list-disc px-4",children:[(0,i.jsx)("li",{children:"English level C2 - did the latest test at 17 June 2020"}),(0,i.jsx)("li",{children:"Work with IT since 2000, mainly on backend (e.g. API, event processing) and infra"}),(0,i.jsx)("li",{children:"Knows a little about frontend (e.g. react, vue), but UX/design is not my thing"}),(0,i.jsx)("li",{children:"Worked in the last 10 years as tech lead, working in all the development lifecycle"}),(0,i.jsx)("li",{children:"Worked 1 year (2020, at Creditas) as manager, responsible for 3 teams / 10 resources. Would love to do it again"}),(0,i.jsx)("li",{children:"Remote worker, no plans to relocate"})]})})}function N(e){let{techs:t}=e;return(0,i.jsx)(T,{title:"Other Technologies",children:t.filter(e=>!e.tags.includes("loved")).sort((e,t)=>(0,h.Z)((0,o.Z)(e.since),(0,o.Z)(t.since))).map(e=>"".concat(e.name," (").concat(u().relativeTime(e.since).replaceAll(" ago",""),")")).join(", ")})}function k(){return(0,i.jsxs)(T,{title:"Education",children:[(0,i.jsx)("b",{className:"font-bold",children:"Facensa: "}),"Information Technology, Software, Project",(0,i.jsxs)("p",{children:["Thesis: code generator tool for java using several frameworks (e.g. hibernate, iBatis, prevayler, jsf, laszlo, thinlet).",(0,i.jsx)("br",{}),(0,i.jsx)(Z,{href:"http://code.google.com/p/fumigant"})]})]})}function _(){return(0,i.jsx)(T,{title:"Links",children:(0,i.jsxs)("ul",{className:"list-disc px-4",children:[(0,i.jsxs)("li",{children:["github: ",(0,i.jsx)(Z,{href:"https://github.com/adamatti"})]}),(0,i.jsxs)("li",{children:["linkedin: ",(0,i.jsx)(Z,{href:"http://www.linkedin.com/in/adamatti"})]}),(0,i.jsxs)("li",{children:["twitter: ",(0,i.jsx)(Z,{href:"https://www.twitter.com/adamatti"})]}),(0,i.jsxs)("li",{children:["youtube: ",(0,i.jsx)(Z,{href:"https://youtube.com/adamatti"})]})]})})}function T(e){let{title:t,children:s}=e;return(0,i.jsxs)("div",{className:"py-2",children:[(0,i.jsx)("div",{className:"text-2xl py-1",children:t}),(0,i.jsx)("div",{children:s})]})}function Z(e){let{href:t}=e;return(0,i.jsx)(r(),{href:t,target:"_blank",className:"link",children:t})}var S=!0;function E(e){let{jobs:t,techs:s}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{}),(0,i.jsx)(w,{}),(0,i.jsx)(b,{techs:s}),(0,i.jsx)(v,{jobs:t}),(0,i.jsx)(N,{techs:s}),(0,i.jsx)(k,{}),(0,i.jsx)(_,{})]})}E.disableLayout=!0}},function(e){e.O(0,[959,979,774,888,179],function(){return e(e.s=2567)}),_N_E=e.O()}]);