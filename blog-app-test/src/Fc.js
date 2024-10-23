import React, { useState } from 'react'

const Fc = () => {
    const [data,setData]=useState("");
    const handleData=()=>{
      
        setData("hello");
    }

    const handleOtherMethod=()=>{
      console.log("hi");
      return "hi";
    }
  return (
    <div className='App'>
        <h1>Functional Component method testing</h1>
        <button data-testid="btn1" onClick={handleData}>Update</button>
        <button onClick={handleOtherMethod}>Print</button>
        <h2>{data}</h2>
    </div>
  )
}

export default Fc