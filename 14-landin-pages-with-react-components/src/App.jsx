import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Components/Button'

function App() {
  
const product = [
  {name : "Photo", key : 1},
  {name : "Audio", key : 2},
  {name : "video", key : 3},
]
  return (
        <div className='text=1xl font-normal bg-gray-800 w-full h-screen text-center py-48'>
        <h1 className='text-2xl font-semibold'>Landing Page</h1>
       
        <div className='flex  justify-center my-10 gap-10 text-white font-bold'>
          < Button label= "Home Page" borderColor={'border-black'} bgColor={'bg-teal-900'} />
          < Button label= "About Us" borderColor={'boder-purole-900'} bgColor={'bg-teal-500'} />
          < Button   label={"Contact Us"} bgColor={'bg-amber-900'} />
         
        </div>
        </div>
  )
}

export default App
