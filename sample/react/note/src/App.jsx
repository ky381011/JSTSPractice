import './App.css'

import { useEffect, useState } from 'react'
import uuid from 'react-uuid'

import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    // ローカルストレージにノートを保存する
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    console.log('ノートを追加');
    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: 'ノートの内容',
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  }

  const onDeleteNote = (id) => {
    console.log('ノートを削除');
    const filterNotes = notes.filter(note => note.id !== id);
    setNotes(filterNotes);
  }

  const getActiveNote = () => {
    return notes.find(note => note.id === activeNote);
  }

  const onUpdateNote = (updatedNote) => {
    // 修正されたノートの配列を返す
    const updatedNotesArray = notes.map(note => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });

    setNotes(updatedNotesArray);
  };

  return (
    <>
      <div className='App'>
        <Sidebar
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          notes={notes}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main 
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
        />
      </div>
    </>
  )
}

export default App
