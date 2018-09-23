import React, { Component } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import SignIn from '../SignIn'

export default class SignInScreen extends Component {
  render () {
    return (
      <div className="container-fluid">
        <Header />
        <SignIn />
        <Footer />
      </div>
    )
  }
}
