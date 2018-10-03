import {
  CREATE_LUNCHBOX_PENDING,
  CREATE_LUNCHBOX,
  CREATE_LUNCHBOX_ERROR } from '../ProfileScreen/actions'
import { SELECT_FOOD } from '../Food/actions'

const defaultState = {
  lunchbox: null,
  error: null,
  pending: false
}

export default function (state = defaultState, {error, foodItem, lunchbox, type}) {
  switch (type) {
    case CREATE_LUNCHBOX_PENDING:
      return {
        ...state,
        error: null,
        pending: true
      }

    case CREATE_LUNCHBOX:
      return {
        ...state,
        lunchbox,
        error: null,
        pending: false
      }

    case CREATE_LUNCHBOX_ERROR:
      return {
        ...state,
        lunchbox: null,
        error,
        pending: false
      }

    case SELECT_FOOD:
      return {
        ...state,
        lunchbox: {
          ...state.lunchbox,
          [foodItem.categoryName]: foodItem.id
        }
      }

    default:
      return state
  }
}
