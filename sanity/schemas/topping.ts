import { FaPepperHot as icon } from 'react-icons/fa'

export default {
    name: 'topping', // computer name
    title: 'Topping', // visible title
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping Name',
            type: 'string',
            description: 'Name of the topping',
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'This topping does not contain meat.',
            options: {
                layout: 'checkbox',
            },
        },
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian',
        },
        prepare: (fields) => ({
            title: `${fields.name}  ${
                fields.vegetarian ? String.fromCodePoint(0x1f331) : ''
            }`,
            // or copy directly from emojipedia.org, like this: '🌱'
        }),
    },
}
