import styled from 'styled-components'

const ToppingFilterStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 4rem;
    a {
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 0 1rem;
        align-items: center;
        padding: 5px;
        background: var(--grey);
        border-radius: 8px;
        .count {
            background: white;
            padding: 2px 5px;
        }
        &[aria-current='page'] {
            background: var(--yellow);
        }
    }
`

export default ToppingFilterStyles