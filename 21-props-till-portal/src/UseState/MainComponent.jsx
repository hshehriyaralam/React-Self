import React, { useState } from 'react'
import ComponentOne from './ComponentOne'
import ComponentTwo from './ComponentTwo'

function MainComponent() {
    const [count, setCount] =  useState(0)
  return (
    <div className='text-2xl m-5'>
      <ComponentOne count={count}   handleClick={() => setCount(count + 1)} />
      <ComponentTwo count={count} handleClick={() => setCount(count - 1)} />
    </div>
  )
}

export default MainComponent
