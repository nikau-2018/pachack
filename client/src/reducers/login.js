import { LOGIN, LOGIN_PENDING, LOGIN_ERROR } from '../actions'

export default function (state = null, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return 'pending'
    case LOGIN:
      return action.user
    case LOGIN_ERROR:
      return null
    default:
      return state
  }
}
