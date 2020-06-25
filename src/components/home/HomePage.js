import React from 'react';
import TitleInput from '../inputs/TitleInput';
import NoteArea from '../textarea/NoteArea';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <form className={styles.form}>
      <TitleInput />
      <NoteArea />
    </form>
  );
};

export default HomePage;
