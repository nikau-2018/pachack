import {connect} from 'react-redux'
import ProfileScreen from './ProfileScreen'

import {createLunchbox} from './actions'



const mapStateToProps = ({currentUser, currentBox}) => ({currentUser, currentBox})

const mapDispatchToProps = dispatch => ({
  createLunchbox: userId => dispatch(createLunchbox(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
