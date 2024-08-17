---
title: 2024-08-08 Daily Journal
slug: 2024/daily-journal
authors: [umesh]
tags:
- '2024-08'
- '2024'
hide_table_of_contents: false
---
Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods <!-- truncate --> from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use **startupTaints** on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready.

As for the personal stuff, I wanted to start with a blog where I could write freely (without going into much details of the things) and about my daily life, routine. I've set up a docusaurus blog previously. I spent some time checking if the **mdbook** would be a good fit this daily journal blog. I fired up a test mdbook book and compared it with docusaurus style blog I had. Docusaurus style felt good to eyes (it looked nice) - so I decided to stick with docusaurus and started a second blog on same docusaurus instance. If you are reading this - you know how to reach this daily blog. I call it *daily blog* but I might not write up daily. As of now though, I feel pretty motivated to write frequently, maybe couple of time a week :grinning: