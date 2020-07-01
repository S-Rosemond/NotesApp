import React from 'react';
import TitleInput from '../inputs/TitleInput';
import NoteArea from '../textarea/NoteArea';

import styles from './CreateNotePage.module.css';
// Add a plus btn and show list of notes instead
const CreateNotePage = () => {
  return (
    <form className={styles.form}>
      <TitleInput />
      <NoteArea />
    </form>
  );
};

export default CreateNotePage;
