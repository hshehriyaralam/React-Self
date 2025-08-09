import React from 'react'

function ProfileCard() {
    const name = "Sheryy"
    const Qualification = "Intermediate"
    const Nationality = "Pakistani"
    const styles  = {backgroundColor : "lightgrey" , padding : "15px", borderRadius : "8px", color : "black", marginTop : 20  }
  return (
    <div style={styles}>
      <h1 style={styles} >Name : {name} </h1>
      <p> Qualification :  {Qualification}</p>
      <p> Naationality  : {Nationality}  </p>
    </div>
  )
}

export default ProfileCard
