import React from 'react';
import { TextField } from '@material-ui/core';
import { useFormContext } from '../../context/Form.state.jsx';

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
      value={state || null}
    />
  );
};

export default TitleInput;
