import { useCallback, useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Password from 'antd/es/input/Password'

function App() {
 let [length1, setLength] = useState(8)
 let [numberAllowed,setnumberAllowed] = useState(false)
 let [charAllowed, SetcharAllowed] = useState(false)
let [password, setpassword] = useState("")
let paswordGenerator = useCallback(()  => {
  let pass = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberAllowed) str += "0123456789"
  if(charAllowed) str += "!@#$%^&*()"
  for (let i = 1; i <=length1 ; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
  }
  setpassword(pass)
},[length1,numberAllowed,charAllowed,setpassword])


const passwordRef = useRef(null)  

let copyPasswordClick = useCallback(() => {
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0, 30)
  window.navigator.clipboard.writeText(password)
}, [password])

useEffect(() => {
  paswordGenerator()
},
[length1,numberAllowed,charAllowed,paswordGenerator])

  return (
   <>
   

   <div className='w-full max-w-xl  mx-auto shadow-md rounded-lg  text-center px-4 py-5  my-14 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center  text-2xl mb-3 font-medium '>Password Generator </h1>
    <div className='flex shadow rounded-lg overflow-hidden  mb-4'>
      <input
       type="text"
       value={password}
       className='outline-none w-full py-2 px-3 text-2xl '
       placeholder='Password'
       readOnly
       ref={passwordRef}
       />
       <button className='outline-none bg-blue-700 text-white px-4 py-2 shrink-0 font-medium text-1xl ' onClick={copyPasswordClick}>Copy</button>
    </div>
    <div className='flex text-base gap-x-8 font-medium px-5 '>
      <div className='flex items-center gap-x-1 '>
        <input
         className='cursor-pointer accent-blue-800 '
         type="range"
         min={8}
         max={30}
         value={length1}
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label className='text-1xl ' >Length: {length1}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
         className='cursor-pointer accent-blue-800'
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => {
          setnumberAllowed((prev) => !prev)
        }}
         />
         <label htmlFor='numberInput' className='text-1xl'>Number</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input 
         className='cursor-pointer accent-blue-800'
        type="checkbox"
        defaultChecked={charAllowed}
        id='characterInput'
        onChange={() => {
          SetcharAllowed ((prev) => !prev)
        }}
        />
        <label htmlFor="characterInput"> Characters</label>
      </div>
    </div>
   </div>
 
   
   </>
   
  )
}

export default App
