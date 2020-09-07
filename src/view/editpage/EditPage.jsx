import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import DocEditor from './../../components/ckeditor/DocEditor';
import { useFormContext } from './../../context/Form.state';
import TitleInput from './../../components/Inputs/TitleInput';
import DefaultBtn from './../../components/buttons/DefaultBtn';

import styles from '../createpage/CreateNotes.module.css';

// could make create page reusable
const EditPage = () => {
  const { updateNote, setCreatePage, editData } = useFormContext();

  const history = useHistory();

  const editRef = useRef();

  const handleOnSubmit = () => {
    history.push('/');
  };

  return (
    <div className={styles.container}>
      <form className={styles['editor']} onSubmit={handleOnSubmit}>
        <div className={styles.myb}>
          <TitleInput editData='test' />
        </div>

        <DocEditor id={editRef} editData={{ body: 'testing' }} />

        <div className={styles.myt}>
          <DefaultBtn text='Update' handleClick={updateNote} type='submit' />
        </div>
      </form>
    </div>
  );
};

export default EditPage;
