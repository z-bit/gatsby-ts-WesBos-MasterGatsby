import reactDom from "react-dom"
import { useState } from 'react'
import { Size } from './calulatePizzaPrice'

type OrderedPizza = {
    id: string
    size: Size
}
export default function usePizza({ pizzas, inputs }) {

    const [order, setOrder] = useState([])

    const addToOrder = (orderedPizza: OrderedPizza) => setOrder([...order, orderedPizza])

    const removeFromOrder = (index) => setOrder([
        ...order.slice(0, index),
        ...order.slice(index + 1)
    ])

    return {
        order,
        addToOrder,
        removeFromOrder
    }
}