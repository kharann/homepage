import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { codeInput } from "@sanity/code-input"
import { schemaTypes } from './schemas'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'default',
  title: 'homepage',

  projectId: 'r4l4xmqo',
  dataset: 'production',

  plugins: [deskTool(), codeInput(), markdownSchema(),],

  schema: {
    types: schemaTypes,
  },
})
