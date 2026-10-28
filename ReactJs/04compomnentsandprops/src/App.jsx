
import Card from "./Components/Card"
import shrutika from './assets/shrutika.jpeg';
import pritesh from './assets/icon.png'
import bhaiyya from './assets/file.png'

function App() {


  return (
  
    <div className="container">
  
<Card name="shrutika Dhanad" image={shrutika} desc="hello my name is shrutika dhanad! i am studying react " style={{}} />
<Card name="pritesh Dhanad" image={pritesh} desc="hello my name is pritesh dhanad! i am teaaching react " style={{}} />
<Card name="bhaiyya bhau" image={pritesh} desc="hello my name is bhaiyya Bhau! i am doing job " style={{}} />

  </div>
  )
}

export default App
