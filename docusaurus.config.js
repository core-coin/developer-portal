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
    navbar: {
      title: 'Developer',
      logo: {
        alt: 'Core Dev',
        src: 'img/corecoin-logo.svg',
        srcDark: 'img/corecoin-logo-dark.svg',
      },
      hideOnScroll: true,
      items: [
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
              label: 'Bug Bounty',
              to: 'docs/bug-bounty',
            },
            {
              label: 'Build Boid',
              to: 'docs/guides/build-boid',
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
              label: 'Blog',
              href: 'https://blog.coreblockchain.cc',
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
              label: 'Git⚡️',
              href: 'https://git.energy/core',
            },
            {
              label: 'M↓x',
              to: 'docs/help/markdown',
            },
            {
              label: 'Stars ✨',
              to: 'docs/contributors/stars',
            },
          ],
        },
      ],
      copyright: 'License ⓪',
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
            'https://git.energy/core/developer-portal/edit/master/',
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
      keylink: 'https://git.energy/snippets/15',
    },
  },
};
