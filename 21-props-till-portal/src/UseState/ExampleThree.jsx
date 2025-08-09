import React, { useEffect, useState } from 'react'

function ExampleThree() {
    const [name, setName] = useState(() => {     
        const savedName = localStorage.getItem('name')
        return savedName ? JSON.parse(savedName) : ""
}) 
const handleChange = (event) => {
    setName(event.target.value)
}

useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name))
}, [name])

const clearName = () =>  setName("")
return (
    <div className='text-2xl text-center mt-10'>

      <h1>Example Three</h1>
      <p>Name : {name}</p>
      <input type="text" placeholder='Enter your name' value={name} 
      onChange={handleChange}
      className='border' />
      <button className='p-1 border text-1xl' onClick={clearName}>Clear Name</button>
    </div>
  )
}

export default ExampleThree;