import React, {useState} from "react";
import Notes from "./components/Notes/Notes";
import './styles/App.css'
import MyButton from "./components/UI/button/MyButton";
import Modal from "./components/Modal/Modal";
import NoteForm from "./components/NoteForm/NoteForm";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const [noteForm, setNoteForm] = useState({id: null, title: '', body: '', type: '', callback: null});
  
  const addNote = (note) => {
    note.id = Date.now();
    setNotes([...notes, note]);
  }
  
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  
  const editNote = (id) => {
    const currentNote = notes.filter(note => note.id === id)[0];
    setNoteForm({
      id: currentNote.id,
      title: currentNote.title,
      body: currentNote.body,
      type: 'edit',
      callback: confirmEdit
    });
    setModal(true);
  }
  
  const confirmEdit = (editedNote) => {
    const editNotes = [];
    notes.forEach(note => {
      if (note.id === editedNote.id) {
        editNotes.push({title: editedNote.title, body: editedNote.body, id: editedNote.id});
      } else {
        editNotes.push(note)
      }
    });
    
    setNotes(editNotes);
    setNoteForm({id: null, title: '', body: '', type: '', callback: null});
  }
  
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MyButton onClick={() => {
          setNoteForm({...noteForm, type: 'add', callback: addNote})
          setModal(true);
        }}
        style={{marginTop: 50}}
        >
          + Add Note
        </MyButton>
      </div>
      {modal &&
        <Modal setVisible={setModal}>
          <NoteForm
            noteForm={noteForm}
            setVisible={setModal}
          />
        </Modal>
      }
      <Notes
        notes={notes}
        remove={deleteNote}
        edit={editNote}
      />
    </div>
  );
}

export default App;
