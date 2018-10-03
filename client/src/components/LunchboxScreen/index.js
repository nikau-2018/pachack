import React, { Component } from 'react'

import Lunchbox from '../Lunchbox'
import './styles.css'

export default class LunchboxScreen extends Component {
  render () {
    return (
      <div className='landscape'>
        <Lunchbox />
      </div>
    )
  }
}
