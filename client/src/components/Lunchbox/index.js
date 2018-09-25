import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

import {getFoods} from './actions'
import {selectFood} from '../Food/actions'

const mapStateToProps = ({currentBox, foods}) => ({currentBox, foods})
// const mapStateToProps = ({currentBox}) => ({currentBox})

const mapDispatchToProps = dispatch => ({
  getFoods: () => dispatch(getFoods()),
  selectFood: () => dispatch(selectFood())
})

export default connect(mapStateToProps, mapDispatchToProps)(Lunchbox)
