import React, { useState } from 'react';

function NoteForm({ addNote, editNote, noteToEdit, setIsEditing }) {
    const [title, setTitle] = useState(noteToEdit ? noteToEdit.title : '');
    const [content, setContent] = useState(noteToEdit ? noteToEdit.content : '');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) return;

        if (noteToEdit) {
            editNote(noteToEdit.id, { title, content });
            setIsEditing(false);
        } else {
            addNote({ title, content });
        }

        setTitle('');
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit} className="note-form">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">{noteToEdit ? 'Update Note' : 'Add Note'}</button>
            {noteToEdit && (
                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            )}
        </form>
    );
}

export default NoteForm;