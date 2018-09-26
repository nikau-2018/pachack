import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

import './ProfileScreen.css'
import logo from '../SignIn/logo.png'

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
      <div className='container-fluid bg'>
        <img src={logo} />
        <div>
          <h4>User&#39;s Lunch Bunch Homepage!</h4>
          <p>Welcome to your Lunch Bunch home. Let&#39;s build a lunchbox together.</p>
          <button className='but'onClick={this.handleSubmit}>Build My Lunch</button>
        </div>
      </div>
    )
  }
}
