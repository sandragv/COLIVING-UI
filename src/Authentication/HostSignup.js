import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'

import useFormHostSignup from "./useFormHostSignup";
import validate from "./validateLogin";

import Radios from './Radios'

const HostSignup = () => {
   
    const [facilities, setFacilities] = useState('facilities')
    const handleFacilities = e => setFacilities(e.target.value)
    
    const history = useHistory()

    const isLoggedIn = useSelector(s => !!s.user)
    useEffect(() => {
        if (isLoggedIn) {
            history.push(`/host/dashboard`)
        }
    }, [isLoggedIn, history])

    const { handleChange, handleSubmit, values, errors } = useFormHostSignup(
        submit,
        validate
    );

    function submit() {
        console.log("Enviado");
    }

    return (
        <form id="signup" onSubmit={handleSubmit} noValidate>
            <section id="contact-info">
                <label>
                    <h3>Información de contacto</h3>
                    <div>
                        <input className={`${errors.name && "inputError"}`} name="name" required value={values.name}
                            onChange={handleChange} placeholder="Nombre" />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div>
                        <input className={`${errors.surname && "inputError"}`} name="surname" required value={values.surname}
                            onChange={handleChange} placeholder="Apellido" />
                        {errors.surname && <p className="error">{errors.surname}</p>}
                    </div>
                    <div>
                        <input className={`${errors.email && "inputError"}`} name="email" type="email" required value={values.email}
                            onChange={handleChange} placeholder="Email" />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>
                    <div>
                        <input className={`${errors.password && "inputError"}`} name="password" type="password" required value={values.password}
                            onChange={handleChange} placeholder="Password" />
                        {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                </label>
            </section>

            <section id="coliving-info">
                <label>
                    <h3>Información del coliving</h3>
                    <div>
                        <input className={`${errors.colivingngName && "inputError"}`} name="colivingName" required value={values.colivingName}
                            onChange={handleChange} placeholder="Nombre del espacio" />
                        {errors.colivingName && <p className="error">{errors.colivingName}</p>}
                    </div>
                    <div>
                        <input className={`${errors.street && "inputError"}`} name="street" required value={values.street}
                         onChange={handleChange} placeholder="Calle" />
                         {errors.street && <p className="error">{errors.street}</p>}
                    </div>
                    <div>
                        <input className={`${errors.zipcode && "inputError"}`} name="zipcode" required value={values.zipcode}
                         onChange={handleChange} placeholder="C.P" />
                         {errors.zipcode && <p className="error">{errors.zipcode}</p>}
                    </div>
                    <div>
                        <input className={`${errors.city && "inputError"}`} name="city" required value={values.city} 
                         onChange={handleChange} placeholder="Ciudad" />
                         {errors.city && <p className="error">{errors.city}</p>}
                    </div>
                    <div>
                        <input className={`${errors.country && "inputError"}`} name="country" required value={values.country}
                         onChange={handleChange} placeholder="País" />
                         {errors.country && <p className="error">{errors.country}</p>}
                    </div>
                    <div>
                        <input className={`${errors.photo && "inputError"}`} name="photo" value={values.photo}
                            onChange={handleChange} placeholder="url imagen" />
                        {errors.photo && <p className="error">{errors.photo}</p>}
                    </div>
                    <label>
                        <p>Nº de apartamentos</p>
                        <div>
                            <input className={`${errors.apartments && "inputError"}`} type="number" name="apartments" min="1" max="25" required value={values.apartments} onChange={handleChange} />
                            {errors.apartments && <p className="error">{errors.apartments}</p>}
                        </div>
                    </label>
                    <label>
                        <p>Nº total de habitaciones</p>
                        <div>
                            <input className={`${errors.rooms && "inputError"}`} type="number" name="rooms" min="5" max="100" required value={values.rooms}
                                onChange={handleChange} />
                            {errors.rooms && <p className="error">{errors.rooms}</p>}
                        </div>
                    </label>
                    <div>
                        <Radios className={`${errors.roomType && "inputError"}`} name="roomType" options={["compartidas", "privadas", "ambas"]} required value={values.roomType}
                            onChange={handleChange} />
                        {errors.roomType && <p className="error">{errors.roomType}</p>}
                    </div>
                    <div id="services">
                        <p>Servicios incluidos</p>
                        <select multiple={true} size="5" name="facilities" value={[facilities.toString()]} onChange={handleFacilities} >
                            <optgroup label="Instalaciones y servicios">
                                <option value="wifi">Wifi</option>
                                <option value="suplies">Suministros incluidos</option>
                                <option value="cleaning">Limpieza incluida</option>
                                <option value="cafeteria">Cafetería</option>
                                <option value="laundry">Lavanderia</option>
                                <option value="coworking">Coworking</option>
                                <option value="gym">Gimnasio</option>
                                <option value="garden">Jardín</option>
                            </optgroup>
                        </select>
                    </div>
                    <div>
                        <input className={`${errors.website && "inputError"}`} name="website" type="url" value={values.website}
                            onChange={handleChange} placeholder="Web" />
                        {errors.website && <p className="error">{errors.website}</p>}
                    </div>
                    <div>
                        <input className={`${errors.facebook && "inputError"}`} name="facebook" type="url" value={values.facebook}
                            onChange={handleChange} placeholder="Link Facebook" />
                        {errors.facebook && <p className="error">{errors.facebook}</p>}
                    </div>
                    <div>
                        <input className={`${errors.instagram && "inputError"}`} name="instagram" type="url" value={values.instagram}
                            onChange={handleChange} placeholder="Link Instagram" />
                        {errors.facebook && <p className="error">{errors.facebook}</p>}
                    </div>
                    <div>
                        <input className={`${errors.twitter && "inputError"}`} name="twitter" type="url" value={values.twitter}
                            onChange={handleChange} placeholder="Link Twitter" />
                        {errors.twitter && <p className="error">{errors.twitter}</p>}
                    </div>
                </label>
            </section>
            <button>Registrarse</button>
        </form>
    )
}

export default HostSignup



