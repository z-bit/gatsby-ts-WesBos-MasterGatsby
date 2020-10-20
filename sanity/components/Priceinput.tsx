import React from 'react'
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event'

const patch = (value) => PatchEvent.from(value === '' ? unset() : set(Number(value)))
const formatMoney = Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP'
}).format

const Priceinput = ({type, value, onChange, inputComponent}) => {
     
    return (
        <>
            <h2>{type.title} {value ? formatMoney(value/100) : ''}</h2>
            <p>{type.description}</p>
            <input 
                type={type.name} 
                value={value} 
                onChange={e  => onChange(patch(e.target.value))} 
                ref = {inputComponent}
            />
        </>
    )
}

Priceinput.focus = () => this._inputElement.focus()

export default Priceinput