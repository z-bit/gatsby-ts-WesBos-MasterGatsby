import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components' 
import Pagination from '../components/Pagination'

const Grid = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`
const Tile = styled.div`
    a { 
        text-decoration: none;
    }
    .gatsby-image-wrapper {
        height: 400px;
    }
    h2{
        transform: rotate(-2deg);
        text-align: center;
        font-size: 4rem;
        margin-bottom: -2rem;
        position: relative;
        z-index: 2;
    }
    .description {
        background: var(--yellow);
        padding: 1rem;
        margin: 2rem;
        margin-top: -6rem;
        position: relative;
        z-index: 2;
        position: relative;
        transform: rotate(-2deg);
        text-align: center;
    }
`
const SlicemastersPage = ({ data, pageContext }) => {
    const masters = data.masters.nodes
    
    return (
    
        <>
            <Pagination 
                pageSize={pageContext.pageSize} 
                totalCount={data.masters.totalCount} 
                currentPage={pageContext.currentPage}
                skip={pageContext.skip}
                base='/slicemasters'
            />
            <Grid>
                {masters.map(master => {
                    return (
                        <Tile key={master.id}>
                            <Link to={`/slicemaster/${master.slug.current}`}> 
                                <h2>
                                    <span className="mark">
                                        {master.name}
                                    </span>
                                </h2>
                                <Img fluid={master.image.asset.fluid} />
                                <p className="description">{master.description}</p>
                            </Link>
                        </Tile>
                    )
                })}
            </Grid>
        </>
    )
}

export default SlicemastersPage

export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 4) {
        masters: allSanityPerson(skip: $skip, limit: $pageSize) {
            totalCount
            nodes {
                name
                id
                slug {
                    current
                }
                description
                image {
                    asset {
                        fluid(maxWidth: 410) {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
            }
        }
    }
`
