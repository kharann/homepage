require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `A normal portfolio`,
    author: `@kharann`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `anhkha-portofolio`,
        short_name: `portofolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/kekw.jpg`
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'r4l4xmqo',
        dataset: 'production'
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        /*
        watchMode: true,
        overlayDrafts: true,
        token: process.env.SANITY_READ_TOKEN
        */
      }
    }
  ]
};
