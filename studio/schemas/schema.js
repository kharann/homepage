// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import siteSettings from './documents/siteSettings'
import education from './documents/education'
import experiences from './documents/experiences'
import personal_info from './documents/personal_info'

export default createSchema({
  name: 'blog',
  types: schemaTypes.concat([siteSettings, education, personal_info, experiences])
})
