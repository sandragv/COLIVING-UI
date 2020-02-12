import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import useFormLogin from "./useFormLogin";
import validate from "./validateLogin";
import './Login.css'


const Login = () => {  
    const history = useHistory()
    
    const isLoggedIn = useSelector(s => !!s.user)
    useEffect(() => {
        if (isLoggedIn) {
            history.push(`/user`)
        }
    }, [isLoggedIn, history])

    const { handleChange, handleSubmit, values, errors } = useFormLogin(
        submit,
        validate
    );

    function submit() {
        console.log("Enviado");
    }     

    return (
        <form id="login" onSubmit={handleSubmit} noValidate>
            <div>
                <input className={`${errors.email && "inputError"}`} name="email" type="email" required value={values.email}
                    onChange={handleChange} placeholder="Email" />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div>
                <input className={`${errors.email && "inputError"}`} name="password" type="password" required value={values.password}
                    onChange={handleChange} placeholder="Password" />
                {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button>Login</button>
        </form>
    )
}

export default Login


