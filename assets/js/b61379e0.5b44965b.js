"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9116],{2037:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=o(4848),n=o(8453);const r={title:"2024-08-08 Daily Journal",slug:"2024/daily-journal",tags:["2024-08","2024"],hide_table_of_contents:!1},s=void 0,i={permalink:"/journal/2024/daily-journal",source:"@site/../journal/2024-08-08-daily-journal.md",title:"2024-08-08 Daily Journal",description:"Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods  from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use startupTaints on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready.",date:"2024-08-08T00:00:00.000Z",tags:[{inline:!0,label:"2024-08",permalink:"/journal/tags/2024-08"},{inline:!0,label:"2024",permalink:"/journal/tags/2024"}],readingTime:1.14,hasTruncateMarker:!0,authors:[],frontMatter:{title:"2024-08-08 Daily Journal",slug:"2024/daily-journal",tags:["2024-08","2024"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"2024-08-09 Birthday Preparation",permalink:"/journal/2024/birthday-preparation"}},l={authorsImageUrls:[]},d=[];function u(e){const t={em:"em",p:"p",strong:"strong",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods  from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use ",(0,a.jsx)(t.strong,{children:"startupTaints"})," on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready."]}),"\n",(0,a.jsxs)(t.p,{children:["As for the personal stuff, I wanted to start with a blog where I could write freely (without going into much details of the things) and about my daily life, routine. I've set up a docusaurus blog previously. I spent some time checking if the ",(0,a.jsx)(t.strong,{children:"mdbook"})," would be a good fit this daily journal blog. I fired up a test mdbook book and compared it with docusaurus style blog I had. Docusaurus style felt good to eyes (it looked nice) - so I decided to stick with docusaurus and started a second blog on same docusaurus instance. If you are reading this - you know how to reach this daily blog. I call it ",(0,a.jsx)(t.em,{children:"daily blog"})," but I might not write up daily. As of now though, I feel pretty motivated to write frequently, maybe couple of time a week ","\ud83d\ude00"]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>s,x:()=>i});var a=o(6540);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);