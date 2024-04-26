This is mainly for publishing my blogs using docusaurus for build and github pages for publishing.

## Publish
I think I need to setup github actions to automate this. But, it's quite easy from local as well
```bash
cd docusaurus
npm run build
npm run deploy # this will push the build artifacts to `gh-pages` branch used for publishing
```