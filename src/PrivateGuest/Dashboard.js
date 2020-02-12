import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import MenuUsers from './MenuUsers'
import UserProfile from './UserProfile'
import UserEditProfile from './UserEditProfile'
import Services from './UserServices'
import RatingColiver from './UserColiversRating'
import RatingColiving from './UserColivingsRating'
import Header from '../covers/Header'
import Presentation from '../covers/Presentation'
import Benefits from '../covers/Benefits'
import Footer from '../covers/Footer'
import './Private.css'


const Dashboard = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  const login = (user) => dispatch({ type: 'login', user })
  const history = useHistory()

  const isLoggedIn = useSelector(s => !!s.user)
  useEffect(() => {
    if (!isLoggedIn) {
      history.push(`/`)
    }
  }, [isLoggedIn, history])

  if (!user) return 'Loading...'

  return (
    <div className="wrap-welcome">
      <p className="welcome">{user.name}, bienvenid@ a tu panel de gestión</p>
      <div className="private-users">
        <MenuUsers />
        <main>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Presentation />
              <Benefits />
              <Footer />
            </Route>
            <Route path="/user/profile" exact>
              <UserProfile />
            </Route>
            <Route path="/user/profile/edit" >
              <UserEditProfile />
            </Route>
            <Route path="/user/services" >
              <Services />
            </Route>
            <Route path="/user/rating-coliver" >
              <RatingColiver />
            </Route>
            <Route path="/user/rating-coliving" >
              <RatingColiving />
            </Route>
          </Switch>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
