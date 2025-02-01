import React from 'react'
import { FaBeer } from "react-icons/fa";
import { FaBeerMugEmpty } from "react-icons/fa6";
import { AiFillCloseCircle } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";
function IconComponents() {
    const styles = {fontSize : 100 , color : "black" , margin : 10}
  return (
    <div  style={{display : "flex", gap : 5}}>
        <FaBeer style={styles} />
        < FaBeerMugEmpty style={styles} />
        < AiFillCloseCircle style={styles} />
        <VscGithubInverted style={styles} />  
        <VscGlobe  style={styles} />  
    </div>
  )
}

export default IconComponents
