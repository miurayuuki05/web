import {defineField, defineType} from 'sanity'

export default defineType({
    name: "blog",
    title: "Blog",
    type: "document",
    fields:  [
      defineField({
        title: "Project Name",
        name: "projectName",
        type: "string"
      }),
      
      defineField({
        title: "Project Type",
        name: "projectType",
        type: "string"
      }),
      defineField({
        title: "Slug",
        name: "slug",
        type: "slug"
      }),
      defineField({
        title: "Description",
        name: "description",
        type: "string"
      }),
    ]
  })