import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  
  let [length, setLength] = useState(10)
  let [numberAllowed, setnumberAllowed] = useState(false)
  let [CharAllowed, setCharAllowed] = useState(false)
  let [password, setpassword] = useState("")

let passwordGenerate = useCallback(() => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(CharAllowed) str += "!@#$%^&*()"

  for (let i = 0; i <=length ; i++) {
    let char = Math.floor(Math.random () * str.length + 1)
    pass += str.charAt(char)
    
  }
  setpassword(pass)
},[length,numberAllowed,CharAllowed,setpassword])

let pasRef = useRef(null)

let copyPasswordClip = useCallback(() => {
  pasRef.current?.select()
  pasRef.current?.setSelectionRange(0,30)
  window.navigator.clipboard.writeText(password)
}, [password])
useEffect(() => {
  passwordGenerate()
}, [length, numberAllowed, CharAllowed, passwordGenerate])
  return (
    <>
    <div  className='w-full max-w-xl  mx-auto shadow-md rounded-lg  text-center px-4 py-5  my-14 text-amber-700	 bg-neutral-900'>
      <h1  className='text-white text-center  text-2xl mb-3 font-mediu'> Password Generate</h1>
      <div  className='flex shadow rounded-lg overflow-hidden  mb-4'>
      {/* password input */}
        <input
         type="text"
         value={password}
         placeholder='Password'
         readOnly
        className='outline-none w-full  px-3 text-2xl text-stone-800'
        ref={pasRef}
          />
         {/* Copy Butttons */}
         <button className='outline-none bg-sky-800 text-white px-4 text-1xl font-medium py-4 shrink-0 '
         onClick={copyPasswordClip}>Copy</button>
      </div>
      {/* lenght, number & character Container */}
      <div className='flex text-base gap-x-8 font-medium px-5 '>
        <div className='flex items-center gap-x-1'>
          {/* lenght range */}
          <input 
          type="range"
          className='cursor-pointer accent-sky-800'
          min={8}
          max={30}
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
           />
           <label className='text-1xl  mx-2'> Length : {length}</label>

        </div>
        <div className='flex items-center gap-x-1'>
          {/* number Check Box */}
          <input type="checkbox"
          defaultChecked={numberAllowed}
          className='cursor-pointer accent-sky-800'
          id='numberInput'
          onChange={() => {
            setnumberAllowed((prev) => !prev)
          }}
           />
           <label htmlFor="numberInput">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={CharAllowed}
          id='CharAllowed'
          className='cursor-pointer accent-sky-800'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="CharAllowed"> Characters</label>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
