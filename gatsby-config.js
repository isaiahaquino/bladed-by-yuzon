module.exports = {
  siteMetadata: {
    title: `Bladed by Yuzon`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `info`,
        path: `${__dirname}/info`,
      }
    },
    'gatsby-plugin-mdx'
  ],
}
