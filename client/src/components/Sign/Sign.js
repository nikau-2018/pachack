import React, { Component } from 'react'

import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

class Sign extends Component {
  constructor (props) {
    super(props)
    this.state = {
      signin: true,
      currentUser: props.currentUser
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    this.setState({
      signin: !this.state.signin
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.handleSubmit}>Sign Up</button>
        <p>{this.state.signin ? <SignIn /> : <SignUp/>}</p>
      </div>
    )
  }
}

export default Sign
