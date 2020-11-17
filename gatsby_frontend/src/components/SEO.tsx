import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

type ISEO = {
    chiledren?: any
    location?: string
    description?: string
    title: string
    image?: any 
}
const SEO = (
    { children, location, description, title, image }: ISEO
) => {
    const { site } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    description
                    twitter
                }
            }
        }
    `)
    return (
        <Helmet titleTemplate={`%s - ${site.siteMetadata.title}`}>
            <html lang="en" />
            <title>{title}</title>

            {/* Fav icons come from /static folder. */}
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> 
            <link rel="alternate icon" href="favicon.ico" />
            
            {/* Meta Tags */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="charSet"  content="utf-8" />
            <meta name="description" content={site.siteMetadata.description} />
            
            {/* Open Graph */}
            {location && <meta property="og:url" content={location.href} />}
            <meta property="og:image" content={image || '/logo.svg'} />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:site_name" content={site.siteMetadata.title} key="ogsitename" />
            <meta property="og:description" content={description} key="ogdescription" />
            
            {/* Just in case we want to ovveride the metadata by putting local tags inside the SEO tag */}
            {children}
        </Helmet>
    )
}
export default SEO

