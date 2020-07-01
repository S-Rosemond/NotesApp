import React, { Fragment, useContext } from 'react';
import { useFormContext } from './../../context/Form.state';

const TitleInput = () => {
  const formContext = useFormContext();
  const { createEntry, entry } = formContext;

  return <Fragment></Fragment>;
};

export default TitleInput;
