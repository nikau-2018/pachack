import request from 'axios'

import {getHeaders} from '../../utils/api'
import {setToken} from '../../utils/token'

export const REFRESH_USER_PENDING = 'REFRESH_USER_PENDING'
export const REFRESH_USER = 'REFRESH_USER'
export const REFRESH_USER_ERROR = 'REFRESH_USER_ERROR'
export const REGISTER_PENDING = 'REGISTER_PENDING'
export const REGISTER = 'REGISTER'
export const REGISTER_ERROR = 'REGISTER_ERROR'
export const SIGN_IN_PENDING = 'SIGN_IN_PENDING'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

export const refreshUserPending = () => ({ type: REFRESH_USER_PENDING })

export const refreshUser = user => ({
  type: REFRESH_USER,
  user
})

export const refreshUserError = error => ({
  type: REFRESH_USER_ERROR,
  error
})

export const refreshUserObject = () => dispatch => {
  dispatch(refreshUserPending())

  return request
    .get('/api/v1/auth/refreshuser', getHeaders())
    .then(res => {
      dispatch(refreshUser(res.data.user))
    })
    .catch(({response}) => dispatch(refreshUserError(response.data.error)))
}

export const registerPending = () => ({ type: REGISTER_PENDING })

export const register = user => ({
  type: REGISTER,
  user
})

export const registerError = error => ({
  type: REGISTER_ERROR,
  error
})

export const registerUser = (username, password) => {
  return dispatch => {
    dispatch(registerPending())

    return request
      .post('/api/v1/auth/register', {username, password})
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        dispatch(register(res.data.user))
      })
      .catch(({response}) => dispatch(registerError(response.data.error)))
  }
}

export const signInPending = () => ({ type: SIGN_IN_PENDING })

export const signIn = user => ({
  type: SIGN_IN,
  user
})

export const signInError = error => ({
  type: SIGN_IN_ERROR,
  error
})

export const signInUser = (username, password) => {
  return dispatch => {
    dispatch(signInPending())

    return request
      .post('/api/v1/auth/signin', {username, password})
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        dispatch(signIn(res.data.user))
      })
      .catch(({response}) => dispatch(signInError(response.data.error)))
  }
}
