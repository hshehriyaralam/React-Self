import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
 
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl '>Tailwind CSS</h1>
      <Card UserName="SHerry" Descript={"lorem20"} />
      <Card UserName="Shahmeer" Descript={"lorem20"}   />
    </>
  )
}

export default App
