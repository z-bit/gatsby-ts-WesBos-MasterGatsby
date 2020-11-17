import React from 'react'
import  { Link } from 'gatsby' 
import Img from 'gatsby-image'
import PizzaItemStyles from './PizzaItemStyles'

const PizzaItem = ({pizza}) => {
    return (
        <PizzaItemStyles>
            <Link to={`/pizza/${pizza.slug.current}`} >
                <h2>
                    <span className="mark">{pizza.name}</span>
                </h2>  
                <p>{pizza.toppings.map(topping => topping.name).join(', ')}</p>  
                {/* <Img fixed={pizza.image.asset.fixed} alt={pizza.name} /> */}
                <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
            </Link>
        </PizzaItemStyles>
    )
}

export default PizzaItem 