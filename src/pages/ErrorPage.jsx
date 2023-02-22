import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La Page que vous demandez n'existe pas.</p>
            <NavLink to='/home'>Retourner sur la page d'accueil</NavLink>
        </div>
    );
}

export default ErrorPage;
