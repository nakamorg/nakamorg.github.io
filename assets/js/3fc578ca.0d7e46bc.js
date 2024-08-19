"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[653],{3866:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var o=n(4848),i=n(8453);const s={title:"Github Actions for the Blog",slug:"2024/github-actions",tags:["2024-08","2024","github action"],hide_table_of_contents:!0},a=void 0,r={permalink:"/blog/2024/github-actions",source:"@site/../blogs/20240816-github-actions.md",title:"Github Actions for the Blog",description:"Thinking about adding github actions to build and deploy this blog instead of running them on a VM on my machine. For some reason I couldn't get myself to install nodejs and npm on my regular workstation. Maybe I should do that as well.",date:"2024-08-19T15:31:55.000Z",tags:[{inline:!0,label:"2024-08",permalink:"/blog/tags/2024-08"},{inline:!0,label:"2024",permalink:"/blog/tags/2024"},{inline:!0,label:"github action",permalink:"/blog/tags/github-action"}],readingTime:1.89,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Github Actions for the Blog",slug:"2024/github-actions",tags:["2024-08","2024","github action"],hide_table_of_contents:!0},unlisted:!1,prevItem:{title:"Reading List",permalink:"/blog/2024/reading-list"},nextItem:{title:"Started a second blog",permalink:"/blog/2024/started-second-blog"}},l={authorsImageUrls:[]},u=[];function d(t){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Thinking about adding github actions to build and deploy this blog instead of running them on a VM on my machine. For some reason I couldn't get myself to install nodejs and npm on my regular workstation. Maybe I should do that as well."}),"\n",(0,o.jsx)(e.p,{children:"But for the time being I'm going to try my luck with github actions. Just added a github workflow file and pushing this blog file to master should trigger that. So, let get triggering!"}),"\n",(0,o.jsxs)(e.p,{children:["So, that worked. But only halfway. The last step ",(0,o.jsx)(e.code,{children:"npm run deploy"})," failed asking for my github username or specifying using ssh key. I was hoping that it would know how to push the changes as it was already running in github action. Let's see if ",(0,o.jsx)(e.code,{children:"Claude Opus"})," can help us figure this out. After multiple back and forth it suggested to use this snippet"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:"- name: Deploy\n    run: |\n    npm run deploy\n    working-directory: docusaurus\n    env:\n    GIT_USER: github-actions\n    GIT_PASS: ${{ secrets.GITHUB_TOKEN }}\n"})}),"\n",(0,o.jsxs)(e.p,{children:["I think it should work. I'm just not confident about the ",(0,o.jsx)(e.code,{children:"GIT_USER"})," part. Should I use my github username there instead? Anyways, let's try pushing and see how it goes."]}),"\n",(0,o.jsx)(e.p,{children:"The action run was succesful but it still didn't deploy, complaining about setting git user email and stuff. So, let's try with"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",children:'- name: Deploy\n  run: |\n    git config --global user.email "${{ github.actor }}@users.noreply.github.com"\n    git config --global user.name "${{ github.actor }}"\n    npm run deploy\n  working-directory: docusaurus\n  env:\n    GIT_USER: ${{ github.actor }}\n    GIT_PASS: ${{ secrets.GITHUB_TOKEN }}\n'})}),"\n",(0,o.jsxs)(e.p,{children:['That was it. The blog is "on" now. All I have to do is write and push to master and github will take care of build, deploy and hosting. Good times. You can find the complete and up-to-date code in github workflows of ',(0,o.jsx)(e.a,{href:"https://github.com/nakamorg/nakamorg.github.io",children:"this repo"}),". One more thing though, I'm not sure if the caching for node modules is working. Initial runs of ",(0,o.jsx)(e.code,{children:"npm ci"})," took about 10 secs and the latest one with a cache hit took 6 secs - so maybe it's working? Maybe I can try doing ",(0,o.jsx)(e.code,{children:"ls node_modules"})," in the github action and see or maybe there are other better options? But let's do that some other time. It's almost 19:18 and I need to get off working and start my work out."]})]})}function h(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>a,x:()=>r});var o=n(6540);const i={},s=o.createContext(i);function a(t){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:a(t.components),o.createElement(s.Provider,{value:e},t.children)}}}]);