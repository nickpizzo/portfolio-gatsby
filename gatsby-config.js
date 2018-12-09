module.exports = {
  siteMetadata: {
    title: 'Portfolio Gatsby',
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `http://dev-vegan-transitions.pantheonsite.io/`,
        apiBase: `jsonapi`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`cabin`, `Open Sans`],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-image',
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     //trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Portfolio`,
        short_name: `GatsbyJS`,
        start_url: `/`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
};
