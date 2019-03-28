import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'

import styles from './author-list.module.css'

function ucfirst (str) {
  return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`
}

function AuthorList ({ items, title }) {
  return (
    <div className={styles.root}>
      <h2 className={styles.headline}>{title}</h2>
      <ul className={styles.list}>
        {items.map(({author, _key}) => (
          <li key={_key} className={styles.listItem}>
            <div>
              <div className={styles.avatar}>
                {author &&
                  author.image &&
                  author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit('crop')
                        .url()}
                      alt=""
                    />
                  )}
              </div>
            </div>
            <div>
              <div>
                <strong>{(author && author.name) || <em>Missing</em>}</strong>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AuthorList
