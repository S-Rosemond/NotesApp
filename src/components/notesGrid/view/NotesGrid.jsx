import React from 'react';
import { DefaultCard } from '../../index';
import { useModalContext } from './../../../context/ModalContext/ModalState';
import { useFormContext } from './../../../context/FormContext/FormState';

const NotesGrid = () => {
  const { handleDelete, notes } = useFormContext();
  const { handleModal } = useModalContext();

  const buttons = [
    {
      text: 'View',
      handleClick: handleModal,
    },
    {
      text: 'Edit',
      handleClick: () => null,
    },
    {
      text: 'Delete',
      handleClick: handleDelete,
    },
  ];

  return (
    <div>
      <DefaultCard cards={notes} buttons={buttons} />
    </div>
  );
};

export default NotesGrid;
