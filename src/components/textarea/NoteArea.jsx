import React, { Fragment, useContext } from 'react';
import { useFormContext } from '../../context/Form.state';

import styles from './NoteArea.module.css';

const NoteArea = () => {
  const formContext = useFormContext();
  const { createEntry } = formContext;
  return (
    <Fragment>
      <Label htmlFor='body' className={styles.label}>
        <h4>Note</h4>
      </Label>
      <TextArea
        id='body'
        name='body'
        style={{ minHeight: 200, minWidth: 300 }}
        onChange={createEntry}
      />
    </Fragment>
  );
};

export default NoteArea;
