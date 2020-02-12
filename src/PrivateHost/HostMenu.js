import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './PrivateHost.css'


const MenuHost = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  const logout = () => dispatch({ type: 'logout' })
  
  if (!user) return 'Loading...'

  return (
    <aside id="menu">
      <h2>Menu:</h2>
      <ul>
      <li>
          <NavLink to="/host" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/dashboard/profile" exact activeClassName="active">
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/dashboard/profile/edit" activeClassName="active">
            Editar Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/dashboard/add/apartment" activeClassName="active">
            Añadir espacio
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/dashboard/services" activeClassName="active">
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/host/dashboard/reservations" activeClassName="active">
            Reservas
          </NavLink>
        </li>
      </ul>
      <button className="exit" onClick={logout}>Logout</button>
    </aside>
  )
}

export default MenuHost






  
