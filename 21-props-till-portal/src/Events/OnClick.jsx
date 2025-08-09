import React from 'react'


const  click = () => {
   console.log(Math.round(Math.random() * 100));
}
function OnClickFunction() {
  return (
    <div>
      <button onClick={click}>On Click</button>
    </div>
  )
}

export default OnClickFunction
