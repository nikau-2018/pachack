import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

const mapStateToProps = (state) => {
  return {
    lunchbox: state.lunchbox
  }
}

export default connect(mapStateToProps)(Lunchbox)
