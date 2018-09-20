import { LOGIN } from '../actions'

export default function (state = [], action) {
  switch (action.type) {
    case LOGIN:
      return action.user
    default:
      return state
  }
}
