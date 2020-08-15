import React, { Fragment } from 'react';
import { useFormContext } from './../../context/Form.state';

import styles from './NotesListView.module.css';
import NotesDisplay from './NotesDisplay';

const NotesListView = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  return notes.length > 0 ? (
    <Fragment>
      {notes.map((el, idx) => {
        const { title, _id } = el;
        return (
          <div key={idx}>
            <h2>{title}</h2>
            <button>Edit</button>
          </div>
        );
      })}
    </Fragment>
  ) : (
    <NotesDisplay element={{ title: 'Title', date: '08/15/2020' }} />
  );
};

export default NotesListView;
