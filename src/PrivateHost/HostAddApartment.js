import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Radios from '../Authentication/Radios'

const useFormField = () => {
    const [value, setValue] = useState('')
    return [value, e => setValue(e.target.value)]
}

const AddApartment = () => {
    const user = useSelector(s => s.user)
    const token = useSelector(s => s.user && s.user.token)
    const coliving = useSelector(s => s.coliving)
    const [apartments, setApartments] = useState([])
    const [rooms, setRooms] = useFormField()
    const [roomType, handleRoomType] = useFormField()
    const [photo, setPhoto] = useFormField({})

    const [isError, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const apartment = { rooms, roomType, photo, coliving }
        setError(false)
        try {
            const ret = await fetch('http://localhost:3300/host/add/apartment', {
                method: 'POST',
                body: JSON.stringify(apartment),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await ret.json()
            if (ret.ok)
                setApartments(data)
        } catch (err) {
            console.warn('Error:', err)
            setError(true)
        }
    }


    return (
        <form id="add-apartment" onSubmit={handleSubmit}>
            <h2>Añadir apartamento</h2>
            <div className="add-space">
                <label >
                    Nº de habitaciones:
                    <input className="add-options" type="number" name="rooms" min="1" max="10" required value={rooms} onChange={setRooms} />
                </label>
            </div>
            <div className="add-space">
                <Radios className="radio-item" name="roomType" options={["compartidas", "privadas", "ambas"]} value={roomType} onChange={handleRoomType} />
            </div>
            <div className="add-space">
                <label>
                    Foto:
                    <input className="add-options" name="photo" value={photo} onChange={setPhoto} placeholder="url imagen" />
                </label>
            </div >         
            <button className="save-apartment">Añadir</button>
            {isError && <div>Error, inténtalo de nuevo</div>}
        </form>
    )
}

export default AddApartment


