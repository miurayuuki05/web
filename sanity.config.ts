import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'web-sanity',

  projectId: 'eialkh2r',
  dataset: 'production',

  plugins: [deskTool()],
  basePath: "/admin",
  schema: {
    types: schemaTypes,
  },
})
