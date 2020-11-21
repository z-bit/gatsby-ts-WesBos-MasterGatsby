import React from 'react'
import { graphql } from'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/SEO'
import { OrderStyledForm, MenuItemStyles } from '../styles/OrderStyles'
import useForm from '../utils/useForm' // custom hook
import { Size, calculatePizzaPrice } from '../utils/calulatePizzaPrice'
import { usePizza } from '../utils/usePizza'

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
            <OrderStyledForm>
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
                                    <button type="button" onClick={() => addToOrder({ id: pizza.id, size })}>
                                        {`${size} ${calculatePizzaPrice(pizza.price, size)}`}
                                    </button>
                                ))}
                            </div>
                        </MenuItemStyles>
                    ))}
                </fieldset>
                <fieldset className="order">
                    <legend>Order</legend>
                </fieldset>
            </OrderStyledForm>
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