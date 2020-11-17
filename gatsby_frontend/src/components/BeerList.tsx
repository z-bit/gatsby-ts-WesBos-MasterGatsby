import React from 'react'
import BeerItem from './BeerItem'
import BeerListStyles from './BeerListStyles'

const BeerList = ({ beers }) => {
    return (
        <BeerListStyles>
            {beers.map(beer => 
                <BeerItem key={beer.id} beer={beer} />
            
            )}
        </BeerListStyles>
    )
}

export default BeerList