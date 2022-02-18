import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
  modal: {
    background: 'rgba(32, 35, 41, .8)',
    position: 'fixed',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    color: 'white',
    zIndex: '2'
  }
});

export default function Modal({ show, onClose, children }) {
  const [isBrowser, setIsBrowser] = useState(false);

  const classes = useStyle();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <div className={classes.modal}>{children}</div>
  ) : null;

  if (!!isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById('modal-root')
    );
  } else {
    return null;
  }
}
