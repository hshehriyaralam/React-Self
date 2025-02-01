import React from 'react'
import { useState } from 'react'

function UseStateNumber() {
    const [count, setCount] = useState(0)
    // console.log(count);
    
    const Increment = () => {
       setCount((preCount) => preCount + 1)
       setCount((preCount) => preCount + 1)
       setCount((preCount) =>preCount + 1)
       setCount((preCount) => preCount + 1)
       setCount((preCount) => preCount + 1)
    }

  return (
    <div className='text-center'>
      <h1 className='text-4xl text-center mt-10'>{count}</h1>
      <button className='p-3 border text-center mt-4' onClick={Increment}>Increment</button>
      <button className='p-3 border text-center mt-4' onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default UseStateNumber
