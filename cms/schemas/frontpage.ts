import { defineField, defineType } from "sanity"

const frontpageSchema = defineType({
    name: 'whoami',
    title: 'Frontpage Introduction',
    type: 'document',
    fields: [
        defineField({ name: 'role', type: 'string', title: 'Role' }),
        defineField({
            name: 'about_me',
            type: 'portable_text',
            title: 'About me'
        }),
        defineField({
            name: 'resume',
            type: 'file',
            title: 'Resume'
        })
    ]
})
export default frontpageSchema
