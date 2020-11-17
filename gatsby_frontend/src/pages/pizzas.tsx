import React from 'react'
import { graphql } from 'gatsby'

import PizzaList from '../components/PizzaList'
import ToppingsFilter from '../components/ToppingFilter'
import SEO from '../components/SEO'

const PizzasPage = ({ data, pageContext }) => {
    const pizzas = data.pizzas.nodes

    return (
        <>
            <SEO title={
                pageContext.topping
                ? `Pizzas with $pageContext.topping`
                : `All Pizzas`
            }/>
            <ToppingsFilter activeTopping={pageContext.topping}/>
            <PizzaList pizzas={pizzas} />
        </>
    )
}

export default PizzasPage


//    to filter via Regex: type of $toppinRegex: String, not [String]:       
//                         ====                  ======
// export const query = graphql`
//     query($toppingRegex: String) {
//         pizzas: allSanityPizza(            
//             filter: {toppings: { elemMatch: { name: { regex: $toppingRegex } } } }
//         ) {
//             nodes {
//                 ...


export const query = graphql`
    query($topping: [String]) {
        pizzas: allSanityPizza(      
            filter: {toppings: { elemMatch: { name: { in: $topping } } } }
        ) {
            nodes {
                name
                id
                slug {
                    current
                }
                toppings {
                    id
                    name
                }
                image {
                    asset {
                        fixed(width: 200, height: 200) {
                            ...GatsbySanityImageFixed
                        }
                        fluid(maxWidth: 400) {
                            ...GatsbySanityImageFluid
                        }
                    }    
                }
            }
        }
    }
`