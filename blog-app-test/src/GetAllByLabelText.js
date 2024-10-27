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
        <br/>
        <br/>
        <br/>

        <label htmlFor='skill1' >Skills</label>
        <input type='checkbox' id='skill1' defaultChecked={true}/>

        <label htmlFor='skill2'>Skills</label>
        <input type='checkbox' id='skill2'  defaultChecked={true}/>

        <label htmlFor='skill3'>Skills</label>
        <input type='checkbox' id='skill3' defaultChecked={true} />
        </div>
  )
}

export default GetAllByLabelText