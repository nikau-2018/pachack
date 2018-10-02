import {connect} from 'react-redux'
import SignIn from './SignIn'

import {refreshUserObject, registerUser, signInUser} from './actions'

const mapStateToProps = ({currentUser}) => ({currentUser})

const mapDispatchToProps = dispatch => ({
  refreshUser: () => dispatch(refreshUserObject()),
  register: (username, password) => dispatch(registerUser(username, password)),
  signIn: (username, password) => dispatch(signInUser(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
