import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'nakam',
  tagline: "Everyone's a nakam@nakamorg",
  // TODO: Generate your own favicon
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.nakam.org',
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

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          path: '../blogs',
          routeBasePath: '/',
          feedOptions: {
            type: ['rss', 'atom'],
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
        feedOptions: {
          type: ['rss', 'atom'],
          title: 'nakam blog',
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
      title: 'nakam blogs',
      logo: {
        alt: 'site logo',
        src: 'img/bulldog.png',
      },
      items: [
        {
          to: 'journal',
          label: 'Journal',
          position: 'left'
        },
        {
          href: '/rss.xml',
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
