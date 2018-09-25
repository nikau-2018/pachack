import React, { Component } from 'react'

import './SignInForm.css'

export default class SignInForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    this.props.signIn(this.state.username, this.state.password)
  }

  render () {
    const {error} = this.props

    return (
      <div className='container login'>

        <h3>Log In</h3>
        {error && <p className='error'>{error}</p>}

        <div className='row'>
          <input className='username form-control'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={this.state.username}
            onChange={this.handleChange}/>
        </div>

        <div className='row'>
          <input className='password form-control'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.handleChange}/>
        </div>

        <div className='row'>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary"
            type='submit'>Submit</button>
        </div>
      </div>
    )
  }
}
