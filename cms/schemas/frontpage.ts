import type { Schema } from 'sanity'

const frontpageSchema: Schema.DocumentDefinition = {
	name: 'whoami',
	title: 'Frontpage Introduction',
	type: 'document',
	fields: [
		{ name: 'role', type: 'string', title: 'Role' },
		{ name: 'description', type: 'text', title: 'Description' }
	]
}
export default frontpageSchema
