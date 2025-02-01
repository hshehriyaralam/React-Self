import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState()
  return (
    <div className='text-2xl text-center mt-5'>
        <h1>Count : {count}</h1>
        <button className='text-3xl border p-3 ' onClick={() => {setCount(count + 1)}} >+</button>
    </div>
  )
}

export default Counter
