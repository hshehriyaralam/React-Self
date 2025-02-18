import React, { useReducer, useState } from 'react'

const InitilaState = {count : 0}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count : state.count + 1};
        case "decrement":
                return { ...state, count : state.count - 1}
        case "reset":
            return{...state, count : state.count + action.payload }
        case "incremnetByAmount":
                return{count : state.count + action.payload  }
         case "decremnetByAmount":
                 return{count : state.count - action.payload  }
        default:
            return state;
    }
}
const InputReducer = () => {
    const  [state, dispatch] = useReducer(reducer,InitilaState)
    const [value, setValue] = useState(0)
  return (
    <div>
      <p>InputReducer</p>
      <p className='text-blue-900' >Count {state.count}</p> 
      <button className='border  p-3' onClick={() => dispatch({type: "increment"})} >+</button>
      <button className='border  p-3' onClick={() => dispatch({type: "decrement"})} >-</button>
      <div>
        <input type="number" value={value} className='border border-2 p-2' onChange={(e) => setValue(e.target.value)}   />
        <button className='border  p-3' onClick={() => dispatch({type : "incremnetByAmount", payload: Number(value)}, setValue(0))} >Add</button>
        <button className='border  p-3' onClick={() => dispatch({type : "decremnetByAmount", payload: Number(value)}, setValue(0))} >Substract</button>
      </div>
    </div>
  )
}

export default InputReducer
