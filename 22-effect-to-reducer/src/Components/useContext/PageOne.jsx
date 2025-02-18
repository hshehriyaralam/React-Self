import React from 'react'
import { createContext } from 'react'
import PageThree from './PageThree'
import PageTwo from './PageTwo'
export const Data = createContext()
export const DataTwo = createContext()

const PageOne = () => {
    const Name = "sherry"
    const age = 763676582834
  return (
    <div>
      <Data.Provider value={Name}>
        <DataTwo.Provider value={age}>
        <PageTwo />
        </DataTwo.Provider>
      </Data.Provider>

    </div>
  )
}

export default PageOne
