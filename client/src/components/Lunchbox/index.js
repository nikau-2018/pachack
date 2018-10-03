import { connect } from 'react-redux'
import Lunchbox from './Lunchbox'

import {getFoods} from './actions'
import {selectFoodRequest} from '../Food/actions'

const mapStateToProps = ({currentBox, foods}) => ({currentBox, foods})

const mapDispatchToProps = dispatch => ({
  getFoods: () => dispatch(getFoods()),
  selectFood: (foodId, lunchboxId, categoryName) => {
    dispatch(selectFoodRequest(foodId, lunchboxId, categoryName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Lunchbox)
