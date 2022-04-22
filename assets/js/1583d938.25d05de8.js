"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[598],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,y=d["".concat(s,".").concat(c)]||d[c]||p[c]||o;return r?n.createElement(y,i(i({ref:t},m),{},{components:r})):n.createElement(y,i({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9906:(e,t,r)=>{r.r(t),r.d(t,{default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={id:"system_requirements",title:"System requirements",sidebar_label:"\ud83d\udd28 System requirements"},s={unversionedId:"system_requirements",id:"system_requirements",isDocsHomePage:!1,title:"System requirements",description:"Server",source:"@site/docs/system_requirements.md",sourceDirName:".",slug:"/system_requirements",permalink:"/docs/system_requirements",version:"current",lastUpdatedBy:"Puria Nafisi Azizi",lastUpdatedAt:1650615525,formattedLastUpdatedAt:"4/22/2022",sidebar_label:"\ud83d\udd28 System requirements",frontMatter:{id:"system_requirements",title:"System requirements",sidebar_label:"\ud83d\udd28 System requirements"},sidebar:"docs",previous:{title:"Bugtracker",permalink:"/docs/bugtracker"},next:{title:"Changelog",permalink:"/docs/changelog"}},u=[{value:"Server",id:"server",children:[{value:"Memory",id:"memory",children:[]},{value:"Web browser",id:"web-browser",children:[]},{value:"Deployment documentation",id:"deployment-documentation",children:[]}]}],m={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"server"},"Server"),(0,o.kt)("p",null,"For best performance, stability and functionality we have documented some recommendations for running a ReflowOS server."),(0,o.kt)("p",null,"You can either use Docker on any server that supports it, and the docker-compose file provided will manage the OS, database, and app/web servers for you, or you can deploy manually with the following:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Platform"),(0,o.kt)("th",{parentName:"tr",align:null},"Options"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating System"),(0,o.kt)("td",{parentName:"tr",align:null},"Debian 10+ (Buster),  Alpine Linux 3+ (recommended), Ubuntu 20.04+ LTS, Red Hat Enterprise Linux 8+, SUSE Linux Enterprise Server 15+, openSUSE Leap 42.1+, or CentOS 8+")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Database"),(0,o.kt)("td",{parentName:"tr",align:null},"Postgres 12+ with Postgis extension")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"App Server"),(0,o.kt)("td",{parentName:"tr",align:null},"Erlang / Elixir")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Search index"),(0,o.kt)("td",{parentName:"tr",align:null},"Meili")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Web proxy"),(0,o.kt)("td",{parentName:"tr",align:null},"Nginx or Caddyserver")))),(0,o.kt)("h3",{id:"memory"},"Memory"),(0,o.kt)("p",null,"Memory requirements for running a ReflowOS server are greatly variable, depending on the numbers of users, apps, files and volume of server activity."),(0,o.kt)("p",null,"ReflowOS runs fine with a minimum of 512MB RAM, but we recommend at least 2GB."),(0,o.kt)("h3",{id:"web-browser"},"Web browser"),(0,o.kt)("p",null,"For the best experience with the ReflowOS web interface, we recommend that you use the latest and supported version of a browser from this list, or one based on those:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Microsoft Edge"),(0,o.kt)("li",{parentName:"ul"},"Mozilla Firefox"),(0,o.kt)("li",{parentName:"ul"},"Google Chrome/Chromium"),(0,o.kt)("li",{parentName:"ul"},"Apple Safari")),(0,o.kt)("h3",{id:"deployment-documentation"},"Deployment documentation"),(0,o.kt)("p",null,"Please refer to the deploy guide published ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/dyne/reflow-os"},"here"))))}p.isMDXComponent=!0}}]);