import {combineReducers} from 'redux'

import loginError from './loginError'
import login from './login'
import { loginState, lunchboxState } from './pending'
import currentUser from './currentUser'
import lunchboxError from './lunchboxError'

export default combineReducers({
  loginError,
  login,
  loginState,
  currentUser,
  lunchboxState,
  lunchboxError
})
