import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Color, setColor] = useState("Olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : Color}}
    > 
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 xp-2'>
        <div className='flex flex-wrap justify-center gap-3
        shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "red"}}
          onClick={() => setColor("red")}
          >Red</button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "blue"}}
          onClick={() => setColor("blue")}
          >Blue</button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "green"}}
          onClick={() => setColor("green")}
          >Green</button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "orange"}}
          onClick={() => setColor("orange")}
          >Orange</button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "purple"}}
          onClick={() => setColor("purple")}
          >Purple</button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "Aqua"}}
          onClick={() => setColor("Aqua")}
          >Aqua</button>
          <button className='outline-none px-4 py-1 rounded-full text-white font-medium text-black' style={{backgroundColor : "yellow"}}
          onClick={() => setColor("yellow")}
          >Yellow</button>
           <button className='outline-none px-4 py-1 rounded-full text-white font-medium' style={{backgroundColor : "black"}}
          onClick={() => setColor("black")}
          >Black</button>
        </div>

    </div>
    
    </div>
  )
}

export default App
