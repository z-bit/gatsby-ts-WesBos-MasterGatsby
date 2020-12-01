import { FaJoint } from 'react-icons/fa'
import { MdStore as icon } from 'react-icons/md'
import { ObjectFlags } from 'typescript'
import Priceinput from '../components/Priceinput'

export default {
    name: 'storeSettings', 
    title: 'Settings', // visible title
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Store Name',
            type: 'string',
            description: 'Name of the store',
        },
        {
            name: 'sclicemaster',
            title: 'Slicemasters Currently Slicing',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'person' }]
            }], 
        },
        {
            name: 'hotSlices',
            title: 'Hot Slices available in the case',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'pizza' }]
            }], 
        },
    ],
   
}
