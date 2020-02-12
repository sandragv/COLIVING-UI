import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import HostSignup from '../Authentication/HostSignup'
import HostLogin from '../Authentication/HostLogin'

const ColivingManager = () => {
    return (
        <Switch>
            <Route path="/host" exact>
                <header id="menu-host">
                    <nav className="navigation-host">
                        <ul>
                            <li><Link className="nav-link" to="/">Home</Link></li>
                            <li><Link className="nav-link" to="/host/login">Login</Link></li>
                        </ul>
                    </nav>
                </header>
                <section id="banner-host">
                    <hgroup className="banner-text">
                        <h1>Más reservas, menos preocupaciones</h1>
                        <h2><Link to="/host/signup">Añade tu espacio</Link></h2>
                    </hgroup>
                </section>
                <section id="steps">
                    <div className="numbered">
                        <h2>1. Añade tu espacio</h2>
                        <p>Publica tu espacio de forma gratuita y sencilla</p>
                    </div>
                    <div className="numbered">
                        <h2>2. Acepta reservas</h2>
                        <p>Consigue más visitas y aumenta el número de reservas</p>
                    </div>
                    <div className="numbered">
                        <h2>3. Recibe tu pago</h2>
                        <p>El dinero en tu cuenta en un plazo de 24h desde el checkin</p>
                    </div>
                </section>
                <section id="benefits">
                    <h2>Requisitos</h2>
                    <div className="flex-container">
                        <div className="benefit">
                            <div className="icon furnished"></div>
                            <h3>Completamente amueblado</h3>
                        </div>
                        <div className="benefit">
                            <div className="icon included"></div>
                            <h3>Servicios incluidos</h3>
                        </div>
                        <div className="benefit">
                            <div className="icon flexible"></div>
                            <h3>Alquileres flexibles</h3>
                        </div>
                        <div className="benefit">
                            <div className="icon cleaning"></div>
                            <h3>Servicio de limpieza</h3>
                        </div>
                        <div className="benefit">
                            <div className="icon beds"></div>
                            <h3>Mínimo 6 camas</h3>
                        </div>
                        <div className="benefit">
                            <div className="icon common"></div>
                            <h3>Áeas comunes</h3>
                        </div>
                    </div>
                </section>
                <section id="query">
                    <hgroup>
                        <h2>¿Alguna pregunta?</h2>
                        <h3><Link className="button" to="/contact">¡Escríbenos!</Link></h3>
                    </hgroup>
                </section>
            </Route>
            <Route path="/host/login" >
                <HostLogin />
            </Route>
            <Route path="/host/signup" >
                <HostSignup />
            </Route>
        </Switch>
    )
}

export default ColivingManager



