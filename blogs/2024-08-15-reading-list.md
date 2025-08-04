---
title: Reading List
slug: 2024/reading-list
tags:
- reading
- 'reading-list'
hide_table_of_contents: false
---
I've been thinking about managing a reading list, basically a list of urls or excerpts as I read them or get to know about them. Previously, I set up Linkwarden<!-- truncate --> for this but didn't use it much (or at all). Hoping that this rlog (running blog) can substitute that. Hopefully, I'll keep it updated with everything insteresting I read on day to day basis, but it'll mostly be media that I'd consume on my workstation (same machine I use to write this blog). Anyways, something is better than nothing. off we go

## 2024-08
15th August - Independence Day, India
- [medium.com/yandex/good-retry-bad-retry-an-incident-story](https://medium.com/yandex/good-retry-bad-retry-an-incident-story-648072d3cee6) - Very interesting and fun read. Goes into the details of when and why `retries` should be used. How simple or simple exponetial backoff retries could be major issue when is system is recovering from downtime. Sugeests to use retries with `Retry Budget`, `Circuit Breaker`, `Load Shedding`, `Deadline Propogation` etc. Former two are implemented on client whereas later two on servers.
- [isovalent.com/blog/post/demystifying-cni](https://isovalent.com/blog/post/demystifying-cni) - A short article briefly discusses the container runtime and network interface and goes on to build a CNI plugin using bash. Apparently, you only need two files. A conf file at `/etc/cni/net.d/` and a CNI executable at `/opt/cni/bin/`. CRI loads the first conf file and finds the corresponding executable and then calls the CNI executable as per the CNI spec.
- [CORS is stupid](https://kevincox.ca/2024/08/24/cors/) - For the last eight years of my career, this is the only post that made me understand cors and how it affects users.

## 2025-06
[https://tesseral.com/blog/what-a-developer-needs-to-know-about-scim?utm_source=tldrnewsletter](https://tesseral.com/blog/what-a-developer-needs-to-know-about-scim?utm_source=tldrnewsletter) - I always thought SCIM was some obtuse spec like SAML, partly because I never invested any time in reading about it. This article puts it very nicely and was a very light read like the SCIM spec.

## 2025-08
- [engineering-buy-in](https://venki.dev/notes/engineering-buy-in) - You work at a tech company, and have an excellent project idea that you’d like to pursue. How do you convince those around you? The most important tactic: individually talk about it with many relevant people, before you finally pitch it to a decision-making group
