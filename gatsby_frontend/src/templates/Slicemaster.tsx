import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/SEO'

export const Slicemaster = ({ data: { master }}) => {
    return (
        <>
            <SEO title={master.name} />
            <div className="center">
                <Img fluid={master.image.asset.fluid} alt={master.name} />
                <br />
                <h1 className="mark">{master.name}</h1>
                <p>{master.description}</p>
            </div>
        </>
    )
}

// it's crucial to export a const named query
//                 ======               =====
// in order to get the data object as param for the function above
// 
// $slug is provided implicitly by pageContext 
export const query = graphql`
    query($slug: String!) { 
        master: sanityPerson (slug: { current: { eq: $slug }}) {
            name
            slug {
                current
            }
            description
            image {
                asset {
                    fluid(maxWidth: 800, maxHeight: 600) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
            
        }
    }
`
export default Slicemaster