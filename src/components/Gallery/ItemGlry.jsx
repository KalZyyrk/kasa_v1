import React from "react"
import { Link } from "react-router-dom"

export default function ItemGlry({ appart }) {
    return (
        <Link className="gallery-item" to={'../logements/' + appart.id}>
            <img src={appart.cover} alt={appart.title} />
            <h3>{appart.title}</h3>
        </Link>
    )
}