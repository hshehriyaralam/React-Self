import React from 'react'
  
const Copy = () => {
    alert("You steal my code")
}

 
function OnCopyFunction() {
  return (
    <div>
      <p onCopy={Copy}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis nemo dolores. Quis rerum omnis expedita nisi earum aperiam deleniti?</p>
    </div>
  )
}

export default OnCopyFunction
