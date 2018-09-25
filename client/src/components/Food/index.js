import React from 'react'
import './Food.css'

const Food = (props) => (
  <div className={props.category}>
    <div className={`${props.category}button`}>
      <button className='buttons'>{props.name}</button>
    </div>
  </div>
)

export default Food
