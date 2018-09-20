import request from 'axios'

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
    token: user.token

  }
}

export const loginUser = (username, password) => {
  return (dispatch) => {
    // dispatch action
    dispatch(loginPending())
    // perform async request
    return request
    // post
      .post(`/api/v1/auth/login`, {username, password})
      .then(res => {
        dispatch(login(res.user))
      })
      .catch(err => {
        dispatch(loginError(error)
        )
      })
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}
