import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [color, setColor] = useState('rgb(49, 46, 46)');


  // function clickOnRed() {
  //   setColor(color = 'red')
  // }

  // function clickOnGreen() {
  //   setColor(color = 'green')
  // }
  // function clickOnBlue() {
  //   setColor(color = 'blue')
  // }
  // function clickOnRedYellow() {
  //   setColor(color = 'yellow')
  // }

  return (
    <>
      <div className="container" style={{ backgroundColor: color }}>
        <h1>Color Changer App Using React </h1>
        <button className='red' onClick={() => {
          setColor("red")
        }}>Red</button>
        <button className='green' onClick={() => {
          setColor("green")
        }}>Green</button>
        <button className='blue' onClick={() => {
          setColor("blue")
        }}>Blue</button>
        <button className='yellow' onClick={() => {
          setColor("yellow")
        }}>Yellow</button>
      </div>
    </>
  )
}

export default App
