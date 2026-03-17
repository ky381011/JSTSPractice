import './App.css'

import { useState } from 'react'
import uuid from 'react-uuid'

import Sidebar from './components/Sidebar'
import Main from './components/Main'

function App() {
  const [notes, setNotes] = useState([]);

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
  return (
    <>
      <div className='App'>
        <Sidebar onAddNote={onAddNote} notes={notes}/>
        <Main />
      </div>
    </>
  )
}

export default App
