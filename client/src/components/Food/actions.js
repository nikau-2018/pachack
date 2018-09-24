import request from 'axios'

import {getHeaders} from '../../utils/api'

export const SELECT_FOOD_PENDING = 'SELECT_FOOD_PENDING'
export const SELECT_FOOD = 'SELECT_FOOD'
export const SELECT_FOOD_ERROR = 'SELECT_FOOD_ERROR'

export const selectFoodPending = () => ({type: SELECT_FOOD_PENDING})

export const selectFoodList = foodItem => ({
  type: SELECT_FOOD,
  foodItem
})

export const selectFoodError = error => ({
  type: SELECT_FOOD_ERROR,
  error
})

export const selectFood = () => {
  return dispatch => {
    dispatch (selectFoodPending())

    return request
      .get(`/api/v1/lunchboxes/:foodId/:lunchboxId`, getHeaders())
      .then(res => )
      .catch(({response}) => dispatch (selectFoodError(response.data.error)))
  }
}
