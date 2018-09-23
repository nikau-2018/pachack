import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

const mapStateToProps = ({lunchbox}) => ({lunchbox})

export default connect(mapStateToProps)(Lunchbox)
