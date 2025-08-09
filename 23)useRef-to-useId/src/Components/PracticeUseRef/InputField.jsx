import React, { useRef } from 'react'

const InputField = () => {
    const InputRef = useRef()

    const handleInput = () => {
        InputRef.current.focus()
        InputRef.current.value = "SHahmeer"
    }
  return (
    <div>
       <p>Input Fields</p>
       <input type="text"  ref={InputRef} />
       <button className='px-1 py-1 roundede bg-blue-400 text-white rounded '
        onClick={handleInput} > Update AND Focus </button>
    </div>
  )
}

export default InputField
