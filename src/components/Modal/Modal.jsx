import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children, setVisible}) => {
  
  const closeModal = (event) => {
    if (event.key === 'Escape') {
      setVisible(false);
    }
  }
  
  return (
    <div
      className={classes.myModal}
      onKeyDown={event => closeModal(event)}
      tabIndex={-1}
    >
      <div className={classes.closeBtn} onClick={() => setVisible(false)}>
        <span className={classes.cross}>+</span>
      </div>
      {children}
    </div>
  );
};

export default Modal;