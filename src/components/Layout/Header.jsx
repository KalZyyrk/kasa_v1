import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

export default function Header() {
    return (
        <header className="wrapper">
            <NavLink to='/' className="logo">
                <img src={logo} alt='logo de Kasa' />
            </NavLink>
            <nav>
                <ul>
                    <li>
                        <Link to='/home'>Accueil</Link>
                    </li>
                    <li>
                        <Link to='/about'>A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
