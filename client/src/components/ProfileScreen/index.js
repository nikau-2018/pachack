import {connect} from 'react-redux'
import ProfileScreen from './ProfileScreen'

import {createLunchbox, resetLunchbox} from './actions'

const mapStateToProps = ({currentUser, currentBox}) => ({currentUser, currentBox})

const mapDispatchToProps = dispatch => ({
  createLunchbox: userId => dispatch(createLunchbox(userId)),
  resetLunchbox: userId => dispatch(resetLunchbox(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
