import { useState, useEffect } from "react";
import Notesform from "../components/Notesform";

const NotesApp = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return <Notesform addNote={addNote} />;
};

export default NotesApp;
