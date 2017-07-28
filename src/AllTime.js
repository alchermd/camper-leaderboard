import React from 'react'
import './AllTime.css'

const AllTime = ({onClick}) =>
  (<span className="AllTime"  onClick={() => onClick()}>
    All Time
  </span>)

export default AllTime