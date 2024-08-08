"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[162],{3299:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=o(4848),n=o(8453);const s={title:"2024-08-08 Daily Journal",slug:"20240808-daily-journal",authors:["umesh"],tags:["2024-08","2024","journal","daily"],hide_table_of_contents:!1},r=void 0,i={permalink:"/journal/20240808-daily-journal",source:"@site/../journal/20240808-daily-journal.md",title:"2024-08-08 Daily Journal",description:"Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods  from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use startupTaints on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready.",date:"2024-08-08T08:56:02.000Z",tags:[{inline:!0,label:"2024-08",permalink:"/journal/tags/2024-08"},{inline:!0,label:"2024",permalink:"/journal/tags/2024"},{inline:!0,label:"journal",permalink:"/journal/tags/journal"},{inline:!0,label:"daily",permalink:"/journal/tags/daily"}],readingTime:1.14,hasTruncateMarker:!0,authors:[{name:"Poswal Umesh",title:"Maintainer of nakamorg",url:"https://github.com/nakamume",imageURL:"https://github.com/nakamume.png",key:"umesh"}],frontMatter:{title:"2024-08-08 Daily Journal",slug:"20240808-daily-journal",authors:["umesh"],tags:["2024-08","2024","journal","daily"],hide_table_of_contents:!1},unlisted:!1},l={authorsImageUrls:[void 0]},u=[];function d(e){const t={em:"em",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods  from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use ",(0,a.jsx)(t.strong,{children:"startupTaints"})," on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready."]}),"\n",(0,a.jsxs)(t.p,{children:["As for the personal stuff, I wanted to start with a blog where I could write freely (without going into much details of the things) and about my daily life, routine. I've set up a docusaurus blog previously. I spent some time checking if the ",(0,a.jsx)(t.strong,{children:"mdbook"})," would be a good fit this daily journal blog. I fired up a test mdbook book and compared it with docusaurus style blog I had. Docusaurus style felt good to eyes (it looked nice) - so I decided to stick with docusaurus and started a second blog on same docusaurus instance. If you are reading this - you know how to reach this daily blog. I call it ",(0,a.jsx)(t.em,{children:"daily blog"})," but I might not write up daily. As of now though, I feel pretty motivated to write frequently, maybe couple of time a week ","\ud83d\ude00"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>i});var a=o(6540);const n={},s=a.createContext(n);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);