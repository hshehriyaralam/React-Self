import React from 'react'
import  {Data,Data1}  from './Compoents1'

const Compoents3 = () => {
  return (
    <div>
      <Data1.Consumer >
        {(name) => {
          return(

              <Data.Consumer>
            {(count) => {
                return <h2>Myself {name} and I'm {count} years old</h2>
            }}
         </Data.Consumer>
    )
        }}
      </Data1.Consumer>
    </div>
  )
}

export default Compoents3
