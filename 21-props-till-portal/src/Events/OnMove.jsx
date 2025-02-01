import React from 'react'
const MoveHandler = () => {
    alert("Move on Event Handler")
}


function OnMove() {
  return (
    <div>
      <p onMouseMove={MoveHandler}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique exercitationem doloremque aliquid, voluptas, laboriosam rerum necessitatibus placeat id quia vel ex quod iure, quas inventore unde ad enim. Quo, repudiandae.</p>
    </div>
  )
}

export default OnMove
