import React from 'react'
import BlockContent from './block-content'

import styles from './blog-post.module.css'

function BlogPost(props) {
  return (
    <article className={styles.root}>
      <h1 className={styles.headline}>{props.title}</h1>

      <BlockContent blocks={props.bodyRaw} />
    </article>
  )
}

export default BlogPost
