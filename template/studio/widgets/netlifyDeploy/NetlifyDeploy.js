import {format} from 'date-fns'
import React from 'react'
import CogIcon from 'part:@sanity/base/cog-icon'
import AnchorButton from 'part:@sanity/components/buttons/anchor'
import Button from 'part:@sanity/components/buttons/default'
import Dialog from 'part:@sanity/components/dialogs/default'

import styles from './NetlifyDeploy.css'

function formatDate(t) {
  return format(t, 'hh.mm A')
}

function ucfirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

function SiteItem(props) {
  return (
    <div className={styles.item}>
      {props.data && (
        <>
          <div className={styles.itemPreview}>
            <img src={props.data.screenshot_url} />
          </div>
          <div className={styles.itemText}>
            <div className={styles.itemTitle}>{props.name}</div>
            <div className={styles.itemSubtitle}>
              {ucfirst(props.data.status)} &middot; Last deployed{' '}
              {formatDate(props.data.published_deploy.deploy_time)}
            </div>
          </div>
          <div>
            <Button onClick={props.onDeploy}>Deploy</Button>
          </div>
        </>
      )}
      {props.error && (
        <>
          <div className={styles.itemPreview} />
          <div className={styles.itemText}>
            <div className={styles.itemTitle}>{props.name}</div>
            <div className={styles.itemSubtitle}>Error</div>
          </div>
          <div>
            <Button disabled>Deploy</Button>
          </div>
        </>
      )}
    </div>
  )
}

function NetlifyDeploy(props) {
  const netlifySitesUrl = 'https://app.netlify.com/account/sites'
  const isLoading = false

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>Netlify sites</h2>
        {/*<div className={styles.actions}>
          <button
            className={styles.actionButton}
            type="button"
            onClick={props.onOpenSettingsDialog}
          >
            <CogIcon />
          </button>
        </div>*/}
      </header>

      <div className={styles.content}>
        {props.sites.map(site => (
          <SiteItem key={site.id} {...site} onDeploy={() => props.onDeploy(site.id)} />
        ))}

        {props.showSettingsDialog && (
          <Dialog
            onClose={props.onCloseSettingsDialog}
            onClickOutside={props.onCloseSettingsDialog}
          >
            Settings dialog
          </Dialog>
        )}
      </div>

      <div className={styles.buttonContainer}>
        <AnchorButton
          disabled={isLoading}
          href={isLoading ? undefined : netlifySitesUrl}
          bleed
          color="primary"
          kind="simple"
        >
          Manage sites at Netlify
        </AnchorButton>
      </div>
    </div>
  )
}

export default NetlifyDeploy
