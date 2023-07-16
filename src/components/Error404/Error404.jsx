import React from 'react'
import {Link} from 'react-router-dom'
import './Error404.css'


const Error404 = () => {
    return (
        <div className='containerError'>
            <h1>404</h1>
            <p className='textError404'>Vous êtes témoin de la légendaire 
            <span className='unfindedPage'>"Page Introuvable" ! </span></p>
            <Link className='linkErrorPage' to="/">Retourner en lieu connu</Link>

        </div>
    )
}

export default Error404