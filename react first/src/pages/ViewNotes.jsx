import  { useState, useEffect } from 'react';


import NotesItem from '../components/NotesItem';


const ViewNotes = () => {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // const addNote = (newNote) => {
  //   setNotes([...notes, newNote]);
  // };

  const editNote = (id, updatedContent) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, content: updatedContent } : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  return (
    <>
    {notes.map((note) => (
        <NotesItem
          key={note.id}
          note={note}
          editNote={editNote}
          deleteNote={deleteNote}
        />
        ))}
        </>
  );
};

export default ViewNotes;
