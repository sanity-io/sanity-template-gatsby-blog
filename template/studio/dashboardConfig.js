export default {
  widgets: [
    {name: 'structure-menu'},
    {name: 'welcome'},
    {name: 'sanity-tutorials'},
    {
      name: 'project-info',
      options: {
        // Commented out until we fix spec of `deployments`
        // __experimental_before: [
        //   {
        //     name: 'netlify',
        //     options: {
        //       title: 'Netlify',
        //       sites: [
        //         <#<#deployments>#>
        //         {
        //           buildHookId: '<#<provider.buildHookId>#>',
        //           name: '<#<name>#>',
        //           siteId: '<#<provider.siteId>#>'
        //         },
        //         <#</deployments>#>
        //       ]
        //     }
        //   }
        // ],
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10}
    },
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', limit: 10, types: ['post']}
    }
  ]
}
