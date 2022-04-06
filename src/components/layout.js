import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import '../assets/scss/main.scss'
import Helmet from 'react-helmet'

const Layout = ({ children, location }) => {

  let content;

  if (location && location.pathname === '/') {
    content = (
      <div>
        {children}
      </div>
    )
  } else {
    content = (
      <div id="wrapper" className="page">
        <div>
          {children}
        </div>
      </div>
    )
  }

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              description 
              image
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: data.site.siteMetadata.description },
              { property: 'og:url', content: 'https://mattshaverwebcreator.com'},
              { property: 'og:type', content: 'website'},
              { property: 'og:title', content: "Matt Shaver's Portfolio"},
              { property: 'og:description', content: data.site.siteMetadata.description },
              { property: 'og:image', content: 'https://scontent.fbeg4-1.fna.fbcdn.net/v/t1.0-9/s960x960/71803732_952924578395500_104562138462289920_o.jpg?_nc_cat=105&_nc_sid=dd9801&_nc_ohc=5s-PsDsWpmMAX94z7dH&_nc_ht=scontent.fbeg4-1.fna&_nc_tp=7&oh=3d2f74ed3190afe6d4da390c2d15289f&oe=5ED01DE3'}
            ]}
          >
          </Helmet>
          {content}
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout