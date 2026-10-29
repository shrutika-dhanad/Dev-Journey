import React from 'react'
import './Card.css'


const Card = ({name, image, desc}) => {
  return (
    <div className='user-container'>
       <h3 id='name'>{name}</h3>
       <img id='img' src={image} alt="shruti" />
        <p id='desc'>{desc}</p>
    </div>
  )
}

export default Card
