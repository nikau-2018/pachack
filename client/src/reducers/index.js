import {combineReducers} from 'redux'

import error from './error'
import login from './login'
import pending from './pending'
import currentUser from './currentUser'

export default combineReducers({
  error,
  login,
  pending,
  currentUser
})
