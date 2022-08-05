import { Schema } from 'sanity'

const position: Schema.ObjectDefinition = {
	title: 'Position',
	type: 'object',
	name: 'position',
	fields: [
		{
			name: 'role',
			type: 'string'
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
			initialValue: null
		},
		{
			title: 'Type',
			name: 'type',
			type: 'string',
			options: {
				list: [
					{ title: 'Work', value: 'work' },
					{ title: 'Volunteering', value: 'volunteer' },
					{ title: 'Other', value: 'other' }
				], // <-- predefined values
				layout: 'radio' // <-- defaults to 'dropdown'
			},
			initialValue: 'work'
		},
		{
			title: 'Description',
			name: 'description',
			type: 'portable_text'
		}
	]
}

const experienceSchema: Schema.DocumentDefinition = {
	title: 'Experience',
	name: 'experience',
	type: 'document',
	fields: [
		{
			title: 'Company short name',
			name: 'company',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			title: "Company full name",
			name: "company_full_name",
			type: 'string',
		},
		{
			title: 'Company page',
			name: 'url',
			type: 'url'
		},
		{
			title: 'Positions',
			name: 'positions',
			type: 'array',
			of: [position]
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
