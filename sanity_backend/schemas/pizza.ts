import { FaJoint } from 'react-icons/fa'
import { MdLocalPizza as icon } from 'react-icons/md'
import { ObjectFlags } from 'typescript'
import Priceinput from '../components/Priceinput'

export default {
    name: 'pizza', // computer name
    title: 'Pizzas', // visible title
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Pizza Name',
            type: 'string',
            description: 'Name of the pizza',
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
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the pizza in cent',
            validation: (Rule) => Rule.min(1000).max(5000),
            inputComponent: Priceinput,
        },
        {
            name: 'toppings',
            title: 'Toppings',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'topping' }] }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
            topping0: 'toppings.0.name',
            topping1: 'toppings.1.name',
            topping2: 'toppings.2.name',
            topping3: 'toppings.3.name',
        },
        prepare: ({ title, media, ...toppings }) => {
            // 1. Filter undefined toppics out
            const tops = Object.keys(toppings)
                .map(key => toppings[key])
                .filter(Boolean)
                .join(', ')
            // 2. Return the preview object for the pizza
            return {
                title,
                media,
                subtitle: tops,
            }
        },
    },
}
