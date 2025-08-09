import React from 'react'
import { useId } from 'react'

const UniqueId = () => {
    const id = useId()
    const id2 =useId() 
  return (
    <div  className='text-black'>
      <label htmlFor={`${id}-email`}>Email</label>
      <input type="email" className='border ' id={`${id}-email`} />
      <br />

      <label htmlFor={`${id2}-pass`}>Email</label>
      <input type="password" className='border ' id={`${id2}-pass`} />
    </div>
  )
}

export default UniqueId
