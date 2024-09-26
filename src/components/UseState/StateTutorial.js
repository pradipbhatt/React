import React from 'react'
import { useState } from 'react'

function StateTutorial() {

//    use usestate

  const[inputValue,newChangeValue]=useState("Pradip");
  console.log(inputValue);
   
  const onChange= (event)=>{
   const newVal=event.target.value;
   newChangeValue(newVal);
  }

  return (
  <div>
    <h1>{inputValue}</h1>
    <h2>Learning from code aur chai</h2>
    <input type="text" value={inputValue} placeholder='Type something'onChange={onChange} 
    ></input>
  </div>
  )
}

export default StateTutorial