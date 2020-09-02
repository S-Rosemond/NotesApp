import React from 'react';
import { useFormContext } from '../../../../context/Form.state';
import TableElement from './TableElement';

const NotesTableBody = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  return notes.map((note) => (
    <tr key={note.id}>
      <TableElement id={note.id} date={note.date} title={note.title} />
      {console.log(note.date)}
    </tr>
  ));
};

export default NotesTableBody;
