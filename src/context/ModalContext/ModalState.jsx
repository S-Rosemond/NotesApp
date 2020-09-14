import React, { useState, useContext } from 'react';
import ModalContext from './ModalContext';
import { useFormContext } from './../FormContext/FormState';

const ModalStateProvider = (props) => {
  const { getModalBody } = useFormContext();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleModal = (id) => {
    getModalBody(id);
    handleOpen();
  };

  return (
    <ModalContext.Provider
      value={{ open, handleOpen, handleClose, setOpen, handleModal }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  return useContext(ModalContext);
};

export default ModalStateProvider;
