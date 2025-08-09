import React from 'react'

function Props({name,age,img,isMarried}) {
  return (
    <div className='text-2xl mx-10'>
      <h1>{name}</h1>
      <h1>{age}</h1> 
      <img src={img} alt={name} />
       <p>{isMarried}</p>
    </div>
  )
}

export default Props
