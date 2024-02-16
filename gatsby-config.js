/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Portfolio`,
    description: "This is my portfolio website",
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": `${__dirname}/static/icons/coding.gif`
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