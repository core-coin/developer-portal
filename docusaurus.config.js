const math = require('remark-math')
const subsuper = require('remark-sub-super')
const katex = require('rehype-katex')

module.exports = {
  title: 'Developer',
  tagline: 'Core Blockchain Developer Portal',
  url: 'https://dev.coreblockchain.cc',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'CORE FOUNDATION',
  projectName: 'developer-portal',
  scripts: [],
  themeConfig: {
    image: 'img/meta-image.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DEV',
      logo: {
        alt: 'CORE DEV',
        src: 'img/corecoin-logo.svg',
        srcDark: 'img/corecoin-logo-dark.svg',
      },
      hideOnScroll: true,
      items: [
        {
          to: 'docs/start',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'ecosystem/start',
          activeBasePath: 'ecosystem',
          label: 'Ecosystem',
          position: 'left',
        },
        {
          to: 'coding/start',
          activeBasePath: 'coding',
          label: 'Coding',
          position: 'left',
        },
        {
          to: 'tutorials/start',
          activeBasePath: 'tutorials',
          label: 'Tutorials',
          position: 'left',
        },
        {
          to: 'enterprise/start',
          activeBasePath: 'enterprise',
          label: 'Enterprise',
          position: 'left',
        },
        {
          to: 'community/start',
          activeBasePath: 'community',
          label: 'Community',
          position: 'left',
        },
        {
          href: 'https://coreblockchain.cc/get-started',
          label: 'Get Started',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Report Bug',
              to: 'report/bug',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Core ◆ Talk',
              href: 'https://coretalk.info',
            },
            {
              label: 'Blog',
              href: 'https://blog.coreblockchain.cc',
            },
            {
              label: 'CIP',
              href: 'https://cip.coreblockchain.cc',
            },
          ],
        },
        {
          title: 'About',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/core-coin',
            },
            {
              label: 'M↓x',
              to: 'help/markdown',
            },
          ],
        },
      ],
      copyright: `License CC⓪ 2016-${new Date().getFullYear()}`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
    },
    enableUpdateBy: true,
    enableUpdateTime: true,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/core-coin/developer-portal/edit/master/',
          routeBasePath: '/',
          remarkPlugins: [
            math,
            subsuper,
          ],
          rehypePlugins: [
            [
              katex,
              {
                output: 'mathml',
                strict: 'newLineInDisplayMode',
              },
            ],
          ],
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/katex.css'),
          ],
        },
      },
    ],
  ],
  customFields: {
    securitymail: {
      mail: 'security@corebloackchain.cc',
      keyid: 'E13007A2',
      keylink: 'https://github.com/core-coin/keys/blob/master/Security%20(E13007A2).asc',
    },
  },
};
