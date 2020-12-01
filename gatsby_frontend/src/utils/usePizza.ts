import { useState, useContext  } from 'react'
import { Order, OrderContext } from '../components/OrderContext'
import attachPizzasToEmail from './attachPizzasToEmail'
import calculateOrderTotal from './calculateOrderTotal'

export default function usePizza({ pizzas, values }) {

    const {order, setOrder} = useContext(OrderContext)
    const [error, setError] = useState<string>()
    const [loading, setLoading] = useState<boolean>()
    const [message, setMessage] = useState<string>()

    const addToOrder = (orderedPizza: Order) => setOrder([...order, orderedPizza])

    const removeFromOrder = (index: number) => setOrder([
        ...order.slice(0, index),
        ...order.slice(index + 1)
    ])

    async function submitOrder(e: React.FormEvent) {
        
        e.preventDefault()

        setLoading(true)
        setError(null)
        setMessage(null)

        const body = {
            order: attachPizzasToEmail(order, pizzas),
            total: calculateOrderTotal(order, pizzas, true),
            name: values.name,
            email: values.email,
            mapleSyrup: values.mapleSyrup,
        }
   
        const url = `${process.env.GATSBY_SERVERLESS_BASE}/placeOrder`
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
 
        const text = JSON.parse(await res.text())
    
        if(res.status >= 400 && res.status < 600) {
            setLoading(false)
            setError(text.message)
        } else {
            setLoading(false)
            setMessage('Order received! Come on down for your pizza(s).')
        }


    }

    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
        submitOrder,
    }
}