import React from 'react';
import DocEditor from '../ckeditor/DocEditor';
import { useFormContext } from '../../context/Form.state';

import styles from './Temp.module.css';
import TitleInput from './../inputs/TitleInput';

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
