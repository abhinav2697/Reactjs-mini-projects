import React, { createRef, useEffect,useRef } from 'react'
import Note from './Note';
const Notes = ({ notes = [], setNotes = () => {}}) => {
  useEffect(() => {
    // logicalStorage logic
    const savedNotes = JSON.parse(localStorage.getItem('notes'))||[];
    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n)=>n.id===note.id)
      if (savedNote) {
        return{...note,position:savedNote.position}
      } else {
        const position = determineNewPosition()
        return { ...note, position }
      }
    })
    setNotes(updatedNotes)
    localStorage.setItem("notes",JSON.stringify(updatedNotes))
  }, [notes.length])

  const noteRefs = useRef([]);

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y:Math.floor(Math.random()*maxY),
    }
  };
  
  const handleDragStart = (note, e) => {
    const { id } = note;
    const noteRef = noteRefs[id].current
    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
   
    const startPos = note;
    const handleMouseMove = () => {
      const handleMouseUp = () => {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
      }
    }
  }

    return (<div>
      {
          notes.map((note) => {
            return <Note key={note.id}
              ref={noteRefs.current[note.id] ?
                noteRefs.current[note.id] :
                (noteRefs.current[note.id] = createRef())}
              initialPos={note.position}
              content={note.text}
              onMouseDown={(e) => handleDragStart(note.id,e) } />;
        }) }
  </div>
      
   
  )
}

export default Notes

// 15:00