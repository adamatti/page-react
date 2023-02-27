(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{1269:function(e,t){var n,r;r={months:["January","February","March","April","May","June","July","August","September","October","November","December"],toUTC:function(e){var t=e?new Date(e):new Date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds())},monthName:function(e){var t;return t="number"==typeof e?e:new Date(e).getMonth()+1,r.months[t-1]},relativeTime:function(e,t){var n,r,o,s,i,a,u=[];if("number"==typeof e?n=e:(s=new Date(e).getTime(),n=-((new Date().getTime()-s)/1e3*1)),t||(t={}),t.futureSuffix||(t.futureSuffix="from now"),t.pastSuffix||(t.pastSuffix="ago"),t.presentText||(t.presentText="now"),t.returnObject||(t.returnObject=!1),i=n<0,r={seconds:Math.floor((n=Math.abs(n))%31536e3%86400%3600%60),minutes:Math.floor(n%31536e3%86400%3600/60),hours:Math.floor(n%31536e3%86400/3600),days:Math.floor(n%31536e3/86400),years:Math.floor(n/31536e3),past:i},t.returnObject)return r;if(0===n)return t.presentText;function c(e,n){a&&(a=t.allUnits,u.push(e+" "+n+(e>1?"s":"")))}return o=r.past?t.pastSuffix:t.futureSuffix,a=!0,r.years&&c(r.years,"year"),r.days&&c(r.days,"day"),r.hours&&c(r.hours,"hour"),r.minutes&&c(r.minutes,"minute"),r.seconds&&c(r.seconds,"second"),u.join(", ")+" "+o},prettyPrint:function(e,t){var n,r,o,s,i,a,u,c,l;return e?"number"==typeof e&&(e=new Date().setSeconds(e)):e=new Date,t||(t={}),t.showTime||(t.showTime=!1),s=(o=(n=new Date(e)).getDate())>3&&o<21?o+"th":o%10==1?o+"st":o%10==2?o+"nd":o%10==3?o+"rd":o+"th",i=n.getFullYear(),r=this.monthName(n.getMonth()+1)+" "+s+", "+i,u=n.getHours(),c=n.getMinutes(),l=u>=12?"pm":"am",a=(u=u%12?u%12:12)+":"+(c=c<10?"0"+c:c)+" "+l,t.showTime?r+" at "+a:r}},e.exports?e.exports=r:void 0===(n=(function(){return r}).apply(t,[]))||(e.exports=n)},3642:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/technologies",function(){return n(7734)}])},3513:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),o=n(4155);function s(e){var t;let{loading:n,src:s,...i}=e,a=null!==(t=o.env.NEXT_PUBLIC_BASE_PATH)&&void 0!==t?t:"",u="string"==typeof s?s:null==s?void 0:s.src;return a&&(null==u?void 0:u.startsWith("/"))&&!u.startsWith(a)&&(u="".concat(a).concat(u)),(0,r.jsx)("img",{...i,loading:"eager",src:u})}},2616:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(5893),o=n(7294),s=n(1269),i=n.n(s),a=n(3513),u=n(1664),c=n.n(u);function l(e){var t;let{tech:n,addLink:o=!1}=e,s="shadow-".concat(null!==(t=n.color)&&void 0!==t?t:"black-500"),u=(0,r.jsx)(c(),{href:"/technologies/".concat(n.name.toLocaleLowerCase()),className:"text-black",children:n.name});return(0,r.jsxs)("div",{className:"shadow-md hover:scale-105 duration-500 py-2 rounded-lg ".concat(s),children:[(0,r.jsx)(a.Z,{className:"mx-auto",src:"/assets/icons/".concat(n.image),alt:n.name,width:80,height:80}),(0,r.jsx)("p",{className:"mt-4 capitalize",children:o?u:n.name}),(0,r.jsx)("p",{children:i().relativeTime(n.since).replaceAll(" ago","")})]})}function f(e){let{items:t,filters:n=!0,addLinks:s=!1}=e,[i,a]=(0,o.useState)(t),[u,c]=(0,o.useState)("all");function f(e){let{label:n,isShowAll:o=!1}=e;return(0,r.jsx)("button",{className:"".concat(u===n?"bg-cyan-600":"bg-cyan-400"," ").concat("hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"),onClick:()=>{o?a(t):a(t.filter(e=>e.tags.includes(n))),c(n)},children:n})}return(0,o.useEffect)(()=>{"all"===u?a(t):a(t.filter(e=>e.tags.includes(u)))},[t,u]),(0,r.jsxs)(r.Fragment,{children:[n&&(0,r.jsxs)("div",{className:"flex justify-between",children:[(0,r.jsx)("div",{}),(0,r.jsxs)("div",{className:"grid grid-cols-7 gap-1",children:[(0,r.jsx)(f,{label:"all",isShowAll:!0},"all"),["love","language","database","tool","broker","frontend"].map(e=>(0,r.jsx)(f,{label:e,isShowAll:!1},e))]})]}),(0,r.jsx)("div",{className:"w-auto grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0",children:null==i?void 0:i.map(e=>(0,r.jsx)(l,{tech:e,addLink:s},e.id))})]})}},7734:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return i},default:function(){return a}});var r=n(5893),o=n(7294),s=n(2616),i=!0;function a(e){let{items:t}=e,[n,i]=(0,o.useState)(t),a=e=>{let n=e.target.value.toLocaleLowerCase(),r=e=>e.name.toLocaleLowerCase().includes(n),o=n?t.filter(r):t;i(o)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"w-full h-auto",children:(0,r.jsxs)("div",{className:"mx-auto p-4 flex flex-col justify-center w-auto h-auto",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-4xl font-bold inline",children:"Experience"}),(0,r.jsxs)("div",{className:"py-5",children:[(0,r.jsx)("p",{children:"These are the technologies I have worked with. "}),(0,r.jsx)("p",{children:"Frameworks (e.g. express, ktor, spring), tecniques (e.g. TDD, BDD, Microservices, Event Sourcing), methodologies (e.g. kanban, scrum) aren't listed here (I mean, as cards)"}),(0,r.jsx)("input",{type:"text",placeholder:"Filter here",className:"input input-bordered w-full mt-5",onChange:a})]})]}),(0,r.jsx)(s.Z,{items:n,filters:!0})]})})})}},4155:function(e){var t,n,r,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function a(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var u=[],c=!1,l=-1;function f(){c&&r&&(c=!1,r.length?u=r.concat(u):l=-1,u.length&&h())}function h(){if(!c){var e=a(f);c=!0;for(var t=u.length;t;){for(r=u,u=[];++l<t;)r&&r[l].run();l=-1,t=u.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new d(e,t)),1!==u.length||c||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3642)}),_N_E=e.O()}]);