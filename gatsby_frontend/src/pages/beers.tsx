// import React from 'react'
// import { graphql } from 'gatsby'
// import { BeerGridStyles, SingleBeerStyles } from '../styles/BeersStyles'
// import defaultBeer from '../assets/images/defaultBeer.png'
// import SEO from '../components/SEO'

// const BeersPage = ({ data, pageContext }) => {
//     const beers = data.beers.nodes

//     return (
//     <>
//         <SEO title={`Beers we have ${beers.length} in stock`} />
//         <h2 className="center">
//             We have {beers.length} beers available. Dine in only!
//         </h2>
//         <BeerGridStyles>
//             {beers.map(beer => {
//                 const rating = Math.round(beer.rating.average)
//                 return (
//                     <SingleBeerStyles key="beer.id">
//                         <object data={beer.image}>
//                             <img height="100" src={defaultBeer} alt={beer.name} />
//                         </object>
                        
//                         <h3>{beer.name}</h3>
//                         {beer.price}
//                         <p title={`Rating ${rating} out of 5 stars`}>
//                             {`⭐`.repeat(rating)}
//                             <span style={{filter: `grayscale(100%)`}}>
//                             {`⭐`.repeat(5-rating)}
//                             </span>
//                             <span> <br/> ({beer.rating.reviews})</span>
//                         </p>
//                     </SingleBeerStyles>
//                 ) 
//             })}
//         </BeerGridStyles>
//     </>)
// }
// export default BeersPage

// export const query = graphql`
//     query {
//         beers: allBeer{
//             nodes {
//                 id
//                 name
//                 price
//                 image
//                 rating {
//                     average
//                     reviews
//                 }
//             }
//         }
//     }
// `