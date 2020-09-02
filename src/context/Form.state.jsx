import React, { useReducer, useContext } from 'react';
import FormContext from './Form.context.jsx';
import FormReducer from './Form.reducer';
// not sure if I want to use database yet
// or stick with local storage: sm scale app
import { default as uuid } from 'uuid';

import {
  SET_ENTRY,
  ADD_NOTES,
  CKE_SET_ENTRY,
  CLEAR_ENTRY,
  SET_CREATE_PAGE,
} from './Form.types.js';

const FormState = (props) => {
  const initialState = {
    entry: {},
    notes: [],
    createPage: false,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const createEntry = (e) =>
    dispatch({ type: SET_ENTRY, payload: { [e.target.name]: e.target.value } });

  const ckeCreateEntry = (data) =>
    dispatch({ type: CKE_SET_ENTRY, payload: data });

  const addNote = () => {
    const noteId = uuid();
    state.entry.id = noteId;
    // add local storage func
    let date = new Date();

    if (!state.entry.title || state.entry.title.trim() === '') {
      const title = date.toDateString();

      state.entry.title = title;
    }

    date = date.toLocaleDateString();
    state.entry.date = date;

    dispatch({ type: ADD_NOTES, payload: state.entry });
    dispatch({ type: CLEAR_ENTRY });
    console.log('STATE', state, 'entry', state.entry);
  };

  const updateNote = (id, body) => {
    let update = state.notes.find((el) => el._id === id);

    update = Object.assign(update, body);

    // localStorage then dispatch
  };

  const deleteNote = (id) => {
    const update = state.notes.filter((el) => el._id !== id);

    // localStorage then dispatch
  };

  const setCreatePage = () => {
    dispatch({ type: SET_CREATE_PAGE });
  };

  return (
    <FormContext.Provider
      value={{
        state,
        notes: state.notes,
        entry: state.entry,
        createPage: state.createPage,
        createEntry,
        ckeCreateEntry,
        addNote,
        updateNote,
        deleteNote,
        setCreatePage,
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
