export function setToken (token) {
  localStorage.setItem('_LUNCHBUNCH_JWT')
}

export function getToken () {
  return localStorage.getItem('_LUNCHBUNCH_JWT')
}
