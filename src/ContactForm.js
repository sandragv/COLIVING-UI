import React, { useState } from 'react'
import './ContactForm.css'


const useFormField = (valorInicial) => {
    const [value, setValue] = useState(valorInicial || '')
    const handleChange = e => setValue(e.target.value)
    return [value, handleChange]
}

const ContactForm = () => {
    const [name, handleName] = useFormField()
    const [email, handleEmail] = useFormField()
    const [message, handleMessage] = useFormField()
    const [status, setStatus] = useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const user = { name, email, message }
        setStatus('tu mensaje se está enviando...')
        await fetch('http://localhost:3300/contact', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setStatus('Mensaje enviado!')
    }

    return (
        <div id="contact-form">
            <form onSubmit={handleSubmit}>
                <input value={name} required onChange={handleName} placeholder="Nombre" />
                <input type="email" required value={email} onChange={handleEmail} placeholder="Email" />
                <textarea value={message} required rows="10" cols="50" onChange={handleMessage} placeholder="Tu mensaje" />
                <button>Enviar</button>
                <p>{status}</p>
            </form>

        </div>
    );
}

export default ContactForm
