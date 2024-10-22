import React, { useState } from 'react'

const Fc = () => {
    const [data,setData]=useState("");
    const handleData=()=>{
        setData("hello");
    }
  return (
    <div className='App'>
        <h1>Functional Component method testing</h1>
        <button data-testid="btn1" onClick={handleData}>Update</button>
        <h2>{data}</h2>
    </div>
  )
}

export default Fc