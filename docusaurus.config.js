/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "C.R.4.V",
  tagline: "Documentación",
  /** Config to Github-Pages */
  url: 'https://cr4vegas-team.github.io/pro-cr4vegas-documentation/', // Your website URL
  // url: 'https://cr4vegas-team.github.io', // Your website URL
  baseUrl: '/pro-cr4vegas-documentation/',
  // baseUrl: '/',
  projectName: 'pro-cr4vegas-documentation',
  organizationName: 'cr4vegas-team',

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
    navbar: {
      title: "Documentación",
      logo: {
        alt: "Comunidad de Regantes las Cuatro Vegas de Almería",
        src: "img/logo.svg",
      },
    },
    footer: {
      style: "dark",
      copyright: `Copyright © 2020-${new Date().getFullYear()} C.R.4.V Documentación, Creado por Rubén Francisco Gazquez Rosales con Docusaurus v2.0`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
