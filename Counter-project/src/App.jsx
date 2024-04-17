import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// let counter = 3;// is tarah se jab hum variable lete he to vo  change to hota he but ui me reflect nhi hota he 
// or isi problem ke solution ke liye hum hooks or ya hum khe ki usestate ka use karte he
//set counter jo he vo hota he hamarah ek function jo value ko update krta he 


function App() {
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    // counter+=1;
    if (counter < 20) {
      setCounter(prevousCounter => prevousCounter + 1
      )   // yah ek batch me hota he to ydi humne multiple time bhi call kra to ye vhi rhega
      setCounter(prevousCounter => prevousCounter + 1)   // ye ek callback leta he 
      console.log(counter);
    }
    else {
      setCounter("you reached the max 20 value")
    }
  }
  const decreaseValue = () => {
    // counter -= 1;
    if (counter > 0) {
      setCounter(counter - 1)
      console.log(counter);
    }
    else {
      setCounter("0 below value is not alowed")
    }
  }
  console.log(counter);
  return (
    <>
      <h1>Click the button to increase counter - {counter}</h1>
      <div>
        <button onClick={addValue}>AddValue</button>
        <button onClick={decreaseValue}>RemoveValue</button>
      </div>
    </>
  )
}

export default App
