"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2977],{1725:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"2024/tachan-first-birthday","metadata":{"permalink":"/journal/2024/tachan-first-birthday","source":"@site/../journal/2024-08-26-daily-journal.md","title":"2024-08-26 Tachan\'s First Birthday","description":"Last year, on 27th August at 0151 JST. He is fast asleep by my side as I write this. He looks even more cute and adorable while sleeping, and I have to summon all my strength to resist hugging him tightly and showering him with kisses.","date":"2024-08-26T00:00:00.000Z","tags":[{"inline":true,"label":"2024-08","permalink":"/journal/tags/2024-08"},{"inline":true,"label":"2024","permalink":"/journal/tags/2024"},{"inline":true,"label":"birthday","permalink":"/journal/tags/birthday"},{"inline":true,"label":"tachan","permalink":"/journal/tags/tachan"}],"readingTime":0.875,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2024-08-26 Tachan\'s First Birthday","slug":"2024/tachan-first-birthday","tags":["2024-08","2024","birthday","tachan"],"hide_table_of_contents":true},"unlisted":false,"nextItem":{"title":"2024-08-19 Caldav and Mail Server","permalink":"/journal/2024/caldav-and-mail"}},"content":"Last year, on 27th August at 01:45 JST, Tachan was born. It\'s 26th August today, and the time is 23:51 JST. He is fast asleep by my side\x3c!-- truncate --\x3e as I write this. He looks even more cute and adorable while sleeping, and I have to summon all my strength to resist hugging him tightly and showering him with kisses.\\n\\nAbout 90 minutes ago, we celebrated his first birthday. Nothing fancy \u2014 just the three of us. Kochan didn\u2019t join. We didn\u2019t have any plans to celebrate today since the birthday party is on the 31st (weekend), but somehow we still ended up buying a small cake and couldn\u2019t resist celebrating.\\n\\nHe was overjoyed looking at the candle and enjoyed the Happy Birthday song a lot.\\n![first time candle fire](./assets/20240826-bday-1.jpg)\\n\\nOnce the candle went out, he was shocked and surprised but started giggling again.\\n![mm-ma\'s love](./assets/20240826-bday-2.jpg)\\n\\nThank you, Mahadev, for blessing us with such a wonderful gift. Thank you always.\\n\\nThank you, Tachan, for choosing us to be your parents. Big love - Papa."},{"id":"2024/caldav-and-mail","metadata":{"permalink":"/journal/2024/caldav-and-mail","source":"@site/../journal/2024-08-19-daily-journal.md","title":"2024-08-19 Caldav and Mail Server","description":"For last couple of days, I have been obsessed with integrating my caldav and mail servers. My mails are managed by MXRoute. I took their lifetime subscription. So, I think I\'m sorted for life or at least next 5-10 years or sooner (if I end up starting a business and then just drop my guards and go with the Google Workspace and equalents). Anyways, enough digression.","date":"2024-08-19T00:00:00.000Z","tags":[{"inline":true,"label":"2024-08","permalink":"/journal/tags/2024-08"},{"inline":true,"label":"2024","permalink":"/journal/tags/2024"},{"inline":true,"label":"caldav","permalink":"/journal/tags/caldav"},{"inline":true,"label":"connector","permalink":"/journal/tags/connector"}],"readingTime":3.325,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2024-08-19 Caldav and Mail Server","slug":"2024/caldav-and-mail","tags":["2024-08","2024","caldav","connector"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"2024-08-26 Tachan\'s First Birthday","permalink":"/journal/2024/tachan-first-birthday"},"nextItem":{"title":"2024-08-17 Changed Everything","permalink":"/journal/2024/changed-everything"}},"content":"For last couple of days, I have been obsessed with integrating my caldav and mail servers. My mails are\x3c!-- truncate --\x3e managed by MXRoute. I took their lifetime subscription. So, I think I\'m sorted for life or at least next 5-10 years or sooner (if I end up starting a business and then just drop my guards and go with the Google Workspace and equalents). Anyways, enough digression.\\n\\nMXRoute also provides me with a Caldav server but that\'s not their strong suite and they don\'t even advertise or document it. I was trying out their webmail clients and stumbled across it by chance. Long story short, I\'ve a hosted caldav and mail server. But they are not connected with each other, like what your expect with Gmail and Google Calendar. For example: if I add an event and invite someone, they won\'t receive an invitation email (unless I create the event on specialized clients: Thunderbird or the webmail client I discussed above) and similarly if someone sends me an invitation over email, that won\'t be added to my calendar auto-magically (on iOS I click on the invite attachment and add it to my calendar manually).\\n\\nSo, the ultimate goal is to have some kind of connection b/w these two servers that will allow me to send and receive invites over email. I spent last couple of days searching for an existing solution but none seem to work. Some suggestions were to \\n- Change my mail provider and use something like Fastmail, magadu etc (that\'s not gonna fly with me - I\'m already on lifetime sub with mxroute and these other services charge you per user per month).\\n- Use a different caldav server. I tried Baikal - it solved half the problem about sending out invites but not the receiving part. It\'s written in php - so I don\'t want to spend time extending it (not familaier with php at all). I tried NextCloud thinking that it would magically fix my issue and partly because all my internet seaches suggested that it would - but it didn\'t. It solved the same thing as Baikal but had ton of other services (mail client, photos, sharing etc) that I didn\'t need.\\n- DavMail Gateway - it seemed like something in right direction but was too dauting to try and all the docs suggested that it has something to do with Outlook or MS Exchange.\\n\\nAnyways, the point is that I\'ve finally decided to try my luck writing soemthing for my use case myself. Idea is simple\\n- Read calendar events from caldav periodically and send invites using SMTP\\n- Read emails using IMAP, look for `ical` attachments and send them over to caldav\\n\\nOf course, I\'ll need to do some state management. Like: \\n- which invites have already been sent\\n- which changed since they were last sent\\n- which received invites have been added, were the added ones been changed\\n\\nAnd more complex features might include handling the cases where I or the person I\'m inviting don\'t want to accept an invitation or ask for adjustments. But, I\'ll try to ignore it for the time being.\\n\\nAs of now, I\'m very motivated. But, let\'s see how much motivation I can summon to actually implement it. I may or may not update this blog if I do actually end up implementing it. So, if you are interested, check out my github org [nakamorg](https://github.com/nakamorg). ChatGPT suggested using `calbridge` as the project name (along with some other suggestion, of course) - so that\'s what it will be.\\n\\nSide note: For some reason, most of my posts get same publishing date whenever I make a new deploy of the blog (which happens for any change that I make, however minute). I need to figure out a way to prevent that.\\n\\n[Update (2024-08-20)]: I think if I prefix my filename with date in (yyyy-mm-dd) that should fix the timestamp issue on the blog. I\'ve made those changes and trying a deploy."},{"id":"2024/changed-everything","metadata":{"permalink":"/journal/2024/changed-everything","source":"@site/../journal/2024-08-17-daily-journal.md","title":"2024-08-17 Changed Everything","description":"I did a major revamp to my blogging site. Instead of just serving the blogs, it will now serve my landing page. Blogs which used to be served at root url have been moved to /blog with their rss feed. Also, doing this meant that the domain name had to be changed from blog.nakam.org. It\'s now at www.nakam.org.","date":"2024-08-17T00:00:00.000Z","tags":[{"inline":true,"label":"2024-08","permalink":"/journal/tags/2024-08"},{"inline":true,"label":"2024","permalink":"/journal/tags/2024"}],"readingTime":0.51,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2024-08-17 Changed Everything","slug":"2024/changed-everything","tags":["2024-08","2024"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"2024-08-19 Caldav and Mail Server","permalink":"/journal/2024/caldav-and-mail"},"nextItem":{"title":"2024-08-15 Tachan got Roseola","permalink":"/journal/2024/tachan-got-roseola"}},"content":"I did a major revamp to my blogging site. Instead of just serving the blogs\x3c!-- truncate --\x3e, it will now serve my landing page. Blogs which used to be served at root url have been moved to `/blog` with their rss feed. Also, doing this meant that the domain name had to be changed from `blog.nakam.org`. It\'s now at `www.nakam.org`.\\n\\nOther than that, I\'ve started adding year as the slug prefix - so you\'ll see that for all blog posts starting today. I thought it would help me avoid url collisions while also providing a nice little hint about the publishing year."},{"id":"2024/tachan-got-roseola","metadata":{"permalink":"/journal/2024/tachan-got-roseola","source":"@site/../journal/2024-08-15-daily-journal.md","title":"2024-08-15 Tachan got Roseola","description":"So the earthquake wasn\'t that severe but there definetely was one around 1945 JST and we experienced something about of magnitude 2-3. I was on the second floor working out and talking to my mon on the phone and rushed down as it came. Maiko came with Tachan in her lap (it\'s out protocol to gather by the main door in the event of a quake). She then gathered all our emergency supplies by the door.","date":"2024-08-15T00:00:00.000Z","tags":[{"inline":true,"label":"2024-08","permalink":"/journal/tags/2024-08"},{"inline":true,"label":"2024","permalink":"/journal/tags/2024"},{"inline":true,"label":"roseola","permalink":"/journal/tags/roseola"}],"readingTime":2.375,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2024-08-15 Tachan got Roseola","slug":"2024/tachan-got-roseola","tags":["2024-08","2024","roseola"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"2024-08-17 Changed Everything","permalink":"/journal/2024/changed-everything"},"nextItem":{"title":"2024-08-09 Birthday Preparation","permalink":"/journal/2024/birthday-preparation"}},"content":"So the earthquake wasn\'t that severe but there definetely was one around 1945 JST and we\x3c!-- truncate --\x3e experienced something about of magnitude 2-3. I was on the second floor working out and talking to my mon on the phone and rushed down as it came. Maiko came with Tachan in her lap (it\'s out protocol to gather by the main door in the event of a quake). She then gathered all our emergency supplies by the door.\\n\\nWe had little pool party, at home, on Sunday. The water was cold and the weather extremely hot - so it was fun. Tachan enjoyed a lot but he keeps to himself and doesn\'t play with anyone else during these times (maybe all the toys, colorful air pumped pool are too simulating for him).\\n\\nTachan showed eleveted body temperature on Monday but we didn\'t give it much thought. On Tuesday, Maiko had work so I took child care leave. By Tuesday afternoon, his temperature for very noticeable and making him a bit uncomfortable but he was still giggly and playing. By the night he had fever of about `38.3C` and was often crying and didn\'t want to take any solids and didn\'t show much appreciation for the milk but drank anyway (that\'s a relief).\\n\\nMaiko took him to hospital on Wednesday. Doctor mentioned it was something with his stomach which makes Maiko think that it was because of the food I give him whenever I\'m eating but my theory is that it was the cold water during the pool party, I didn\'t tell it Maiko - she organized the pool party. Temperature reached about `39.1` by the night making everyone very uncomfortable. But Tachan was still giggling and playing at times. By the morning today, fever has long down. But there are rashes all over his body. They have increased a bit since morning. So, it seems it was neither the food nor the pool party but the `Roseola` fever all along. Doctor mentioned that it\'s normal after the fever and they should subside by tomorrow.\\n\\n(edit: 2023-08-16) - rashes made him very uncomfortable in the night. He woke up multiple times and cried a lot, making Maiko and I very nervous. She made calls to some of the hospitals, they asked not to come in as an emergency case and rather visit a clinic in the morning if the condition gets more severe. Fortunetely, by the 8 o\'clock in the morning, rashes are gone and he is sleeping like a baby (it\'s 11 o\'clock now).\\n\\nWell, my 2024 H1 performace review came in today. I had a score of `3` and `4`, out of `5`, for impact and competency respectively. Manager says I need to pick up some flagship project and advertise my work more to gain those juicy impact points. Off to 2024 H2 :rocket:"},{"id":"2024/birthday-preparation","metadata":{"permalink":"/journal/2024/birthday-preparation","source":"@site/../journal/2024-08-09-daily-journal.md","title":"2024-08-09 Birthday Preparation","description":"Looks like I am on a streak. Third post within two days. There has been a major earthquake in Kyushu. Fortunately, we didn\'t feel anything in Tokyo and all the friends and family members are keeping safe.","date":"2024-08-09T00:00:00.000Z","tags":[{"inline":true,"label":"2024-08","permalink":"/journal/tags/2024-08"},{"inline":true,"label":"2024","permalink":"/journal/tags/2024"},{"inline":true,"label":"birthday","permalink":"/journal/tags/birthday"}],"readingTime":1.53,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2024-08-09 Birthday Preparation","slug":"2024/birthday-preparation","tags":["2024-08","2024","birthday"],"hide_table_of_contents":true},"unlisted":false,"prevItem":{"title":"2024-08-15 Tachan got Roseola","permalink":"/journal/2024/tachan-got-roseola"},"nextItem":{"title":"2024-08-08 Daily Journal","permalink":"/journal/2024/daily-journal"}},"content":"Looks like I am on a streak. Third post within two days. There has been a major earthquake\x3c!-- truncate --\x3e in Kyushu. Fortunately, we didn\'t feel anything in Tokyo and all the friends and family members are keeping safe.\\n\\nTachan\'s first birthday is approaching and we are (mostly Maiko) deciding on what cakes to buy and about the decoration items as well. The primary cake has blueish hue and a brown bear (edible) on it and second one is a chocolate cake (again with a brown bear on it). Tachan can\'t eat chocolate as of now.\\n\\nOh well, today I met (online) two colleges from our US office. We mostly talked about how to bootstrap a system at our company. The bootstapping stucture we have is a mess as of now because we are transitioning from legacy cluster and until we move off them, all the changes to the bootstrapping repo needs to be fully backward compatible. There were some major changes in how we handle new and legacy clusters, so it has become a major pain to sustain them together, at least for the end users - as the API we provide them for bootstrapping isn\'t very clean and intuitive.\\n\\nWhile deploying this blog to github pages, I realized that my custom domain settings gets overriden on every deploy. I knew docusaurus deploy only pushes the build content to a specific branch and wasn\'t updating the repo\'s github page settings. After much fumbling, I found that I needed to add a `CNAME` file with an entry for my custom domain to make it work. For docusaurus, it could be achieved with creating a file under `static` folder. Like this (filepath is: **docusaurus/static/CNAME**)\\n```text\\nblog.nakam.org\\n```\\n\\nAny about the earthquake again, Meteorological Agency has issued \\"huge earthquake warning\\". This is gonna be a scare big weekend."},{"id":"2024/daily-journal","metadata":{"permalink":"/journal/2024/daily-journal","source":"@site/../journal/2024-08-08-daily-journal.md","title":"2024-08-08 Daily Journal","description":"Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods  from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use startupTaints on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready.","date":"2024-08-08T00:00:00.000Z","tags":[{"inline":true,"label":"2024-08","permalink":"/journal/tags/2024-08"},{"inline":true,"label":"2024","permalink":"/journal/tags/2024"}],"readingTime":1.14,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2024-08-08 Daily Journal","slug":"2024/daily-journal","tags":["2024-08","2024"],"hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"2024-08-09 Birthday Preparation","permalink":"/journal/2024/birthday-preparation"}},"content":"Today has been a rollerposter of unexpectedness. At work I was working on a proposal to implement a mechanism to prevent normal pods \x3c!-- truncate --\x3e from scheduling to our K8s clusters before all of our critical daemonsets are ready. I drafted the proposal yesterday and presented it today. It went fine as is. It was pretty simple actually. We decided to use **startupTaints** on our Karpentor nodepools for each required daemonset and then made the daemonset responsible for removing the said taint ones it becomes ready.\\n\\nAs for the personal stuff, I wanted to start with a blog where I could write freely (without going into much details of the things) and about my daily life, routine. I\'ve set up a docusaurus blog previously. I spent some time checking if the **mdbook** would be a good fit this daily journal blog. I fired up a test mdbook book and compared it with docusaurus style blog I had. Docusaurus style felt good to eyes (it looked nice) - so I decided to stick with docusaurus and started a second blog on same docusaurus instance. If you are reading this - you know how to reach this daily blog. I call it *daily blog* but I might not write up daily. As of now though, I feel pretty motivated to write frequently, maybe couple of time a week :grinning:"}]}}')}}]);