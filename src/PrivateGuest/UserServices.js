import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const useServices = () => {
  const dispatch = useDispatch()
  const token = useSelector(s => s.user && s.user.token)
  const services = useSelector(s => s.services)
  useEffect(() => {
    const setServices = services => dispatch({ type: 'services', services})
    fetch('http://localhost:3300/user/services', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(() => alert('Error al cargar los servicios...'))
}, [token, dispatch])
  return services
}

const Services = () => {
  const services = useServices()
  if (!services) return 'Cargando ...'
  return (
    <ul>
      {services.map(service =>
        <li key={service.id}>
          {service}
        </li>
      )}
    </ul>
  )
}

export default Services
