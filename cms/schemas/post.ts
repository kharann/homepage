import { defineField, defineType } from 'sanity'

const postSchema = defineType({
  title: 'Post',
  name: 'posts',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    }),
    defineField({
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ]
    }),
    defineField({
      title: 'Post content',
      name: 'content',
      type: 'portable_text'
    })
  ]
})

export default postSchema