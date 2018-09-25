import React, { Component } from 'react'

export default class Food extends Component {
  constructor (props) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler () {
    const foodId = this.props.foodId
    const lunchboxId = this.props.currentBox.lunchbox.id
    console.log(foodId, lunchboxId)
    this.props.selectFood(foodId, lunchboxId)
  }

  render () {
    return (
      <div className={this.props.category}>
        <div className={`${this.props.category}button`}>
          <button onClick={this.clickHandler}>{this.props.name}</button>
        </div>
      </div>
    )
  }
}
