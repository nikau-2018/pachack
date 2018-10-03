import React, { Component } from 'react'

import './styles.css'
import Food from '../Food'

export default class Lunchbox extends Component {
  componentDidMount () {
    this.props.getFoods()
  }

  render () {
    const { currentBox, foods } = this.props

    if (!foods.foods) {
      return <div>Loading component goes here</div>
    }

    const { foods: { produce, protein, dairy, grains, other }, pending } = foods

    if (pending) {
      return <div>Loading...</div>
    }

    return (
      <div className='lunchbox'>
        <div className='row'>
          <div className='col compartment produce'>
            {produce.map((item) => {
              return <Food
                key={item.id}
                foodId={item.id}
                category='produce'
                name={item.name}
                currentBox={currentBox}
                selectFood={this.props.selectFood}
              />
            })}
          </div>
          <div className='col compartment grains'>
            {grains.map((item) => {
              return <Food
                key={item.id}
                foodId={item.id}
                category='grains'
                name={item.name}
                currentBox={currentBox}
                selectFood={this.props.selectFood}
              />
            })}
          </div>
        </div>

        <div className='row'>
          <div className='col compartment dairy'>
            {dairy.map((item) => {
              return <Food
                key={item.id}
                foodId={item.id}
                category='dairy'
                name={item.name}
                currentBox={currentBox}
                selectFood={this.props.selectFood}
              />
            })}
          </div>
          <div className='col compartment protein'>
            {protein.map((item) => {
              return <Food
                key={item.id}
                foodId={item.id}
                category='protein'
                name={item.name}
                currentBox={currentBox}
                selectFood={this.props.selectFood}
              />
            })}
          </div>
          <div className='col compartment other'>
            {other.map((item) => {
              return <Food
                key={item.id}
                foodId={item.id}
                category='other'
                name={item.name}
                currentBox={currentBox}
                selectFood={this.props.selectFood}
              />
            })}
          </div>
        </div>
      </div>
    )
  }
}
