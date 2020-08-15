import React from 'react';
import DocEditor from '../../components/ckeditor/DocEditor';
import { useFormContext } from '../../context/Form.state.jsx';
import { useHistory } from 'react-router-dom';
import TitleInput from '../../components/inputs/TitleInput.jsx';
import DefaultBtn from '../../components/buttons/DefaultBtn';

import styles from './CreateNotes.module.css';

const Temp = () => {
  const formContext = useFormContext();
  const { addNote, createEntry, notes } = formContext;

  const history = useHistory();
  console.log(notes);

  const handleOnsubmit = (params) => {
    //

    history.push('/');
  };
  return (
    <div className={styles.container}>
      <form className={styles['editor']} onSubmit={handleOnsubmit}>
        <div className={styles.myb}>
          <TitleInput />
        </div>

        <DocEditor />

        <div className={styles.myt}>
          <DefaultBtn text='Submit' onClick={addNote} />
        </div>
      </form>
    </div>
  );
};

export default Temp;
