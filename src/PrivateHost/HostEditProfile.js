
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Radios from '../Authentication/Radios'

const HostEditProfile = () => {
    const dispatch = useDispatch()
    const editprofile = (user) => dispatch({ type: 'editprofile', user })
    const token = useSelector(s => s.user && s.user.token)
    const currentuser = useSelector(s => s.user)
    const [user, setUser] = useState(currentuser)
    const [status, setStatus] = useState();

    if (!user) return 'Loading...'

    const handleField = field => e => setUser({ ...user, [field]: e.target.value })

    const handleSave = e => {
        e.preventDefault()
        fetch('http://localhost:3300/host/dashboard/profile/edit', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'editprofile', user: data })
                setStatus('Perfil editado correctamente!')
            })
            .catch(() => console.log('Error guardando...'))


    }

    return (
        <form className="host-edit-profile" onSubmit={handleSave}>
            <h2>Editar perfil</h2>
            <div className="profile-elements">
                <input className="profile-item" type="hidden" name="id" value={user.id || ''} onChange={handleField('id')} />
            </div>
            <div className="profile-elements">
                <label>
                    Nombre:
                <input className="profile-item" name="contact_name" value={user.contact_name || ''} onChange={handleField('contact_name')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Apellido:
                <input className="profile-item" name="contact_surname" value={user.contact_surname || ''} onChange={handleField('contact_surname')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Email:
                <input className="profile-item" type="email" name="contact_email" value={user.contact_email || ''} onChange={handleField('contact_email')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Coliving:
                <input className="profile-item" name="name" value={user.name || ''} onChange={handleField('name')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Calle:
                <input className="profile-item" name="street" value={user.street || ''} onChange={handleField('street')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    C.P:
                <input className="profile-item" name="zip_code" value={user.zip_code || ''} onChange={handleField('zip_code')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    País:
                <input className="profile-item" name="country" value={user.country || ''} onChange={handleField('country')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Nº de apartamentos:
                <input className="profile-item" name="apartments_count" type="number" min="1" max="25" value={user.apartments_count || ''} onChange={handleField('apartments_count')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Nº total de habitaciones:
                <input className="profile-item" name="rooms_count" type="number" min="5" max="100" value={user.rooms_count || ''} onChange={handleField('rooms_count')} />
                </label>
            </div>
            <div className="profile-elements radios">
                <label>
                    <Radios className="radio-item" name="room_type" options={["compartidas", "privadas", "ambas"]} value={user.room_type || ''}
                        onChange={handleField('room_type')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Servicios:
                <input className="profile-item" name="services" value={user.services || ''} onChange={handleField('services')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    €/semana:
                <input className="profile-item" name="weekly_price" type="number" min="150€" max="800€" value={user.weekly_price || ''} onChange={handleField('weekly_price')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    €/mes:
                <input className="profile-item" type="number" name="monthly_price" min="600€" max="2500€" value={user.monthly_price || ''} onChange={handleField('monthly_price')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Foto:
                <input className="profile-item" name="poster" type="url" value={user.poster || ''} onChange={handleField('poster')} placeholder="url imagen" />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    <textarea className="text-profile-item" name="description" value={user.description || ''} onChange={handleField('description')} placeholder="Descripción" cols="35" rows="5" />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Web:
                <input className="profile-item" type="url" name="website" value={user.website || ''} onChange={handleField('website')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Facebook:
                <input className="profile-item" type="url" name="facebook" value={user.facebook || ''} onChange={handleField('facebook')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Instagram:
                <input className="profile-item" type="url" name="instagram" value={user.instagram || ''} onChange={handleField('instagram')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Twitter:
                <input className="profile-item" type="url" name="twitter" value={user.twitter || ''} onChange={handleField('twitter')} />
                </label>
            </div>
            <button className="save-profile host">Guardar</button>
            <p className="okbooked">{status}</p>
        </form>
    )
}

export default HostEditProfile

