import { connect } from 'react-redux'
import SignIn from './SignIn'

import {signInUser} from './actions'

const mapStateToProps = ({currentUser}) => ({ currentUser })

const mapDispatchToProps = dispatch => ({
  signIn: (username, password) => dispatch(signInUser(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
