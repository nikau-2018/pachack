import { connect } from 'react-redux'
import Sign from './Sign'

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Sign)
