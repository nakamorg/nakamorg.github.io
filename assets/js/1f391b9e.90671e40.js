"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[61],{7973:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});t(6540);var i=t(4164),a=t(1213),s=t(7559),l=t(8778),r=t(5533),c=t(3691),o=t(996);const d={mdxPageWrapper:"mdxPageWrapper_j9I6"};var m=t(4848);function u(e){const{content:n}=e,{metadata:{title:t,description:u,frontMatter:f,unlisted:v},assets:h}=n,{keywords:g,wrapperClassName:x,hide_table_of_contents:p}=f,L=h.image??f.image;return(0,m.jsx)(a.e3,{className:(0,i.A)(x??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,m.jsxs)(l.A,{children:[(0,m.jsx)(a.be,{title:t,description:u,keywords:g,image:L}),(0,m.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,m.jsxs)("div",{className:(0,i.A)("row",d.mdxPageWrapper),children:[(0,m.jsxs)("div",{className:(0,i.A)("col",!p&&"col--8"),children:[v&&(0,m.jsx)(o.A,{}),(0,m.jsx)("article",{children:(0,m.jsx)(r.A,{children:(0,m.jsx)(n,{})})})]}),!p&&n.toc.length>0&&(0,m.jsx)("div",{className:"col col--2",children:(0,m.jsx)(c.A,{toc:n.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},3691:(e,n,t)=>{t.d(n,{A:()=>j});var i=t(6540),a=t(4164),s=t(6342);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const i=t.slice(2,e.level);e.parentIndex=Math.max(...i),t[e.level]=n}));const i=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):i.push(a)})),i}function r(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return n.flatMap((e=>{const n=r({toc:e.children,minHeadingLevel:t,maxHeadingLevel:i});return function(e){return e.level>=t&&e.level<=i}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function o(e,n){let{anchorTopOffset:t}=n;const i=e.find((e=>c(e).top>=t));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function d(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:n}}=(0,s.p)();return(0,i.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,i.useRef)(void 0),t=d();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const i=[];for(let a=n;a<=t;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),c=o(r,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var u=t(8774),f=t(4848);function v(e){let{toc:n,className:t,linkClassName:i,isChild:a}=e;return n.length?(0,f.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,f.jsxs)("li",{children:[(0,f.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,f.jsx)(v,{isChild:!0,toc:e.children,className:t,linkClassName:i})]},e.id)))}):null}const h=i.memo(v);function g(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:d,...u}=e;const v=(0,s.p)(),g=o??v.tableOfContents.minHeadingLevel,x=d??v.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return m((0,i.useMemo)((()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[a,c,g,x])),(0,f.jsx)(h,{toc:p,className:t,linkClassName:a,...u})}const x={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},p="table-of-contents__link toc-highlight",L="table-of-contents__link--active";function j(e){let{className:n,...t}=e;return(0,f.jsx)("div",{className:(0,a.A)(x.tableOfContents,"thin-scrollbar",n),children:(0,f.jsx)(g,{...t,linkClassName:p,linkActiveClassName:L})})}},996:(e,n,t)=>{t.d(n,{A:()=>f});t(6540);var i=t(4164),a=t(1312),s=t(5260),l=t(4848);function r(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),m=t(7293);function u(e){let{className:n}=e;return(0,l.jsx)(m.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,i.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function f(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(u,{...e})]})}}}]);