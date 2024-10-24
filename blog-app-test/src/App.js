import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Button from "./Button";
import Users from "./Users";
import Fc from "./Fc";
import GetByRole from "./GetByRole";
import GetAllByRole from "./GetAllByRole";
function App() {
  const[data,setData]=useState("");
  return (
    <div className="App">
      <p>First React Test case</p>
      <input
        type="text"
        placeholder="Enter User Name"
        name="username"
        id="userId"
        value="abhinav"
      />
      <br />
      <br />
      <br />
      <img
        title="MY Desk"
        src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*TKfRZ51S8wtYNNvZwGiOMA.jpeg"
      />
      <br/>
      <br/>
      <br/>
      <input type='text' value={data} onChange={(e)=>setData(e.target.value+"test")}/>
      <Button/>
      <Users/>
      <Fc/>
      <GetByRole/>
      <GetAllByRole/>
    </div>
  );
}

export default App;
