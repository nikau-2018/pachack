import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Footer from '../Footer'

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
      <div>
        <Header />
        <div>
          <h1>User&#39;s Lunch Bunch Homepage!</h1>
          <p>Welcome to your Lunch Bunch home. Let&#39;s build a lunchbox together.</p>
          <button onClick={this.handleSubmit}>Build My Lunch</button>
        </div>
        <Footer />
      </div>
    )
  }
}
