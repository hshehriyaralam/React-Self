import React, { useEffect, useState } from 'react'

const UseEffectDependency = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`count`);
    },[count])
  return (
    <div>
      <h1>UseEffect with Dependency</h1>
      <p>Count : {count}</p>
      <button 
      className='border p-1 mt-3'
      onClick={() => setCount(count + 1)}> Click Me!</button>
    </div>
  )
}

export default UseEffectDependency
