/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/Rrc_Porfolio",
  siteMetadata: {
    title: `My Portfolio`,
    description: "This is my portfolio website",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": `./icons/coding.gif`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "portfolio",
        "path": `${__dirname}/portfolio/`
      },
      __key: "portfolio"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "templates",
        "path": `${__dirname}/src/templates/`
      },
      __key: "templates"
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ]
};