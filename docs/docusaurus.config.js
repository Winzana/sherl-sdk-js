module.exports = {
  title: 'Sherl SDK for JavaScript',
  tagline: 'Documentation of the Sherl SDK for JavaScript',
  url: 'https://winzana.github.io',
  baseUrl: '/sherl-sdk-js/',
  favicon: 'img/favicon.ico',
  organizationName: 'winzana', // Usually your GitHub org/user name.
  projectName: 'sherl-sdk-js', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'sherl-sdk-js',
      logo: {
        alt: 'Sherl Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Winzana/sherl-sdk-js',
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
              label: 'Getting Started',
              to: 'docs/introduction',
            },
            {
              label: 'Features',
              to: 'docs/product',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Winzana/sherl-sdk-js',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/winzana_fr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Winzana - Built with Docusaurus.`,
    },
  },
  plugins: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Winzana/sherl-sdk-js/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
