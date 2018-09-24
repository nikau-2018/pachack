import React from 'react'

const Food = (props) => (
  <div className={props.category}>
    <div className={`${props.category}button`}>
      <button>{props.name}</button>
    </div>
  </div>
)

export default Food
