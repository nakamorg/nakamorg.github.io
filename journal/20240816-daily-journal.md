---
title: 2024-08-16 Daily Journal
slug: 20240816-daily-journal
authors: [umesh]
tags:
- '2024-08'
- '2024'
- journal
- daily
hide_table_of_contents: true
---
Thinking about adding github actions to build and deploy this blog instead of running them on a VM on my machine. For some reason<!-- truncate --> I couldn't get myself to install nodejs and npm on my regular workstation. Maybe I should do that as well.

But for the time being I'm going to try my luck with github actions. Just added a github workflow file and pushing this blog file to master should trigger that. So, let get triggering!

So, that worked. But only halfway. The last step `npm run deploy` failed asking for my github username or specifying using ssh key. I was hoping that it would know how to push the changes as it was already running in github action. Let's see if `Claude Opus` can help us figure this out. After multiple back and forth it suggested to use this snippet
```yaml

    - name: Deploy
      run: |
        npm run deploy
      working-directory: docusaurus
      env:
        GIT_USER: github-actions
        GIT_PASS: ${{ secrets.GITHUB_TOKEN }}
```
I think it should work. I'm just not confident about the `GIT_USER` part. Should I use my github username there instead? Anyways, let's try pushing and see how it goes.

The action run was succesful but it still didn't deploy, complaining about setting git user email and stuff. So, let's try with

```yaml
- name: Deploy
  run: |
    git config --global user.email "${{ github.actor }}@users.noreply.github.com"
    git config --global user.name "${{ github.actor }}"
    npm run deploy
  working-directory: docusaurus
  env:
    GIT_USER: ${{ github.actor }}
    GIT_PASS: ${{ secrets.GITHUB_TOKEN }}
```
