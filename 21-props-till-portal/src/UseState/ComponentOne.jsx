import React from 'react'

function ComponentOne({count, handleClick}) {
    const logic = () => handleClick()
  return (
    <div className='border-2'>
      <h1>Component One</h1>
      <p>{count}</p>
      {/* <p></p> */}
      <button onClick={logic} >Increment</button>
    </div>
  )
}

export default ComponentOne
