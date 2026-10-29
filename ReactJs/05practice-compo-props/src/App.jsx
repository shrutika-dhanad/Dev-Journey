
import './App.css';
import Card from './Components/Card';
import shrutika from './assets/shrutika.jpeg';
import pritesh from'./assets/file.png'
import bhaiyya from './assets/icon.png'

function App() {

  return (
   <div className='container'>
  
      
 <Card name="shruti Dhanad"  image={shrutika}  desc={"helloo I'M shruti learning React !"}/>
 <Card name="Pritesh Dhanad"  image={pritesh}  desc={"Hey I'M Pritesh Dhanad | Trainer!"}/>
 <Card name="Bhaiyya Bhau"  image={bhaiyya}  desc={"hii my name is bhaiyya bhau form 8 ekr!"}/>
 <Card name="shruti B dhanad"  image={shrutika}  desc={"hey shrutika Here! React and Javascript"}/>

   </div>
  )
}

export default App
