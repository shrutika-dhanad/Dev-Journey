import React from 'react'
import shrutika  from '../assets/shrutika.jpeg';
import './Card.css'
const Card = (props) => {
  return (
    <div className='user-cont'>
     <h3 id='name'>{props.name}</h3>
     <img id='myImg' src={props.image} alt="shruti" />
     <p id='myDesc'>{props.desc}</p>
    </div>
  )
}

export default Card
