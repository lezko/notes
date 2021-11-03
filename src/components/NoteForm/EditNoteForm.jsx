import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyTextarea from "../UI/textarea/MyTextarea";
import MyButton from "../UI/button/MyButton";
import classes from './NoteForm.module.css';

const EditNoteForm = ({note, confirm}) => {
  const [edit, setEdit] = useState({title: note.title, body: note.body, id: note.id});
  
  const closeForm = event => {
    if (
      event.ctrlKey &&
      event.code === 'Enter' &&
      edit.title &&
      edit.body
    ) {
      confirm(edit);
    }
    if (event.key === 'Escape') {
      confirm(edit);
    }
  }
  
  return (
    <form
      className={classes.noteForm}
      onKeyDown={event => closeForm(event)}
    >
      <MyInput
        autoFocus
        value={edit.title}
        onChange={event => setEdit({...edit, title: event.target.value})}
        type="text"
        placeholder="title"
      />
      <MyTextarea
        value={edit.body}
        onChange={event => setEdit({...edit, body: event.target.value})}
        placeholder="text"
        rows={10}
      />
      <MyButton onClick={(event) => {
        event.preventDefault();
        confirm(edit);
      }}>
        Confirm
      </MyButton>
      <div style={{alignSelf: 'center', opacity: 0.3}}>or press [ctrl+enter]</div>
    </form>
  );
};

export default EditNoteForm;