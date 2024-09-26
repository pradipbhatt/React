import React, { useState } from "react";

const Counter = () => {

  const[count,setCount]=useState(0);
  console.log("I am re-rendering");

  const handleClick = () => {
    setCount(count+1); //increase the value of count by 1 on single click
    setCount(count+1); //it will show the value of count lastcount from the memory 

    // state Updates are batched
    setCount((prevCount) => prevCount+1);  //previous count =1 now count = 1+1 =2;
    setCount((prevCount)=> prevCount+1);  //prevoious count =2 now count = 2+1=3;
  }
  
  return(
  <>; 
  <button 
  // onClick={()=>setCount(count+1)}  this will render the component by 1 times onSIngle click
  onClick={handleClick}
  >Click me</button>
  <h1>I am clicked {count} times</h1>
  </>
  );
};

export default Counter;