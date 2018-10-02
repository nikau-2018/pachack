import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import './styles.css'

export default class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit () {
    const { user } = this.props.currentUser
    this.props.createLunchbox(user.id)
  }

  render () {
    if (this.props.currentBox.lunchbox) {
      return (
        <Redirect to='/lunchbox' />
      )
    }

    return (
      <div className='profile'>
        <h2>Let&lsquo;s build a lunchbox together.</h2>
        <button className='but form-control' onClick={this.handleSubmit}>Build My Lunch</button>
        <h3>Imagine more features (like a list of lunchboxes) here!</h3>
      </div>
    )
  }
}
