import React from 'react'
import AnchorButton from 'part:@sanity/components/buttons/anchor'

import styles from './WelcomeWidget.css'

function WelcomeWidget() {
  return (
    <div className={styles.root}>
      <div className={styles.media}>
        <div />
      </div>
      <div className={styles.content}>
        <div className={styles.illustration}>
          <div />
        </div>
        <h2>Welcome to Sanity</h2>
        <p>
          Well done, <strong>Marius</strong>! You’ve just launched Sanity Studio and connected to a
          data project in Sanity’s cloud.
        </p>
        <div>
          <AnchorButton color="primary" href="https://slack.sanity.io/" target="_blank">
            Join the community
          </AnchorButton>
        </div>
      </div>
    </div>
  )
}

export default WelcomeWidget
