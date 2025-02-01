import React from 'react'

function ComponentTwo({count, handleClick}) {
  return (
    <div className='border-2 my-3'>
      <h1>Component Two</h1>
      <p>{count}</p>
      <button onClick={handleClick} >Decrement</button>
      
    </div>
  )
}

export default ComponentTwo
