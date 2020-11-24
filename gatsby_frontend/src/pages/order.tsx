import React from 'react'
import { graphql } from'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import OrderFormStyles from '../styles/OrderFormStyles'
import MenuItemStyles from '../styles/MenuItemStyles'
import useForm from '../utils/useForm' // custom hook
import calculatePizzaPrice, { Size } from '../utils/calulatePizzaPrice'
import formatMoney from '../utils/formatMoney'
import calculateOrderTotal from '../utils/calculateOrderTotal'
import usePizza from '../utils/usePizza'
import PizzaOrder from '../components/PizzaOrder'

const OrderPage = ({ data }) => {
    const { values, updateValue} = useForm({
        name: '', // default values
        email: '',
    })

    const pizzas = data.pizzas.nodes
    
    const { order, addToOrder, removeFromOrder } = usePizza({
        pizzas, 
        inputs: values 
    })
    
    return (
        <>
            <SEO title="Order a Pizza" />
            <OrderFormStyles>
                <fieldset>
                    <legend>Your Info</legend>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={values.name}
                        onChange={updateValue}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email}
                        onChange={updateValue}    
                    />
                </fieldset>
                <fieldset className="menu">
                    <legend>Menu</legend>
                    {pizzas.map((pizza) => (
                        <MenuItemStyles key={pizza.id}>
                            <Img 
                                alt={pizza.name}
                                fluid={pizza.image.asset.fluid} />
                            <div>
                                <h2>{pizza.name}</h2>
                            </div>
                            <div>
                                {(['S', 'M', 'L']).map( (size: Size) =>(
                                    <button key={size + pizza.id} type="button" onClick={() => addToOrder({ id: pizza.id, size })}>
                                        {`${size} ${calculatePizzaPrice(pizza.price, size, true)}`}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    ))}
                </fieldset>
                <fieldset className="order">
                    <legend>Order</legend>
                    <PizzaOrder 
                        order={order}
                        pizzas={pizzas}
                        removeFromOrder={removeFromOrder}
                    />
                </fieldset>
                <fieldset>
                    <h3>Your Total is {calculateOrderTotal(order, pizzas)}</h3>
                    <button type="submit">Order Ahead</button>
                </fieldset>
            </OrderFormStyles>
        </>
    )
}
export default OrderPage

export const query = graphql`
    query {
        pizzas: allSanityPizza {
            nodes {
                name
                id
                slug {
                    current
                }
                price
                image {
                    asset {
                        fluid(maxWidth: 100) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`