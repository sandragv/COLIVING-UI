import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import HostProfile from './HostProfile'
import HostEditProfile from './HostEditProfile'
import MenuHost from './HostMenu'
import AddApartament from './HostAddApartment'
import HostReservations from './HostReservations'
import HostServices from './HostServices'
import ColivingManager from '../covers/ColivingManager'
import Footer from '../covers/Footer'
import './PrivateHost.css'

const HostDashboard = () => {
    const dispatch = useDispatch()
    const user = useSelector(s => s.user)
    const coliving = useSelector(s => s.coliving)
    const login = (user) => dispatch({ type: 'login', user })
    const history = useHistory()

    const isLoggedIn = useSelector(s => !!s.user)
    useEffect(() => {
        if (!isLoggedIn) {
            history.push(`/host`)
        }
    }, [isLoggedIn, history])

    if (!user) return 'Loading...'

    return (
        <div className="wrap-welcome">
            <p> {user.name} bienvenid@ al panel de gestión de tu coliving {coliving.name} </p>
            <div className="private-hosts">
                <MenuHost />
                <main>
                    <Switch>
                        <Route path="/host" exact>
                            <ColivingManager />
                            <Footer />
                        </Route>
                        <Route path="/host/dashboard/profile" exact >
                            <HostProfile />
                        </Route>
                        <Route path="/host/dashboard/profile/edit" >
                            <HostEditProfile />
                        </Route>
                        <Route path="/host/dashboard/add/apartment" >
                            <AddApartament />
                        </Route>
                        <Route path="/host/dashboard/services" >
                            <HostServices />
                        </Route>
                        <Route path="/host/dashboard/reservations" >
                            <HostReservations />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    )
}

export default HostDashboard