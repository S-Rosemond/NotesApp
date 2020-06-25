import React, { useContext } from 'react';
import { Label, Textarea } from '@rebass/forms';
import { Box } from 'rebass';
import FormContext from '../../context/Form.context';

const NoteArea = () => {
  const formContext = useContext(FormContext);
  const { createEntry } = formContext;
  return (
    <Box>
      <Label htmlFor='body'>Note</Label>
      <Textarea id='body' name='body' onChange={createEntry} />
    </Box>
  );
};

export default NoteArea;
