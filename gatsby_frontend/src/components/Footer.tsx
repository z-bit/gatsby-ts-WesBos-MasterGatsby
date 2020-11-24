import React from 'react'
import { CompositeDisposable } from 'rx-core'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
    return (
        <footer>
            <hr />
            <Style>
                <div>&copy; Slick's Slices {new Date().getFullYear()}</div>
                <div className="spacer" />
                <div className="right"><a href="https://courses.wesbos.com/account" target="_blank">to the course ...</a></div>
            </Style>    
        </footer>
    )
}

export default Footer

const Style = styled.div`
    display: flex;
    flex-direction: row;
    .spacer {
        flex-grow: 1;
    }
    .right {
        margin-top: 6px;
    }
`
