import React from 'react'

const Food = (props) => (
  <div className={props.className}>
    <div className={props.category}>
      <div className={`${props.category}button`}>
        <button>Cucumber</button>
      </div>
      <div className={`currentstate-${props.category}`}>
        {currentBox.lunchbox ? currentBox.lunchbox.produce : <p>empty</p>}
      </div>
    </div>
  </div>
)

export default Food
