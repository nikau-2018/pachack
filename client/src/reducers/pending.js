import {
  LOGIN_PENDING,
  LOGIN,
  LOGIN_ERROR,
  CREATE_LUNCHBOX_PENDING,
  CREATE_LUNCHBOX,
  CREATE_LUNCHBOX_ERROR
} from '../actions'

export default function (state = false, action) {
  switch (action.type) {
    case LOGIN_PENDING:
      return true
    case LOGIN:
      return false
    case LOGIN_ERROR:
      return false
    default:
      return state
  }
}

export default function (state = false, action) {
  switch (action.type) {
    case CREATE_LUNCHBOX_PENDING:
      return true
    case CREATE_LUNCHBOX:
      return false
    case CREATE_LUNCHBOX_ERROR:
      return false
    default:
      return state
  }
}