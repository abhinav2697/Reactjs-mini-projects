import React from 'react'

const GetByRole = () => {
  return (
    // <div>
    //     <h1>getByRole</h1>
    //  <button disabled>Click Me</button>
    //     <input type='text' defaultValue={"hello"} disabled></input>
    //     </div>

        <div>
            <h1>Multiple Item with Role</h1>
            <h1>Custom Role</h1>
            <button>Click 1</button>
            <button>Click 2</button>

            <label htmlFor='input1'>User Name</label>
            <input type='text' id='input1'></input>
            <input type='text' id='input2'></input>

            <div role='dummy'>
              Dummy Text
            </div>
        </div>
       
  )
}

export default GetByRole;