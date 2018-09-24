import React, { Component } from 'react'

import Footer from '../Footer'
import SignIn from '../SignIn'

export default class SignInScreen extends Component {
  render () {
    return (
      <div className="container-fluid">
        <SignIn />
        <Footer />
      </div>
    )
  }
}
