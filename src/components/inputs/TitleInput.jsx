import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from '../../context/Form.state.jsx';

const TitleInput = () => {
  const { createEntry } = useFormContext();

  return (
    <TextField
      label='Title'
      name='title'
      fullWidth
      onChange={createEntry}
      variant='filled'
    />
  );
};

export default TitleInput;
