import React, { useState, useEffect} from "react";
import AddButton from "../components/AddButton";
import ListItem from "../components/ListItem";


const NotesListPages = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("/api/notes/");
    const data = await response.json();
    setNotes(data);
  };
  return (
    <div className="notes">
        <div className="notes-header">
            <h2 className="notes-title">&#9782; Заметки</h2>
            <p className="notes-count">{notes.length}</p>
        </div>
      <div className="notes-list">
        {notes.map((note) => (
          <ListItem note={note} />
        ))}
      </div>
      <AddButton />
    </div>
  );
};

export default NotesListPages;
