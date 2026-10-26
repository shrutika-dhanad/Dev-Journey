import React from 'react'



function Card({name,location='Pune'}) {

    console.log(name)
    console.log(location)
  return (
    <>

<h1>Props in React {name}</h1>
<h2>location : - {location}</h2>
    </>
  )
}

export default Card