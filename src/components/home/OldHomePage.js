import React, { Fragment, useState, useEffect } from 'react';
import Alert from '../util/Alert';
import DisplayNotes from '../view/DisplayNotes';

import styles from './HomePage.module.css';

const HomePage = () => {
  const initialState = {
    _id: '',
    title: '',
    body: '',
    dateCreated: '',
    lastUpdated: '',
  };

  const [notes, setNote] = useState([]);
  const [entry, setEntry] = useState(initialState);
  const [alert, setAlert] = useState('');

  useEffect(() => {
    let savedNotes = localStorage.getItem('notes');
    const parsedNotes = JSON.parse(savedNotes);

    if (parsedNotes) setNote(parsedNotes);
  }, []);

  const submit = (e) => {
    e.preventDefault();

    if (notes.length > 0) {
      const newNotes = JSON.stringify(notes);

      localStorage.setItem('notes', newNotes);
    }
  };

  const createEntry = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const addNote = (entries) => {
    if (!entries.body) {
      setAlert('The note field cannot be blank');

      setTimeout(() => setAlert(''), 5000);
      return;
    }

    if (!entries.title) {
      const date = new Date(Date.now());

      entries.title = date.toDateString();
    }

    entries._id = notes.length + 'abc';
    entries.lastUpdated = new Date().toLocaleDateString();
    entries.dateCreated = new Date(Date.now()).toString();

    setNote([...notes, entries]);
  };

  return (
    <Fragment>
      {alert && <Alert message={alert} />}
      <div className={styles.container}>
        <form onSubmit={submit} className={styles.form}>
          <label>
            <span>Title </span>
            <input
              type='text'
              name='title'
              onChange={createEntry}
              className={styles.title}
            />
          </label>
          <label>
            <span>Note</span>
            <textarea
              name='body'
              onChange={createEntry}
              className={styles.textarea}
            />
          </label>
          <button onClick={addNote.bind(null, entry)}> Add Note </button>
        </form>
      </div>

      <DisplayNotes setNote={setNote} notes={notes} />
    </Fragment>
  );
};

export default HomePage;