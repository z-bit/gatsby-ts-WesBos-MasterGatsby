import styled from 'styled-components'

const PizzaItemStyles = styled.div`
    display: grid;
    @supports not (grid-template-rows: subgrid) {
        --rows: grid-template-rows: auto auto 1fr;
    }
    grid-template-rows: var(--rows, subgrid); /* row sizing defined in PiizListStyles! */
    grid-row: span 3;
    gap: 1rem;
    h2, p {
        margin: 1rem;
    }
`

export default PizzaItemStyles