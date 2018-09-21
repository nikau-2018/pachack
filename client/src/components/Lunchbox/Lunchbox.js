import React, { Component } from 'react'

import './Lunchbox.css'

export default class Lunchbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      lunchbox: props.lunchbox
    }
  }
  render () {
    return (
      <div>
        {this.state.lunchbox.produce}
        {this.state.lunchbox.grains}
        {this.state.lunchbox.dairy}
        {this.state.lunchbox.protein}
        {this.state.lunchbox.other}
      </div>
    )
  }
}
