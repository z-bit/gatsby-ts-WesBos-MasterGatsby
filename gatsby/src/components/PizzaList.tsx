import React from 'react'
import PizzaItem from './PizzaItem'
import PizzaGridStyles from './PizzaListStyles'

const PizzaList = ({ pizzas }) => {
    return (
        <PizzaGridStyles>
            {pizzas.map(pizza => 
                <PizzaItem key={pizza.id} pizza={pizza} />
            
            )}
        </PizzaGridStyles>
    )
}

export default PizzaList