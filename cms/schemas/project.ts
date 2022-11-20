import { defineArrayMember, defineField, defineType } from "sanity"

const projectSchema = defineType({
    name: 'project',
    title: 'Projects',
    type: 'document',
    fields: [
        defineField({ name: "title", type: "string", title: "Title", validation: (Rule) => Rule.required() }),
        defineField({ name: "description", type: "text", title: "Description" }),
        defineField({ name: "github", type: "url", title: "Github" }),
        defineField({ name: "icons", type: "array", title: "Icons", description: "Check out https://icon-sets.iconify.design", of: [defineArrayMember({ type: "string" })] }),
    ]
})
export default projectSchema
