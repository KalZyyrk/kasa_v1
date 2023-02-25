import React from 'react'
import { NavLink } from 'react-router-dom'
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
                        <NavLink to='/home'>Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
