import React, { useState } from 'react'
import './CounterCard.css'

const CounterCard = () => {

    const [count, setCount]= useState(0)

  return (
    <div className='counter-cont'>
      <h3 id='head'>You have Clicked {count} Times</h3>
      <button id='btn'
       onClick={
        ()=>{setCount(count+1)}}>
            Click Me
            </button> 
    </div>
  )
}

export default CounterCard
