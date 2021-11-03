import React from 'react';
import classes from './Modal.module.css';

const Modal = ({children, setVisible, ...props}) => {
  return (
    <div {...props} className={classes.myModal}>
      <div className={classes.closeBtn} onClick={() => setVisible(false)}>
        <span className={classes.cross}>+</span>
      </div>
      {children}
    </div>
  );
};

export default Modal;