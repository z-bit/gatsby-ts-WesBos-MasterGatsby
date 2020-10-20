import { FaJoint } from 'react-icons/fa'
import { MdPerson as icon } from 'react-icons/md'
import { ObjectFlags } from 'typescript'

export default {
    name: 'person', // computer name
    title: 'Slicemasters', // visible title
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Tells us about this person'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 100,
            },
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
}
