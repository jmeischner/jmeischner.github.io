const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Webpage of Jan meischner`,
    description: `This page contains the blog and some additional information about Jan Meischner`,
    author: `Jan Meischner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        components: path.join(__dirname, "src/components"),
        base: path.join(__dirname, "src/components/base"),
        typography: path.join(__dirname, "src/components/typography"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/images/assets"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/articles`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: "Ayu Light",
                dark: "Ayu Dark",
              },
              extensions: [path.join(__dirname, "/ayu.vsix")],
            },
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
