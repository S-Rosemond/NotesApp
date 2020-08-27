import React from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from '../../../../context/Form.state';
import DefaultBtn from '../../../buttons/DefaultBtn';

const TableElement = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  const handleDelete = (id) => {
    notes.filter((el) => el.id !== id);
  };
  console.log('NotesMAP:', notes);
  return notes.map((note) => <tr key={note.id}></tr>);
};

export default TableElement;
