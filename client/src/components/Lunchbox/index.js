import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

// const mapStateToProps = ({currentBox, foods}) => ({currentBox, foods})
const mapStateToProps = ({currentBox}) => ({currentBox})

export default connect(mapStateToProps)(Lunchbox)
