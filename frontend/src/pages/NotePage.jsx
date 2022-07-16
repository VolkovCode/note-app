import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const [note, setNote] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    getNote();
  }, [id]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/${id}/`);
    const data = await response.json();
    setNote(data);
  };
  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
