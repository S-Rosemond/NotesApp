import React, { Fragment, useContext } from 'react';
import { useFormContext } from './../../context/Form.state';

import styles from './TitleInput.module.css';

const TitleInput = () => {
  const formContext = useFormContext();
  const { createEntry, entry } = formContext;

  return (
    <div className={styles.container}>
      <label className={styles.label}>Title</label>
      <input type='text' className={styles.input_bar} />
    </div>
  );
};

export default TitleInput;
