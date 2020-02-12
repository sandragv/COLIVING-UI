import React from 'react'
import { useSelector } from 'react-redux'

const UserProfile = () => {
    const user = useSelector(s => s.user)
    const listStyle = {
        fontWeight: 700,
        color: "#666"
    }
    
    if (!user) return 'Loading...'

    return (
        <div className="user-profile">
            <h2>Tu perfil:</h2>
            <ul>
            <li><span style={listStyle}>Usuario:</span> {user.name} {user.surname}</li>
            <li><span style={listStyle}>Email:</span> {user.email}</li>
            <li><span style={listStyle}>Profesión:</span> {user.profession}</li>
            <li><span style={listStyle}>País:</span> {user.country}</li>
            </ul>
        </div>
    )
}

export default UserProfile

