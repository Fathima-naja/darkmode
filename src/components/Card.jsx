import React from 'react'
import { useState } from 'react'


function Card() {
    const[newclass,setnewclassState]=useState("")
   const handleChange=()=>{
    setnewclassState((prevState)=>{
        if(prevState==''){
            return "active"
        }
        else{
            return ""
        }
    })

   }
  return (
   
    

    
        <div className={`card ${newclass}`}>
            
        <h2>fathima naja</h2>
        <h2>hellooo</h2>
        <button onClick={handleChange}>light</button>
        </div>
        
        

    
  )
}

export default Card