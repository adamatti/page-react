(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[142],{7305:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/jobs",function(){return t(3690)}])},3578:function(e,n,t){"use strict";t.d(n,{B:function(){return h}});var s=t(5893),i=t(4850),r=t(8420),l=t(6878),c=t(1664),a=t.n(c),o=t(3513);function d(e){let{job:n}=e,t=[n.agency,n.company].filter(e=>null==e?void 0:e.logo);return t&&0!==t.length?(0,s.jsx)(s.Fragment,{children:t.map(e=>{var n;return(0,s.jsx)(a(),{href:e.url,target:"_blank",children:(0,s.jsx)(o.Z,{src:"/assets/logos/".concat(null!==(n=e.logo)&&void 0!==n?n:""),alt:e.name,width:48,height:48},e.id)},e.id)})}):(0,s.jsx)(o.Z,{src:"/assets/logos/empty.png",alt:"no logo",width:48,height:48})}function u(e){let{job:n}=e;return n.projects&&0!==n.projects.length?(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold",children:"Projects:"}),(0,s.jsx)("div",{children:n.projects.map(e=>(0,s.jsxs)("div",{className:"grid grid-cols-[auto_200px] gap-2 py-1",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"underline",children:e.title}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:e.description}),e.results&&(0,s.jsxs)("div",{className:"flex gap-1",children:[(0,s.jsx)("div",{className:"font-semibold",children:"Results:"}),(0,s.jsx)("div",{children:e.results})]})]})]}),(0,s.jsx)("div",{className:"align-text-bottom text-sm text-gray-500",children:e.keywords.join(", ")})]},e.id))})]}):(0,s.jsx)(s.Fragment,{})}function j(e){let{job:n}=e,t=e=>(0,i.Z)((0,r.Z)(e),"MMM yyyy"),c=(0,r.Z)(n.startDate),a=n.endDate?(0,r.Z)(n.endDate):new Date,o=(0,l.Z)(a,c);return(0,s.jsxs)(s.Fragment,{children:[t(n.startDate)," - ",n.endDate?t(n.endDate):"Current"," (",o,")"]})}function x(e){var n,t,i;let{job:r}=e,l=r.agency?"".concat(r.agency.name," providing services to ").concat(null!==(i=null===(n=r.company)||void 0===n?void 0:n.name)&&void 0!==i?i:"secret"):null===(t=r.company)||void 0===t?void 0:t.name;return(0,s.jsxs)("div",{className:"w-auto grid grid-cols-[40px_auto] gap-2 py-2",children:[(0,s.jsx)("div",{className:"py-1",children:(0,s.jsx)(d,{job:r})}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"font-bold",children:r.title}),(0,s.jsxs)("p",{className:"text-gray-500 text-sm",children:[l," - ",(0,s.jsx)(j,{job:r})]}),(0,s.jsx)("p",{children:r.description}),(0,s.jsx)("div",{children:(0,s.jsx)(u,{job:r})})]})]})}function h(e){let{jobs:n}=e;return(0,s.jsx)(s.Fragment,{children:null==n?void 0:n.map(e=>(0,s.jsx)(x,{job:e},e.id))})}},3513:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var s=t(5893);function i(e){let{loading:n,src:t,...i}=e,r="/page-react",l="string"==typeof t?t:null==t?void 0:t.src;return r&&(null==l?void 0:l.startsWith("/"))&&!l.startsWith(r)&&(l="".concat(r).concat(l)),(0,s.jsx)("img",{...i,loading:"eager",src:l})}},3690:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return r},default:function(){return l}});var s=t(5893),i=t(3578),r=!0;function l(e){let{jobs:n}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)("div",{className:"text-xl",children:["List of all my previous jobs. Total: ",n.length]}),(0,s.jsx)(i.B,{jobs:n})]})}}},function(e){e.O(0,[979,774,888,179],function(){return e(e.s=7305)}),_N_E=e.O()}]);