import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

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
    const { currentUser, login } = this.props

    if (currentUser === 'pending') {
      return (
        <div>Logging in...</div>
      )
    }

    if (currentUser && currentUser.id) {
      return (
        <Redirect to='/profile' />
      )
    }

    return (
      <div>
        <button onClick={this.handleSubmit}>Sign Up</button>
        <div>{this.state.signin ? <SignIn login={login} /> : <SignUp/>}</div>
      </div>
    )
  }
}

export default Sign
