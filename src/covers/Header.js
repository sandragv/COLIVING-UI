import React from 'react';
import { Link } from 'react-router-dom'
import nunito from '../img/logo/nunito.png'

const Header = () => {
    return (
        <header id="menu">
          <div className="title-area">
            <div className="logo">
            <Link className="logo-link" to="/"><img src={nunito} alt="cool living"/></Link>
            </div>
          </div>
          <nav className="navigation">
            <ul>
              <li><Link className="nav-link" to="/">Home</Link></li>
              <li><Link className="nav-link" to="/colivings">Alojarse</Link></li>
              <li><Link className="nav-link" to="/host">Alojar</Link></li>
              <li><Link className="nav-link" to="/login">Login</Link></li>
              <li><Link className="nav-link" to="/signup">Signup</Link></li>
            </ul>
          </nav>
        </header>
    )}

export default Header