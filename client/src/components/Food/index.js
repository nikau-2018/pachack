import React, { Component } from 'react'

import './styles.css'

export default class Food extends Component {
  constructor (props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    const foodId = this.props.foodId
    const lunchboxId = this.props.currentBox.lunchbox.id
    const categoryName = this.props.category
    this.props.selectFood(foodId, lunchboxId, categoryName)
  }

  render () {
    // Images for food: this is hacky, and needs to go away eventually.
    // Images have the same name as their food id. Yes, I know. It's a prototype, dammit!
    return (
      <div>
        <button
          alt={this.props.name}
          className='food'
          onClick={this.clickHandler}
          style={{ background: `center / cover no-repeat url("images/${this.props.foodId}.png")` }}
        />
      </div>
    )
  }
}
