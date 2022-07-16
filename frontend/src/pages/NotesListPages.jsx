import React, { useState } from 'react'
import { useEffect } from 'react'
import ListItem from '../components/ListItem'

const NotesListPages = () => {
  let [notes, setNotes] = useState([])

    useEffect(() => {
      getNotes()
    }, [])
  
  let getNotes = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/notes/')
    let data = await response.json()
    setNotes(data)
  }  
  return (
    <div>
        <div className="notes-list">
            {notes.map(note => <ListItem note={note}/>)}
        </div>
    </div>
  )
}

export default NotesListPages