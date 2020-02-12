import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useFormSignup from "./useFormSignup";
import validate from "./validateLogin";

const Signup = () => {
    const history = useHistory()
    
    const isLoggedIn = useSelector(s => !!s.user)
    useEffect(() => {
        if (isLoggedIn) {
            history.push(`/user`)
        }
    }, [isLoggedIn, history])

    const { handleChange, handleSubmit, values, errors } = useFormSignup(
        submit,
        validate
    );

    function submit() {
        console.log("Enviado");
    }  
    
    return (
        <form id="login" onSubmit={handleSubmit} noValidate>
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
            <div>
                <input className={`${errors.profession && "inputError"}`} name="profession" required value={values.profession}
                    onChange={handleChange} placeholder="Profesión" />
                {errors.profession && <p className="error">{errors.profession}</p>}
            </div>
            <div>
                <input className={`${errors.country && "inputError"}`} name="country" required value={values.country}
                    onChange={handleChange} placeholder="País" />
                {errors.country && <p className="error">{errors.country}</p>}
            </div>          
            <button>Registrarse</button>            
        </form>
    )
}

export default Signup


