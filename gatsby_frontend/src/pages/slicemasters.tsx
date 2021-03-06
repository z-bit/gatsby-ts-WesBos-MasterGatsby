import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components' 
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'

const SlicemastersPage = ({ data, pageContext }) => {
    const masters = data.masters.nodes
    return (
        <>
            <SEO title={`Slicemasters - Page ${pageContext.currentPage}`} />
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

/*  $skip and $pageSize are provided by gatsby-node.js,
    which extracts $pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
    in paginateSlicemasters
    in addition to these paginated /slicemasters/1..n there is a page created /slicemasters
    just because this template is in the pages folder:
    * it is fair to set $skip = 0, since we want to start at the beginning
    * I see now way (at the moment) to set $pageSize = $pageSize = parseInt(process.env.GATSBY_PAGE_SIZE)
        * one way is to set it to 999 and show all (hopefully) slicemasters in 1 page
        * I set it to 0 and change the Link from /slicemasters to /slicemasters/1
    ==> works very well!
*/
export const query = graphql`
    query($skip: Int = 0, $pageSize: Int = 0) {
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