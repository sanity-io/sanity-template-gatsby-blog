import config from 'config:sanity'
import sanityClient from 'part:@sanity/base/client'
import {combineLatest, from} from 'rxjs'
import {catchError, map} from 'rxjs/operators'

const DATASET = config.api.dataset
const PROJECT_ID = config.api.projectId

// Fetch project
const project$ = from(sanityClient.projects.getById(PROJECT_ID))

// Ping assumed graphql endpoint
const hasGraphQLEndpoint = from(
  sanityClient.request({
    method: 'HEAD',
    uri: `/graphql/${DATASET}/default`
  })
).pipe(
  map(() => true),
  catchError(_ => false)
)

export function toPropsStream (props$) {
  return combineLatest(props$, project$, hasGraphQLEndpoint).pipe(
    map(([props, project, hasGraphQLEndpoint]) => ({
      ...props,
      project,
      groups: buildGroups(props, project, hasGraphQLEndpoint)
    }))
  )
}

function itemFromOptions (itemOptions) {
  return {
    title: itemOptions.title || null,
    value: itemOptions.value,
    options: itemOptions.options || {},
    component: itemOptions.component || null
  }
}

function buildGroups (props, project, hasGraphQLEndpoint) {
  const groups = [
    {
      label: 'Sanity project',
      items: [
        {
          title: 'Name',
          value: project.displayName
        },
        {
          title: 'Project ID',
          value: PROJECT_ID
        },
        {
          title: 'Dataset',
          value: DATASET
        }
      ]
    },
    {
      label: 'APIs',
      items: [
        {
          title: 'GROQ',
          value: `https://${PROJECT_ID}.api.sanity.io/v1/groq/${DATASET}`
        },
        {
          title: 'GraphQL',
          value: hasGraphQLEndpoint
            ? `https://${PROJECT_ID}.api.sanity.io/v1/graphql/${DATASET}/default`
            : 'n/a'
        }
      ]
    },
    {
      label: 'Apps',
      items: [
        {
          title: 'Studio',
          value: `https://${project.studioHost}.sanity.studio`
        }
      ]
    }
  ]

  // Extend groups with user's options
  if (props.items) {
    props.items.forEach(item => {
      const group = groups.find(g => g.label === item.group)

      if (group) {
        // Append to group
        group.items = group.items.concat([itemFromOptions(item)])
      } else {
        // Insert group and item
        groups.push({
          label: item.group,
          items: [itemFromOptions(item)]
        })
      }
    })
  }

  return groups
}
