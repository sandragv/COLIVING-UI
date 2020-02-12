import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useHostReservations = () => {
  const dispatch = useDispatch()
  const token = useSelector(s => s.user && s.user.token)
  const reservations = useSelector(s => s.reservations)
  useEffect(() => {
    const setHostReservations = reservations => dispatch({ type: 'reservations', reservations})
    fetch('http://localhost:3300/host/coliving/reservations/', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => setHostReservations(data))
      .catch(() => alert('Error al cargar las reservas...'))
}, [token, dispatch])
  return reservations
}

const HostReservations = () => {
  const reservations = useHostReservations()
  if (!reservations) return 'Cargando ...'
  return (
    <ul>
      {reservations.map(reservation =>
        <li key={reservation.id}>
          {reservation}
        </li>
      )}
    </ul>
  )
}

export default HostReservations
