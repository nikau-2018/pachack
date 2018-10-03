import request from 'axios'

import {getHeaders} from '../../utils/api'

export const SELECT_FOOD_PENDING = 'SELECT_FOOD_PENDING'
export const SELECT_FOOD = 'SELECT_FOOD'
export const SELECT_FOOD_ERROR = 'SELECT_FOOD_ERROR'

export const selectFoodPending = () => ({type: SELECT_FOOD_PENDING})

export const selectFood = foodItem => ({
  type: SELECT_FOOD,
  foodItem
})

export const selectFoodError = error => ({
  type: SELECT_FOOD_ERROR,
  error
})

export const selectFoodRequest = (foodId, lunchboxId, categoryName) => {
  return dispatch => {
    dispatch(selectFoodPending())

    return request
      .put(`/api/v1/lunchboxes/${lunchboxId}`, {[categoryName]: foodId}, getHeaders())
      .then(() => dispatch(selectFood({categoryName, id: foodId})))
      .catch(({response}) => dispatch(selectFoodError(response.data.error)))
  }
}
