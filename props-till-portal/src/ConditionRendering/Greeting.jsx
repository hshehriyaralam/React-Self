import React from 'react'


function Greeting({Morning}) {
  return Morning ? <h1>Good Morning</h1> : <h1>Good Afternoon</h1>
}

export default Greeting;
