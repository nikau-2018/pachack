import {
  SELECT_FOOD_PENDING,
  SELECT_FOOD,
  SELECT_FOOD_ERROR } from './actions'

const defaultState = {
  foodItem: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, foodItem, type}) {
  switch (type) {
    case SELECT_FOOD_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }

    case SELECT_FOOD:
      return {
        ...state,
        foodItem,
        error: null,
        pending: false
      }

    case SELECT_FOOD_ERROR:
      return {
        ...state,
        foodItem: null,
        error,
        pending: false
      }

    default:
      return state
  }
}
