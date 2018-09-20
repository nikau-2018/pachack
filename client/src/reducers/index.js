import {combineReducers} from 'redux'

import error from './error'
import login from './login'
import pending from './pending'

export default combineReducers({
  error,
  login,
  pending
})
