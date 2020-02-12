import React from 'react'
import { Link } from 'react-router-dom'

const Presentation = () => {
    return (
        <section id="banner">
            <hgroup className="banner-text">
                <h1>Welcome! Find your next home:</h1>
                <h2><Link to="/colivings">Colivings</Link></h2>
            </hgroup>
        </section>
    )
}

export default Presentation
