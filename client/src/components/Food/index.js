import { connect } from 'react-redux'
import Food from './Food'

import {selectFood} from './actions'

const mapDispatchToProps = dispatch => ({
  selectFood: () => dispatch(selectFood())
})

export default connect(mapDispatchToProps)(Food)
