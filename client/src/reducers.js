import {combineReducers} from 'redux'

import currentUser from './components/SignIn/reducer'
import currentBox from './components/Lunchbox/reducer'

export default combineReducers({
  currentBox,
  currentUser
})
