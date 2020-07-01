import React, { useReducer, useContext } from 'react';
import FormContext from './Form.context';
import FormReducer from './Form.reducer';

import { SET_ENTRY, ADD_NOTES, CKE_SET_ENTRY } from './Form.types.js';

const FormState = (props) => {
  const initialState = {
    entry: {},
    notes: [],
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const createEntry = (e) =>
    dispatch({ type: SET_ENTRY, payload: { [e.target.name]: e.target.value } });

  const ckeCreateEntry = (data) =>
    dispatch({ type: CKE_SET_ENTRY, payload: data });

  const addNote = () => {
    let noteId = 'temp-text-for-id generator';

    state.entry.id = noteId;

    dispatch({ type: ADD_NOTES, payload: state.entry });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        notes: state.notes,
        entry: state.entry,
        createEntry,
        ckeCreateEntry,
        addNote,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  return useContext(FormContext);
}

export default FormState;
