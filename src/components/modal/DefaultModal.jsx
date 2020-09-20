import React from 'react';
import { Modal } from '@material-ui/core';
import HTMLReactParser from 'html-react-parser';
import { useModalContext } from '../../context/ModalContext/ModalState';
import { useFormContext } from './../../context/FormContext/FormState';
import { useModalTheme } from './../../theme/useThemes/useThemes';

const DefaultModal = () => {
  const classes = useModalTheme();

  const { modalBody } = useFormContext();
  const { handleClose, open } = useModalContext();

  if (modalBody !== null) {
    return (
      <Modal open={open} onClose={handleClose}>
        <div className={classes.paper}>
          <h2 className={classes.h2}>{modalBody.title}</h2>
          <p className={classes.paragraphSM}>
            {HTMLReactParser(modalBody.body)}
          </p>
        </div>
      </Modal>
    );
  } else return null;
};

export default DefaultModal;
