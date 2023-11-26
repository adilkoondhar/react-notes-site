import React from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(newNote) {
    setNotes(preValue => {
      return [
        ...preValue,
        newNote
      ];
    });
  }

  function deleteNote(id) {
    setNotes(preValue =>{
      return preValue.filter((note, index) => {
        return id !== index;
      })
    })
  }
  return (
    <div>
      <Header/>
      <CreateArea
        onAdd={addNote}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer/>
    </div>
  );
}

export default App;