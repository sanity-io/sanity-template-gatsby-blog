import {Link} from 'gatsby'
import React from 'react'

import styles from './header.module.css'

const Header = ({siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <h1 style={{margin: 0}}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <nav>
        <Link to="/blog/">Blog</Link>
      </nav>
    </div>
  </div>
)

export default Header
