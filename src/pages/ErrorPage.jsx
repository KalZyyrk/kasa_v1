import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1>404</h1>
            <p>Oups! La Page que vous demandez n'existe pas.</p>
            <Link to='/home'>Retourner sur la page d'accueil</Link>
        </div>
    );
}

export default ErrorPage;
