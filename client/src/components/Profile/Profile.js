import React, { Component } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit () {
    this.props.createLunchbox(currentUser.id)
  }

  render () {
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
