import React from 'react';
import DocEditor from '../../components/ckeditor/DocEditor';
import { useFormContext } from '../../context/Form.state.jsx';
import TitleInput from '../../components/inputs/TitleInput.jsx';
import DefaultBtn from '../../components/buttons/DefaultBtn';

import styles from './CreateNotes.module.css';
import classes from './CreateNotes.module.css';

const Temp = () => {
  const formContext = useFormContext();
  const { notes } = formContext;

  return (
    <div className={styles.container}>
      <form className={styles['editor']}>
        <div className={styles.myb}>
          <TitleInput />
        </div>

        <DocEditor />

        <div className={styles.myt}>
          <DefaultBtn text='Submit' />
        </div>
      </form>
    </div>
  );
};

export default Temp;
