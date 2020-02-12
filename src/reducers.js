import { combineReducers } from 'redux'

const userReducer = (state, action) => {
    switch(action.type) {
      case 'login': return action.user
      case 'logout': return null
      default: return state || null
    }
  }  

  const editprofileReducer = (state, action) => {
    switch(action.type) {
      case 'editprofile': return { type: action.editprofile }
      default: return state || null
    }
  } 
  const colivingReducer = (state, action) =>
    action.type === 'login' ? action.user : state || null

  const servicesReducer = (state, action) =>
    action.type === 'services' ? action.services : state || null
  
  const reservationsReducer = (state, action) =>
    action.type === 'reservations' ? action.reservations : state || null
  
  const ratingcoliversReducer = (state, action) =>
    action.type === 'ratingcolivers' ? action.ratingcolivers : state || null
  
  const ratingcolivingsReducer = (state, action) =>
    action.type === 'ratingcolivings' ? action.ratingcolivings : state || null
  
  const rootReducer = combineReducers({
    user: userReducer,
    editprofile: editprofileReducer,
    coliving: colivingReducer,
    services: servicesReducer,
    reservations: reservationsReducer,
    ratingcolivers: ratingcoliversReducer,
    ratingcolivings: ratingcolivingsReducer
  })
  
  export default rootReducer