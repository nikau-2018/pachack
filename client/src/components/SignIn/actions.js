import request from 'axios'

import {getHeaders} from '../../utils/api'
import {setToken} from '../../utils/token'

export const SIGN_IN_PENDING = 'SIGN_IN_PENDING'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_IN_ERROR = 'SIGN_IN_ERROR'

export const signInPending = () => ({ type: SIGN_IN_PENDING })

export const signIn = user => ({
  type: SIGN_IN,
  user
})

export const signInUser = (username, password) => {
  return dispatch => {
    dispatch(signInPending())

    return request
      .post(`/api/v1/auth/signin`, {username, password}, getHeaders())
      .then(res => {
        if (res.data.token) {
          setToken(res.data.token)
        }

        dispatch(signIn(res.data.user))
      })
      .catch(({response}) => dispatch(signInError(response.data.error)))
  }
}

export const signInError = error => ({
  type: SIGN_IN_ERROR,
  error
})
