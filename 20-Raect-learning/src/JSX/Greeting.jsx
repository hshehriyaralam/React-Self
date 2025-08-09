import React from 'react'

function Greeting() {
    const CustomerName = "John"
    const date = new Date()
  return (
    <div className='text-center'>
      <p>Custommer Name is : {CustomerName} </p>
      <p>Date :{date.getDate()}</p>
    </div>
  )
}

export default Greeting
