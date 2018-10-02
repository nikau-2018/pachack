import {combineReducers} from 'redux'

import currentUser from './components/SignIn/reducer'
import currentBox from './components/ProfileScreen/reducer'
import foods from './components/Lunchbox/reducer'

export default combineReducers({
  currentBox,
  currentUser,
  foods
})
