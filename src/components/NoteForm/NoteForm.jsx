import React, {useState} from 'react';
import classes from './NoteForm.module.css';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import MyTextarea from "../UI/textarea/MyTextarea";

const NoteForm = ({setVisible, noteForm}) => {
  const [note, setNote] = useState({id: noteForm.id, title: noteForm.title, body: noteForm.body});
  
  const closeForm = event => {
    if (
      event.ctrlKey &&
      event.code === 'Enter' &&
      note.title &&
      note.body
    ) {
      noteForm.callback(note);
      setVisible(false);
    }
  }
  
  return (
    <form
      className={classes.noteForm}
      onKeyDown={event => closeForm(event)}
    >
      <MyInput
        autoFocus
        value={note.title}
        onChange={event => setNote({...note, title: event.target.value})}
        type="text"
        placeholder="title"
      />
      <MyTextarea
        value={note.body}
        onChange={event => setNote({...note, body: event.target.value})}
        placeholder="text"
        rows={10}
      />
      <MyButton onClick={(event) => {
        event.preventDefault();
        if (note.title && note.body) {
          noteForm.callback(note);
          setVisible(false);
        }
      }
      }>
        {noteForm.type === 'add' ? '+ Add' : 'Confirm edit'}
      </MyButton>
      <div style={{alignSelf: 'center', opacity: 0.3}}>or press [ctrl+enter]</div>
    </form>
  );
};

export default NoteForm;