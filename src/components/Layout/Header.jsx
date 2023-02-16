import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="wrapper">
            <NavLink className="logo">
                <img src="./logo.svg" />
            </NavLink>
        </header>
    )
}
