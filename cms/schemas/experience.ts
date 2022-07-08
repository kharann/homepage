import { Schema } from 'sanity'

const experienceSchema: Schema.DocumentDefinition = {
	title: 'Experiences',
	name: 'experience',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Type',
			name: 'type',
			type: 'string',
			options: {
				list: [
					{ title: 'Work', value: 'work' },
					{ title: 'Volunteering', value: 'volunteer' },
					{ title: 'Academic', value: 'academic' },
					{ title: 'Other', value: 'other' }
				], // <-- predefined values
				layout: 'radio' // <-- defaults to 'dropdown'
			},
			initialValue: 'work'
		},
		{
			title: 'Start',
			name: 'start',
			type: 'date',
			validation: (Rule) => Rule.required()
		},
		{
			title: 'End',
			name: 'end',
			type: 'date',
			hidden: ({ value, parent }) => !value && parent?.current_position,
			initialValue: false
		},
		{
			title: 'Current position',
			name: 'current_position',
			type: 'boolean'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'text',
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Hidden',
			name: 'hidden',
			type: 'boolean',
			initialValue: true
		}
	]
}

export default experienceSchema
