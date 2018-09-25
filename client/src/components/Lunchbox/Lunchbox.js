import React, { Component } from 'react'

import './Lunchbox.css'
import Food from '../Food'
import logo from '../SignIn/logo.png'

export default class Lunchbox extends Component {
  componentDidMount () {
    this.props.getFoods()
  }

  render () {
    const { currentBox, foods } = this.props

    if (!foods.foods) {
      // <Loading />
      return <div>Loading component goes here</div>
    }

    const { foods: { produce, protein, dairy, grains, other }, pending } = foods

    return (
      <div>
        <img className='logo2' src= {logo}/>
        <h1>Your Lunchbox</h1>

        <div className='lunchbox'>
          <div className='row top'>
            <div className='col-md-6 container-fluid produce1'>
              {produce.map((item) => {
                return <Food
                  key={item.id}
                  foodId={item.id}
                  category={'produce'}
                  name={item.name}
                  currentBox={currentBox}
                  selectFood={this.props.selectFood}
                />
              })}
            </div>
            <div className='col-md-6 container-fluid grains1'>
              {grains.map((item) => {
                return <Food
                  key={item.id}
                  foodId={item.id}
                  category={'grains'}
                  name={item.name}
                  currentBox={currentBox}
                  selectFood={this.props.selectFood}
                />
              })}
            </div>
          </div>

          <div className='row bottom'>
            <div className='col-md-4 container-fluid dairy1'>
              {dairy.map((item) => {
                return <Food
                  key={item.id}
                  foodId={item.id}
                  category={'dairy'}
                  name={item.name}
                  currentBox={currentBox}
                  selectFood={this.props.selectFood}
                />
              })}
            </div>
            <div className='col-md-4 container-fluid protein1'>
              {protein.map((item) => {
                return <Food
                  key={item.id}
                  foodId={item.id}
                  category={'protein'}
                  name={item.name}
                  currentBox={currentBox}
                  selectFood={this.props.selectFood}
                />
              })}
            </div>
            <div className='col-md-4 container-fluid other1'>
              {other.map((item) => {
                return <Food
                  key={item.id}
                  foodId={item.id}
                  category={'other'}
                  name={item.name}
                  currentBox={currentBox}
                  selectFood={this.props.selectFood}
                />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
