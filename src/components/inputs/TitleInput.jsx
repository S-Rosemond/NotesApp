import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from '../../context/FormContext/FormState';

const TitleInput = ({ editData }) => {
  const { createEntry } = useFormContext();

  const [state, setState] = React.useState(editData);

  const handleOnChange = (event) => {
    setState(event.target.value);
    createEntry(event);
  };

  return (
    <TextField
      label='Title'
      name='title'
      fullWidth
      onChange={handleOnChange}
      variant='filled'
      value={state || ''}
    />
  );
};

export default TitleInput;
