// Here's an example of a reducer that 'lives' in the same directory as its component.
// The advantages of this are:
//  - promotes code re-use (could be used in other applications built by our team)
//  - easy to find when navigating large projects, since we know it's always going to be kept with
//  the component
//  - import paths are simpler and less error-prone

import {
  SIGN_IN_PENDING,
  SIGN_IN,
  SIGN_IN_ERROR } from './actions'

// The shape of the currentUser object at application startup.  This also serves as documentation
// for what it _could_ look like later.
const defaultState = {
  error: null,
  pending: false,
  user: null
}

export default function (state = defaultState, {action, error, type, user}) {
  switch (type) {
    case SIGN_IN_PENDING:
      // Keep the rest of our state, remove any previous error message, and change pending to `true`
      return {
        ...state,
        error: null,
        pending: true
      }

    case SIGN_IN:
      // Keep the rest of our state, change pending to false, save the user object returned from the
      // API, and clear previous error messages.
      return {
        ...state,
        error: null,
        pending: false,
        user
      }

    case SIGN_IN_ERROR:
      // Keep the rest of our state (starting to notice a pattern here?), set the error message, and
      // set the user to null. Also cancel the pending status.
      return {
        ...state,
        error,
        pending: false,
        user: null
      }

    default:
      return state
  }
}
