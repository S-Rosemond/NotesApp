import React from 'react';
import { Grid } from '@material-ui/core';
import { DefaultCard, GridCard } from '../../index';
import { useModalContext } from './../../../context/ModalContext/ModalState';
import { useFormContext } from './../../../context/FormContext/FormState';

import './NotesGrid.module.css';

const NotesGrid = () => {
  const { handleDelete, notes } = useFormContext();
  const { handleModal } = useModalContext();

  const buttons = [
    {
      id: 1,
      text: 'View',
      handleClick: handleModal,
    },
    {
      id: 2,
      text: 'Edit',
      handleClick: () => null,
    },
    {
      id: 3,
      text: 'Delete',
      handleClick: handleDelete,
    },
  ];
  const attr = {
    item: true,
    xs: 6,
    md: 2,
  };
  return (
    <Grid container spacing={4} style={{ marginTop: '15px' }}>
      <GridCard cards={notes} buttons={buttons} Wrapper={Grid} attr={attr} />
    </Grid>
  );
};

export default NotesGrid;
