// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DecentraLeziaHub',
  tagline: 'Learn Web3, AI & Digital Skills — Free',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://Leziah26.github.io',
  baseUrl: '/decentraleziahub/',

  // GitHub pages deployment config.
  organizationName: 'Leziah26',
  projectName: 'DecentraLeziaHub',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Leziah26/DecentraLeziaHub/tree/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Leziah26/DecentraLeziaHub/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/decentraleziahub-social-card.jpg',
      navbar: {
        title: '🌐 DecentraLeziaHub',
        logo: {
          alt: 'DecentraLeziaHub Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'learningPath',
            position: 'left',
            label: '📚 Learning Hub',
          },
          {to: '/blog', label: '📰 Blog & Tutorials', position: 'left'},
          {
            href: 'https://github.com/Leziah26/DecentraLeziaHub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Learning Hub',
                to: '/docs/web3-basics/',
              },
              {
                label: 'Career Transition',
                to: '/docs/career-transition/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: '#coming-soon',
              },
              {
                label: 'Telegram',
                href: '#coming-soon',
              },
              {
                label: 'GitHub Issues',
                href: 'https://github.com/Leziah26/DecentraLeziaHub/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Leziah26/DecentraLeziaHub',
              },
              {
                label: 'License (CC BY 4.0)',
                href: 'https://creativecommons.org/licenses/by/4.0/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DecentraLeziaHub. Built with ❤️ for the Web3 community.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['solidity', 'javascript', 'python'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default config;
