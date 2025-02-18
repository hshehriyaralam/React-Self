import React from 'react'
import { createContext } from 'react'
import Component2 from './Component2'

export const Data = createContext()
export const Data1 = createContext()

const Compoents1 = () => {
    const count = 5675677474746
    const name = "sherry"
  return (
    <div>
      <Data.Provider value={count} >
        <Data1.Provider value={name}>
        <Component2 />
        </Data1.Provider>
      </Data.Provider>
    </div>
  )
}

export default Compoents1
