import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    const name = "sherry"
  return (
    <div>
     <ComponentB name={name} />
    </div>
  )
}

export default ComponentA
