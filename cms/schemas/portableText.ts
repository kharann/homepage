import { defineType, defineArrayMember } from 'sanity'

export default defineType({
  title: 'Portable Text',
  name: 'portable_text',
  type: 'array',
  of: [
    defineArrayMember({
      title: 'Block',
      type: 'block',
    }),
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
    defineArrayMember({
      title: "Code Block",
      name: "code_block",
      type: "code",
      options: {
        theme: "terminal",
        languageAlternatives: [
          { title: "CSS", value: "css" },
          { title: "Go", value: "golang" },
          { title: "HTML", value: "html" },
          { title: "Java", value: "java" },
          { title: "JavaScript", value: "javascript" },
          { title: "JSON", value: "json" },
          { title: "JSX", value: "jsx" },
          { title: "Markdown", value: "markdown" },
          { title: "Plain text", value: "text" },
          { title: "Python", value: "python" },
          { title: "sh", value: "sh" },
          { title: "TSX", value: "tsx" },
          { title: "TypeScript", value: "typescript" },
          { title: "YAML", value: "yaml" },
          { title: "Svelte", value: "svelte" },
        ],
      },
    }),
  ],
})
