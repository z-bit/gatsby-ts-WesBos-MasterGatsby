import React from 'react'
import { ItemsGrid, ItemStyles } from '../styles/Grids'

export default function ItemGrid({ items }) {
    return (
        <ItemsGrid>
           {items.map(item => (
               <ItemStyles>
                   <p>
                        <span className="mark">{item.name}</span>  
                   </p>
                   <img 
                        width="400"
                        height="300"
                        src={`${item.image.asset.url}?w=400&h=300&fit=crop`} 
                        alt={item.name}
                        style={{
                            background: `url(${item.image.asset.metadata.lqip})`,
                            backgroundSize: 'cover',
                        }}
                    />
               </ItemStyles>
           ))}
        </ItemsGrid>
    )
}