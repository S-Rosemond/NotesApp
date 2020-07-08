import React, { Fragment } from 'react';
import { useFormContext } from './../../context/Form.state';

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
    <Fragment>
      <p>No Notes Found</p>
      {/* Add notes btn component */}
    </Fragment>
  );
};

export default NotesListView;
