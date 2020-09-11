import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useFormContext } from '../../context/FormContext/FormState';

// todo later
const Notes = (props) => {
  const formContext = useFormContext();
  const { notes } = formContext;
  const { match } = props;
  const history = useHistory();
  const testMatch = useRouteMatch();

  // todo later useRouteMatch instead of props;
  const note = notes.filter((n) => n.id === match.params.id);

  if (note[0] === undefined) return history.push('/');
  const { body } = note[0];
  console.log(match.params.id, note);
  return <div>{body}</div>;
};

export default Notes;
