import React from 'react'
import './Last30.css'

const Last30 = ({onClick}) => 
  (<span className="Last30" onClick={() => onClick()}>
    Last 30 Days
  </span>)

export default Last30