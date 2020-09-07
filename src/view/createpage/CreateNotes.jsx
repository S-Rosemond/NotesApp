import React, { useRef, useEffect } from 'react';
import DocEditor from '../../components/ckeditor/DocEditor';
import { useFormContext } from '../../context/Form.state.jsx';
import { useHistory } from 'react-router-dom';
import TitleInput from '../../components/Inputs/TitleInput.jsx';
import DefaultBtn from '../../components/buttons/DefaultBtn';

import styles from './CreateNotes.module.css';

const Temp = () => {
  const formContext = useFormContext();
  const { addNote, notes, entry, setCreatePage } = formContext;

  const editorRef = useRef();

  const history = useHistory();
  console.log(notes, entry);

  useEffect(() => {
    setCreatePage();

    return () => {
      setCreatePage();
    };
  }, []);

  const handleOnsubmit = () => {
    history.push('/');
  };
  return (
    <div className={styles.container}>
      <form className={styles['editor']} onSubmit={handleOnsubmit}>
        <div className={styles.myb}>
          <TitleInput />
        </div>

        <DocEditor id={editorRef} />

        <div className={styles.myt}>
          <DefaultBtn
            text='Submit'
            handleClick={addNote}
            disable={entry.body ? false : true}
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default Temp;
