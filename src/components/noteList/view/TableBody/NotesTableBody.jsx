import React from 'react';
import { useFormContext } from '../../../../context/FormContext/FormState';
import TableElement from './TableElement';

const NotesTableBody = ({ notes }) => {
  // 8 max list
  return notes.map((note) => (
    <tr key={note.id}>
      <TableElement id={note.id} date={note.date} title={note.title} />
      {console.log(note.date)}
    </tr>
  ));
};

export default NotesTableBody;
