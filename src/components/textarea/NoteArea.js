import React, { Fragment, useContext } from 'react';
import FormContext from '../../context/Form.context';
import { TextArea, Label } from 'semantic-ui-react';

import styles from './NoteArea.module.css';

const NoteArea = () => {
  const formContext = useContext(FormContext);
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
