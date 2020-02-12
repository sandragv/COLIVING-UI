import React from 'react'
import { useSelector } from 'react-redux'

const HostProfile = () => {
    const user = useSelector(s => s.user)
    const coliving = useSelector(s => s.coliving)
    const listStyle = {
        fontWeight: 700,
        color: "#666"
    }

    if (!user) return 'Loading...'

    return (
        <div className="host-profile">
            <h2>Tu perfil:</h2>
            <ul>
                <li><span style={listStyle}>Usuario:</span> {user.contac_name} {user.contact_surname}</li>
                <li><span style={listStyle}>Email:</span> {user.contact_email}</li>
                <li><span style={listStyle}>Nombre del espacio:</span> {coliving.name}</li>
                <li><span style={listStyle}>Calle:</span> {coliving.street}</li>
                <li><span style={listStyle}>C.P:</span> {coliving.zip_code}</li>
                <li><span style={listStyle}>Ciudad:</span> {coliving.city}</li>
                <li><span style={listStyle}>País:</span> {coliving.country}</li>
                <li><span style={listStyle}>Nº apartamentos:</span> {coliving.apartments_count}</li>
                <li><span style={listStyle}>Nº total habitaciones:</span> {coliving.room_count}</li>
                <li><span style={listStyle}>Tipo de habitaciones:</span> {coliving.room_type}</li>
                <li><span style={listStyle}>Servicios:</span> {coliving.services}</li>
                <li><span style={listStyle}>Precio/semana:</span> {coliving.weekly_prize}</li>
                <li><span style={listStyle}>Precio/mes:</span> {coliving.monthly_prize}</li>
                <li><span style={listStyle}>Sitio web:</span> {coliving.website}</li>
                <li><span style={listStyle}>Facebook:</span> {coliving.facebook}</li>
                <li><span style={listStyle}>Instagram:</span> {coliving.instagram}</li>
                <li><span style={listStyle}>Twitter:</span> {coliving.twitter}</li>
            </ul>
        </div>
    )
}

export default HostProfile