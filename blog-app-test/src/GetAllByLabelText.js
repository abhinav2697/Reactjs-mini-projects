import React from 'react'

const GetAllByLabelText = () => {
  return (
    <div>
        <h1>RTL Query: GetAllByLabelText</h1>
        <label htmlFor='user-name1' defaultValue={"abhinav"}>UserName</label>
        <input type='text' id='user-name1'/>

        <label htmlFor='user-name2'>UserName</label>
        <input type='text' id='user-name2' defaultValue={"abhinav"}/>

        <label htmlFor='user-name3'>UserName</label>
        <input type='text' id='user-name3' defaultValue={"abhinav"}/>
        </div>
  )
}

export default GetAllByLabelText