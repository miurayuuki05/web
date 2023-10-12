import {defineField, defineType} from 'sanity'

export default defineType({
    name : 'projects',
    title : 'Projects',
    type : 'document',
    fields : [
        defineField({
            name : 'title',
            title : 'Title' ,
            type : 'string',
        }),
        defineField({
            name : 'image',
            title : 'Image',
            type : 'image',
            options : {
                hotspot : true,
            },
        }),
        defineField({
            name : 'link',
            title : 'Link',
            type : 'url',
        }),
    ],
})