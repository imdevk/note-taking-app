
# Note Taking App

A straightforward note-taking application built with React, allowing users to create, edit, delete, and search notes.

## Live Demo Link: [Click here](https://note-taking-6zrbdjhou-devesh-khatris-projects.vercel.app/)

## Features

- Create new notes with title and content
- Edit existing notes
- Delete notes
- Search notes by title or content
- Pagination for better navigation through notes
- Local storage persistence

## Components

1. **App**: The main component that manages the state and renders other components.
2. **NoteForm**: Handles the creation and editing of notes.
3. **NoteList**: Displays the list of notes and includes search functionality.
4. **NoteItem**: Renders individual note items with edit and delete options.
5. **Pagination**: Provides pagination controls for the note list.

## Installation

Clone the repository:
```git clone https://github.com/imdevk/note-taking-app.git```

Navigate to the project directory:
```cd note-taking-app```

Install dependencies:
```npm install```

Start the development server:
```npm start```

## Usage

- To add a new note, fill in the title and content in the form at the top of the page and click "Add Note".
- To edit a note, click the "Edit" button on a note, make your changes, and click "Update Note".
- To delete a note, click the "Delete" button on a note.
- Use the search bar to filter notes based on title or content.
- Navigate through pages of notes using the pagination controls at the bottom of the list.

## Local Storage

The app uses local storage to persist notes between sessions. Notes are automatically saved when added, edited, or deleted.
