import React from 'react'
import { useState } from 'react'
const TodoLists = () => {
  const [todos, setTodos] = useState<Array>([])
  const [inputValue, setInputValue] = useState<string>("")

  const handleSubmitt =  (e) => {
    e.preventDefault()
    setTodos([...todos, inputValue])
    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div >
      <h1 className='text-center text-4xl my-10'  >Todo</h1>
      
      <input className='border' type="text" placeholder='add a new Todo' value={inputValue} onChange={handleChange}  />
      <button onClick={handleSubmitt}>Submitt</button>

      <ul>
        {todos?.map((todo, index) => (
          <li  key={index}>Todo :{todo}</li>
))}
      </ul>
    </div>
  )
}


export default TodoLists
