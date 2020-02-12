import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import './Private.css'


const MenuUsers = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  const logout = () => dispatch({ type: 'logout' })
  
  if (!user) return 'Loading...'

  return (
    <aside id="menu">
      <h2>Menu:</h2>
      <ul>
      <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/profile" exact activeClassName="active">
            Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/profile/edit" activeClassName="active">
            Editar Perfil
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/services" activeClassName="active">
            Servicios
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/rating-coliver" activeClassName="active">
            Rating Coliver
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/rating-coliving" activeClassName="active">
            Rating Coliving
          </NavLink>
        </li>
      </ul>
      <button className="exit" onClick={logout}>Logout</button>
    </aside>
  )
}

export default MenuUsers
