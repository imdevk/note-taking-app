import NoteItem from './NoteItem';
import Pagination from './Pagination';

function NoteList({ notes, currentPage, setCurrentPage, searchTerm, setSearchTerm, editNote, deleteNote }) {
    const notesPerPage = 10;

    const filteredNotes = notes.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastNote = currentPage * notesPerPage;
    const indexOfFirstNote = indexOfLastNote - notesPerPage;
    const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="note-list">
            <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            {currentNotes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    editNote={editNote}
                    deleteNote={deleteNote}
                />
            ))}
            <Pagination
                notesPerPage={notesPerPage}
                totalNotes={filteredNotes.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}

export default NoteList;