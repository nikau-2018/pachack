import React, { Component } from 'react'

import './Lunchbox.css'
import Food from '../Food'

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
      <div className='lunchbox'>
        <div className='row top'>
          <div className='col-md-6 compartment'>
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
          <div className='col-md-6 compartment'>
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

        <div className='row'>
          <div className='col-md-4 compartment'>
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
          <div className='col-md-4 compartment'>
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
          <div className='col-md-4 compartment'>
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
    )
  }
}
