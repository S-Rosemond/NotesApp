import React from 'react';
import { useFormContext } from './../../context/Form.state';
import DefaultBtn from './../buttons/DefaultBtn';

const NotesMap = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  const handleDelete = (id) => {
    notes.filter((el) => el.id !== id);
  };
  console.log('NotesMAP:', notes);
  return notes.map((note) => (
    <tr key={note.id}>
      <td>{note.date}</td>
      <td>{note.title}</td>
      <td>
        <DefaultBtn text='Edit' />
      </td>
      <td>
        <DefaultBtn
          text='Delete'
          handleClick={handleDelete.bind(null, note.id)}
        />
      </td>
    </tr>
  ));
};

export default NotesMap;
