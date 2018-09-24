import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

import {getFoods} from './actions'

const mapStateToProps = ({currentBox, foods}) => ({currentBox, foods})
// const mapStateToProps = ({currentBox}) => ({currentBox})

const mapDispatchToProps = dispatch => ({
  getFoods: () => dispatch(getFoods())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lunchbox)
