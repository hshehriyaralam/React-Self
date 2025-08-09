import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let constant = 12
let [count, setcount] = useState(constant)

let addValue = () => {
setcount((count) => count+1)
setcount((count) => count+1)
setcount((count) => count+1)
setcount((count) => count+1)
}

let removeValue = () => {
  setcount(count - 1)
}
  return (
    <>
      <h1>Counter {count} </h1>
      <button onClick={addValue}>Add Value {count}</button>
      <p>This Counter {count}</p>
      <button onClick={removeValue}>Remove Value {count}</button>
    </>
  )
}

export default App
