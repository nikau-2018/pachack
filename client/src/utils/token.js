export function setToken (token) {
  localStorage.setItem('_LUNCHBUNCH_JWT', token)
}

export function getToken () {
  return localStorage.getItem('_LUNCHBUNCH_JWT')
}
