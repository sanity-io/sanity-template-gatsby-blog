import BlockContent from '@sanity/block-content-to-react'
import React from 'react'

import styles from './project.module.css'

function Project (props) {
  return (
    <article className={styles.root}>
      <h1 className={styles.headline}>{props.title}</h1>

      <BlockContent blocks={props.bodyRaw} />
    </article>
  )
}

export default Project
