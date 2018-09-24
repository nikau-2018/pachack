import {
  GET_FOODS_PENDING,
  GET_FOODS,
  GET_FOODS_ERROR } from './actions'

const defaultState = {
  foods: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, foods, type}) {
  switch (type) {
    case GET_FOODS_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }

    case GET_FOODS:
      return {
        ...state,
        foods,
        error: null,
        pending: false
      }

    case GET_FOODS_ERROR:
      return {
        ...state,
        foods: null,
        error,
        pending: false
      }

    default:
      return state
  }
}
