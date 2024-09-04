"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5934],{11:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(4848),i=n(8453);const a={title:"Basic Auth and Digest",slug:"2024/basic-auth-and-digest",tags:["2024-08","2024","digest","basic auth"]},r=void 0,o={permalink:"/blog/2024/basic-auth-and-digest",source:"@site/../blogs/2024-08-22-digest-auth.md",title:"Basic Auth and Digest",description:"I've started working on calbridge and spent some time working on the caldav client part of it. While connecting to the caldav server, I passed in the creds as basic auth. The server repeatedly returned 401 - Unauthorized. I might have spent roughly an hour figuring out where I might be sending the wrong username, password or the server url.",date:"2024-08-22T00:00:00.000Z",tags:[{inline:!0,label:"2024-08",permalink:"/blog/tags/2024-08"},{inline:!0,label:"2024",permalink:"/blog/tags/2024"},{inline:!0,label:"digest",permalink:"/blog/tags/digest"},{inline:!0,label:"basic auth",permalink:"/blog/tags/basic-auth"}],readingTime:3.675,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Basic Auth and Digest",slug:"2024/basic-auth-and-digest",tags:["2024-08","2024","digest","basic auth"]},unlisted:!1,prevItem:{title:"Learnings From Calbridge",permalink:"/blog/2024/learnings-from-calbridge"},nextItem:{title:"Terraform Provider Dynamic Configuration",permalink:"/blog/2024/terraform-provider-dynamic-configuration"}},h={authorsImageUrls:[]},d=[{value:"What",id:"what",level:2},{value:"Why",id:"why",level:2},{value:"How",id:"how",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["I've started working on ",(0,s.jsx)(t.a,{href:"/journal/2024/caldav-and-mail",children:"calbridge"})," and spent some time working on the caldav client part of it. While connecting to the caldav server, I passed in the creds as basic auth. The server repeatedly returned ",(0,s.jsx)(t.code,{children:"401 - Unauthorized"}),". I might have spent roughly an hour figuring out where I might be sending the wrong username, password or the server url."]}),"\n",(0,s.jsx)(t.p,{children:"And then by luck or whatever, I stumbled across this part of the response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="utf-8"?>\n<d:error xmlns:d="DAV:" xmlns:s="http://sabredav.org/ns">\n  <s:sabredav-version>4.6.0</s:sabredav-version>\n  <s:exception>Sabre\\DAV\\Exception\\NotAuthenticated</s:exception>\n  <s:message>No \'Authorization: Digest\' header found. Either the client didn\'t send one, or the server is misconfigured</s:message>\n</d:error>\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"No 'Authorization: Digest' header found"})," - the poor fella was expecting the ",(0,s.jsx)(t.code,{children:"Authorization: Digest"})," and I was passing in the ",(0,s.jsx)(t.code,{children:"Authorization: Basic"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you are using curl, pass the ",(0,s.jsx)(t.code,{children:"--digest"})," flag and it will handle the ",(0,s.jsx)(t.strong,{children:"digest"})," auth flow for you."]})}),"\n",(0,s.jsx)(t.p,{children:"I've heard of this auth mechanism before but never went into much details of what it is, why it is and how it is. These three questions I'll try to cover in this blog. Maybe not in much details but something to keep it interesting and informative"}),"\n",(0,s.jsx)(t.h2,{id:"what",children:"What"}),"\n",(0,s.jsx)(t.p,{children:"So, it's a HTTP auth mechanism like basic auth. But unlike basic auth, where username and password are transmitted in plain-text and can be intercepted and decoded by anyone on the network (if you are using HTTP (not HTTPS)); with auth digest you never send the username and password over. Instead you use your creds to solve a puzzle that the server sents you. Now, of course, if you are not on HTTPS - an attacker on the network can easily intercept this solution to the puzzle and then impersonate you. But at least they won't have your password."}),"\n",(0,s.jsx)(t.p,{children:"Moral of the story: Always use a secured connection (HTTPS) if you are sending over sensitive information."}),"\n",(0,s.jsx)(t.h2,{id:"why",children:"Why"}),"\n",(0,s.jsx)(t.p,{children:"I think the last section kinda answered this question. We needed it to avoid sending our passwords in plain-text over an HTTP connection."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"A question for you: What do you think is the best way to create a user, in the first place, over such a connection?"})}),"\n",(0,s.jsx)(t.h2,{id:"how",children:"How"}),"\n",(0,s.jsx)(t.p,{children:"I'll try to gloss over most of the technical details but still keep enough to satiate those of you who dig these kind of details. I'll use some Golang code to show the implementation details"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Client asks the server for a protected resource (without sending any creds)","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'req, _ := http.NewRequest("GET", URL, nil)\nresp, _ := http.DefaultClient.Do(req)\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["Server responds with ",(0,s.jsx)(t.code,{children:"StatusUnauthorized (401)"})," status code and sends the challenge in ",(0,s.jsx)(t.code,{children:"WWW-Authenticate"})," header","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'if resp.StatusCode == http.StatusUnauthorized {\n    challenge := resp.Header.Get("WWW-Authenticate")\n\n    req, _ = http.NewRequest("GET", URL, nil)\n\n    // Set the Digest authentication header\n    req.Header.Set("Authorization", getDigestAuthorization(challenge, Username, Password, "GET", URL))\n\n    // Send the request with Digest authentication\n    resp, _ = http.DefaultClient.Do(req)\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["In ",(0,s.jsx)(t.code,{children:"WWW-Authenticate"}),", server sends couple of fields like ",(0,s.jsx)(t.code,{children:"realm"}),", ",(0,s.jsx)(t.code,{children:"nonce"})," and these are used together with username and password to generate a hash. This hash is what is sent back to the server in ",(0,s.jsx)(t.code,{children:"Authorization"})," header","\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-go",children:'func getDigestAuthorization(challenge, username, password, method, uri string) string {\n    // Parse the Digest challenge\n    fields := parseDigestChallenge(challenge)\n\n    realm := fields["realm"]\n    nonce := fields["nonce"]\n\n    // Generate the response hash\n    ha1 := getMD5(fmt.Sprintf("%s:%s:%s", username, realm, password))\n    ha2 := getMD5(fmt.Sprintf("%s:%s", method, uri))\n    response := getMD5(fmt.Sprintf("%s:%s:%s", ha1, nonce, ha2))\n\n    // Construct the Digest authorization header\n    authParams := fmt.Sprintf(\n        `username="%s", realm="%s", nonce="%s", uri="%s", response="%s"`,\n        username, realm, nonce, uri, response\n    )\n    return "Digest " + authParams\n}\n'})}),"\n"]}),"\n",(0,s.jsx)(t.li,{children:"As you might have noticed, we send back the username, realm, nonce and the hash to the server but not the password. Using the username, the server looks up the password from its db and does this calculation on its side. If the hash matches to the server calculated hash then the request is authenticated otherwise not."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"That was it about the digest auth. A clever way if proving you are who you say you are without sending over your password. Again it might not be necessary if you use HTTPS and might not be very secure(citations needed) but it's still much better than basic auth."}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"I've removed lots of implementation details from the code snippets above. Do not copy paste this code for your implementation of digest auth. Use some existing library or follow the official RFC or spec of the protocol."})})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const i={},a=s.createContext(i);function r(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);