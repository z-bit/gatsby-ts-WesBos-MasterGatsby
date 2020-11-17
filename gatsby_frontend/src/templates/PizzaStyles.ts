import styled from 'styled-components'

const PizzaStyles = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    .veg {
        padding-left: 1rem;
    }
`

export default PizzaStyles