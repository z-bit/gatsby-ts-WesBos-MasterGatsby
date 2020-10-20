import PizzaGridStyles from "../components/PizzaListStyles";

import styled from 'styled-components'

export const BeerGridStyles = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const SingleBeerStyles = styled.div`
    max-width: 200px;
    border: 1px solid var(--grey);
    padding: 2rem;
    text-align: center;
    align-items: center;
    img, object {
        width: 200px;
        height: 200px;
        object-fit: contain;
       
        display: grid;
        align-items: center;
        font-size: 12px;
    }
`