import React, { Component } from 'react'

import './styles.css'

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
      <form>
        <div className='form-group'>
          <h3>Log In</h3>
          {error && <small className='warning'>{error}</small>}
        </div>

        <div className='form-group'>
          <input className='form-control'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={this.state.username}
            onChange={this.handleChange} />
        </div>

        <div className='form-group'>
          <input className='form-control'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={this.state.password}
            onChange={this.handleChange} />
        </div>

        <div className='form-group'>
          <button
            onClick={this.handleSubmit}
            className="btn btn-primary form-control"
            type='submit'>Submit</button>
        </div>
      </form>
    )
  }
}
