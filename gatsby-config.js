module.exports = {
  siteMetadata: {
    title: 'Portfolio Gatsby',
  },
  plugins: [
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
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-drupal`,
      options: {
        typeName: 'DrupalGraqhQL',
        baseUrl: `http://dev-vegan-transitions.pantheonsite.io/`,
        apiBase: `jsonapi`,
      },
    },
  ],
};
