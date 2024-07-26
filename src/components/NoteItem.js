import React, { useState } from 'react';
import NoteForm from './NoteForm';

function NoteItem({ note, editNote, deleteNote }) {
    const [isEditing, setIsEditing] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    if (isEditing) {
        return (
            <NoteForm
                editNote={editNote}
                noteToEdit={note}
                setIsEditing={setIsEditing}
            />
        );
    }

    return (
        <div className="note-item">
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <small>Last modified: {formatDate(note.timestamp)}</small>
            <div className="note-actions">
                <button onClick={() => setIsEditing(true)}>Edit</button>
                <button onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
        </div>
    );
}

export default NoteItem;