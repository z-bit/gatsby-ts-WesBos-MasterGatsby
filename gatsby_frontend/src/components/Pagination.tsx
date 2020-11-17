import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

type PaginationProps = {
    pageSize: number,
    totalCount: number,
    currentPage: number,
    skip: number,
    base: string,
}
const Pagination = ({
    pageSize,
    totalCount,
    currentPage,
    skip,
    base
}: PaginationProps) => { 
    pageSize = pageSize || parseInt(process.env.GATSBY_PAGE_SIZE) 
    currentPage = currentPage || 1
   
    const totalPages = Math.ceil(totalCount / pageSize)
    const prevPage = currentPage - 1
    const nextPage = currentPage + 1
    const hasPrevPage = currentPage > 1 ? true : false
    const hasNextPage = currentPage < totalPages ? true : false
   
    return (
        <PaginationStyles>
            <Link 
                disabled={!hasPrevPage}
                className="prev" to={`${base}/${prevPage}`}
            >
                &#8592; Prev 
            </Link>
            {Array.from({length: totalPages}).map((_, i) => (
                <Link 
                    className={currentPage === 1 && i === 0 ? 'current' : ''}
                    to={`${base}/${i + 1}`}>{i + 1}</Link>
            ))}
            &nbsp; {currentPage} / {totalPages} &nbsp;
            <Link 
                disabled={!hasNextPage}
                className="next" to={`${base}/${nextPage}`}
            >
                    Next &#8594; 
            </Link>
        </PaginationStyles>
    )
}

export default Pagination

const PaginationStyles = styled.div`

    display: flex;
    align-content: center;
    align-items: center;
    justify-items: center;
    text-align: center;
    border: 1px solid var(--grey);
    margin: 2rem 0;
    border-radius: 5px;
    & > * {
        padding: 1rem;
        flex: 1;
        text-decoration: none;
        &[aria-current],
        &.current {
            color: var(--red);
        }
        &[disabled] {
            pointer-events: none;
            color: var(--grey);
        }
    }
`