import React from 'react'
import { Link, navigate } from 'gatsby'
import { NavStyles } from './NavStyles'
import Logo from './Logo'

const goToSclicemasters = () => {
    setTimeout(() => {
        navigate('/slicemasters', { replace: true })
    }, 2000)
}

const Nav = () => {
    return (
        <NavStyles>
            <ul>
                <li>
                    <Link to="/beers">Beers</Link>{' '}
                </li>
                <li>
                    <Link to="/pizzas">Pizzas</Link>
                </li>
                <li>
                    <Link to="/">
                        <Logo />
                    </Link>
                </li>
                <li>
                    <Link to="/slicemasters/1">ScliceMasters</Link>
                </li>
                <li>
                    <Link to="/order">Order Ahead!</Link>
                </li>
            </ul>
        </NavStyles>
    )
}

export default Nav
