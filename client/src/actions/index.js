export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const loginPending = () => {
  return {
    type: LOGIN_PENDING

  }
}

export const login = (userName, password) => {
  return {
    type: LOGIN,
    userName,
    password
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}
