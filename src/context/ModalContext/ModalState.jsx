import React, { useState, useContext } from 'react';
import ModalContext from './ModalContext';

const ModalStateProvider = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose, setOpen }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default ModalStateProvider;
