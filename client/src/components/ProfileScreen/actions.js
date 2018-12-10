import request from 'axios'

import { getHeaders } from '../../utils/api'

export const CREATE_LUNCHBOX_PENDING = 'CREATE_LUNCHBOX_PENDING'
export const CREATE_LUNCHBOX = 'CREATE_LUNCHBOX'
export const CREATE_LUNCHBOX_ERROR = 'CREATE_LUNCHBOX_ERROR'
export const RESET_LUNCHBOX_PENDING = 'RESET_LUNCHBOX_PENDING'
export const RESET_LUNCHBOX = 'RESET_LUNCHBOX'
export const RESET_LUNCHBOX_ERROR = 'RESET_LUNCHBOX_ERROR'

export const createLunchboxPending = () => ({ type: CREATE_LUNCHBOX_PENDING })

export const createLunchboxAction = lunchbox => ({
  type: CREATE_LUNCHBOX,
  lunchbox
})

export const createLunchboxError = error => ({
  type: CREATE_LUNCHBOX_ERROR,
  error
})

export const createLunchbox = userId => {
  return dispatch => {
    dispatch(createLunchboxPending())

    return request
      .post(`/api/v1/lunchboxes`, { userId }, getHeaders())
      .then(({ data }) => dispatch(createLunchboxAction(data.lunchbox)))
      .catch(({ response }) => dispatch(createLunchboxError(response.data.error)))
  }
}

export const resetLunchboxPending = () => ({ type: RESET_LUNCHBOX_PENDING })

export const resetLunchboxError = () => ({ type: RESET_LUNCHBOX_ERROR })

export const resetLunchboxAction = () => ({ type: RESET_LUNCHBOX })

export const resetLunchbox = userId => {
  return dispatch => {
    dispatch(resetLunchboxPending())

    return request
      .delete('/api/v1/lunchboxes', { data: { userId }, ...getHeaders() })
      .then(() => dispatch(resetLunchboxAction()))
      .catch(({ response }) => dispatch(resetLunchboxError(response.data.error)))
  }
}

