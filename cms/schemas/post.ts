import type { Schema } from 'sanity'

const postSchema: Schema.DocumentDefinition = {
	title: 'Post',
	name: 'posts',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: '80'
			}
		},
		{
			title: 'Tags',
			name: 'tags',
			type: 'array',
			of: [
				{
					type: 'string'
				}
			]
		},
		{
			title: 'Post content',
			name: 'content',
			type: 'portable_text'
		}
	]
}

export default postSchema
