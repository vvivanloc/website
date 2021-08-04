require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    headerTitle: "Toulouse Dataviz",
    headerSubtitle: "Bienvenue !",
    headline: "Toulouse Dataviz",
    description: "Notre but ? Promouvoir et diffuser la culture de l’analyse et de la visualisation des données. Découvrez comment ",
    actionButton: "Découvrir l'association",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `meetup-description`,
        path: `${__dirname}/src/content/offres-description`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/MDXPageLayout.js"),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/content/pics/`,
      },
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.INTEGRATION_TOKEN,
        databaseId: process.env.DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offres-pages`,
    `gatsby-plugin-md-from-csv`,
    `gatsby-plugin-md-from-notion-table-attribute`,
    `gatsby-plugin-meetup-pages-notion`,
  ],
}
