import React, { useContext } from 'react';
import { Label, Input } from '@rebass/forms';
import { Box } from 'rebass';
import FormContext from './../../context/Form.context';

const TitleInput = () => {
  const formContext = useContext(FormContext);
  const { createEntry, entry } = formContext;

  return (
    <Box>
      <Label htmlFor='title'>Title</Label>
      <Input
        id='title'
        name='title'
        type='text'
        placeholder='Title your notes'
        onChange={createEntry}
      />
      {console.log(entry)}
    </Box>
  );
};

export default TitleInput;
