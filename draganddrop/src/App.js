import React, { useState } from 'react'
import './App.css';
import Notes from './components/Notes';

function App() {
  const [notes,setNotes] = useState([
    {
        id: 1,
        text:"Check the description"
    },
    {
        id: 2,
        text:"Hello you are here"
    }
])
return (
    <div>
        <Notes notes={notes} setNotes={setNotes}/>
    </div>
)
}

export default App;
