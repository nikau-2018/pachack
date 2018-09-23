import { CREATE_LUNCHBOX_ERROR } from '../actions'


export default function (state = false, action) {
  switch (action.type) {
    case CREATE_LUNCHBOX_ERROR:
      return null
    default:
      return state
  }
}
