/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "My Site",
  tagline: "The tagline of my site",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
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
