import request from 'axios'

import {getHeaders} from '../utils/api'
import {setToken} from '../utils/token'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const CREATE_LUNCHBOX_PENDING = 'CREATE_LUNCHBOX_PENDING'
export const CREATE_LUNCHBOX = 'CREATE_LUNCHBOX'
export const CREATE_LUNCHBOX_ERROR = 'CREATE_LUNCHBOX_ERROR'

// User login actions
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

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
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
        // eslint-disable-next-line no-console
        console.log(err, 'nope')
        dispatch(loginError())
      })
  }
}

// Lunchbox actions
export const createLunchboxPending = () => (
  {type: CREATE_LUNCHBOX_PENDING}
)

export const createLunchboxAction = (lunchbox) => (
  {
    type: CREATE_LUNCHBOX,
    lunchbox
  }
)

export const createLunchboxError = (error) => (
  {
    type: CREATE_LUNCHBOX_ERROR,
    error
  }
)

export const createLunchbox = (userId) => {
  return (dispatch) => {
    // dispatch action
    dispatch(createLunchboxPending())
    // perform async request
    return request
    // post lunchbox
      .post(`/api/v1/lunchboxes`, {userId})
      .then(res => {
        dispatch(createLunchboxAction(res.data.lunchbox))
      })
      .catch(() => {
        dispatch(createLunchboxError())
      })
  }
}
