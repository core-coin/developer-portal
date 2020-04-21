module.exports = {
  title: 'Developer',
  tagline: 'Core Blockchain Developer Portal',
  url: 'https://developer.coreblockchain.cc',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'CORE FOUNDATION',
  projectName: 'developer-portal',
  plugins: [
    'rehype-katex',
    'remark-math',
  ],
  scripts: [],
  themeConfig: {
    navbar: {
      title: 'Developer',
      logo: {
        alt: 'Core Coin',
        src: 'img/corecoin-logo.svg',
      },
      links: [
        {
          to: 'docs/guides/start',
          activeBasePath: 'guides',
          label: 'Guides',
          position: 'left',
        },
        {
          to: 'docs/software/start',
          activeBasePath: 'software',
          label: 'Software',
          position: 'left',
        },
        {
          to: 'docs/tools/start',
          activeBasePath: 'tools',
          label: 'Tools',
          position: 'left',
        },
        {
          to: 'docs/api/start',
          activeBasePath: 'api',
          label: 'API',
          position: 'left',
        },
        {
          href: 'https://coreblockchain.cc/get-started',
          label: 'Get Started ⚡',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'lite',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Bug Bounty',
              to: 'docs/bug-bounty',
            },
            {
              label: 'Deploy Node',
              to: 'docs/guides/deploy-node',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'CIP',
              href: 'https://cip.coreblockchain.cc',
            },
            {
              label: 'Core ◆ Talk',
              href: 'https://coretalk.info',
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
              to: 'docs/help/markdown',
            },
            {
              label: '✨',
              to: 'docs/contributors/stars',
            },
          ],
        },
      ],
      copyright: {
        name: 'CC⓪ ➤ CORE FOUNDATION, nadácia',
        link: '/docs/contributors/license',
      },
      goBack: {
        name: 'Core Blockchain',
        link: 'https://coreblockchain.cc',
      },
    },
    prism: {
      theme: require('prism-react-renderer/themes/palenight'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/core-coin/developer-portal/edit/master/',
          remarkPlugins: [
            require('remark-math'),
            require('remark-sub-super'),
          ],
          rehypePlugins: [
            require('rehype-katex'),
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields: {
    securitymail: {
      mail: 'security@corebloackchain.cc',
      keyid: 'E13007A2',
      keylink: 'https://github.com/core-coin/keys/raw/master/Security%20(E13007A2).asc',
    },
  },
};
