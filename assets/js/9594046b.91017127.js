"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7766],{9562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var i=n(4848),o=n(8453);const s={title:"Learnings From Calbridge",slug:"2024/learnings-from-calbridge",tags:["2024-08","2024","calbridge","learning","caldav","smtp","imap"]},a=void 0,r={permalink:"/blog/2024/learnings-from-calbridge",source:"@site/../blogs/2024-08-27-calbridge-learnings.md",title:"Learnings From Calbridge",description:"Development of calbridge is going on with full momentum now. I've been spending hours working on it during nights. Just kidding. I mean I've spent couple of nights working on it but then took some time off. And then wanted to write this blog before picking it up again. For the uninitiated, calbridge is a utility I've been working on to integrate (or bridge) my Caldav server with my mail server. More background here, if you are interested.",date:"2024-08-27T00:00:00.000Z",tags:[{inline:!0,label:"2024-08",permalink:"/blog/tags/2024-08"},{inline:!0,label:"2024",permalink:"/blog/tags/2024"},{inline:!0,label:"calbridge",permalink:"/blog/tags/calbridge"},{inline:!0,label:"learning",permalink:"/blog/tags/learning"},{inline:!0,label:"caldav",permalink:"/blog/tags/caldav"},{inline:!0,label:"smtp",permalink:"/blog/tags/smtp"},{inline:!0,label:"imap",permalink:"/blog/tags/imap"}],readingTime:10.005,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Learnings From Calbridge",slug:"2024/learnings-from-calbridge",tags:["2024-08","2024","calbridge","learning","caldav","smtp","imap"]},unlisted:!1,nextItem:{title:"Basic Auth and Digest",permalink:"/blog/2024/basic-auth-and-digest"}},d={authorsImageUrls:[]},h=[{value:"Using LLMs",id:"using-llms",level:2},{value:"Auth",id:"auth",level:2},{value:"Packages",id:"packages",level:2},{value:"golang http.request - cannot reuse",id:"golang-httprequest---cannot-reuse",level:2},{value:"SMPT - Just use an external package",id:"smpt---just-use-an-external-package",level:2},{value:"IMAP - Sweet time that we spent together",id:"imap---sweet-time-that-we-spent-together",level:2},{value:"Something to end the blog with",id:"something-to-end-the-blog-with",level:2}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Development of ",(0,i.jsx)(t.a,{href:"https://github.com/nakamorg/calbridge",children:"calbridge"})," is going on with full momentum now. I've been spending hours working on it during nights. Just kidding. I mean I've spent couple of nights working on it but then took some time off. And then wanted to write this blog before picking it up again. For the uninitiated, ",(0,i.jsx)(t.strong,{children:"calbridge"})," is a utility I've been working on to integrate (or bridge) my Caldav server with my mail server. More background ",(0,i.jsx)(t.a,{href:"/journal/2024/caldav-and-mail",children:"here"}),", if you are interested."]}),"\n",(0,i.jsx)(t.p,{children:"Anyways, I wanted to take some time and jot down my thoughts and learnings from this project so far."}),"\n",(0,i.jsx)(t.h2,{id:"using-llms",children:"Using LLMs"}),"\n",(0,i.jsxs)(t.p,{children:["I used ",(0,i.jsx)(t.code,{children:"Claude Opus"})," to bootstrap the project. It provided me with the initial structure of the project. And then for every core functionality that I needed, it provided me with the starter code. I found it to be very helpful. It got me over the massive inertia of starting something from scratch and gave me a boilerplate to start with. Although, the majority of the code it provided had to be re-written, it still helped a lot - as it gave pretty good hints on what libs to use and how to approach the problem and acted as a dummy duck or someone to yell on during debugging (trust me I swore a lot and it took it like a champ)."]}),"\n",(0,i.jsx)(t.h2,{id:"auth",children:"Auth"}),"\n",(0,i.jsxs)(t.p,{children:["First thing that I came across and learned about was the ",(0,i.jsx)(t.code,{children:"Digest Auth"})," and have already written a blog about that ",(0,i.jsx)(t.a,{href:"/blog/2024/basic-auth-and-digest",children:"here"}),". I started with making simple ",(0,i.jsx)(t.code,{children:"http"})," calls to the server to fetch my calendars and it seemed to have worked once the auth thing got fixed. But I soon found myself wanting more (like correctly parsing and handling calendar data). I was a bit hesitent to include too many dependencies to the project at first but ultimately gave up on that design goal as I wanted to have something working as soon as possible instead of spending too much time getting it perfect. Which brings us to our next topic. Packages."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'It\'s okay to start with an "un-optimized" solution and have it working instead of spending too much energy building the perfect product in the first try. Once you have something working, you can iterate on it if you want.'})}),"\n",(0,i.jsx)(t.h2,{id:"packages",children:"Packages"}),"\n",(0,i.jsxs)(t.p,{children:["I looked for packages for a lot. All I wanted were thin client libs for caldav, smtp and imap. But for caldav, at least, most of the libs were either abondoned or providing both server and client. Ultimately, I settled with ",(0,i.jsx)(t.a,{href:"https://github.com/emersion",children:"https://github.com/emersion"})," - it came with webdav, caldav client and server (talking about thin cleints). Thank you ",(0,i.jsx)(t.strong,{children:"emersion"})," for providing such a high quality implementation of these protocols. ",(0,i.jsx)(t.strong,{children:"emersion"})," provided all the libs I needed. While the libs were lacking in documentation and some working examples, they were implementing the target protocols (caldav, imap etc) to the point and using same terminology for variable, function names etc. So, it didn't take much effort (if you don't consider 2-3 hours of fumbling around ",(0,i.jsx)(t.strong,{children:"much"}),") to write something working."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"And much of this time could have been saved if I had looked at github issues earlier."})}),"\n",(0,i.jsx)(t.p,{children:"Next, I'll discuss about some of these issues in detail."}),"\n",(0,i.jsx)(t.h2,{id:"golang-httprequest---cannot-reuse",children:"golang http.request - cannot reuse"}),"\n",(0,i.jsxs)(t.p,{children:["The caldav lib I used provided a neat way of passing in a custom HTTPClient. This way I could implemet a custom ",(0,i.jsx)(t.code,{children:"digest auth"})," client to authenticate with my server. A working implementation for ",(0,i.jsx)(t.strong,{children:"digest auth"})," need to make at least two calls to the server. First a dummy call, just to get the authorization challenge from the server and then the actual call with the authorization header set. I reused the same ",(0,i.jsx)(t.code,{children:"http.Request"})," in both calls."]}),"\n",(0,i.jsxs)(t.p,{children:["The second call silently failed. The returned ",(0,i.jsx)(t.code,{children:"http.Response"})," was ",(0,i.jsx)(t.code,{children:"nil"})," without any errors. I thought there was something wrong with the client, my digest auth implementation or the caldav server. I inserted a bunch of ",(0,i.jsx)(t.code,{children:"Print"})," statements to debug it (now you know what I use for debugging). And then added some more ",(0,i.jsx)(t.strong,{children:"print"})," statements and realized that ",(0,i.jsx)(t.code,{children:"Response"})," is always ",(0,i.jsx)(t.code,{children:"nil"}),". I had no idea what might have caused it. Out of desperation, I passed the function context to my GPT and asked it why the response is nil all the time. It suggested not to re-use the previous ",(0,i.jsx)(t.code,{children:"response"})," object. I told it not to be stupid. It apologized and said the the same request shouldn't be re-used. That made some sense to me and I made a clone of the previous request with ",(0,i.jsx)(t.code,{children:"req.Clone(context.Background())"})," but it still didn't work though there were some error response from the server this time. Some progress, eh? Server complained that I were not asking for any data. I printed the original request and could see that I was indeed asking for some data. Then I printed the cloned request and noticed that it didn't have the ",(0,i.jsx)(t.code,{children:"body"}),". Hmm, what kind of ",(0,i.jsx)(t.code,{children:"clone"})," was it?"]}),"\n",(0,i.jsxs)(t.p,{children:["Turns out that the ",(0,i.jsx)(t.code,{children:"req.Clone"})," doesn't clone the request body. Here's the comment for that method"]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Clone returns a deep copy of r with its context changed to ctx. The provided ctx must be non-nil."}),"\n",(0,i.jsx)(t.p,{children:"For an outgoing client request, the context controls the entire lifetime of a request and its response: obtaining a connection, sending the request, and reading the response headers and body."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Nowhere does it mentions that it won't clone the body. It even says that it makes a deep copy. But the entire game is of the ",(0,i.jsx)(t.code,{children:"context"}),". Once the context is done, it seems the Body is done for or consumed. So, I needed to make a copy of the body before sending out the request and used that copy to set the body of the cloned request. ",(0,i.jsx)(t.code,{children:"req"})," (GetBody()` helped in making the copy of the request)."]}),"\n",(0,i.jsx)(t.p,{children:"And that was it. The server started returning my calendars after that. (That's not entirely true. During debugging, I thought that maybe I'm not sending the correct queries to the server. So I tried with bunch of different queries and settings. And then spent some extra minutes to realize that I've messed up the queries and then some more to correct it.)"}),"\n",(0,i.jsx)(t.h2,{id:"smpt---just-use-an-external-package",children:"SMPT - Just use an external package"}),"\n",(0,i.jsxs)(t.p,{children:["I started with ",(0,i.jsx)(t.code,{children:"net/smtp"}),' package that is included with the Golang installation. There was nothing wrong with it but it seems that it\'s development is frozen and the authors suggesting using some other maintained lib. So, after writing a working implementation using this "obselete" lib, I searched for another lib and then re-wrote the thing to make it compatible with the new lib.']}),"\n",(0,i.jsxs)(t.p,{children:["One thing I solidified during experience was to provide a good interface to your users. This allows to change your implementation as you want (change libs/packages or re-write whole thinh by youself) as long as you don't alter the user interface. I started with ",(0,i.jsx)(t.code,{children:"NewSMTPClient"})," function to return a custom (hidden) client object and a ",(0,i.jsx)(t.code,{children:"SendCalendarInvite(calObject caldav.CalendarObject)"})," method for the client. The client didn't expose its fields directly to the end user - so it was pretty easy to switch to another package for my ",(0,i.jsx)(t.code,{children:"SendCalendarInvite"})," implementation without making any changes to my front-end."]}),"\n",(0,i.jsx)(t.h2,{id:"imap---sweet-time-that-we-spent-together",children:"IMAP - Sweet time that we spent together"}),"\n",(0,i.jsxs)(t.p,{children:['I spent about 90 minutes on a very "stupid" mistake. Here\'s how. So I needed to ask my mail server for all the emails from last few hours. Then I could process them to see if they had any calendar invite. ',(0,i.jsx)(t.code,{children:"github.com/emersion/go-imap"})," lib along with ",(0,i.jsx)(t.code,{children:"github.com/emersion/go-message/mail"})," make this whole thing a no-brainer given that you have some brain cells to correctly use these packages or you are willing to spend some time looking at protocol RFCs or maybe just search Github issues for the problems you'r facing."]}),"\n",(0,i.jsx)(t.p,{children:"Here's what happened. I managed to find the sequence numbers of the emails that I needed. But didn't check if the returned result was empty or not. Sending the empty sequence numbers to server to fetch those results rturned in weird errors from the server which gives no hint about the actual issue."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'criteria.SentSince = time.Now().Add(-4*hours)\nseqNums, err := c.Search(criteria)\n\nitems := []imap.FetchItem{imap.FetchBody}\nmsgs := make(chan *imap.Message, len(seqNums))\nseqSet := new(imap.SeqSet)\nseqSet.AddNum(seqNums...)\nif err := c.Fetch(seqSet, items, msgs); err != nil {\n    return nil, fmt.Errorf("failed to fetch email: %v", err)\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"So, the first thing that needed to be done was not to query the server if you didn't have anything to query for."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"seqNums, err := c.Search(criteria)\n\nif len(seqNums) == 0 {\n    return []string{}, nil\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Alright, that makes sense now. So I increased my search criteria to 10 hours and was pretty certain that I had several mails in that window. And that resulted in segmentation fault. Meaning I was trying to read some memory location which I had no business reading. Fortunately, unlic ",(0,i.jsx)(t.code,{children:"C"}),", golang gives you some hint about crime location. It pointed out to me the line number where I was trying to read the mail body."]}),"\n",(0,i.jsx)(t.p,{children:"Let's look at the code again (with just the necessary parts)"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'items := []imap.FetchItem{imap.FetchBody}\nmsgs := make(chan *imap.Message, len(seqNums))\nseqSet := new(imap.SeqSet)\nseqSet.AddNum(seqNums...)\nif err := c.Fetch(seqSet, items, msgs); err != nil {\n    return nil, fmt.Errorf("failed to fetch email: %v", err)\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"items"})," that I want to fetch is the email body (",(0,i.jsx)(t.code,{children:"imap.FetchBody"})," here is the string ",(0,i.jsx)(t.code,{children:"BODY"}),") - as that's the thing that would have the calendar invites I'm after. But the body field of all the emails that it fetched was always ",(0,i.jsx)(t.code,{children:"nil"}),". It was weird. I had explicitly specified to fetch the ",(0,i.jsx)(t.code,{children:"BODY"})," and the body was nil. Then my monkey brain told me not to optimize and just fetch everything. Conveniently, there was ",(0,i.jsx)(t.code,{children:"imap.FetchAll"})," and I thought it would fetch everything. But NO. Both of these options fetched everthing but the email body. After plucking another 100 hair from my head and surrendered and looked online. Within a minute or so, I came across this github comment ",(0,i.jsx)(t.code,{children:"https://github.com/emersion/go-imap/issues/306#issuecomment-546532174"})," - turned out I had to fetch ",(0,i.jsx)(t.code,{children:"BODY.PEEK[]"}),". Fetch ",(0,i.jsx)(t.code,{children:"ALL"})," or ",(0,i.jsx)(t.code,{children:"BODY"})," do not fetch everthing or the body respectively (as one would have expected) but the headers and stuff. So, folks please read those RFCs."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["Peek keeps the email unread, so one can use ",(0,i.jsx)(t.code,{children:"BODY[]"})," as well if they want to mark the mail read. (Look at the smart me)"]})}),"\n",(0,i.jsx)(t.p,{children:"So, here'e the wokring code"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'items := []imap.FetchItem{imap.FetchItem("BODY.PEEK[]")}\n.. removed for brevity ..\nif err := c.Fetch(seqSet, items, msgs); err != nil {\n    return nil, fmt.Errorf("failed to fetch email: %v", err)\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Funnily enough, when I started working on the IMAP functionlity. I asked ",(0,i.jsx)(t.code,{children:"Claude Opus"})," (a gpt) to write me the code, it suggested the folowing"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:"section := &imap.BodySectionName{}\nitems := []imap.FetchItem{section.FetchItem()}\n"})}),"\n",(0,i.jsx)(t.p,{children:"which translates to a working approach"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-go",children:'items := []imap.FetchItem{imap.FetchItem("BODY[]")}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["But I became a smart-ass and asked why it was making it so complicated. We needed just the body and ",(0,i.jsx)(t.code,{children:"FetchBody"})," provided that, so why couldn't we use that instead? The GPT, like it always does, apologized to me, praised me for being so smart, and suggested that we could indeed just use ",(0,i.jsx)(t.code,{children:"FetchBody"}),". Sometimes I thought it did that on purpose, maybe to hold some grudge or something /s."]}),"\n",(0,i.jsx)(t.h2,{id:"something-to-end-the-blog-with",children:"Something to end the blog with"}),"\n",(0,i.jsx)(t.p,{children:"Like I mentioned in the begining, I wanted to keept the final binary very small and might end up re-writing some of the functionalities that the packages provide by myself. As of now, I think that the webdav dependency (it provides caldav) can be easily do away with. As it just needs to make some simple http calls to the server. So that's something I've been looking towards getting rid of. But not until I have a full working solution ready first."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:["I loved using these ",(0,i.jsx)(t.strong,{children:"note"})," section in this blog entry. Sometimes at places where it didn't make any sense. And now this blog entry being done, maybe I can go back actually implementaing the real thing."]})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(6540);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);