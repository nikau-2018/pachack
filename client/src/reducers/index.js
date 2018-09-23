import {combineReducers} from 'redux'

import error from './error'
import login from './login'
import { loginState, lunchboxState } from './pending'
import currentUser from './currentUser'

export default combineReducers({
  error,
  login,
  loginState,
  currentUser,
  lunchboxState
})
