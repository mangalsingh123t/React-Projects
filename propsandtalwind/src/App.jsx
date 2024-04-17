// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Componants/Card.jsx'

function App() {
  // const myInfo = {
  //   name: "Mangal Banna",
  //   age: 20,
  //   village: "Thikana Piplya Nankar"
  // }

  // const students=["mangal banna","devendra banna","aayush malviya","rishabh"] 

  return (
    <>
      <h1 className='bg-gray-400 text-white rounded-xl p-4'>Lets Learn Props</h1>

      {/* <Card value="mangal banna" myInfo={myInfo} student={students} /> */}
            <Card laptopName="Asus" contary="America"/>

    </>
  )
}

export default App
