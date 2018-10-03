import React, { Component } from 'react'

import './styles.css'
import Food from '../Food'

export default class Lunchbox extends Component {
  componentDidMount () {
    this.props.getFoods()
  }

  renderFood = food => <Food
    key={food.id}
    foodId={food.id}
    category={food.categoryName}
    name={food.name}
    currentBox={this.props.currentBox}
    selectFood={this.props.selectFood}
  />

  render () {
    const { currentBox, foods, lunchbox } = this.props

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
            {lunchbox && lunchbox.produce
              ? this.renderFood(lunchbox.produce)
              : produce.map(this.renderFood)}
          </div>
          <div className='col compartment grains'>
            {lunchbox && lunchbox.grains
              ? this.renderFood(lunchbox.grains)
              : grains.map(this.renderFood)}
          </div>
        </div>

        <div className='row'>
          <div className='col compartment dairy'>
            {lunchbox && lunchbox.dairy
              ? this.renderFood(lunchbox.dairy)
              : dairy.map(this.renderFood)}
          </div>
          <div className='col compartment protein'>
            {lunchbox && lunchbox.protein
              ? this.renderFood(lunchbox.protein)
              : protein.map(this.renderFood)}
          </div>
          <div className='col compartment other'>
            {lunchbox && lunchbox.other
              ? this.renderFood(lunchbox.other)
              : other.map(this.renderFood)}
          </div>
        </div>
      </div>
    )
  }
}
