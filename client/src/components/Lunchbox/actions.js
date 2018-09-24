import request from 'axios'

import {getHeaders} from '../../utils/api'

export const GET_FOODS_PENDING = 'GET_FOODS_PENDING'
export const GET_FOODS = 'GET_FOODS'
export const GET_FOODS_ERROR = 'GET_FOODS_ERROR'

export const getFoodsPending = () => ({type: GET_FOODS_PENDING})

export const getFoodsList = foods => ({
  type: GET_FOODS,
  foods
})

export const getFoodsError = error => ({
  type: GET_FOODS_ERROR,
  error
})

export const getFoods = () => {
  return dispatch => {
    dispatch(getFoodsPending())

    return request
      .get(`/api/v1/foods`, getHeaders())
      .then(res => dispatch(getFoodsList(res.data)))
      .catch(({response}) => dispatch(getFoodsError(response.data.error)))
  }
}
