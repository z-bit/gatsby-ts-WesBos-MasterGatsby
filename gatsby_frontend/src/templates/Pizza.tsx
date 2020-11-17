import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PizzaStyles from './PizzaStyles'
import SEO from '../components/SEO'

export const Pizza = ({ data: { pizza } }) => {
   
    return (
        <>
            <SEO 
                title={pizza.name} 
                image={pizza.image?.asset?.fluid?.src}
            />
            <PizzaStyles>
                <Img fluid={pizza.image.asset.fluid} alt={pizza.name} />
                <div>
                <h2 className="mark">{pizza.name}</h2>

                <ul>
                    {pizza.toppings.map(topping => <li key={topping.id}>
                        {topping.name}
                        <span className="veg">
                                {topping.vegetarian ? '🌱' : ''}
                            </span> 
                    </li>)}
                </ul>
                </div>
            </PizzaStyles>
        </>
    )
}

// it's crucial to export a const named query
//                 ======               =====
// in order to get the data object as param for the function above
export const query = graphql`
    query($slug: String!) {
        pizza: sanityPizza (slug: { current: { eq: $slug }}) {
            name
            id
            image {
                asset {
                    fluid(maxWidth: 800) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            toppings {
                name
                id
                vegetarian
            }
        }
    }
`

export default Pizza