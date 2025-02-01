import React, { useState } from 'react'

function ExampleOne() {
  const [count, setCount ]  = useState(() => {
    const initialVlaue = 10
    return initialVlaue;
  })
  return (
    <div className='text-2xl'>
      <h1>Example One</h1>
      <p>Count {count}</p>
      <input type="text" placeholder='Enter name'  value={count} onChange={(event) => console.log(event.target.value)
      }/>
    </div>
  )
}

export default ExampleOne
