import React from 'react'
import { ItemsGrid, ItemStyles } from '../styles/Grids'
import pizzaLoader from '../assets/images/pizza-loader.gif'
import personLoader from '../assets/images/person-loader.gif'

export function PizzaLoadingGrid({count}) {
    return (
        <>
            <p>Special Slices</p>
            <ItemsGrid>
                {Array.from(
                    { length: count }, 
                    (_, i) => (
                        <ItemStyles key={i}>
                            <p>
                                <span className="mark"> Loading ...</span>
                            </p>
                            <img
                                    src={pizzaLoader}
                                    className="loading"
                                    alt="loading"
                                    width="400"
                                    height="300"
                            /> 
                        </ItemStyles>
                    )
                )}
            </ItemsGrid>
        </>
    )
}

export function PersonLoadingGrid({count}) {
    return (
        <>
            <p>Currently Slicing</p>
            <ItemsGrid>
                {Array.from(
                    { length: count }, 
                    (_, i) => (
                        <ItemStyles key={i}>
                            <p>
                                <span className="mark"> Loading ...</span>
                            </p>
                            <img
                                    src={personLoader}
                                    className="loading"
                                    alt="loading"
                                    width="400"
                                    height="300"
                            /> 
                        </ItemStyles>
                    )
                )}
            </ItemsGrid>
        </>
    )
}