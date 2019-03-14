import React from 'react'
import DefaultButton from 'part:@sanity/components/buttons/default'

import styles from './NetlifySitePreview.css'

const data = {
  url: '#',
  admin_url: '#'
}

const noop = () => void 0

function NetlifySitePreview(props) {
  const statusImageUrl = ''
  const {screenshot_url} = props.options
  return (
    <div className={styles.root}>
      <div className={styles.screenshot}>
        <div style={screenshot_url ? {backgroundImage: `url(${screenshot_url})`} : {}} />
      </div>
      <div className={styles.status}>
        <h4 className={styles.title}>
          {props.title} (<a href={data.url}>view</a>, <a href={data.admin_url}>admin</a>)
        </h4>
        <div>
          <img src={statusImageUrl} />
        </div>
      </div>
      {props.options.buildHookId && (
        <div className={styles.actions}>
          <DefaultButton inverted onClick={noop}>
            Deploy
          </DefaultButton>
        </div>
      )}
    </div>
  )
}

export default NetlifySitePreview
