import React from 'react';
import classes from './Notes.module.css';

const Notes = ({notes, remove, edit}) => {
  return (
    <div className={classes.notes}>
      {notes.map(note =>
        <div className={classes.notes__item} key={note.id}>
          <div className={classes.notes__header}>
            <div className={classes.notes__title}>{note.title}</div>
            <div className={classes.notes__actions}>
              <div onClick={() => edit(note.id)}><i className="fa fa-pencil" aria-hidden="true"></i></div>
              <div onClick={() => remove(note.id)}><i className="fa fa-trash" aria-hidden="true"></i></div>
            </div>
          </div>
          <div className={classes.notes__body}>
            <pre>
              {note.body}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notes;