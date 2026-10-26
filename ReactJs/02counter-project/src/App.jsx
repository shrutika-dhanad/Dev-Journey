import {useState} from 'react'
import './App.css'

function App() {
  const[counter , setCounter]= useState(0)

 
  const Addvalue= ()=>{
  if(counter < 20){
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    setCounter(counter + 1)

    // setCounter(prevCounter => prevCounter+ 1)
    // setCounter(prevCounter => prevCounter+ 1)
    // setCounter(prevCounter => prevCounter+ 1)
    // setCounter(prevCounter => prevCounter+ 1)
    // setCounter(prevCounter => prevCounter+ 1)


  }
  }


  const RemoveValue=()=>{
    if(counter > 0){
    setCounter(counter - 1)
  }
}



  return (
   <>
   <h1>Shrutika And React | Counter Project 1</h1>
     <h3>My react jouney is start from Now !</h3>
  <br />

<h2>Counter : {counter}</h2>

  <button className='btn' onClick={Addvalue}> increase : {counter}</button>


  <br />

  <button className='btn' onClick={RemoveValue}> Decrease : {counter}</button>
   </>
  )
}

export default App
