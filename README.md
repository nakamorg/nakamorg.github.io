This is mainly for publishing my blogs using docusaurus for build and github pages for publishing.
[![Build and Deploy](https://github.com/nakamorg/nakamorg.github.io/actions/workflows/deploy-blog.yml/badge.svg)](https://github.com/nakamorg/nakamorg.github.io/actions/workflows/deploy-blog.yml)
[![Github Pages Deployment](https://github.com/nakamorg/nakamorg.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/nakamorg/nakamorg.github.io/actions/workflows/pages/pages-build-deployment)

## Publish
Github action get triggered for any pushes to master on `blogs` and `journal` folders. In case you want to build from local
```bash
cd docusaurus
npm ci
npm run build
npm run deploy # this will push the build artifacts to `gh-pages` branch used for publishing
```
