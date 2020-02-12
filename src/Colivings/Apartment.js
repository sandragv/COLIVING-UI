import React, { useState } from "react";
import { useSelector } from 'react-redux'

const useFormField = (valorInicial) => {
    const [value, setValue] = useState(valorInicial || '')
    const handleChange = e => setValue(e.target.value)
    return [value, handleChange]
};

const Apartment = ({ apartment }) => {
    const user = useSelector(s => s.user)
    const token = useSelector(s => s.user && s.user.token)
    const [EntryWeek, handleEntryWeek] = useFormField('');
    const [DepartureWeek, handleDepartureWeek] = useFormField('');
    const [status, setStatus] = useState();
    const divStyle = {
        backgroundImage: `url(${apartment.photo_room1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "34.37rem",
        height: "20.78rem",
        opacity: 0.85
    };

    const handleSubmit = async e => {
        e.preventDefault()
        const reservation = { EntryWeek, DepartureWeek, apartment }
        setStatus('loading...')
        await fetch('http://localhost:3300/user/reservation/add', {
            method: 'POST',
            body: JSON.stringify(reservation),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
        setStatus('Reserva realizada con éxito!')
    }

    return (
        <div className="apartment-view">
            <div className="colivingimg" style={divStyle} alt={`${apartment.id}`}></div>
            <h3 className="apartment-name">Apartment {`${apartment.id}`} </h3>
            <form className="booking-form" onSubmit={handleSubmit}>
                <div className="options-booking">
                    <label className="client-entry">
                        Entrada
                    </label>
                    <input className="entry-booking" type="date" value={EntryWeek} onChange={handleEntryWeek} />
                </div>
                <div className="options-booking">
                    <label className="client-departure">
                        Salida
                    </label>
                    <input className="departure-booking" type="date" value={DepartureWeek}
                        onChange={handleDepartureWeek} />
                </div>
                <button className="make-reservation">Reservar</button>
                <p className="okbooked">{status}</p>
            </form>
        </div>


    )
}

export default Apartment