import React from 'react'

import styles from './ProjectInfoWidget.css'

function GroupItem(props) {
  if (props.component) {
    return React.createElement(props.component, props)
  }

  return (
    <div className={styles.groupItem}>
      <div>{props.title}</div>
      <div>{props.value}</div>
    </div>
  )
}

function ProjectInfoWidget(props) {
  const {groups} = props

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h2 className={styles.title}>{props.title || 'Project info'}</h2>
      </div>
      <div className={styles.content}>
        {groups.map((group, idx) => (
          <React.Fragment key={String(idx)}>
            <div className={styles.groupHeader}>{group.label}</div>
            {group.items.map((item, itemIdx) => (
              <GroupItem key={String(itemIdx)} {...item} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ProjectInfoWidget
