import request from 'axios'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const CREATE_LUNCHBOX_PENDING = 'CREATE_LUNCHBOX_PENDING'

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
      .catch(() => {
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

// Lunchbox actions
export const createLunchboxPending = () => {
  return {
    type: CREATE_LUNCHBOX_PENDING
  }
}

export const createLunchbox = (userId) => {
  return (dispatch) => {
    // dispatch action
    dispatch(createLunchboxPending())
    
    // perform async request
    return request
    // post
      .post(`/api/v1/auth/login`, {username, password})
      .then(res => {
        dispatch(login(res.user))
      })
      .catch(() => {
        dispatch(loginError())
      })
  }
}
