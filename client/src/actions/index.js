import request from 'axios'

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginPending = () => {
  return {
    type: LOGIN_PENDING

  }
}

export const login = (user) => {
  return {
    type: LOGIN,
    user
  }
}

export const loginUser = (username, password) => {
  return (dispatch) => {
    // dispatch action
    dispatch(loginPending())
    // perform async request
    return request
    // post
      .post(`/api/v1/auth/login`, {username, password}, getHeaders())
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        dispatch(login(res.data.user))
      })
      .catch(err => {
        console.log(err, 'nope')
        dispatch(loginError())
      })
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}
