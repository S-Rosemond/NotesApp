import React from 'react';
import DocEditor from '../../components/ckeditor/DocEditor';
import { useFormContext } from '../../context/Form.state.jsx';

import styles from './CreateNotes.module.css';
import TitleInput from '../../components/inputs/TitleInput.jsx';

const Temp = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  return (
    <div className={styles.container}>
      <form className={styles['editor']}>
        <div className={styles['input-space']}>
          <TitleInput />
        </div>

        <DocEditor />
      </form>
    </div>
  );
};

export default Temp;
