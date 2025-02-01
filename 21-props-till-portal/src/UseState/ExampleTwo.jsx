import React, { useState } from 'react'

function ExampleTwo() {

    const [count, setCount] = useState(() => (
        Math.floor(Math.random() * 100)
    )) 

    const changeNumber = () => {
        setCount(() => Math.floor(Math.random() * 100))
    }

  return (
    <div className='text-2xl'>
      <h1>Example Two</h1>
      <p>Count :{count}</p>
      <button className='text-2xl border p-2 m-5 ' onClick={changeNumber}>Chnage Number </button>
    </div>
  )
}

export default ExampleTwo
