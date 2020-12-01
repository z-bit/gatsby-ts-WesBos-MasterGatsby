import React, { useState } from 'react'

export type Size = 'S' | 'M' | 'L'

export type Order = {
    id: string
    size: Size
}

export type OrderContextType = {
    order: Order[]
    setOrder: (value: Order[]) => void
}

export const OrderContext = React.createContext<OrderContextType| undefined>(undefined)

type Props = { 
    children: React.ReactNode 
}
export const OrderProvider = ({ children }: Props) => {
    
    const [order, setOrder] = useState<Order[]>([])

    // ???
    React.useEffect(() => {
        const currentOrder = []
        setOrder(currentOrder)
    }, [])
    
    //todo value typing problem (OrderContext is working though)
    return (
        <OrderContext.Provider value={{order, setOrder}}>
            {children}
        </OrderContext.Provider>
    )
}
