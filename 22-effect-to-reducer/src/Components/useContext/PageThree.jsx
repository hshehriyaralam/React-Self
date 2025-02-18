import React from 'react'
import { Data, DataTwo } from './PageOne'
import { useContext } from 'react'
const PageThree = () => {
    const Name = useContext(Data)
    const age = useContext(DataTwo)
  return (
    <div>
      <p>My name is {Name} & I'm {age} years old</p>
    </div>
  )
}

export default PageThree
