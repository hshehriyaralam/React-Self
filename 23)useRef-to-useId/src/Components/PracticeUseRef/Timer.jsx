import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const refVariable = useRef()
    const [count,setCount] = useState(0)
    useEffect(() => {
        refVariable.current =  setInterval(() => {
            setCount(prevCcount => prevCcount + 1)
        },1000)

        return () => {
            clearInterval(refVariable.current)
        }
    },[])
  return (
    <div>
      <h1>Timer</h1>
      <p>Count :{count}</p>
      <button className='px-1 py-1 rounded bg-amber-700'
      onClick={() => clearInterval(refVariable.current)}
      >Stop Time</button>
    </div>
  )
}

export default Timer