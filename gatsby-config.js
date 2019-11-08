module.exports = {
  siteMetadata: {
    title: `Cody Jarrett`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-web-font-loader`,
    //   options: {
    //     google: {
    //       families: ['Work Sans:500,600,700', 'sans-serif', 'Indie Flower', 'cursive']
    //     }
    //   }
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `aert94qrey0z`,
        accessToken: `z9iyyKnhYboUhHn4ihN316Z5jhpQUZZvOGrNCX8Zv00`,
        downloadLocal: true
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
