import React from 'react'

const GetByLabelText = () => {
  return (
    <div>
        <h1>RTL Query:getByLabelText</h1>
        <label htmlFor="user-name">Username</label>
        <input type="text" id="user-name" name="username" defaultValue={"abhinav"} />
        <br/>
        <br/>

        <label htmlFor="user-name">Skills</label>
        <input type="checkbox" id="skills"  checked={true} />

</div>

  )
}

export default GetByLabelText