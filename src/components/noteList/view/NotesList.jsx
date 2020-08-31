import React, { Fragment } from 'react';
import { useFormContext } from '../../../context/Form.state.jsx';

// import styles from './NotesList.module.css';
import NotesTable from './NotesTable/NotesTable.jsx';

const NotesListHomeView = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  return notes.length < 0 ? (
    <Fragment>
      <h5>No notes found</h5>
    </Fragment>
  ) : (
    <NotesTable />
  );
};

export default NotesListHomeView;
