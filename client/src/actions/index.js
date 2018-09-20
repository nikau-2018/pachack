import request from 'axios'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN = 'LOGIN'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

export const loginPending = () => {
  return {
    type: LOGIN_PENDING

  }
}

export const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    loggedIn: true,
    token: ''

  }
}

export const login = (username, password) => {
  return (dispatch) => {
    // dispatch action
    dispatch(loginPending())
    // perform async request
    return request
    // post
      .post(`/api/v1/auth/login`, {username, password})
      .then(res => {
        dispatch(loginSuccess(res.users))
      })
      .catch(err => {
        dispatch(error)
      })
  }
}

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error
  }
}

export function fetchPosts (subreddit) {
  return (dispatch) => {
    dispatch(requestPosts())
    return request
      .get(`/api/v1/reddit/subreddit/${subreddit}`)
      .then(res => {
        dispatch(receivePosts(res.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
