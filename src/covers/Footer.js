import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="colophon">
            <ul>
                <li><Link to="/contact">Contacto</Link></li>
            </ul>
        </div>
    )
}

export default Footer