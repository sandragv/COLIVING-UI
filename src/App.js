import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider, useSelector, useDispatch } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { save, load } from "redux-localstorage-simple"

import rootReducer from './reducers'
import Header from './covers/Header'
import Presentation from './covers/Presentation'
import Benefits from './covers/Benefits'
import Footer from './covers/Footer'
import Login from './Authentication/Login'
import Signup from './Authentication/Signup'
import HostLogin from './Authentication/HostLogin'
import HostSignup from './Authentication/HostSignup'
import Dashboard from './PrivateGuest/Dashboard'
import ColivingManager from './covers/ColivingManager'
import HostDashboard from  './PrivateHost/HostDashboard'
import Colivings from './Colivings/Colivings'
import ColivingInfo from './Colivings/ColivingInfo'
import ContactForm from './ContactForm'
import './App.css';

const Content = () => {
  const dispatch = useDispatch()
  const user = useSelector(s => s.user)
  return (
    <div className="app">
          <Switch>
            <Route path="/" exact>
              <Header />
              <Presentation />
              <Benefits />
              <Footer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/user">
              <Dashboard />
            </Route>
            <Route path="/colivings" exact>
              <Header />
              <Colivings />
              <Footer />
            </Route>
            <Route path="/colivings/:id">
              <Header />
              <ColivingInfo />
              <Footer />
            </Route>
            <Route path="/contact">
              <Header />
              <ContactForm />
              <Footer />
            </Route>
          </Switch>
        </div>
  )
}

const store = createStore(rootReducer, load(), applyMiddleware(save()))

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/host" exact>
            <ColivingManager />
            <Footer />
          </Route>
          <Route path="/host/login">
              <HostLogin />
            </Route>
            <Route path="/host/signup">
              <HostSignup />
            </Route>
          <Route path="/host/dashboard">
            <HostDashboard />
          </Route>
        </Switch>
        <Content />
      </Router>
    </Provider>
  );
}

export default App;

