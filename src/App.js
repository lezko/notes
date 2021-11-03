import {useEffect, useState} from "react";
import Notes from "./components/Notes/Notes";
import './styles/App.css'
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
import NoteForm from "./components/NoteForm/NoteForm";
import Modal from "./components/Modal/Modal";
import EditNoteForm from "./components/NoteForm/EditNoteForm";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState({});
  
  const addNote = (note) => {
    note.id = Date.now();
    setNotes([...notes, note]);
  }
  
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  }
  
  const editNote = (id) => {
    const currentNote = notes.filter(note => note.id === id)[0];
    setEdit({
      title: currentNote.title,
      body: currentNote.body,
      id,
      edit: true
    });
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
    setEdit({});
  }
  
  const setEditModal = (edit) => {
    setEdit({...edit, edit: edit});
  }
  
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <MyButton onClick={setModal} style={{marginTop: 50}}>
          + Add Note
        </MyButton>
      </div>
      {modal &&
        <Modal setVisible={setModal}>
          <NoteForm
            create={addNote}
            setVisible={setModal}
          />
        </Modal>
      }
      {edit.edit &&
        <Modal setVisible={setEditModal}>
          <EditNoteForm note={edit} editNote={editNote} confirm={confirmEdit}/>
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
