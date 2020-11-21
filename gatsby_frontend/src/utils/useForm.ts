// custom hook
import { useState } from 'react'

const useForm = (defaults) => {
    const [values, setValues] = useState(defaults)
    const updateValue = (e: any) => {
        let { value } = e.target
        value = value.type === 'number' ? parseInt(value) : value
        setValues({
            ...values,
            [e.target.name]: value,
        })
    }
    return { values, updateValue }
     
}
export default useForm