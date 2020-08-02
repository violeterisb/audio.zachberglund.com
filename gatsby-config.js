module.exports = {
  siteMetadata: {
    title: `Zach Berglund | Sound Designer and Game Designer`,
    description: `sound design, audio implementation, technical sound design, music composition, foley & recording, game design, and unity development`,
    author: `Zach Berglund`,
    social: {
      twitter: `zachberglund`,
    },
    siteUrl: "https://zachberglund.com",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zachberglund.com`,
        short_name: `zb`,
        start_url: `/`,
        background_color: `#10161c`,
        theme_color: `#3282ff`,
        display: `minimal-ui`,
        icon: `src/images/zb_logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
