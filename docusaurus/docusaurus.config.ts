import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const config: Config = {
  title: 'nakam',
  tagline: "Everyone's a nakam@nakamorg",
  // TODO: Generate your own favicon
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.nakam.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nakamorg',
  projectName: 'nakamorg.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        pages: {
          path: '../pages',
          routeBasePath: '',
        },
        blog: {
          showReadingTime: true,
          path: '../blogs',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          routeBasePath: 'blog',
          blogTitle: 'Nakam blog',
          blogDescription: 'All things nakam',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          feedOptions: {
            xslt: true,
            type: ['rss'],
            title: 'nakam blog',
            copyright: 'nakam.org',
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        blogTitle: 'Journal',
        blogDescription: 'Daily journal',
        routeBasePath: 'journal',
        path: '../journal',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        feedOptions: {
          xslt: true,
          type: ['rss'],
          title: 'nakam journal',
          description: 'A daily journal from nakam blog',
          copyright: 'nakam.org',
          createFeedItems: async (params) => {
            const {blogPosts, defaultCreateFeedItems, ...rest} = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/bulldog.png',
    navbar: {
      hideOnScroll: true,
      title: 'nakam',
      logo: {
        alt: 'site logo',
        src: 'img/bulldog.png',
      },
      items: [
        {
          to: 'blog',
          label: 'Blog',
          position: 'left'
        },
        {
          to: 'journal',
          label: 'Journal',
          position: 'left'
        },
        {
          // this needs to be complete url otherwise the build fails because of broken links
          href: 'https://www.nakam.org/blog/rss.xml',
          position: 'right',
          className: 'feed-link',
          'aria-label': 'rss Feed',
        },
        {
          href: 'https://github.com/nakamorg',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    colorMode: {
      defaultMode: 'dark',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Nakam Org, Inc.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
