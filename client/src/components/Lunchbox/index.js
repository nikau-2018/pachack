import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

const mapStateToProps = ({currentBox, foods}) => ({currentBox, foods})

export default connect(mapStateToProps)(Lunchbox)
