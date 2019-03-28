export default {
  name: 'authorReference',
  type: 'object',
  title: 'Author reference',
  fields: [
    {
      type: 'reference',
      name: 'author',
      to: [
        {
          type: 'author'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'author.name',
      media: 'author.image.asset'
    }
  }
}
