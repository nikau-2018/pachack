import {
  LOGIN_PENDING,
  LOGIN,
  LOGIN_ERROR } from '../actions'

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
