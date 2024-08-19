---
title: 2024-08-19 Caldav and Mail Server
slug: 2024/caldav-and-mail
tags:
- '2024-08'
- '2024'
- 'caldav'
- 'connector'
hide_table_of_contents: true
---
For last couple of days, I have been obsessed with integrating my caldav and mail servers. My mails are<!-- truncate --> managed by MXRoute. I took their lifetime subscription. So, I think I'm sorted for life or at least next 5-10 years or sooner (if I end up starting a business and then just drop my guards and go with the Google Workspace and equalents). Anyways, enough digression.

MXRoute also provides me with a Caldav server but that's not their strong suite and they don't even advertise or document it. I was trying out their webmail clients and stumbled across it by chance. Long story short, I've a hosted caldav and mail server. But they are not connected with each other, like what your expect with Gmail and Google Calendar. For example: if I add an event and invite someone, they won't receive an invitation email (unless I create the event on specialized clients: Thunderbird or the webmail client I discussed above) and similarly if someone sends me an invitation over email, that won't be added to my calendar auto-magically (on iOS I click on the invite attachment and add it to my calendar manually).

So, the ultimate goal is to have some kind of connection b/w these two servers that will allow me to send and receive invites over email. I spent last couple of days searching for an existing solution but none seem to work. Some suggestions were to 
- Change my mail provider and use something like Fastmail, magadu etc (that's not gonna fly with me - I'm already on lifetime sub with mxroute and these other services charge you per user per month).
- Use a different caldav server. I tried Baikal - it solved half the problem about sending out invites but not the receiving part. It's written in php - so I don't want to spend time extending it (not familaier with php at all). I tried NextCloud thinking that it would magically fix my issue and partly because all my internet seaches suggested that it would - but it didn't. It solved the same thing as Baikal but had ton of other services (mail client, photos, sharing etc) that I didn't need.
- DavMail Gateway - it seemed like something in right direction but was too dauting to try and all the docs suggested that it has something to do with Outlook or MS Exchange.

Anyways, the point is that I've finally decided to try my luck writing soemthing for my use case myself. Idea is simple
- Read calendar events from caldav periodically and send invites using SMTP
- Read emails using IMAP, look for `ical` attachments and send them over to caldav

Of course, I'll need to do some state management. Like: 
- which invites have already been sent
- which changed since they were last sent
- which received invites have been added, were the added ones been changed

And more complex features might include handling the cases where I or the person I'm inviting don't want to accept an invitation or ask for adjustments. But, I'll try to ignore it for the time being.

As of now, I'm very motivated. But, let's see how much motivation I can summon to actually implement it. I may or may not update this blog if I do actually end up implementing it. So, if you are interested, check out my github org [nakamorg](https://github.com/nakamorg). ChatGPT suggested using `calbridge` as the project name (along with some other suggestion, of course) - so that's what it will be.

Side note: For some reason, most of my posts get same publishing date whenever I make a new deploy of the blog (which happens for any change that I make, however minute). I need to figure out a way to prevent that.