import React from 'react'
import  { Link } from 'gatsby' 
import Img from 'gatsby-image'
import BeerItemStyles from './BeerItemStyles'
import noBeer from '../assets/images/Beer-missing.jpg'

const BeerItem = ({ beer }) => {
    const showDefault = () => {beer.image = noBeer } 
    return (
        <BeerItemStyles>
            <Link to={`/beer/${beer.name}`} >
                <h2>
                    <span className="mark">{beer.name}</span>
                </h2>  
                <img 
                    src={beer.image} 
                    onError="showDefault()"
                    alt={`no picture for ${beer.name}`} />
            </Link>
        </BeerItemStyles>
    )
}

export default BeerItem 