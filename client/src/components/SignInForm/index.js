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
      <div className='container'>
        <div className='loginrow'>
          <h3>Log In</h3>
          {error && <p className='error'>{error}</p>}</div>

        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-3'>
            <p className='inputform'>Username:</p></div>
          <div className='col-md-3'>
            <input className='username form-control'
              type='text'
              name='username'
              value={this.state.username}
              onChange={this.handleChange}/>
          </div>
        </div>

        <div className='row'>
          <div className='col-md-3'></div>
          <div className='col-md-3'>
            <p className='inputform'>Password:</p></div>
          <div className='col-md-3'>
            <input className='password form-control'
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}/>
          </div>
        </div>

        <div className='row button'>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary"
            type='submit'>Submit</button>

          <button
            className="btn btn-primary"
            onClick={this.handleSubmit}>Register</button>
        </div>

      </div>
    )
  }
}
