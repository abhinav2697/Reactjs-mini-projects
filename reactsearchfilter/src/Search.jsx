import React, { useState } from 'react'
import { Users } from "./users"
import SearchTable from "./SearchTable"
import "./App.css"
const Search = () => {
  const [query, setQuery] = useState("");

  const keys=["first_name","last_name","email"]
  console.log(Users[0]["email"])
  const search = (data) => {
    return data.filter((item) =>
      keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }
  return (
      <div className="app">
      <input type="text"
        placeholder='Search...'
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <ul className="list">
        {Users.filter(user=>user.first_name.toLowerCase().includes(query)).map(user => (
          <li key={user.id} className="list">{user.first_name}</li>
        ))}
       
       
          </ul> */}
      <SearchTable data={search(Users)} />
        </div>
  )
}

export default Search