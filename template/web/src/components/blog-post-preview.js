import { Link } from 'gatsby'
import React from 'react'
import BlockText from './block-text'

import styles from './blog-post-preview.module.css'

function BlogPostPreview (props) {
  return (
    <Link className={styles.root} to={`/blog/${props.slug.current}`}>
      <h3 className={styles.headline}>{props.title}</h3>
      <div>
        <BlockText blocks={props.excerptRaw} />
      </div>
    </Link>
  )
}

export default BlogPostPreview
