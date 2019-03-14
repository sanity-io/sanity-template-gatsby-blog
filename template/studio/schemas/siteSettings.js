export default {
  type: 'document',
  name: 'siteSettings',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    }
  ]
}
