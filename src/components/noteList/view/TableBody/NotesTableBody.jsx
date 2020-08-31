import React from 'react';
import { TableRow } from '@material-ui/core';
import { useFormContext } from '../../../../context/Form.state';
import TableElement from './TableElement';

const NotesTableBody = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  return notes.map((note) => (
    <TableRow>
      <TableElement id={note.id} date={note.date} title={note.title} />
      {console.log(note.date)}
    </TableRow>
  ));
};

export default NotesTableBody;
