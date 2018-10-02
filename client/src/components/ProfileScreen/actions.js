import request from 'axios'

import {getHeaders} from '../../utils/api'

export const CREATE_LUNCHBOX_PENDING = 'CREATE_LUNCHBOX_PENDING'
export const CREATE_LUNCHBOX = 'CREATE_LUNCHBOX'
export const CREATE_LUNCHBOX_ERROR = 'CREATE_LUNCHBOX_ERROR'

export const createLunchboxPending = () => ({type: CREATE_LUNCHBOX_PENDING})

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
      .post(`/api/v1/lunchboxes`, {userId}, getHeaders())
      .then(res => dispatch(createLunchboxAction(res.data.lunchbox)))
      .catch(({response}) => dispatch(createLunchboxError(response.data.error)))
  }
}
