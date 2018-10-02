import React, { Component } from 'react'

import Header from '../Header'
import Lunchbox from '../Lunchbox'

export default class LunchboxScreen extends Component {
  render () {
    return (
      <div className='container'>
        <Header />
        <Lunchbox />
      </div>
    )
  }
}
