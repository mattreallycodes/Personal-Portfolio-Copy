module.exports = {
  siteMetadata: {
    title: "Matt Shaver's Portfolio",
    author: "Matthew Shaver",
    description: "Matt Shaver is a Front End,Full Stack engineer with a passion for creating amazing UI/UX experiences.",
    image: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/s960x960/71803732_952924578395500_104562138462289920_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=5s-PsDsWpmMAX94z7dH&_nc_ht=scontent.fbeg4-1.fna&_nc_tp=7&oh=3d2f74ed3190afe6d4da390c2d15289f&oe=5ED01DE3',
    url: 'https://mattshaverwebcreator.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'Matts Portfolio',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/theBestFavicon.png', // This path is relative to the root of the site.
      },
    }, 
    'gatsby-plugin-sass',	  
    'gatsby-plugin-offline'
  ],
}
