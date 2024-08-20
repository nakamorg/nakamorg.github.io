---
title: 2024-08-09 Birthday Preparation
slug: 2024/birthday-preparation
tags:
- '2024-08'
- '2024'
- birthday
hide_table_of_contents: true
---
Looks like I am on a streak. Third post within two days. There has been a major earthquake<!-- truncate --> in Kyushu. Fortunately, we didn't feel anything in Tokyo and all the friends and family members are keeping safe.

Tachan's first birthday is approaching and we are (mostly Maiko) deciding on what cakes to buy and about the decoration items as well. The primary cake has blueish hue and a brown bear (edible) on it and second one is a chocolate cake (again with a brown bear on it). Tachan can't eat chocolate as of now.

Oh well, today I met (online) two colleges from our US office. We mostly talked about how to bootstrap a system at our company. The bootstapping stucture we have is a mess as of now because we are transitioning from legacy cluster and until we move off them, all the changes to the bootstrapping repo needs to be fully backward compatible. There were some major changes in how we handle new and legacy clusters, so it has become a major pain to sustain them together, at least for the end users - as the API we provide them for bootstrapping isn't very clean and intuitive.

While deploying this blog to github pages, I realized that my custom domain settings gets overriden on every deploy. I knew docusaurus deploy only pushes the build content to a specific branch and wasn't updating the repo's github page settings. After much fumbling, I found that I needed to add a `CNAME` file with an entry for my custom domain to make it work. For docusaurus, it could be achieved with creating a file under `static` folder. Like this (filepath is: **docusaurus/static/CNAME**)
```text
blog.nakam.org
```

Any about the earthquake again, Meteorological Agency has issued "huge earthquake warning". This is gonna be a scare big weekend.