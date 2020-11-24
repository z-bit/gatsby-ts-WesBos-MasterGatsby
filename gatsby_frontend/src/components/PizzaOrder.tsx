import React from 'react'
import Img from 'gatsby-image'
import MenuItemStyles from '../styles/MenuItemStyles'
import calculatePizzaPrice  from '../utils/calulatePizzaPrice'

export default function PizzaOrder({
    order,
    pizzas,
    removeFromOrder
}) {
    return (
        <>
           {order.map((item, index) => {
               const pizza = pizzas.find(pizza => pizza.id === item.id)
               return (
                   <MenuItemStyles key={pizza.id}>
                        <Img fluid={pizza.image.asset.fluid} />
                        <h2>{pizza.name}, {item.size}</h2>
                        <p>{calculatePizzaPrice(pizza.price, item.size, true)}</p>  
                        <button
                            type="button" className="remove"
                            title={`Remove ${pizza.name} (${item.size}) from Order`}
                            onClick={() => removeFromOrder(index)}
                        >&times;</button>
                   </MenuItemStyles>
               )
           })}
        </>
    )
} 