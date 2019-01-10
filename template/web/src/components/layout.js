import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site: sanitySiteSettings(_id: { eq: "siteSettings" }) {
          title
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0
          }}
        >
          {children}

          <hr />
          <footer>
            © {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
            &amp;
            {` `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
