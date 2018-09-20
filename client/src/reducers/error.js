import { LOGIN_ERROR } from '../actions'

export default function (state = false, action) {
  switch (action.type) {
    case LOGIN_ERROR:
      return action.error
    default:
      return state
  }
}
