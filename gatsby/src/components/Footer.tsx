import React from 'react'
import { CompositeDisposable } from 'rx-core'

const Footer = () => {
    return (
        <footer>
            <p>&copy; Slick's Slices {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer
