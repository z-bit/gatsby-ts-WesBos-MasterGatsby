import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import ToppingFilterStyles from './ToppingFilterStyles'

const getPizzaCount = (pizzas) => {

    const pizzaCount = pizzas
        .map(pizza => pizza.toppings)
        .flat()
        .reduce((acc, topping) => {
            
            if (acc[topping.id]) {
                acc[topping.id].count += 1
            } else {
                acc[topping.id] = {
                    id: topping.id,
                    name: topping.name,
                    count: 1,
                }
            }
            return acc
        }, {})
    
    type Count = {
        name: string
        count: number
    }

    const compareCount = (top1: Count, top2: Count) => {
        if (top1.count > top2.count) { return -1 }
        if (top1.count > top2.count) { return 1}
        return 0
    }
 
    const values = Object.keys(pizzaCount).map(key => pizzaCount[key])
    const sortedCount = values.sort(compareCount)
    
    return sortedCount 
}

const ToppingsFilter = ({ activeTopping }) => {
    // get list of all toppings
    // get list of all pizzas with their toppings
    const { toppings, pizzas } = useStaticQuery(graphql`
        query {
            toppings: allSanityTopping {
                nodes {
              	    name
              	    id
              	    vegetarian
                }
               
            }
            pizzas: allSanityPizza {
                nodes {
                    toppings {
                        name
                        id
                    }
                }
            }
        }
    `)
    // first toppings destructures the data object
    // second toppings serves as alias for allSanityTopping
    //console.clear
    //console.log({toppings, pizzas})
    
    // count how many pizzas use each topping = pizzaCount
    const topCounts = getPizzaCount(pizzas.nodes) 

    // loop over the list of topping, displat name and pizzaCount    
    // link it up ... 
    return (
        <ToppingFilterStyles>
            <Link to="/pizzas">
                <span className="name">All</span>
                <span className="count">{pizzas.nodes.length}</span>
            </Link> 
            {topCounts.map((topCount) => (
                <Link 
                    to={`/topping/${topCount.name}`} 
                    key={topCount.id}
                    
                >
                    <span className="name">{topCount.name}</span>
                    <span className="count">{topCount.count}</span>
                </Link>
            ))}
        </ToppingFilterStyles>
    )
}

export default ToppingsFilter

