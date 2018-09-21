import React, { Component } from 'react'
import request from 'axios'
import { Route } from 'react-router-dom'

// import banner from './Pac-Hack_Banner.jpg'
import './App.css'
import Home from '../Home/Home'
import Lunchbox from '../Lunchbox'
import Profile from '../Profile/Profile'

class App extends Component {
  componentDidMount () {
    // Sample API request, remove this!
    request
      .get('/api/v1/users')
      .then(res => {
      // eslint-disable-next-line no-console
        console.log('Yup, API on 3001 sent:', res.data, 'with status', res.status)
      })
      // eslint-disable-next-line no-console
      .catch(console.error)
  }

  render () {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/lunchbox' component={Lunchbox} />
        <Route exact path='/profile' component={Profile} />
      </div>
    )
  }
}

export default App
