import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import './bootstrap.min.css'
import './styles.css'
import LunchboxScreen from '../LunchboxScreen'
import ProfileScreen from '../ProfileScreen'
import SignInScreen from '../SignInScreen'

export default class App extends Component {
  render () {
    return (
      <div className="bg container-fluid">
        <Route exact path='/' component={SignInScreen} />
        <Route path='/lunchbox' component={LunchboxScreen} />
        <Route path='/profile' component={ProfileScreen} />
      </div>
    )
  }
}
