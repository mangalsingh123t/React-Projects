// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // apne ko is function ka use bar bar kkrna he he thik he to ek to hum kya kar sakte he ki 
  // is function ko bar bar call kare vo bhi thik he but ye pura function use hoga 
  // jo apn chahte nhi 
  // to hum iske liye useCallBack hook ka use krte he 
  // useCallBack hook isme hum ek function as a callback lete he and humko jitni propertis ka use krna he hum utna use kr sakte he 

  //  userRef hook for the reference of the input field 
  const passwordRef = useRef(null);


  const generateRandomPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/"

    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(charIndex);
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])   //usecallback ka use hum sirf optimization ke liye karte he 

  const copyPasswordToClipBourd = useCallback(() => {
    // ? iska use hum option select karne ke liye karte he means yadi 0 password bhi ho to error na aaaye vese is case me 0 rehenge nhi
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,2)
    window.navigator.clipboard.writeText(password);
  }, [password])


  // is tarh se function banaker bhi ho jayga 
  //  function copyPasswordToClipBourd(){
  //   window.navigator.clipboard.writeText(password)
  //  }

  // generateRandomPassword()   is tarah se nhi kr sakte kyuki ek sath bhut sare changes hi rhe he 

  // but useeffect ka use hum jab bhi koi change hota he to usko render karne ke liye karte he 

  useEffect(() => {
    generateRandomPassword()
  }, [length, numberAllowed, charAllowed, generateRandomPassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800 ">
        <h1 className="text-center"> Password Generater</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password} className="outline-none w-full py-1 px-8 mt-2" placeholder="Password"
            ref={passwordRef}
            readOnly />
          <button className="outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 m-2" onClick={copyPasswordToClipBourd}>copy</button>
        </div>

        <div className="flex text-sm gap-x-4">
          <div className="flex items-center" >
            <input type="range" min={8} max={99}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numberAllowed} id="numberInput" onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id="charInput" onChange={() => {
              setCharAllowed((prev) => !prev)
            }} />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
