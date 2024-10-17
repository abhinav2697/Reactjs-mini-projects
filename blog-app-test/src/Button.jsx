import React, { useState } from 'react'
import './Button.css';
const Button = () => {
    const[data,setData]=useState("");
  return (
    <div className='Button'>
       <h1> Test Click Event with Button</h1>
       <button onClick={()=>setData("updated data")}>Update Data</button>
      <h1>{data}</h1> 
        </div>
  )
}

export default Button