import React, { Fragment, useContext } from 'react';
import { Input } from 'semantic-ui-react';
import FormContext from './../../context/Form.context';

const TitleInput = () => {
  const formContext = useContext(FormContext);
  const { createEntry, entry } = formContext;

  return (
    <Fragment>
      <Input
        label='Title'
        id='title'
        name='title'
        type='text'
        placeholder='Title your notes'
        size='massive'
        onChange={createEntry}
      />
      <Input
        label='Search'
        size='massive'
        icon='search'
        placeholder='Search...'
      />
    </Fragment>
  );
};

export default TitleInput;
