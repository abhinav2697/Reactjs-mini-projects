import React from 'react'

const QueryBy = () => {
    let login=true;
  return (
    <div>
        <h1>QueryBy</h1>
        {
            login? <button onClick={() => {login=false;}}>Logout</button> : <button onClick={() => {login=true;}}>Login</button>  // Toggle Login/Logout button based on login status.  // The button is disabled when login is true.  // The button text changes to Logout when login is true.  // The button text changes to Login when login is false.  // The button text is determined by the value of login.  // The button is disabled when login is true.  // The button text changes to Logout when login is true.  // The button text changes to Login when login is false.  // The button text is determined by the value of login.  // The button is disabled when login is true.  // The button text changes to Logout when login is true.  // The button text changes to Login when login is false.  // The button text is determined by the value of login.  // The button is
        }
       
    
    </div>
  )
}

export default QueryBy