import {NetlifySitePreview} from './plugins/dashboard-widget-project-info-netlify-addons/src'

export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'welcome'},
    {name: 'sanity-tutorials'},
    // {name: 'project-info'},
    {
      name: 'dev/project-info',
      options: {
        disableBuiltinGroups: ['Apps'],
        items: [
          {
            group: 'Netlify sites',
            title: 'Studio',
            value: 'https://test-sanity.netlify.com',
            component: NetlifySitePreview,
            options: {
              buildHookId: 'foo',
              siteId: 'bar',
              screenshot_url:
                'https://github.com/sanity-io/sanity-template-gatsby-blog/blob/dashboard/assets/studio-00.png?raw=true'
            }
          },
          {
            group: 'Netlify sites',
            title: 'Frontend',
            value: 'https://test-sanity.netlify.com',
            component: NetlifySitePreview,
            options: {
              buildHookId: 'foo',
              siteId: 'bar',
              screenshot_url:
                'https://github.com/sanity-io/sanity-template-gatsby-blog/blob/dashboard/assets/preview-00.jpg?raw=true'
            }
          },
          {
            group: 'Code',
            title: 'Repo',
            value: 'https://github.com/<#<repository.owner>#>/<#<repository.name>#>'
          }
        ]
      }
    },
    // {
    //   name: 'netlify',
    //   options: {
    //     title: 'Netlify',
    //     sites: [
    //       <#<#deployments>#>
    //       {
    //         buildHookId: '<#<provider.buildHookId>#>',
    //         name: '<#<name>#>',
    //         siteId: '<#<provider.siteId>#>'
    //       },
    //       <#</deployments>#>
    //     ]
    //   }
    // },
    {name: 'project-users'},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10}
    },
    // {name: 'document-list', options: {title: 'Recently created'}},
    // {name: 'document-list'},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', limit: 10, types: ['post']}
    }
  ]
}
