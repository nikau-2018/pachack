import React, { Component } from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default class Profile extends Component {
  render () {
    return (
      <div>
        <Header />
        <div>
          <h1>User&#39;s Lunch Bunch Homepage!</h1>
          <p>Welcome to your Lunch Bunch home. Let&#39;s build a lunchbox together.</p>
          <button>Build My Lunch</button>
        </div>
        <Footer />
      </div>
    )
  }
}
