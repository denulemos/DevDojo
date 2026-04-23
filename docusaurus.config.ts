import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevDojo',
  tagline: 'Hecho por y para devs (La mayoria, humanos)',
  favicon: 'img/favicon.ico',
  scripts: [
    {
      src: '/js/register-sw.js',
      async: true,
    },
  ],
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/manifest.webmanifest',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#D9828F',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/icons/icon-192.png',
      },
    },
  ],

  url: 'https://devdojodocs.vercel.app',
  baseUrl: '/',

  organizationName: 'denulemos',
  projectName: 'DevDojo',

  onBrokenLinks: 'throw',
  
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localeConfigs: {
      es: {
        label: 'Español',
      },
    },
  },

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['es', 'en'],
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Pacifico&display=swap',
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'docs',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.ico',
    navbar: {
      title: 'DevDojo',
      logo: {
        alt: 'DevDojo Logo',
        src: 'img/favicon.ico',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Dojos',
        },
        {
          href: 'https://github.com/denulemos/DevDojo',
          label: 'Github',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} DevDojo, Inc. Built with Docusaurus y mucho amor.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;