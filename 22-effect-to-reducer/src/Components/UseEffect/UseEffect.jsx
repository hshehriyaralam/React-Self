import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [value, setValue] = useState(0)

    
        useEffect(() => {
            if(value > 0){
                console.log("Call useEffect");
                // console.log(`value is ${value} `);
            }
        },[value])
    
  return (
    <div className='text-2xl text-center pt-2'>
      <h1>UseEffect</h1>
      <p>{value}</p>
      <button className='p-2 border'  onClick={() => setValue(value + 1)} >Click</button>
    </div>
  )
}

export default UseEffect
