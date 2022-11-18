import { defineArrayMember, defineField, defineType } from 'sanity'

export const position = defineType({
    name: "position",
    title: "Position",
    type: "object",
    fields: [
        defineField({
            name: 'role',
            type: 'string'
        }),
        defineField({
            title: 'Start',
            name: 'start',
            type: 'date',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: 'End',
            name: 'end',
            type: 'date',
            initialValue: ""
        }),
        defineField({
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
        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'portable_text'
        })
    ]
})

const experienceSchema = defineType({
    title: 'Experience',
    name: 'experience',
    type: 'document',
    fields: [
        defineField({
            title: 'Company short name',
            name: 'company',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title: "Company full name",
            name: "company_full_name",
            type: 'string',
        }),
        defineField({
            title: 'Company page',
            name: 'url',
            type: 'url'
        }),
        defineField({
            title: 'Positions',
            name: 'positions',
            type: 'array',
            of: [defineArrayMember(position)]
        }),
        defineField({
            title: 'Hidden',
            name: 'hidden',
            type: 'boolean',
            initialValue: true
        })
    ]
})
export default experienceSchema


