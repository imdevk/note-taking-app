import { useEffect, useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(storedNotes);
  }, []);

  const saveNotesToLocalStorage = (updatedNotes) => {
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  const addNote = (newNote) => {
    const updatedNotes = [...notes, { ...newNote, id: Date.now(), timestamp: new Date().toISOString() }];
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const editNote = (id, updatedNote) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, ...updatedNote, timestamp: new Date().toISOString() } : note
    );
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter(note => note.id !== id);
    setNotes(updatedNotes);
    saveNotesToLocalStorage(updatedNotes);
  };

  return (
    <div className="App">
      <h1>Simple Note Taking App</h1>
      <NoteForm addNote={addNote} />
      <NoteList
        notes={notes}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
