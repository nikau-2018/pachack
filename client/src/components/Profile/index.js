import {connect} from 'react-redux'
import Profile from './Profile'

import {createLunchbox} from '../../actions'

const mapStateToProps = (state) => (
  {currentUser: state.currentUser}
)

const mapDispatchToProps = dispatch => ({
  createLunchbox: (userId) => dispatch(createLunchbox(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
