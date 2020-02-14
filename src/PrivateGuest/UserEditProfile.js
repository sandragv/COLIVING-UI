import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UserEditProfile = () => {
    const dispatch = useDispatch()
    const editprofile = (user) => dispatch ({ type: 'editprofile', user })
    const token = useSelector(s => s.user && s.user.token)
    const currentuser = useSelector(s => s.user)
    const [ user, setUser ] = useState(currentuser)

    if (!user) return 'Loading...'

    const handleField = field => e => setUser({ ...user, [field]: e.target.value })

    const handleSave = e => {
        e.preventDefault()
        fetch('http://localhost:3300/user/profile/edit', {
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)     
        })
            .then(res => res.json())
            .then(data => {
                alert('Guardado correctamente!')
                dispatch({ type: 'editprofile', user: data })
            })
            .catch((e) => console.log('Error'))

    }

    return (
        <form className="edit-profile" onSubmit={handleSave}>
            <h2>Editar perfil</h2>
            <div className="profile-elements">             
                 <input className="profile-item" type="hidden" name="id" value={user.id || ''} onChange={handleField('id')} />            
            </div>
            <div className="profile-elements">            
                <label>
                    Nombre:
                <input className="profile-item" name="name" value={user.name || ''} onChange={handleField('name')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Apellido:
                <input className="profile-item" name="surname" value={user.surname || ''} onChange={handleField('surname')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Email:
                <input className="profile-item" name="email" value={user.email || ''} onChange={handleField('email')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    Profesión:
                <input className="profile-item" name="profession" value={user.profession || ''} onChange={handleField('profession')} />
                </label>
            </div>
            <div className="profile-elements">
                <label>
                    País:
                <input className="profile-item" name="country" value={user.country || ''} onChange={handleField('country')} />
                </label>
            </div>
            <button className="save-profile">Guardar</button>
        </form>
    )
}

export default UserEditProfile
