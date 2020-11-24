import React from 'react'
import  { Link } from 'gatsby' 
import Img from 'gatsby-image'
import styled from 'styled-components'

export default function PizzaItem({pizza}) {
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


const PizzaItemStyles = styled.div`
    display: grid;
    /*  @supports not (grid-template-rows: subgrid) {
            --rows: grid-template-rows: auto auto 1fr;
        } 
    there is something wrong in these lines
    */
    grid-template-rows: var(--rows, subgrid); /* row sizing defined in PiizListStyles! */
    grid-row: span 3;
    gap: 1rem;
    h2, p {
        margin: 1rem;
    }
`