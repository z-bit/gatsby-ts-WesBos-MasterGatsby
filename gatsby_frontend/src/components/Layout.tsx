import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import ContentStyles from '../styles/ContentStyles'
import SideBorderStyle from '../styles/SiteBorderStyle'
import Typography from '../styles/Typography'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
    // stands for { children } = props
    return (
        <>
            <GlobalStyles />
            <Typography />
            <SideBorderStyle>
                <ContentStyles>
                    <Nav />
                    {children}
                    <Footer />
                </ContentStyles>
            </SideBorderStyle>
        </>
    )
}

export default Layout
