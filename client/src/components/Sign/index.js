import { connect } from 'react-redux'
import Sign from './Sign'

import {loginUser} from '../../actions'

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(loginUser(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sign)
