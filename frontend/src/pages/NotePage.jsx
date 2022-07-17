import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
// mumbleui.com
const NotePage = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    if (id === 'new') return 
    const response = await fetch(`/api/notes/${id}/`);
    const data = await response.json();
    setNote(data);
  };

  const createNote = async () => {
    await fetch(`/api/notes/create/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
    navigate('/')
  }

  const updateNote = async () => {
    await fetch(`/api/notes/${id}/update/`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
  }

  const deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    
    })
    navigate('/')
  }
  
  const handleSubmit = () => {
    if (id !== 'new' && note.body === '') {
        deleteNote()
    } else if (id !== 'new') {
       updateNote() 
    } else if (id === 'new' && note !== null) {
        createNote()
    }
    navigate('/')
  }

  const handleChange = (e) => {
    setNote({...note, "body": e.target.value});
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
            <ArrowLeft onClick={handleSubmit}/>
        </h3>
            {id !== 'new' 
              ? (<button onClick={deleteNote}>Удалить</button>)
              : ( <button onClick={handleSubmit}>Добавить</button>)
            }
      </div>
      <textarea onChange={handleChange} value={note?.body}></textarea>
    </div>
  );
};

export default NotePage;
