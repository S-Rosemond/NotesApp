import React, { useReducer } from 'react';
import FormContext from './Form.context';
import FormReducer from './Form.reducer';

import { SET_ENTRY, ADD_NOTES } from './Form.types.js';

const FormState = (props) => {
  const initialState = {
    entry: {},
    notes: [],
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const createEntry = (e) =>
    dispatch({ type: SET_ENTRY, payload: { [e.target.name]: e.target.value } });

  const addNote = () => dispatch({ type: ADD_NOTES, payload: state.entry });

  return (
    <FormContext.Provider
      value={{
        state,
        notes: state.notes,
        entry: state.entry,
        createEntry,
        addNote,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
