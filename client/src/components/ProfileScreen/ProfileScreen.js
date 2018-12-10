import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './styles.css'

export default class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.build = this.build.bind(this)
    this.reset = this.reset.bind(this)
  }

  build (evt) {
    this.props.createLunchbox(this.props.currentUser.user.id)
  }

  reset (evt) {
    this.props.resetLunchbox(this.props.currentUser.user.id)
  }

  render () {
    if (!this.props.currentUser.user) {
      return (
        <Redirect to='/' />
      )
    }

    if (this.props.currentBox.lunchbox) {
      return (
        <Redirect to='/lunchbox' />
      )
    }

    return (
      <div className='profile'>
        <h2>Let&lsquo;s build a lunchbox together.</h2>
        <button className='but form-control' onClick={this.build}>Build My Lunch</button>
        <button className='but form-control' onClick={this.reset}>Reset</button>
        <h3>Imagine more features (like a list of lunchboxes) here!</h3>
      </div>
    )
  }
}
