import React from 'react'
import { CompositeDisposable } from 'rx-core'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Footer = () => {
    return (
        <footer>
            <Style>
                <div>&copy; Slick's Slices {new Date().getFullYear()}</div>
                <div className="spacer" />
                <div className="link"><Link to="/test_animation">Test an Animation with react-spring</Link></div>
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
    .link {
        margin-top: 10px;
    }
`
