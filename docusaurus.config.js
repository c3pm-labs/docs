module.exports = {
  title: 'C3PM',
  tagline: 'C++ development made simple',
  url: 'https://c3pm.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gabrielcolson', // Usually your GitHub org/user name.
  projectName: 'c3pm', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'C3PM',
      logo: {
        alt: 'C3PM logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/getting_started/install',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/c3pm-labs',
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
              label: 'Getting started',
              to: 'docs/getting_started/install',
            },
            {
              label: 'About',
              to: 'docs/about',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/c3pm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/c3pmcpp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/c3pm-labs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} C3PM Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/c3pm-labs/docs/tree/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/c3pm-labs/docs/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
